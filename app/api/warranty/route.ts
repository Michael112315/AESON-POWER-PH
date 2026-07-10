import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { rateLimit } from '@/lib/rate-limit'

const ALLOWED_RECEIPT_MIME = new Set(['image/jpeg', 'image/png', 'application/pdf'])
const ALLOWED_PHOTO_MIME   = new Set(['image/jpeg', 'image/png'])
const EXT_TO_MIME: Record<string, string> = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg',
  png: 'image/png', pdf: 'application/pdf',
}
const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5 MB

const VALID_BATTERY_MODELS = new Set([
  'NA-40B20L (NS40)', 'NA-NS50L (55D23L/NS50)', 'NA-60B24L (NS60)',
  'NA-NS70L (NS70)', 'H5/L2-400L (DIN55L)', 'D31L (95D31L/NX120-7L)',
  'M42L', 'Q85L-SS (Q85)', 'S95L-SS (S95)',
])

function getClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}

function validateFile(
  file: File | null,
  allowedMime: Set<string>,
  fieldName: string,
): string | null {
  if (!file || file.size === 0) return null // optional — caller checks required
  if (file.size > MAX_FILE_BYTES) return `${fieldName} must be under 5 MB.`
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  const serverMime = EXT_TO_MIME[ext]
  if (!serverMime || !allowedMime.has(serverMime))
    return `${fieldName} must be JPG, PNG${allowedMime.has('application/pdf') ? ', or PDF' : ''}.`
  return null
}

function str(formData: FormData, key: string): string {
  return (formData.get(key) as string | null)?.trim() ?? ''
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (!rateLimit(`warranty-register:${ip}`, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  try {
    const formData = await req.formData()

    // ── Text field validation ──────────────────────────────────────
    const batteryModel  = str(formData, 'battery_model')
    const serialNumber  = str(formData, 'serial_number')
    const purchaseDate  = str(formData, 'purchase_date')
    const dealerName    = str(formData, 'dealer_name')
    const vehiclePlate  = str(formData, 'vehicle_plate').toUpperCase()
    const vehicleMake   = str(formData, 'vehicle_make')
    const vehicleModel  = str(formData, 'vehicle_model')
    const vehicleYearRaw = str(formData, 'vehicle_year')
    const ownerName     = str(formData, 'owner_name')
    const ownerPhone    = str(formData, 'owner_phone')
    const ownerEmail    = str(formData, 'owner_email')

    const required: [string, string][] = [
      [batteryModel, 'Battery model'], [serialNumber, 'Serial number'],
      [purchaseDate, 'Purchase date'], [dealerName, 'Dealer name'],
      [vehiclePlate, 'Vehicle plate'], [vehicleMake, 'Vehicle make'],
      [vehicleModel, 'Vehicle model'], [vehicleYearRaw, 'Vehicle year'],
      [ownerName, 'Owner name'], [ownerPhone, 'Phone number'], [ownerEmail, 'Email'],
    ]
    for (const [val, label] of required) {
      if (!val) return NextResponse.json({ error: `${label} is required.` }, { status: 400 })
    }

    if (!VALID_BATTERY_MODELS.has(batteryModel))
      return NextResponse.json({ error: 'Invalid battery model.' }, { status: 400 })

    if (!/^\d{4}-\d{2}-\d{2}$/.test(purchaseDate) || isNaN(Date.parse(purchaseDate)))
      return NextResponse.json({ error: 'Invalid purchase date.' }, { status: 400 })
    if (new Date(purchaseDate) > new Date())
      return NextResponse.json({ error: 'Purchase date cannot be in the future.' }, { status: 400 })

    const vehicleYear = parseInt(vehicleYearRaw, 10)
    if (isNaN(vehicleYear) || vehicleYear < 1990 || vehicleYear > 2030)
      return NextResponse.json({ error: 'Vehicle year must be between 1990 and 2030.' }, { status: 400 })

    if (!/^[a-zA-Z0-9 \-]{3,15}$/.test(vehiclePlate))
      return NextResponse.json({ error: 'Invalid plate number format.' }, { status: 400 })

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail))
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })

    if (!/^[+\d\s\-()]{7,20}$/.test(ownerPhone))
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 })

    if (serialNumber.length > 50)
      return NextResponse.json({ error: 'Serial number is too long.' }, { status: 400 })

    // ── File validation ───────────────────────────────────────────
    const receipt      = formData.get('receipt') as File | null
    const vehiclePhoto = formData.get('vehiclePhoto') as File | null

    if (!receipt || receipt.size === 0)
      return NextResponse.json({ error: 'Receipt is required.' }, { status: 400 })
    if (!vehiclePhoto || vehiclePhoto.size === 0)
      return NextResponse.json({ error: 'Vehicle photo is required.' }, { status: 400 })

    const receiptErr = validateFile(receipt, ALLOWED_RECEIPT_MIME, 'Receipt')
    if (receiptErr) return NextResponse.json({ error: receiptErr }, { status: 400 })

    const photoErr = validateFile(vehiclePhoto, ALLOWED_PHOTO_MIME, 'Vehicle photo')
    if (photoErr) return NextResponse.json({ error: photoErr }, { status: 400 })

    // ── Upload to private Supabase Storage ────────────────────────
    const supabase = getClient()

    const receiptExt  = receipt.name.split('.').pop()!.toLowerCase()
    const receiptMime = EXT_TO_MIME[receiptExt]
    const receiptPath = `receipts/${crypto.randomUUID()}.${receiptExt}`
    const { error: receiptUploadErr } = await supabase.storage
      .from('warranty-docs')
      .upload(receiptPath, receipt, { contentType: receiptMime })
    if (receiptUploadErr) {
      console.error('Receipt upload error:', receiptUploadErr)
      return NextResponse.json({ error: 'Failed to upload receipt.' }, { status: 500 })
    }

    const photoExt  = vehiclePhoto.name.split('.').pop()!.toLowerCase()
    const photoMime = EXT_TO_MIME[photoExt]
    const photoPath = `vehicles/${crypto.randomUUID()}.${photoExt}`
    const { error: photoUploadErr } = await supabase.storage
      .from('warranty-docs')
      .upload(photoPath, vehiclePhoto, { contentType: photoMime })
    if (photoUploadErr) {
      console.error('Photo upload error:', photoUploadErr)
      return NextResponse.json({ error: 'Failed to upload vehicle photo.' }, { status: 500 })
    }

    // ── Insert warranty registration ───────────────────────────────
    const { error } = await supabase.from('warranty_registrations').insert({
      battery_model:     batteryModel,
      serial_number:     serialNumber,
      purchase_date:     purchaseDate,
      dealer_name:       dealerName,
      vehicle_plate:     vehiclePlate,
      vehicle_make:      vehicleMake,
      vehicle_model:     vehicleModel,
      vehicle_year:      vehicleYear,
      owner_name:        ownerName,
      owner_phone:       ownerPhone,
      owner_email:       ownerEmail,
      receipt_url:       receiptPath,
      vehicle_photo_url: photoPath,
    })

    if (error) {
      if (error.code === '23505')
        return NextResponse.json({ error: 'This serial number is already registered.' }, { status: 409 })
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to register warranty.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Warranty API error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

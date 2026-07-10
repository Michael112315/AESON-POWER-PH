
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const VALID_BATTERY_MODELS = new Set([
  'NA-40B20L (NS40)',
  'NA-NS50L (55D23L/NS50)',
  'NA-60B24L (NS60)',
  'NA-NS70L (NS70)',
  'H5/L2-400L (DIN55L)',
  'D31L (95D31L/NX120-7L)',
  'M42L',
  'Q85L-SS (Q85)',
  'S95L-SS (S95)',
])

function getClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}

function str(formData: FormData, key: string): string {
  return (formData.get(key) as string | null)?.trim() ?? ''
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Text fields
    const batteryModel = str(formData, 'battery_model')
    const serialNumber = str(formData, 'serial_number')
    const purchaseDate = str(formData, 'purchase_date')
    const dealerName = str(formData, 'dealer_name')
    const vehiclePlate = str(formData, 'vehicle_plate').toUpperCase()
    const vehicleMake = str(formData, 'vehicle_make')
    const vehicleModel = str(formData, 'vehicle_model')
    const vehicleYearRaw = str(formData, 'vehicle_year')
    const ownerName = str(formData, 'owner_name')
    const ownerPhone = str(formData, 'owner_phone')
    const ownerEmail = str(formData, 'owner_email')

    const required: [string, string][] = [
      [batteryModel, 'Battery model'],
      [serialNumber, 'Serial number'],
      [purchaseDate, 'Purchase date'],
      [dealerName, 'Dealer name'],
      [vehiclePlate, 'Vehicle plate'],
      [vehicleMake, 'Vehicle make'],
      [vehicleModel, 'Vehicle model'],
      [vehicleYearRaw, 'Vehicle year'],
      [ownerName, 'Owner name'],
      [ownerPhone, 'Phone number'],
      [ownerEmail, 'Email'],
    ]

    for (const [value, label] of required) {
      if (!value) {
        return NextResponse.json(
          { error: `${label} is required.` },
          { status: 400 }
        )
      }
    }

    if (!VALID_BATTERY_MODELS.has(batteryModel)) {
      return NextResponse.json(
        { error: 'Invalid battery model.' },
        { status: 400 }
      )
    }

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(purchaseDate) ||
      isNaN(Date.parse(purchaseDate))
    ) {
      return NextResponse.json(
        { error: 'Invalid purchase date.' },
        { status: 400 }
      )
    }

    if (new Date(purchaseDate) > new Date()) {
      return NextResponse.json(
        { error: 'Purchase date cannot be in the future.' },
        { status: 400 }
      )
    }

    const vehicleYear = parseInt(vehicleYearRaw, 10)

    if (
      isNaN(vehicleYear) ||
      vehicleYear < 1990 ||
      vehicleYear > 2030
    ) {
      return NextResponse.json(
        { error: 'Vehicle year must be between 1990 and 2030.' },
        { status: 400 }
      )
    }

    if (!/^[a-zA-Z0-9 -]{3,15}$/.test(vehiclePlate)) {
      return NextResponse.json(
        { error: 'Invalid plate number format.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    if (!/^[+\d\s\-()]{7,20}$/.test(ownerPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number.' },
        { status: 400 }
      )
    }

    if (serialNumber.length > 50) {
      return NextResponse.json(
        { error: 'Serial number is too long.' },
        { status: 400 }
      )
    }

    const supabase = getClient()

    const { error } = await supabase
      .from('warranty_registrations')
      .insert({
        battery_model: batteryModel,
        serial_number: serialNumber,
        purchase_date: purchaseDate,
        dealer_name: dealerName,
        vehicle_plate: vehiclePlate,
        vehicle_make: vehicleMake,
        vehicle_model: vehicleModel,
        vehicle_year: vehicleYear,
        owner_name: ownerName,
        owner_phone: ownerPhone,
        owner_email: ownerEmail,
      })

    if (error) {
      console.error('Supabase insert error:', error)

      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This serial number is already registered.' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Warranty registration submitted successfully.',
    })

  } catch (err) {
    console.error('Warranty API error:', err)

    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : 'Internal server error.',
      },
      { status: 500 }
    )
  }
}

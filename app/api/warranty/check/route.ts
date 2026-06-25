import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase-server'
import { rateLimit } from '@/lib/rate-limit'

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (!rateLimit(`warranty-check:${ip}`, 10, 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  const plate = req.nextUrl.searchParams.get('plate')?.toUpperCase().trim()

  if (!plate) {
    return NextResponse.json({ error: 'Plate number is required.' }, { status: 400 })
  }

  if (!/^[A-Z0-9 \-]{3,15}$/.test(plate)) {
    return NextResponse.json({ error: 'Invalid plate number format.' }, { status: 400 })
  }

  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('warranty_registrations')
    .select('vehicle_plate, purchase_date, status, created_at')
    .eq('vehicle_plate', plate)
    .order('created_at', { ascending: false })
    .limit(1)

  if (error || !data || data.length === 0) {
    return NextResponse.json({ found: false })
  }

  const row = data[0] as { vehicle_plate: string; purchase_date: string; status: string; created_at: string }
  const purchased = new Date(row.purchase_date)
  const expiry = new Date(purchased)
  expiry.setMonth(expiry.getMonth() + 30)
  const isActive = expiry > new Date()

  return NextResponse.json({
    found: true,
    warranty: {
      vehicle_plate: row.vehicle_plate,
      expiry_date: expiry.toISOString().split('T')[0],
      is_active: isActive,
      status: row.status,
    },
  })
}

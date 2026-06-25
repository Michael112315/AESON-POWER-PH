export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      warranty_registrations: {
        Row: {
          id: string
          created_at: string
          battery_model: string
          serial_number: string
          purchase_date: string
          dealer_name: string
          vehicle_plate: string
          vehicle_make: string
          vehicle_model: string
          vehicle_year: number
          owner_name: string
          owner_phone: string
          owner_email: string
          receipt_url: string | null
          vehicle_photo_url: string | null
          status: 'pending' | 'approved' | 'rejected'
        }
        Insert: Omit<Database['public']['Tables']['warranty_registrations']['Row'], 'id' | 'created_at' | 'status'>
        Update: Partial<Database['public']['Tables']['warranty_registrations']['Row']>
      }
    }
  }
}

-- ============================================================
-- Aeson Power PH — Supabase Schema
-- Safe to re-run: uses IF NOT EXISTS / DROP IF EXISTS throughout
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- WARRANTY REGISTRATIONS TABLE
-- ============================================================
create table if not exists public.warranty_registrations (
  id                uuid primary key default uuid_generate_v4(),
  created_at        timestamptz not null default now(),

  -- Battery info
  battery_model     text not null,
  serial_number     text not null unique,
  purchase_date     date not null,
  dealer_name       text not null,

  -- Vehicle info
  vehicle_plate     text not null,
  vehicle_make      text not null,
  vehicle_model     text not null,
  vehicle_year      integer not null check (vehicle_year >= 1990 and vehicle_year <= 2030),

  -- Owner info
  owner_name        text not null,
  owner_phone       text not null,
  owner_email       text not null,

  -- Uploaded files (Supabase Storage object paths, not public URLs)
  receipt_url       text,
  vehicle_photo_url text,

  -- Status
  status            text not null default 'pending'
                    check (status in ('pending', 'approved', 'rejected'))
);

-- Index for plate lookups (warranty check)
create index if not exists idx_warranty_vehicle_plate
  on public.warranty_registrations (vehicle_plate);

-- Index for email lookups
create index if not exists idx_warranty_owner_email
  on public.warranty_registrations (owner_email);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.warranty_registrations enable row level security;

drop policy if exists "Service role can insert" on public.warranty_registrations;
create policy "Service role can insert"
  on public.warranty_registrations
  for insert
  to service_role
  with check (true);

drop policy if exists "Service role can select" on public.warranty_registrations;
create policy "Service role can select"
  on public.warranty_registrations
  for select
  to service_role
  using (true);

drop policy if exists "Service role can update" on public.warranty_registrations;
create policy "Service role can update"
  on public.warranty_registrations
  for update
  to service_role
  using (true);

-- ============================================================
-- STORAGE BUCKET
-- ============================================================
-- Private bucket — files are only accessible via signed URLs
-- generated server-side with the service role key.
insert into storage.buckets (id, name, public)
values ('warranty-docs', 'warranty-docs', false)
on conflict (id) do update set public = false;

drop policy if exists "Service role can upload" on storage.objects;
create policy "Service role can upload"
  on storage.objects
  for insert
  to service_role
  with check (bucket_id = 'warranty-docs');

-- Remove old public-read policy if it exists from the previous schema
drop policy if exists "Public can view warranty docs" on storage.objects;

drop policy if exists "Service role can read warranty docs" on storage.objects;
create policy "Service role can read warranty docs"
  on storage.objects
  for select
  to service_role
  using (bucket_id = 'warranty-docs');

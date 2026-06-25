# Deployment Guide — Aeson Power PH

Complete step-by-step guide for a new owner to deploy this project from scratch.

**Stack:** Next.js 16 · React 19 · TypeScript · Supabase (PostgreSQL + Storage) · Vercel · Porkbun (domain)

---

## Prerequisites

- A [GitHub](https://github.com) account (to fork/transfer the repo)
- A [Supabase](https://supabase.com) account (free tier is fine to start)
- A [Vercel](https://vercel.com) account (free tier is fine to start)
- A domain registered on [Porkbun](https://porkbun.com)
- [Node.js 18+](https://nodejs.org) installed locally (for testing only)

---

## Step 1 — Set Up Supabase

### 1.1 Create a new project

1. Go to [supabase.com](https://supabase.com) → **New project**
2. Choose an organisation (or create one)
3. Fill in:
   - **Name:** `aeson-power-ph` (or anything you like)
   - **Database password:** generate a strong password and save it somewhere safe
   - **Region:** pick the closest to the Philippines (e.g. Singapore `ap-southeast-1`)
4. Click **Create new project** — wait ~2 minutes for provisioning

### 1.2 Run the database schema

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **New query**
3. Open the file `supabase/schema.sql` from this repo
4. Copy the entire contents and paste it into the SQL editor
5. Click **Run** (▶)

This creates:
- The `warranty_registrations` table with all columns, indexes, and RLS policies
- The `warranty-docs` private storage bucket with correct access policies

> ✅ The schema is safe to re-run — all statements use `IF NOT EXISTS` / `DROP IF EXISTS`

### 1.3 Copy your API keys

1. In Supabase, go to **Project Settings** (gear icon) → **API**
2. Copy these three values — you'll need them shortly:

| Variable | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | **Project URL** (e.g. `https://abcdefgh.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **anon / public** key |
| `SUPABASE_SERVICE_ROLE_KEY` | **service_role** key — keep this secret, never expose it publicly |

---

## Step 2 — Deploy to Vercel

### 2.1 Import the repository

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**
2. Connect your GitHub account if you haven't already
3. Find and select the `aeson-power-ph` repository → **Import**

### 2.2 Configure the project

On the configuration screen:

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** leave as `/` (default)
- **Build Command:** leave as `next build` (default)
- **Output Directory:** leave blank (default)

### 2.3 Add environment variables

Still on the same screen, scroll down to **Environment Variables** and add all three:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |

> ⚠️ Make sure `SUPABASE_SERVICE_ROLE_KEY` is set as **Sensitive** — Vercel will hide it from logs.

### 2.4 Deploy

Click **Deploy**. Vercel will:
1. Clone the repo
2. Run `npm install`
3. Run `next build`
4. Deploy to a `*.vercel.app` URL

The first deploy takes ~2–3 minutes. Once done you'll see a live preview URL like `https://aeson-power-ph.vercel.app`. Test it to confirm the site works before connecting your domain.

---

## Step 3 — Connect Your Porkbun Domain

### 3.1 Add the domain in Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Type your domain (e.g. `aesonpower.com.ph`) and click **Add**
3. Also add `www.aesonpower.com.ph` if you want the `www` subdomain to redirect
4. Vercel will show you the DNS records you need to create — keep this tab open

### 3.2 Update DNS in Porkbun

1. Log in to [porkbun.com](https://porkbun.com)
2. Go to **Domain Management** → find your domain → **DNS**
3. Delete any existing `A`, `AAAA`, or `CNAME` records for `@` and `www` that conflict
4. Add the records Vercel gave you:

**For the apex/root domain (`@`):**

| Type | Host | Answer | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | 600 |

**For the `www` subdomain:**

| Type | Host | Answer | TTL |
|---|---|---|---|
| `CNAME` | `www` | `cname.vercel-dns.com.` | 600 |

> 💡 Vercel may show slightly different IPs — always use the exact values from your Vercel dashboard, not from this guide.

### 3.3 Wait for DNS propagation

DNS changes typically propagate within **5–30 minutes**, sometimes up to 24 hours.

You can check progress at [dnschecker.org](https://dnschecker.org) — enter your domain and check the `A` record.

### 3.4 Verify in Vercel

Once DNS has propagated, Vercel will automatically:
- Issue a free SSL/TLS certificate (Let's Encrypt)
- Show a ✅ green checkmark next to your domain in **Settings → Domains**

Your site will be live at `https://yourdomain.com`.

---

## Step 4 — Test Everything End-to-End

Work through this checklist after deploying:

### Site
- [ ] Home page loads correctly at your custom domain
- [ ] All pages load: Products, Battery Finder, Technology, About, Warranty, Roadside Assistance, Retail Partners
- [ ] Images load (served from `cms.aesonpower.com.my`)
- [ ] Mobile layout looks correct on a phone

### Battery Finder
- [ ] Brand → Model → Year dropdowns work
- [ ] A result card appears with the correct battery recommendation
- [ ] EV models show the "12V auxiliary battery" note
- [ ] PHEV models (BYD Sealion 6, Tang etc.) show the standard note

### Warranty
- [ ] Registration form submits without error
- [ ] Receipt and vehicle photo upload succeeds (check Supabase → Storage → `warranty-docs`)
- [ ] Row appears in Supabase → Table Editor → `warranty_registrations`
- [ ] Warranty check returns a result for the plate number you just registered
- [ ] Warranty check does NOT return owner name, email, or battery model (PII is stripped)

### Security headers
- [ ] Open Chrome DevTools → Network → click any request → Response Headers
- [ ] Confirm `x-content-type-options: nosniff` is present
- [ ] Confirm `x-frame-options: DENY` is present
- [ ] Confirm `strict-transport-security` is present

---

## Step 5 — Ongoing Maintenance

### Re-deploying after code changes

Every push to the `main` branch on GitHub **automatically triggers a new Vercel deployment**. No manual steps needed.

### Updating environment variables

Go to Vercel → **Settings** → **Environment Variables**. After saving changes, you must **redeploy** (Deployments → the latest deployment → ⋯ → Redeploy) for the new values to take effect.

### Viewing warranty registrations (admin)

1. Log in to [supabase.com](https://supabase.com)
2. Go to your project → **Table Editor** → `warranty_registrations`
3. To download a receipt or vehicle photo:
   - Note the `receipt_url` value (it's a storage path like `receipts/uuid.jpg`)
   - Go to **Storage** → `warranty-docs` → navigate to the path
   - Click the file → **Download** or generate a signed URL

### Changing the status of a warranty registration

1. In Supabase → **Table Editor** → `warranty_registrations`
2. Find the row by `vehicle_plate` or `serial_number`
3. Click the `status` cell and change from `pending` to `approved` or `rejected`

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anon (public) key — safe to expose in browser |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Supabase service role key — server-side only, keep secret |

---

## Troubleshooting

**Build fails on Vercel**
- Check the build logs in Vercel → Deployments → click the failed deployment
- Most common cause: a missing environment variable. Confirm all three Supabase vars are set.

**Warranty form returns "Internal server error"**
- Check that `SUPABASE_SERVICE_ROLE_KEY` is correct and not the anon key
- Check Supabase → Logs → API to see the actual error

**Images not loading**
- Product and hero images are served from `cms.aesonpower.com.my`. If the CMS is down or the image URLs change, update them in the relevant page files under `app/`.

**Domain shows "Invalid Configuration" in Vercel**
- DNS hasn't propagated yet — wait and refresh
- Check you added an `A` record for `@` (not `www`) pointing to Vercel's IP

**Storage uploads failing**
- Confirm the `warranty-docs` bucket exists in Supabase → Storage
- Re-run `supabase/schema.sql` in the SQL Editor to recreate it if missing

---

## File Structure Quick Reference

```
app/
  page.tsx                  # Home page
  products/page.tsx         # Products listing
  battery-finder/page.tsx   # Battery finder tool (vehicle DB lives here)
  technology/page.tsx       # Technology page
  about/page.tsx            # About page
  warranty/page.tsx         # Warranty registration + check UI
  roadside-assistance/      # Roadside assistance page
  retail-partners/          # Retail partners page
  api/
    warranty/route.ts       # POST — warranty registration + file upload
    warranty/check/route.ts # GET  — warranty status check (PII-free)
  globals.css               # All global styles and responsive utilities
  layout.tsx                # Root layout (nav, footer, analytics)

lib/
  rate-limit.ts             # In-process sliding window rate limiter
  supabase-server.ts        # Supabase client for server-side use

supabase/
  schema.sql                # Full DB + storage schema (safe to re-run)

public/
  favicon.jpg               # Site favicon

next.config.ts              # Security headers + image remote patterns
.env.local.example          # Environment variable template
```

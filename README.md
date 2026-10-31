# Bramble & Rye — Naturally Leavened Hearth Bakery (Client Demo)

A multi-page React client demo website for **Bramble & Rye**, an artisanal sourdough bakery and cafe concept rooted in Ontario regional grains. Built with **Next.js Static Export (SSG)**, **TypeScript**, and **Tailwind CSS**, pre-rendering all routes to static HTML files for deployment to **Cloudflare Pages**.

---

## 🌾 Key Interactive Client Demo Features

1. **Live "From the Oven" Board (`/`):**
   - Real-time status pills: `Hot from the Hearth`, `Available on Shelf`, `Sold Out for Today`.
   - Category filtering & interactive **"Simulate POS Update"** button to demo dynamic real-time status updates for clients.
2. **Weekly Bake Rotation Matrix (`/order`):**
   - Day-by-day timetable mapping heritage loaves (100% Rye on Wed/Sat, Red Fife on Fri, Seeded Spelt on Thu/Sun) and oven peeling times.
3. **Flour Traceability Widget (`/menu`):**
   - Detailed inspection drawer detailing farm origin, miller partner, milling style (Austrian cold granite runner stones under 38°C), and extraction rates.
4. **Pre-Order Bag & Pickup Time-Slot Selector (`/order` & global drawer):**
   - Local collection window picker (`Morning 7–10am`, `Midday 10am–1pm`, `Afternoon 1–4pm`).
   - "Baking fresh tomorrow at 5:00 AM. Your loaves will be bagged warm." microcopy.
   - Interactive order voucher simulation for client demonstration.
5. **Catering & Workshop Inquiries (`/order`, `/visit`):**
   - Large event loaf requests and weekend sourdough class registration modals.

---

## 🎨 Brand Design System Tokens

Extracted from `BrandBackground.md`:
* **Rye Husk (Primary Dark):** `#2B2521`
* **Stone Hearth (Neutral Light):** `#F7F4EE`
* **Wild Bramble (Accent Vibrant):** `#7A283C`
* **Toasted Crust (Accent Warm):** `#C88A42`
* **Oatmeal (Muted Surface):** `#EAE4D9`
* **Typography:** Editorial Serif headings (`Lora` / system serif) paired with clean Humanist Sans (`Plus Jakarta Sans` / system sans).

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Open http://localhost:3000 in your browser
```

---

## ☁️ Deploying to Cloudflare Pages

### Option 1: Git-Connected Cloudflare Pages (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset:** `None` or `Next.js (Static Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** (None required; optional `NODE_VERSION` set to `20` or `22`)
4. Click **Save and Deploy**. Cloudflare Pages will build the static HTML and distribute it globally across its CDN edge.

### Option 2: Direct Upload via Wrangler CLI
```bash
# Build the static export
npm run build

# Deploy the out/ directory directly to Cloudflare Pages
npx wrangler pages deploy out --project-name=bramble-and-rye
```

---

## 📁 Project Structure

```
├── public/
│   ├── _redirects         # Cloudflare Pages SPA/SSG deep linking fallback
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css    # Typography, Tailwind directives, theme variables
│   │   ├── layout.tsx     # Shell: AnnouncementBar, Navbar, CartDrawer, Footer
│   │   ├── page.tsx       # Home view with Hero & Live Oven Board
│   │   ├── menu/          # Our Breads & Cafe catalog with Traceability drawer
│   │   ├── order/         # Weekly Bake Schedule & Pre-Order booking
│   │   ├── sourcing/      # Regional millers, farmers & heritage grain profiles
│   │   └── visit/         # Studio location, oven discharge schedules & workshops
│   ├── components/        # Accessible modular UI components
│   ├── context/           # Lightweight CartContext & Pickup scheduling
│   ├── data/              # Menu catalog, weekly schedule, and mill partners
│   └── types/             # TypeScript interfaces
├── next.config.mjs        # output: 'export' & trailingSlash: true
├── tailwind.config.ts     # Brand color tokens & font configurations
└── BrandBackground.md    # Original client brand guidelines
```

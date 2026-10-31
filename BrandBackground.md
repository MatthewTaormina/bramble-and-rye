## 1. Executive Summary & Brand Identity

* **Brand Name:** Bramble & Rye
* **Tagline:** Rooted in Grain, Baked for the Neighborhood.
* **Core Philosophy:** Bramble & Rye bridges traditional long-fermentation baking with contemporary cafe culture. By sourcing grain varieties exclusively from small regional millers, the bakery revives distinct heritage flavors while maintaining a traceable, transparent supply chain. Fermentations run slow (24 to 36 hours), pastry batters shift strictly with regional harvest calendars, and espresso is dialed in with intentional pairings in mind.
* **Atmosphere & Aesthetic:** Earthy minimalism meets lived-in hospitality. Think warm lime-washed walls, reclaimed white oak seating, forged blackened steel accents, rough stoneware ceramics, and an open hearth kitchen where patrons can watch dough shaping and oven loading.
* **Audience Profiles:**
* *The Daily Commuter:* Seeks quick, high-precision third-wave coffee, grab-and-go morning buns, and dependable online mobile ordering.
* *The Home Baker & Enthusiast:* Purchases fresh stone-ground heritage flours by the bag, freshly fed sourdough starters, and crusty boules for weekend dinners.
* *The Weekend Cafe Guest:* Drops in for sit-down tartines, seasonal fruit galettes, pour-overs, and a relaxed, device-light social environment.



---

## 2. Core Offerings & Digital Menu Architecture

### A. Naturally Leavened Hearth Breads

* **Signature Country Boule:** 80% hydration, cold-fermented for 28 hours. Blend of hard red winter wheat, stone-ground whole spelt, and sifted artisan flour. Crisp blistered ear, deep open crumb.
* **100% Heritage Whole Rye (Rugbrød Style):** Dense sprouted whole rye berries, roasted sunflower and pumpkin seeds, fermented with a mature dark rye mother starter. Sliceable, long keeping-time.
* **Roasted Garlic & Rosemary Miche:** Porous, deeply caramelized crust, studded with slow-confit whole garlic cloves and fresh garden rosemary.
* **Weekly Special Loaf:** Rotating regional heritage grain feature (e.g., Red Fife, Einkorn, Emmer, or Purple Karma Barley).

### B. Seasonal Laminated & Daily Pastry

* **Wild Bramble Morning Bun:** Flaky laminated croissant dough rolled with cracked cardamom, dark demerara sugar, and a tart reduction of wild blackberries and raspberries.
* **Brown Butter & Rye Choc-Chip Cookie:** Stone-ground rye flour, 72% single-origin dark chocolate discs, finished with smoked sea salt.
* **Savory Leek & Gruyère Twist:** Laminated dough ribbons intertwined with slow-braised leeks, cave-aged Gruyère, and coarse black pepper.
* **Seasonal Fruit Galette:** Free-form open pastry base featuring local orchard fruit (peaches, plums, or heirloom apples depending on the month).

### C. Espresso & Regional Beverage Bar

* **House Espresso Blend:** Balanced medium roast featuring washed Central American origins with sweet stone-fruit and cocoa notes; dialed to cut cleanly through whole or oat milk.
* **Single-Origin Filter Pour-Overs:** Light-roast seasonal lots prepared on conical brewers.
* **Botanical Teas & House Shrubs:** Cascara iced tea, seasonal berry-vinegar sodas, and cold-steeped chamomile tisanes.

---

## 3. Brand Tone, Voice & Copy Guidelines

* **Voice Attributes:** Grounded, unpretentious, technically precise, and warm.
* **Copywriting Rules:**
* *Do:* Explain the "why" simply (e.g., "Cold-fermented for 30 hours to unlock deep grain sweetness and improve natural digestibility").
* *Don't:* Use overblown buzzwords like "guilt-free," "miracle superfoods," or exaggerated marketing cliches. Let the ingredient source and process define the quality.


* **Microcopy Samples:**
* *Cart / Checkout:* "Baking fresh tomorrow at 5:00 AM. Your loaves will be bagged warm."
* *Out of Stock:* "The ovens have cooled for today. Fresh batches fire tomorrow morning."
* *Ingredient Drawer:* "Flour, water, sea salt, wild sourdough starter. That is all."



---

## 4. Website Architecture & UX Specifications

```
Home (/)
├── Our Breads & Cafe Menu (/menu)
│   ├── Fresh Breads & Loaves (Filter: Grain Type / Allergen)
│   ├── Morning Pastry
│   ├── Cafe Drinks & Roasted Beans
│   └── Pantry, Grain Bags & Merch
├── Daily Bread Schedule & Pre-Orders (/order)
│   ├── Same-Day Pickup Tracker (Live Bake Counter)
│   └── Catering / Large Order Inquiry
├── Sourcing & Mill Partners (/sourcing)
│   ├── Interactive Regional Grain Map
│   └── Miller & Farmer Profiles
└── Location & Hearth Hours (/visit)
    ├── Studio Hours & Oven Schedules
    └── Contact & Workshop Registrations

```

### Key Interactive Components & Data Structures

1. **Live "From the Oven" Board (Dynamic State):**
* *Status Pills:* `Hot from the Hearth` | `Available on Shelf` | `Sold Out for Today`
* Refreshes via simple JSON feed from point-of-sale inventory.


2. **Weekly Bake Rotation Table:**
* A clean matrix mapping specialized heritage loaves to specific bake days (e.g., Seeded Spelt on Tuesdays/Thursdays; 100% Rye on Wednesdays/Saturdays).


3. **Flour Traceability Widget:**
* An accordion module on item cards detailing farm origin, milling method (stone-milled vs. roller-milled), and extraction rate.


4. **Local Pickup Selector:**
* Time-slot scheduling engine allowing users to select morning or afternoon collection windows to ensure loaf quality and minimize shelf holding time.



---

## 5. Visual Design System & UI Specs

* **Color Palette:**
* *Rye Husk (Primary Dark):* `#2B2521` — Deep charcoal with warm brown undertones; used for typography and high-contrast structural framing.
* *Stone Hearth (Neutral Light):* `#F7F4EE` — Unbleached paper / linen off-white; default page background.
* *Wild Bramble (Accent Vibrant):* `#7A283C` — Deep saturated berry red; used for active state links, CTA buttons, and notifications.
* *Toasted Crust (Accent Warm):* `#C88A42` — Rich golden-ochre; used for badge highlights, hover states, and graphic rules.
* *Oatmeal (Muted Surface):* `#EAE4D9` — Soft border dividers and card backgrounds.


* **Typography Hierarchy:**
* *Headings (Display):* Clean serif with artisanal balance (e.g., *Fraunces*, *Playfair Display*, or *Lora*).
* *Body & UI Labels:* Utilitarian, legible humanist sans-serif (e.g., *Inter*, *Work Sans*, or *Plus Jakarta Sans*).


* **Photography & Asset Style:**
* Natural daylight only; side-lit food shots showing open crumb texture, blistered bread crusts, and matte earthenware mugs. No artificial heavy gloss or studio drop shadows.

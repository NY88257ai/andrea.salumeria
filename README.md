![Andrea Salumeria Banner](photos/screenshots/banner.png)


🍅 Andrea Salumeria — Official Website
Fine Italian Deli & Grocery • Jersey City, NJ • Since 1975

This repository contains the complete source code for the official website of Andrea Salumeria, a family‑owned Italian deli serving Jersey City for nearly 50 years.
The site showcases our menu, homemade mozzarella, imported specialties, history, and photography — all wrapped in a warm, classic Italian aesthetic.

🌐 Live Website
https://ny88257ai.github.io/andrea.salumeria/

![QC QR Code](photos/screenshots/qc.qr.png)

> Scan this code to open Andrea Salumeria on your phone (GITHUB TEST SITE)

![Production QR Code](photos/screenshots/pd.qr.png)

> Scan this code to open Andrea Salumeria on your phone (PRODUCTION WEBSITE)
> 
📸 Screenshots
Screenshots can be added here later. Just drop images into /photos/screenshots/ and reference them.

📁 Project Structure
Code
andrea.salumeria/
│ index.html          # Main site structure
│ styles.css          # Unified global stylesheet
│ script.js           # Hero rotator + gallery carousel logic
│ manifest.json       # PWA metadata (optional)
│ README.md           # Project documentation
│
└── photos/
    ├── hero/         # Homepage hero carousel images
    ├── gallery/      # Food & store photography
    ├── logo/         # Branding assets
    ├── social media/ # Social graphics
    └── screenshots/  # (Optional) README screenshots

banner.png   - README header banner
qc.qr.png    - QR code for GitHub Pages version
pd.qr.png    - QR code for production domain

✨ Features
🎞️ Hero Image Rotator
A smooth, auto‑advancing hero carousel featuring deli, sandwich, and store photography.

🖼️ Horizontal Gallery Carousel
A modern, swipe‑friendly horizontal image track replacing the old grid.

🎨 Unified Design System
All styling consolidated into styles.css, including:

Original cream & rustic palette

Playfair Display + Lato typography

Updated spacing, shadows, and card styles

Mobile‑optimized layout

📱 Mobile Navigation Enhancements
On small screens:

Centered logo

Centered nav links

Slide‑down menu

Touch‑optimized “Order” button

📋 Menu Sections (Accordion)
Expandable categories for:

Sandwiches

Imported Cheeses

Deli Meats

Breads

Salads & Soups

Grocery Items

Catering

Apparel (coming soon)

🧾 QR Codes
QR codes appear in:

Header

Menu section

Footer

All point to the live site.

🏪 About & Visit Sections
Includes:

Store history

Contact info

Hours

Map embed

Social icons

🔧 How to Update the Website
Update Menu Items
Edit the accordion content inside index.html.

Update Hero Images
Add images to:

Code
/photos/hero/
Then update the array in script.js:

js
const heroImages = [
  "photos/hero/hero1.jpg",
  "photos/hero/hero2.jpg",
  ...
];
Update Gallery Images
Add photos to:

Code
/photos/gallery/
Update Styles
All styling lives in:

Code
styles.css
No inline CSS should be added.

Update QR Codes
If the site URL changes, update the QR code URLs in index.html.

🚧 Roadmap (2025–2026)
🥪 1. Order Flow Redesign
The current “Order a Sandwich” button opens a form, but the workflow needs clarity.
Planned improvements:

Rename button to Start Your Order

Add required fields (name, phone, pickup time)

Add order confirmation screen

Add email/SMS notification to store

Add order tracking number

💳 2. Payment Integration
Options being evaluated:

Stripe

Square

Clover (in‑store POS integration)

Goal: allow customers to pay online before pickup.

🧺 3. Catering Order System
A dedicated catering form with:

Tray sizes

Guest count

Pickup/delivery options

Deposit or full payment

👕 4. Andrea’s Apparel Store
Launch an online merch section featuring:

T‑shirts

Hoodies

Hats

Limited‑edition designs

SICUREZZA NINJA™ line

📰 5. Daily Specials Auto‑Update
Admin‑side tool to update:

Special of the Day

Fresh items

Limited batches

📸 6. Lightbox Gallery
Tap any gallery image to open a fullscreen viewer.

📱 7. PWA (Installable App)
Turn the site into an installable app on iOS/Android.

🤝 Contributing
This is a private project for Andrea Salumeria.
If you’d like to propose improvements:

Create a new branch

Make your changes

Submit a pull request

The repository owner will review it

🗂️ Changelog
v2.0 — Major Redesign (2025)
Restored original color palette

Moved all inline CSS to styles.css

Rebuilt hero image rotator

Added horizontal gallery carousel

Improved mobile navigation

Cleaned HTML structure

Updated README

v1.0 — Initial Launch (2024)
First public version of the site

Menu, gallery, and about sections added

🧑‍🍳 About Andrea Salumeria
Since 1975, Andrea Salumeria has been a Jersey City staple known for:

Homemade mozzarella (made fresh daily)

Famous Italian sandwiches

Imported cheeses & meats

Fresh breads

Authentic grocery items

Nearly 50 years of family tradition

📬 Contact
For updates, improvements, or contributions, contact the repository owner.

© 2025 Andrea Salumeria — Fine Italian Deli & Grocery  
All rights reserved.

# OG Image Creation Instructions

## Required Image for SEO
You need to create an Open Graph image to improve social media sharing:

**Location:** `/web/public/og-image.jpg`

**Dimensions:** 1200x630 pixels (required by Open Graph)

**Content suggestions:**
1. Your name: "Maximiliano Padilla"
2. Title: "Full-Stack Developer"
3. Key metric: "500+ bookings/month (RunaFit)"
4. Awards: "🥈 2nd NASA | 🥇 1st Rally LATAM"
5. Call to action: "Building SaaS from Scratch to Revenue"
6. Background: Use your brand colors (primary: #6366f1, secondary: #ec4899)

**Tools to create it:**
- Canva (easiest): Use template 1200x630
- Figma: Create frame 1200x630
- Photoshop/GIMP: Canvas 1200x630

**Quick option:** Use this online generator:
https://www.opengraph.xyz/

**Once created:**
```bash
# Save the image as:
/web/public/og-image.jpg
```

**To test:**
- https://www.opengraph.xyz/url/https://your-domain.com
- https://cards-dev.twitter.com/validator
- https://developers.facebook.com/tools/debug/

## Alternative: Generate programmatically
You can use Vercel OG Image generation (advanced):
https://vercel.com/docs/functions/edge-functions/og-image-generation

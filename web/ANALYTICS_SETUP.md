# Analytics Setup Guide

## ✅ What's Already Implemented

The analytics infrastructure is **ready to use**. You just need to add your tracking IDs.

### Components Created:
- ✅ `GoogleAnalytics.tsx` - GA4 integration
- ✅ `layout.tsx` - Analytics loaded globally
- ✅ `.env.local.example` - Configuration template

---

## 🔧 Setup Instructions

### Option 1: Google Analytics 4 (Recommended)

**Why GA4?**
- Free forever
- Track pageviews, events, conversions
- Understand user behavior
- See traffic sources

**Setup (5 minutes):**

1. **Create GA4 Account**
   - Go to: https://analytics.google.com/
   - Sign in with Google account
   - Click "Start measuring"
   - Create Account → Name it "Portfolio"
   - Create Property → Name it "maxiipadi.dev"
   - Fill business details
   - Click "Create"

2. **Get Measurement ID**
   - After creation, you'll see: `G-XXXXXXXXXX`
   - Copy this ID

3. **Add to Your Project**
   ```bash
   cd /home/runatechdev/Documentos/GitHub/portafolio/web
   
   # Create .env.local file
   cp .env.local.example .env.local
   
   # Edit .env.local and add your ID:
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env.local
   ```

4. **Restart Dev Server**
   ```bash
   npm run dev
   ```

5. **Verify It's Working**
   - Open your site in browser
   - Go to GA4 → Reports → Realtime
   - You should see yourself as active user

**Done!** GA4 is now tracking:
- ✅ Pageviews
- ✅ Bounce rate
- ✅ Traffic sources
- ✅ User demographics
- ✅ Device types

---

### Option 2: Vercel Analytics (Easiest)

**Why Vercel Analytics?**
- Zero configuration if deployed on Vercel
- Privacy-friendly (no cookies)
- Faster than GA4
- Beautiful dashboard

**Setup (1 minute):**

1. **Install Package**
   ```bash
   cd /home/runatechdev/Documentos/GitHub/portafolio/web
   npm install @vercel/analytics
   ```

2. **Update layout.tsx**
   ```tsx
   // Add at the top
   import { Analytics } from '@vercel/analytics/react';
   
   // Add before </body>
   <Analytics />
   ```

3. **Deploy to Vercel**
   ```bash
   vercel deploy --prod
   ```

4. **View Analytics**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Click "Analytics" tab

**Done!** Vercel Analytics tracks:
- ✅ Pageviews
- ✅ Unique visitors
- ✅ Top pages
- ✅ Top referrers

---

### Option 3: Both (Best of Both Worlds)

Use **Vercel Analytics** for quick insights + **GA4** for detailed behavior analysis.

```tsx
// In layout.tsx
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
```

---

## 📊 What to Track

### Key Metrics for Your Portfolio:

1. **Traffic Sources**
   - Direct (people who know you)
   - Social (LinkedIn, Twitter shares)
   - Referral (from other sites)
   - Google Search

2. **User Behavior**
   - Time on page
   - Scroll depth
   - CTA clicks (WhatsApp, Email)
   - Project views

3. **Conversions**
   - WhatsApp button clicks
   - Email clicks
   - CV downloads
   - Project demo views

### Custom Event Tracking (Advanced)

Track specific actions:

```tsx
// Example: Track WhatsApp CTA clicks
<a 
  href="https://wa.me/..."
  onClick={() => {
    // Google Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'hero_cta'
      });
    }
  }}
>
  Chat on WhatsApp
</a>
```

---

## 🎯 Recommended Setup (Priority Order)

### Week 1: Basic Analytics
✅ Install Vercel Analytics (easiest)
- See visitor count
- Understand traffic

### Week 2: Deep Insights
✅ Add Google Analytics 4
- Track user behavior
- See conversion funnels

### Week 3: Heatmaps (Optional)
✅ Add Hotjar (free plan: 35 sessions/day)
- See where users click
- Watch session recordings
- Understand UX problems

---

## 🔥 Pro Tips

1. **Set up Goals in GA4:**
   - WhatsApp clicks = conversion
   - Email clicks = conversion
   - Time on site > 2min = engaged visitor

2. **Weekly Review:**
   - Check top traffic sources
   - See which projects get most views
   - Optimize based on data

3. **A/B Testing:**
   - Test different Hero CTAs
   - Test project order
   - Test contact methods

---

## 🚀 Quick Start (Copy-Paste)

```bash
# 1. Create .env.local
cd /home/runatechdev/Documentos/GitHub/portafolio/web
cp .env.local.example .env.local

# 2. Add your GA4 ID (get it from analytics.google.com)
echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" >> .env.local

# 3. Restart dev server
npm run dev

# 4. Test by opening http://localhost:3000
# 5. Check Realtime report in GA4
```

---

## 📋 Verification Checklist

After setup, verify:
- [ ] GA4 shows realtime visitor (you)
- [ ] Pageview events are tracked
- [ ] No console errors
- [ ] Analytics loads on all pages

---

## 🆘 Troubleshooting

**GA4 not tracking?**
- Check `.env.local` has correct ID format (`G-XXXXXXXXXX`)
- Restart dev server after adding env vars
- Check browser console for errors
- Try incognito mode (ad blockers can block GA)

**Vercel Analytics not working?**
- Only works on Vercel-deployed sites
- Check your project settings on Vercel dashboard

---

## 📈 Expected Results

After 1 week with analytics, you'll know:
- 📊 How many people visit
- 🌍 Where they come from
- 📱 Desktop vs mobile ratio
- ⏱️ Average time on site
- 🎯 Which CTAs work best

**This data will help you optimize for better conversions!**

---

Need help? Message me the error and I'll fix it! 🚀

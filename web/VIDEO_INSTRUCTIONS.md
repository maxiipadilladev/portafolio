# Video/GIF Instructions for RunaFit Demo

## Current Status
✅ The ProjectDemo component is ready to display videos
✅ It will show a play button overlay when video exists
✅ Falls back to static image if video is not available

## Adding Your RunaFit Video/GIF

### Option 1: Video (MP4 - Recommended)
**Best for:** Screen recordings showing actual product usage

**Steps:**
1. Record a 10-30 second demo of RunaFit dashboard
2. Convert to MP4 (use HandBrake or online converter)
3. Optimize for web (max 5MB recommended)
4. Save as: `/web/public/videos/runafit-demo.mp4`

**Recording tips:**
- Show key features: booking flow, payment confirmation, WhatsApp notification
- Keep it under 30 seconds
- Use 1920x1080 or 1280x720 resolution
- Export at 30fps, H.264 codec

**Tools to record:**
- OBS Studio (free, cross-platform)
- ScreenToGif (Windows - creates small files)
- Loom (online, easy to use)
- macOS: QuickTime Screen Recording

### Option 2: Animated GIF
**Best for:** Quick UI interactions

**Steps:**
1. Record screen with ScreenToGif or LICEcap
2. Optimize GIF (keep under 3MB)
3. Save as: `/web/public/videos/runafit-demo.gif`
4. Update Projects.tsx to use .gif extension

**Tools:**
- ScreenToGif (Windows): https://www.screentogif.com/
- LICEcap (Mac/Windows): https://www.cockos.com/licecap/
- GIPHY Capture (Mac): https://giphy.com/apps/giphycapture

### Option 3: Use Static Screenshot (Current)
If you don't have a video ready, the component already shows your image with hover effects.

## File Location
```
/web/public/videos/
  ├── runafit-demo.mp4  (or .gif)
  └── (future project demos)
```

## What Happens When You Add the Video
1. Play button appears on hover over the image
2. Click plays video in loop
3. "Live" badge stays visible
4. Better engagement from visitors

## Testing After Adding
```bash
# 1. Add video to /web/public/videos/
# 2. Restart dev server
npm run dev

# 3. Navigate to Projects section
# 4. Hover over RunaFit featured project
# 5. Should see play button
```

## Quick Win: Use Placeholder Video
If you want to test the video player now, download any demo video and rename it to `runafit-demo.mp4`.

## Alternative: Embed YouTube/Vimeo
If you prefer hosting on YouTube:
1. Upload demo to YouTube
2. Get embed URL
3. Modify ProjectDemo component to use iframe

Let me know if you need help with any of these options!

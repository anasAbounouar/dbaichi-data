# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

### Step 3: Open in Browser
```
http://localhost:3000
```

## 📂 What You'll See

### Portfolio Landing Page
The root URL shows a beautiful landing page with two presentation cards:

1. **Book Marketplace Platform** - GIS Project
   - Click to view the book marketplace presentation
   - 30 slides covering the full project

2. **Infrastructure as Code in Graal CI** - Oracle Labs
   - Click to view the Oracle IaC presentation
   - 58 slides with presenter mode support

## 🎮 Presentation Controls

| Key | Action |
|-----|--------|
| → or Space | Next slide |
| ← | Previous slide |
| Home | First slide |
| End | Last slide |
| P | Presenter mode (Oracle only) |

## 🔧 Advanced: Presenter Mode (Oracle Presentation)

The Oracle IaC presentation has a special **dual-screen presenter mode**:

1. Open the Oracle presentation
2. Press **P** key
3. A new window opens with:
   - Current slide + next slide preview
   - Editable speaker notes
   - Timer
   - Slide counter

**Pro Tip:** Drag the presenter window to your laptop screen and keep the main presentation on the projector!

## 📱 File Locations

```
/presentations/book-marketplace/presentation.html  → Book Marketplace
/presentations/oracle-iac/presentation.html        → Oracle IaC (Main)
/presentations/oracle-iac/presenter.html           → Oracle Presenter View
```

## ⚙️ Optional: MongoDB Setup

The Oracle presentation can save speaker notes to MongoDB.

**Without MongoDB:** Everything works, but notes won't persist after refresh.

**With MongoDB:**
1. Get a MongoDB connection string
2. Set environment variable:
   ```bash
   export MONGODB_URI="your-mongodb-connection-string"
   ```
3. Restart the server

## 🐛 Troubleshooting

**Server won't start?**
- Make sure port 3000 is available
- Try: `PORT=8080 npm start` to use a different port

**Presentations not loading?**
- Check browser console for errors
- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)

**Images not showing?**
- Verify the `images/` folders exist in:
  - `/presentations/book-marketplace/images/`
  - `/presentations/oracle-iac/images/`

## 📊 Quick Stats

| Feature | Book Marketplace | Oracle IaC |
|---------|------------------|------------|
| Slides | 30 | 58 |
| Duration | ~20 min | ~30 min |
| Presenter Mode | ❌ | ✅ |
| Notes Support | ❌ | ✅ |
| Images | ✅ | ✅ |

## 🎯 Pro Tips

1. **Practice Mode:** Use Home/End keys to jump around quickly
2. **Section Jump:** Click section names in the navbar to jump directly
3. **Fullscreen:** Press F11 for fullscreen presentation mode
4. **Print:** Open presentation and use browser's print function (Ctrl/Cmd + P)

---

**Ready to present?** Run `npm start` and open http://localhost:3000 🎉

# Merged Portfolio Presentation System

## 📊 Overview

This is a unified presentation system combining **TWO major projects**:
1. **Oracle IaC Project** (Pulumi) - 69 slides
2. **Book Marketplace Project** (SIG) - 42 slides
3. **Total**: 111 slides with seamless navigation

## 🎯 Features

✅ **Seamless Navigation**: Start with Oracle, press → to flow into Book Marketplace
✅ **Dual-Screen Presenter Mode**: Professional presenter view with notes, timer, and slide previews
✅ **Real-Time Sync**: Projector and presenter views stay synchronized via BroadcastChannel
✅ **Dynamic Navbar**: Navigation automatically switches between presentations
✅ **MongoDB Notes**: Editable speaker notes saved to database
✅ **Keyboard Controls**: Full keyboard navigation support

## 🚀 Quick Start

### 1. Start the Server
```bash
cd /Users/anasabounouar/Downloads/dbaichi
npm start
```

Server will run at: `http://localhost:3000`

### 2. Access Points

#### 🏠 Landing Page
```
http://localhost:3000/
```
Choose from:
- **🚀 View Complete Presentation** - Full merged 111-slide presentation
- **🎤 Open Presenter View** - Dual-screen presenter mode
- **📚 Book Marketplace Only** - Individual project view
- **🏢 Oracle IaC Only** - Individual project view

#### 📺 Projector View (Main Presentation)
```
http://localhost:3000/presentation.html
```
This is what you show on the **projector/external screen**.

#### 🎤 Presenter View (Control Panel)
```
http://localhost:3000/presenter.html
```
This opens in a **separate window** for your laptop screen with:
- Current slide + next slide preview
- Editable speaker notes
- Timer
- Slide counter
- Navigation controls

## 🎮 Keyboard Controls

### Main Presentation
| Key | Action |
|-----|--------|
| **→** or **Space** | Next slide |
| **←** | Previous slide |
| **Home** | Jump to first slide |
| **End** | Jump to last slide |
| **P** | Open presenter view |

### Presenter View
| Key | Action |
|-----|--------|
| **→** or **Space** | Next slide (syncs with projector) |
| **←** | Previous slide (syncs with projector) |

## 📋 Presentation Structure

### Part 1: Oracle IaC (Slides 1-69)
Navigation sections:
1. **Company & Team** (slides 5-15)
2. **Problem & Solution** (slides 16-28)
3. **Project Management** (slides 29-38)
4. **Technical Implementation** (slides 39-54)
5. **Results & Validations** (slides 55-63)
6. **Future Enhancements** (slides 64-68)

### Part 2: Book Marketplace (Slides 69-111)
Navigation sections:
1. **Introduction** (slides 73-80)
2. **System Conception** (slides 81-85)
3. **Workflow** (slides 86-90)
4. **Implementation** (slides 91-101)
5. **Results** (slides 102-104)
6. **Conclusion** (slides 105-110)

## 💡 Usage Scenarios

### Scenario 1: Full Presentation with Dual Screens
**Setup**: Projector + Laptop

1. Open `presentation.html` on your **laptop**
2. Press **F11** for fullscreen
3. Press **P** to open presenter view
4. **Drag presenter window** to your laptop screen
5. **Drag main presentation** to projector/external display
6. Present! Both views stay synchronized

### Scenario 2: Practice Mode
1. Open `presenter.html` directly
2. Practice with notes visible
3. Use timer to track duration

### Scenario 3: Individual Projects
- Oracle only: `/presentations/oracle-iac/presentation.html`
- Book Marketplace only: `/presentations/book-marketplace/presentation.html`

## 🔧 Technical Details

### Database (MongoDB)
- **Collection**: `presentation_notes`
- **Database**: `dictionary_db`
- **Presentation ID**: `merged-portfolio-2025`
- Notes auto-save every 2 seconds while editing

### Synchronization
- **Method**: BroadcastChannel API
- **Channel Name**: `presentation-sync`
- **Compatibility**: Modern browsers (Chrome 54+, Firefox 38+, Safari 15.4+)

### Files Structure
```
/dbaichi/
├── index.html              # Landing page
├── presentation.html       # Main merged presentation (projector view)
├── presenter.html          # Presenter control panel
├── server.js              # Express server + MongoDB API
├── images/                # All images from both presentations
└── presentations/         # Original standalone presentations
    ├── oracle-iac/
    └── book-marketplace/
```

## 🎨 Navbar Behavior

The navigation bar is **smart** and changes based on your location:

- **Slides 1-68** → Shows Oracle sections (Company & Team, Problem & Solution, etc.)
- **Slides 69-111** → Shows Book Marketplace sections (Introduction, System Conception, etc.)

Automatic switching happens at slide 69 (where Book Marketplace begins).

## 📝 Speaker Notes

### Editing Notes (Presenter View)
1. Click in the notes textarea
2. Type your notes
3. Notes auto-save after 2 seconds
4. All notes persist in MongoDB

### Notes are stored PER SLIDE:
- Oracle notes: slides 0-68
- Book Marketplace notes: slides 69-110

## 🐛 Troubleshooting

### Presenter view not syncing?
- **Check**: BroadcastChannel support (use modern browser)
- **Try**: Hard refresh both windows (Cmd+Shift+R)

### Images not loading?
- **Check**: `/images/` folder exists in root
- **Verify**: Server is running on port 3000

### Wrong slide count showing?
- **Expected**: 111 total slides
- **Fix**: Hard refresh browser (Cmd+Shift+R)

### MongoDB connection failed?
- **Impact**: Presentation works, but notes won't save
- **Fix**: Check `MONGODB_URI` in server.js or set environment variable

## 🎯 Best Practices

1. **Practice First**: Run through the full presentation to familiarize yourself with the flow
2. **Test Dual-Screen**: Set up projector before presentation day
3. **Save Important Notes**: Speaker notes are saved, but backup critical points
4. **Know the Transition**: Slide 69 is where Oracle ends and Book Marketplace begins
5. **Use Section Navigation**: Click navbar buttons to jump to specific sections

## 📞 Support

For issues or questions:
- Check `README.md` for detailed setup
- Review `QUICK_START.md` for basic usage
- Check server console for error messages

---

**Ready to present?** 🚀

Run `npm start` and open http://localhost:3000 to begin!

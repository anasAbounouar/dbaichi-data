# Presentation with MongoDB-Backed Speaker Notes

## Overview

This presentation system features PowerPoint-like speaker notes with MongoDB cloud storage integration. Notes are automatically synchronized across sessions and can be viewed in a dedicated presenter view.

## Features

- 📝 **Editable Speaker Notes**: Add/edit notes for each slide
- 💾 **Auto-Save**: Notes automatically save after 2 seconds of inactivity
- ☁️ **Cloud Sync**: All notes stored in MongoDB Atlas
- 🎤 **Presenter View**: Separate window showing current/next slides, timer, and notes
- ⌨️ **Keyboard Shortcuts**: Quick access to all features
- 🔄 **Offline Support**: Works offline with local cache

## Setup Instructions

### 1. Install Dependencies

```bash
cd /Users/anasabounouar/Downloads/dbaichi/pfe-oracle
npm install
```

This installs:
- `express` - Web server
- `mongodb` - MongoDB client
- `cors` - Cross-origin requests

### 2. Start the Server

```bash
npm start
```

You should see:
```
Connected to MongoDB
Server running on http://localhost:3000
Open presentation.html in your browser
```

### 3. Open Presentation

Open your browser and navigate to:
```
http://localhost:3000/presentation.html
```

## Usage

### Adding/Editing Notes

1. **Press `N` key** or click the **📝 Notes** button (bottom-right)
2. A notes panel appears at the bottom (like PowerPoint)
3. Type your speaker notes
4. Notes auto-save after 2 seconds
5. Or press **Ctrl+S** (Cmd+S on Mac) to save immediately

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `N` | Toggle notes panel |
| `Ctrl+S` / `Cmd+S` | Save current note |
| `P` | Open presenter view |
| `Arrow Right` / `Space` | Next slide |
| `Arrow Left` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |

### Presenter View (Like PowerPoint Presenter Mode)

1. **Press `P` key** to open presenter view in a new window
2. **Drag presenter view** to your laptop screen
3. **Drag main presentation** to projector/second screen
4. Presenter view shows:
   - Current slide preview
   - Next slide preview
   - Your speaker notes
   - Timer (tracks presentation duration)
   - Slide counter

5. Both windows stay synchronized as you navigate

## MongoDB Integration

### Connection Details

- **Database**: `dictionary_db`
- **Collection**: `presentation_notes`
- **Presentation ID**: `pfe-oracle-2025`

### Data Structure

```json
{
  "presentationId": "pfe-oracle-2025",
  "slideIndex": 5,
  "notes": "Mention the key benefits here...",
  "updatedAt": "2025-01-23T10:30:00.000Z"
}
```

### API Endpoints

The server provides these REST endpoints:

```
GET  /api/notes/:presentationId
     Returns all notes for a presentation

POST /api/notes/:presentationId/:slideIndex
     Saves/updates a note for a specific slide
     Body: { "notes": "Your notes here" }

DELETE /api/notes/:presentationId/:slideIndex
       Deletes a note
```

## How It Works

1. **On Startup**:
   - Presentation loads all notes from MongoDB
   - Notes cached in memory for fast access
   - data-notes attributes updated for presenter view

2. **When You Type**:
   - 2-second debounce timer starts
   - After inactivity, auto-saves to MongoDB
   - Shows "✓ Saved to MongoDB" confirmation

3. **When You Change Slides**:
   - Current slide's notes loaded from cache
   - Displayed in notes panel
   - Available in presenter view

4. **Offline Mode**:
   - If server unavailable, shows "Offline mode"
   - Notes still saved to local cache
   - Will sync when server reconnects

## Tips

- **Before Presentation**: Add notes to all slides using the notes panel
- **During Presentation**: Use presenter view (P key) on your laptop
- **Team Collaboration**: Multiple people can edit notes (last save wins)
- **Backup**: Notes are in MongoDB Cloud - always backed up

## Troubleshooting

### Cannot connect to MongoDB

```
Error: Could not load notes from MongoDB
```

**Solution**:
- Check server is running (`npm start`)
- Check MongoDB credentials in `server.js`
- Verify internet connection (MongoDB Atlas is cloud-based)

### Notes not saving

**Check**:
1. Server running on http://localhost:3000
2. Browser console for errors (F12)
3. MongoDB connection string valid

### Presenter view not syncing

**Solution**:
- Refresh both windows
- Close and reopen presenter view (press P)

## Example: Adding Notes to All Slides

```javascript
// You can programmatically add notes (open browser console):

const slides = [
  { slideIndex: 0, notes: "Introduce yourself and the project..." },
  { slideIndex: 1, notes: "Walk through agenda items..." },
  { slideIndex: 4, notes: "Emphasize Oracle's market position..." }
];

slides.forEach(async ({slideIndex, notes}) => {
  await fetch(`http://localhost:3000/api/notes/pfe-oracle-2025/${slideIndex}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notes })
  });
});
```

## Production Deployment

For production, update `API_BASE_URL` in `presentation.html`:

```javascript
// Change from:
const API_BASE_URL = 'http://localhost:3000/api';

// To your production server:
const API_BASE_URL = 'https://your-domain.com/api';
```

## Credits

Built with:
- MongoDB Atlas (Cloud Database)
- Express.js (Backend API)
- Vanilla JavaScript (Frontend)
- HTML5 + CSS3 (UI)

---

**Made for**: Yassine DBAICHI - PFE Oracle 2025
**Project**: Infrastructure as Code Support in Graal CI

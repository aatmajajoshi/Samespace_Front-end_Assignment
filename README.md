# Samespace Music Player

## Overview
This is a **React.js** based music player built as part of a front-end assessment. The application fetches song data from a REST API and provides an interactive and responsive user interface inspired by the given **Figma design**.

## Features
✅ Fully responsive UI matching the provided design
✅ Fetches song list from the REST API
✅ Background gradient changes based on song cover image
✅ Interactive animations and transitions
✅ Persistent audio playback even when switching tabs
✅ Smooth user experience with fluid interactions

## Functionality
- 🎵 **Music Controls** - Play, Pause, Next, Previous
- 🔍 **Search Functionality**
- 🔄 **Tab Navigation** (e.g., "For You" to "Top Tracks")
- 🎚 **Music Seeker** - Control playback position

## API Used
The application retrieves song data from:
```plaintext
https://cms.samespace.com/items/songs
```
- Cover images are loaded using:
```plaintext
https://cms.samespace.com/assets/{COVER_IMAGE_ID}
```

## Installation & Setup
### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/aatmajajoshi/Samespace_Front-end_Assessment.git
   cd Samespace_Front-end_Assessment
   ```
2. **Install Dependencies**
   ```sh
   npm install   # or yarn install
   ```
3. **Run the Application**
   ```sh
   npm start   # or yarn start
   ```
4. Open **http://localhost:3000/** in the browser.

## Deployment
The project is deployed on **Netlify**. You can access it here:
🔗 **[Live Demo](https://samespacemusicplayer.netlify.app/)**

## Tech Stack
- **React.js** - Front-end framework
- **CSS3 / SCSS** - Styling and animations
- **REST API** - Fetching dynamic song data
- **React Audio Player** - Handling music playback

## Project Structure
```plaintext
/music-player
├── src
│   ├── components     # UI components
│   ├── pages          # Main pages
│   ├── assets         # Static assets (icons, images, etc.)
│   ├── styles         # Global and component-specific styles
│   ├── utils          # Helper functions
│   ├── App.js         # Main application entry
│   ├── index.js       # Root file
├── public             # Static public assets
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
```

## Future Improvements
- 🔹 **Dark Mode Support**
- 🔹 **Playlist Creation Feature**
- 🔹 **Lyrics Integration**

## Author
👨‍💻 **Aatmaja Joshi**  
📌 [LinkedIn](https://www.linkedin.com/in/aatmajajoshi/)  
📧 Contact: aatmajajoshi2514@gmail.com



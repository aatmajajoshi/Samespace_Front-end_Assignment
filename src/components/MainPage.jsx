import { useState } from "react";
import { SiSpotify } from "react-icons/si"; // Importing Spotify icon
import SongList from "./SongList"; // Import the SongList component
import "../styles/MainPage.css"; // Import the CSS file

function MainPage({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default background color

  // Function to handle background color change on song click
  const handleSongClick = (accentColor) => {
    setBackgroundColor(accentColor); // Update background color dynamically
  };

  return (
    <div
      className="main-container"
      style={{
        backgroundColor: backgroundColor, // Background color updated dynamically
      }}
    >
      <header className="header">
        <SiSpotify color="#fff" className="spotify-icon" />
        <span className="spotify-text">
          Spotify
          <sup className="spotify-sup">®</sup>
        </span>
      </header>

      {/* Pass the handleSongClick function to SongList component */}
      <SongList songs={songs} onSongClick={handleSongClick} />
    </div>
  );
}

export default MainPage;

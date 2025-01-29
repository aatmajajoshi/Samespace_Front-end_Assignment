import { useState } from "react";
import { SiSpotify } from "react-icons/si"; // Importing Spotify icon
import SongList from "../components/SongList"; // Import the SongList component
import MainSong from "../components/MainSong";
import "../styles/MainPage.css"; // Import the CSS file

function MainPage({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default background color
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song data

  // Function to handle background color change on song click
  const handleSongClick = (song) => {
    setBackgroundColor(song.accent); // Update background color dynamically
    setSelectedSong(song);
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
      {selectedSong && <MainSong song={selectedSong} />}
    </div>
  );
}

export default MainPage;

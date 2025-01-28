import { useState } from "react";
import { SiSpotify } from "react-icons/si"; // Importing Spotify icon

function MainPage({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default background color
  const handleSongClick = (accentColor) => {
    setBackgroundColor(accentColor); // Set the background to the clicked song's accent color
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Background color updated dynamically
        height: "100vh", // Ensuring full height
        transition: "background-color 0.5s ease", // Smooth transition for color change
      }}
    >
      <header
        style={{
          padding: "10px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          gap: "3px",
        }}
      >
        <SiSpotify color="#fff" style={{ width: "90px", height: "30px" }} />
        <span
          style={{
            fontSize: "20px",
            color: "#fff",
            marginLeft: "-25px",
            fontFamily: "'Montserrat', sans-serif", // Close match to Spotify's font
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Spotify
          <sup style={{ fontSize: "10px" }}>®</sup>
        </span>
      </header>

      {/* <img
          src={spotifylogo}
          alt="Spotify Logo"
          style={{ width: "130px", height: "40px" }}
        /> */}
      <div style={{ paddingTop: "50px" }}>
        <h1>Music Player</h1>
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => handleSongClick(song.accent)}
            style={{ cursor: "pointer", margin: "20px" }}
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              {song.name} - {song.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;

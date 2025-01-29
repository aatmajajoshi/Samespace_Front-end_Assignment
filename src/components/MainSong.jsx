import React, { useState, useEffect, useRef } from "react";
import "../styles/MainSong.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Import default styles

function MainSong({ song }) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <div className="main-song-wrapper-unique">
      <div className="main-song-container-unique">
        {song ? (
          <>
            <div className="main-song-details-unique">
              <div className="song-info-unique">
                <h3 className="song-name-unique">{song.name}</h3>
                <p className="song-artist-unique">{song.artist}</p>
              </div>
              <img
                src={`https://cms.samespace.com/assets/${song.cover}`}
                alt={song.name}
                className="main-song-cover-unique"
              />
            </div>

            {/* Custom Audio Player */}
            <div className="audio-player-class">
            {/* <button className="rhap_menu-button"></button> Menu Button */}
              <AudioPlayer
                ref={audioRef}
                src={song.url}
                onListen={(e) => setCurrentTime(e.target.currentTime)}
                volume={0.5}
                showTime={false} // Hide the time display
                // customProgressBar={true} // Enable custom progress bar
                showLoopControl={false} // Disable loop button
                loop={false} // Ensure loop is disabled
                controls
              />
            </div>
          </>
        ) : (
          <p>Select a song to play</p>
        )}
      </div>
    </div>
  );
}

export default MainSong;

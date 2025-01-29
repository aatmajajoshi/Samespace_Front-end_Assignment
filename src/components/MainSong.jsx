import React, { useState, useRef, useEffect } from "react";
import "../styles/MainSong.css";

function MainSong({ song }) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  const handleSeek = (event) => {
    const seekBar = event.target;
    const newTime =
      (event.nativeEvent.offsetX / seekBar.offsetWidth) * song.duration;
    setCurrentTime(newTime);
  };

  return (
    <div className="main-song-wrapper-unique">
      {/* Container added for easier styling */}
      <div className="main-song-container-unique">
        {song ? (
          <>
            <div className="main-song-details-unique">
              <img
                src={`https://cms.samespace.com/assets/${song.cover}`}
                alt={song.name} // Use song.name for the alt text for clarity
                className="main-song-cover-unique"
              />
              <div className="song-info-unique">
                <h3 className="song-name-unique">{song.name}</h3>
                <p className="song-artist-unique">{song.artist}</p>
              </div>
            </div>

            <audio ref={audioRef} src={song.url} controls />
            <div className="audio-seeker-unique" onClick={handleSeek}>
              <div
                className="seek-bar-unique"
                style={{ width: `${(currentTime / song.duration) * 100}%` }}
              ></div>
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

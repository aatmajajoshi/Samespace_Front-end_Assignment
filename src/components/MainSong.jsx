import React, { useRef } from "react";
import "../styles/MainSong.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function MainSong({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  setBackgroundColor,
  toggleSongList, // Function to show/hide SongList
}) {
  const audioRef = useRef(null);

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex < songs.length - 1 ? prevIndex + 1 : 0
    );
    setBackgroundColor(songs[currentSongIndex]?.accent || "#0f0f0f"); // Update background color
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : songs.length - 1
    );
    setBackgroundColor(songs[currentSongIndex]?.accent || "#0f0f0f"); // Update background color
  };

  const handleEnd = () => {
    setCurrentSongIndex((prevIndex) => {
      const nextIndex = prevIndex < songs.length - 1 ? prevIndex + 1 : 0;
      setBackgroundColor(songs[nextIndex]?.accent || "#0f0f0f"); // Update background color when song ends
      return nextIndex;
    });

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.audio.current.play();
      }
    }, 100);
  };

  return (
    <div className="main-song-wrapper-unique">
      <div className="main-song-container-unique">
        {songs.length > 0 ? (
          <>
            <div className="main-song-details-unique">
              <div className="song-info-unique">
                <h3 className="song-name-unique">
                  {songs[currentSongIndex].name}
                </h3>
                <p className="song-artist-unique">
                  {songs[currentSongIndex].artist}
                </p>
              </div>
              <img
                src={`https://cms.samespace.com/assets/${songs[currentSongIndex].cover}`}
                alt={songs[currentSongIndex].name}
                className="main-song-cover-unique"
              />
            </div>

            {/* Audio Player with Next/Previous Functionality */}
            <div className="audio-player-class">
              <div className="menu-icon-wrapper" onClick={toggleSongList}>
                <BiDotsHorizontalRounded className="menu-icon" />
              </div>
              <AudioPlayer
                ref={audioRef}
                src={songs[currentSongIndex].url}
                volume={0.5}
                showTime={false}
                showLoopControl={false}
                loop={false}
                showSkipControls={true} // Enable next/previous buttons
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
                onEnded={handleEnd} // Auto-play next song
                customAdditionalControls={[]} // Remove extra controls if needed
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

import React, { useEffect, useState, useRef } from "react";
import "../styles/SongList.css"; // Import the CSS for SongList
import { FaTimes } from "react-icons/fa"; // Import cross icon
import { FiSearch } from "react-icons/fi";

function SongList({ songs, onSongClick, currentSongIndex }) {
  const [durations, setDurations] = useState({});
  const [showTopTracks, setShowTopTracks] = useState(false); // Toggle between For You & Top Tracks
  const [searchQuery, setSearchQuery] = useState(""); // Search bar state
  const [showSearchIcon, setShowSearchIcon] = useState(true); // For managing search icon visibility
  const searchInputRef = useRef(null); // Reference to the search input element
  const [activeSongIndex, setActiveSongIndex] = useState(null); // Track active song index

  useEffect(() => {
    // Fetch the duration of each song
    songs.forEach((song) => {
      const audio = new Audio(song.url);
      audio.onloadedmetadata = () => {
        setDurations((prevDurations) => ({
          ...prevDurations,
          [song.id]: audio.duration, // Save duration by song id
        }));
      };
    });
  }, [songs]);

  // Convert seconds to MM:SS format
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  // Filter songs based on selection (For You / Top Tracks)
  let filteredSongs = showTopTracks
    ? songs.filter((song) => song.top_track)
    : songs;

  // Further filter based on search query
  filteredSongs = filteredSongs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClearSearch = () => {
    setShowSearchIcon(false); // Hide search icon
    setTimeout(() => {
      setSearchQuery(""); // Clear input after a short delay
      setShowSearchIcon(true); // Show search icon again smoothly
    }, 300); // Matches the CSS transition time
  };

  const handleSearchIconClick = () => {
    searchInputRef.current.focus(); // Focus the search input when search icon is clicked
  };

  // Handle song click: Find the correct index from the full songs array
  const handleSongClick = (songId) => {
    const originalIndex = songs.findIndex((song) => song.id === songId);
    if (originalIndex !== -1) {
      setActiveSongIndex(originalIndex); // Set the active song index
      onSongClick(originalIndex); // Pass correct index to MainPage
    }
  };

  return (
    <div className="song-list-container">
      {/* Headings to switch between For You & Top Tracks */}
      <div className="headings-container">
        <h2
          className={`section-heading ${!showTopTracks ? "active" : ""}`}
          onClick={() => setShowTopTracks(false)}
        >
          For You
        </h2>
        <h2
          className={`section-heading ${showTopTracks ? "active" : ""}`}
          onClick={() => setShowTopTracks(true)}
        >
          Top Tracks
        </h2>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search Song, Artist"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery ? (
          <FaTimes className="clear-icon fade-in" onClick={handleClearSearch} />
        ) : (
          <FiSearch
            className="search-icon fade-in"
            onClick={handleSearchIconClick}
          />
        )}
      </div>

      {/* Song List */}
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => handleSongClick(song.id)} // Pass song ID instead of index
            className={`song-item ${
              currentSongIndex === songs.findIndex((s) => s.id === song.id)
                ? "active-song"
                : ""
            }`}
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              className="song-image"
            />
            <div className="song-details">
              <div>
                <span className="song-name">{song.name}</span>
                <br />
                <span className="song-artist">{song.artist}</span>
              </div>
              <span className="song-duration">
                {durations[song.id]
                  ? formatDuration(durations[song.id])
                  : "Loading..."}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="no-songs-message">No songs found.</p>
      )}
    </div>
  );
}

export default SongList;

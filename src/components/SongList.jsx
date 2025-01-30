import React, { useEffect, useState, useRef } from "react";
import "../styles/SongList.css"; // Import the CSS for SongList
import { FaTimes } from "react-icons/fa"; // Import cross icon
import { FiSearch } from "react-icons/fi";

function SongList({ songs, onSongClick }) {
  const [durations, setDurations] = useState({});
  const [showTopTracks, setShowTopTracks] = useState(false); // State to toggle between For You & Top Tracks
  const [searchQuery, setSearchQuery] = useState(""); // Search bar state
  const [showSearchIcon, setShowSearchIcon] = useState(true); // For managing search icon visibility
  const searchInputRef = useRef(null); // Reference to the search input element
  const [activeSong, setActiveSong] = useState(null);

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

  // Convert seconds to a readable format (MM:SS)
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

  // Handle search icon click
  const handleSearchIconClick = () => {
    searchInputRef.current.focus(); // Focus the search input when search icon is clicked
  };
  const handleSongClick = (song) => {
    setActiveSong(song.id); // Set the active song ID
    onSongClick(song); // Trigger the original click handler
  };

  return (
    <div className="song-list-container">
      {/* Headings in a single row with click handlers */}
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
          ref={searchInputRef} // Assign the ref to the search input
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

      {/* Song list */}
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          // <div
          //   key={song.id}
          //   onClick={() => onSongClick(song)}
          //   className="song-item"
          // >
          <div
            key={song.id}
            onClick={() => handleSongClick(song)}
            className={`song-item ${
              activeSong === song.id ? "active-song" : ""
            }`} // Add 'active-song' class if it's active
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

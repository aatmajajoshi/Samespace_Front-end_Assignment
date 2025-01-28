// import React, { useEffect, useState } from "react";
// import "../styles/SongList.css"; // Import the CSS for SongList

// function SongList({ songs, onSongClick }) {
//   const [durations, setDurations] = useState({});

//   useEffect(() => {
//     // Fetch the duration of each song
//     songs.forEach((song) => {
//       const audio = new Audio(song.url);
//       audio.onloadedmetadata = () => {
//         // Set the duration once the audio metadata is loaded
//         setDurations((prevDurations) => ({
//           ...prevDurations,
//           [song.id]: audio.duration, // Save the duration by song id
//         }));
//       };
//     });
//   }, [songs]);

//   // Convert seconds to a readable format (MM:SS)
//   const formatDuration = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
//   };

//   return (
//     <div className="song-list-container">
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           onClick={() => onSongClick(song.accent)} // Call the onSongClick function when song is clicked
//           className="song-item"
//         >
//           <img
//             src={`https://cms.samespace.com/assets/${song.cover}`}
//             alt={song.title}
//             className="song-image"
//           />
//           <div className="song-details">
//             <p>
//               <span className="song-name">{song.name}</span> <br />
//               <span className="song-artist">{song.artist}</span>
//             </p>
//             <span className="song-duration">
//               {durations[song.id] ? formatDuration(durations[song.id]) : "Loading..."}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SongList;
import React, { useEffect, useState } from "react";
import "../styles/SongList.css"; // Import the CSS for SongList

function SongList({ songs, onSongClick }) {
  const [durations, setDurations] = useState({});

  useEffect(() => {
    // Fetch the duration of each song
    songs.forEach((song) => {
      const audio = new Audio(song.url);
      audio.onloadedmetadata = () => {
        // Set the duration once the audio metadata is loaded
        setDurations((prevDurations) => ({
          ...prevDurations,
          [song.id]: audio.duration, // Save the duration by song id
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

  return (
    <div className="song-list-container">
      {songs.map((song) => (
        <div
          key={song.id}
          onClick={() => onSongClick(song.accent)} // Call the onSongClick function when song is clicked
          className="song-item"
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
      ))}
    </div>
  );
}

export default SongList;

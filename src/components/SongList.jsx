import { useState } from "react";
import "../styles/SongList.css";

function SongList({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default background color

  const handleSongClick = (accentColor) => {
    setBackgroundColor(accentColor); // Set the background to the clicked song's accent color
  };

  return (
    <></>
    // <div className="song-list-container" style={{ backgroundColor }}>
    //   {/* <h1>Music Player</h1> */}
    //   {songs.map((song) => (
    //     <div
    //       key={song.id}
    //       onClick={() => handleSongClick(song.accent)}
    //       className="song-item"
    //     >
    //       <img
    //         src={`https://cms.samespace.com/assets/${song.cover}`}
    //         alt={song.name}
    //       />
    //       <div>
    //         <p>
    //           <strong>{song.name}</strong> - {song.artist}
    //         </p>
    //         {song.duration && (
    //           <p className="duration">Duration: {song.duration} mins</p>
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default SongList;

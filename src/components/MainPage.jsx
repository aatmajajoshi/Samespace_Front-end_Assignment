// import { useState } from "react";
// import { SiSpotify } from "react-icons/si";
// import SongList from "../components/SongList";
// import MainSong from "../components/MainSong";
// import "../styles/MainPage.css";

// function MainPage({ songs }) {
//   const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const handleSongClick = (index) => {
//     setCurrentSongIndex(index);
//     setBackgroundColor(songs[index]?.accent || "#0f0f0f");
//   };

//   return (
//     <div
//       className="main-container"
//       style={{ backgroundColor: backgroundColor }}
//     >
//       <header className="header">
//         <SiSpotify color="#fff" className="spotify-icon" />
//         <span className="spotify-text">
//           Spotify
//           <sup className="spotify-sup">®</sup>
//         </span>
//       </header>

//       <div className="main-content-container">
//         <SongList songs={songs} onSongClick={handleSongClick} />
//         {songs.length > 0 && (
//           <MainSong
//             song={songs[currentSongIndex]}
//             currentSongIndex={currentSongIndex}
//             setCurrentSongIndex={setCurrentSongIndex}
//             songs={songs}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default MainPage;

import { useState } from "react";
import { SiSpotify } from "react-icons/si";
import SongList from "../components/SongList";
import MainSong from "../components/MainSong";
import "../styles/MainPage.css";

function MainPage({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
    setBackgroundColor(songs[index]?.accent || "#0f0f0f");
  };

  return (
    <div
      className="main-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <header className="header">
        <SiSpotify color="#fff" className="spotify-icon" />
        <span className="spotify-text">
          Spotify
          <sup className="spotify-sup">®</sup>
        </span>
      </header>

      <div className="main-content-container">
        <SongList
          songs={songs}
          onSongClick={handleSongClick}
          currentSongIndex={currentSongIndex}  // Pass current song index to SongList
        />
        {songs.length > 0 && (
          <MainSong
            song={songs[currentSongIndex]}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            setBackgroundColor={setBackgroundColor}  // Pass setBackgroundColor to MainSong
            songs={songs}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;

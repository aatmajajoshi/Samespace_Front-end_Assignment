// import { useState } from "react";
// import { SiSpotify } from "react-icons/si";
// import SongList from "../components/SongList";
// import MainSong from "../components/MainSong";
// import "../styles/MainPage.css";

// function MainPage({ songs }) {
//   const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isSongListVisible, setIsSongListVisible] = useState(false);

//   const handleSongClick = (index) => {
//     setCurrentSongIndex(index);
//     setBackgroundColor(songs[index]?.accent || "#0f0f0f");
//   };

//   const toggleSongList = () => {
//     setIsSongListVisible((prev) => !prev);
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
//         <SongList
//           songs={songs}
//           onSongClick={handleSongClick}
//           currentSongIndex={currentSongIndex} // Pass current song index to SongList
//           isVisible={isSongListVisible} // Pass visibility state
//         />
//         {songs.length > 0 && (
//           <MainSong
//             song={songs[currentSongIndex]}
//             currentSongIndex={currentSongIndex}
//             setCurrentSongIndex={setCurrentSongIndex}
//             setBackgroundColor={setBackgroundColor} // Pass setBackgroundColor to MainSong
//             songs={songs}
//             toggleSongList={toggleSongList} // Pass the function to toggle SongList
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default MainPage;
import { useState, useEffect } from "react";
import { SiSpotify } from "react-icons/si";
import SongList from "../components/SongList";
import MainSong from "../components/MainSong";
import "../styles/MainPage.css";

function MainPage({ songs }) {
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isSongListVisible, setIsSongListVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

  // Check if the screen is mobile or not
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile screen threshold to 768px
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
    setBackgroundColor(songs[index]?.accent || "#0f0f0f");
    if (isMobile) {
      setIsSongListVisible(false); // Hide SongList when a song is clicked (only for mobile)
    }
  };

  const toggleSongList = () => {
    setIsSongListVisible((prev) => !prev); // Toggle the visibility of SongList (only for mobile)
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
        {/* Only render SongList if it's visible and for mobile screen */}
        {isMobile && isSongListVisible && (
          <SongList
            songs={songs}
            onSongClick={handleSongClick}
            currentSongIndex={currentSongIndex}
            isVisible={isSongListVisible}
          />
        )}

        {/* Only render MainSong if songs are available and SongList is hidden */}
        {songs.length > 0 && (!isMobile || !isSongListVisible) && (
          <MainSong
            song={songs[currentSongIndex]}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            setBackgroundColor={setBackgroundColor}
            songs={songs}
            toggleSongList={toggleSongList}
          />
        )}

        {/* For larger screens, always show SongList */}
        {!isMobile && (
          <SongList
            songs={songs}
            onSongClick={handleSongClick}
            currentSongIndex={currentSongIndex}
            isVisible={true} // Always visible on desktop/tablet
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;

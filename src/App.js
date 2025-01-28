// import { useState } from "react";
// import Home from "./pages/home";
// import SongList from "./components/SongList";
// import MainPage from "./components/MainPage";

// function App() {
//   const [songs, setSongs] = useState([]);

//   // Define the function before using it
//   const handleSongClick = (accent) => {
//     console.log("Song clicked with accent:", accent);
//     // Add additional logic here if needed
//   };

//   return (
//     <div>
//       <Home setSongs={setSongs} />
//       <MainPage songs={songs} />
//       <SongList songs={songs} onSongClick={handleSongClick} />{" "}
//       {/* Now this should work */}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import Home from "./pages/home";
import MainPage from "./components/MainPage";

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <Home setSongs={setSongs} />
      <MainPage songs={songs} />{" "}
      {/* This will handle everything including SongList */}
    </div>
  );
}

export default App;

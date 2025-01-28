import { useState } from "react";
import Home from "./pages/home";
import SongList from "./components/SongList";
import MainPage from "./components/MainPage";

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <Home setSongs={setSongs} />
      <MainPage songs={songs} />
      <SongList songs={songs} /> {/* Passing songs to another component */}
    </div>
  );
}

export default App;

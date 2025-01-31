import { useState } from "react";
import Home from "./pages/home";
import MainPage from "./components/MainPage";

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <Home setSongs={setSongs} />
      <MainPage songs={songs} />
    </div>
  );
}

export default App;

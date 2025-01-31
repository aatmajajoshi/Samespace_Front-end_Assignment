import { useEffect } from "react";
import axios from "axios";
// No UI in this component, just fetching data
function Home({ setSongs }) {
  useEffect(() => {
    axios
      .get("https://cms.samespace.com/items/songs")
      .then((response) => {
        setSongs(response.data.data); // Passing songs data to parent component
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, [setSongs]);

  return null;
}

export default Home;

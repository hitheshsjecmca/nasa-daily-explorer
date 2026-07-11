import { useState, useEffect } from "react";
import { fetchAPOD } from "./services/nasaApi";
import DatePicker from "./components/DatePicker";
import APODCard from "./components/APODCard";
import Loader from "./components/Loader";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

function App() {
  // Store NASA image data
  const [imageData, setImageData] = useState(null);

  // Store selected date
  const [date, setDate] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error message
  const [error, setError] = useState("");

  const [favorites, setFavorites] = useState([]);

  // Fetch NASA image
  const loadImage = async (selectedDate = "") => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchAPOD(selectedDate);

      if (data.media_type !== "image") {
        setError("No image available for this date.");
        setImageData(null);
      } else {
        setImageData(data);
      }
    } catch (err) {
      setError("Failed to fetch data from NASA API.");
      setImageData(null);
    }

    setLoading(false);
  };

  // Load today's image when app starts
  useEffect(() => {
    loadImage();
  }, []);

  const saveFavorite = () => {

  if (!imageData) return;

  const alreadyExists = favorites.some(
    (item) => item.date === imageData.date
  );

  if (alreadyExists) {
    alert("Already Saved!");
    return;
  }

  const updatedFavorites = [
    ...favorites,
    imageData,
  ];

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};


useEffect(() => {

  const savedFavorites = JSON.parse(
    localStorage.getItem("favorites")
  );

  if (savedFavorites) {

    setFavorites(savedFavorites);

  }

}, []);

const removeFavorite = (date) => {

  const updatedFavorites = favorites.filter(
    (item) => item.date !== date
  );

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );

};

  return (
    <div>
      <Navbar />

        <DatePicker
          date={date}
          setDate={setDate}
          onSearch={() => {
  console.log("Current date:", date);
  loadImage(date);
}}
        />

      {loading && <Loader />}

      {error && <p>{error}</p>}

      {imageData && (
    <APODCard

imageData={imageData}

saveFavorite={saveFavorite}

/>
)}
<Favorites

favorites={favorites}

removeFavorite={removeFavorite}

/>
    </div>
  );
}

export default App;
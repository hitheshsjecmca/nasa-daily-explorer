import { useState, useEffect } from "react";
import { fetchAPOD } from "./services/nasaApi";
import DatePicker from "./components/DatePicker";
import APODCard from "./components/APODCard";

function App() {
  // Store NASA image data
  const [imageData, setImageData] = useState(null);

  // Store selected date
  const [date, setDate] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error message
  const [error, setError] = useState("");

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

  return (
    <div>
      <h1>🚀 NASA Daily Explorer</h1>

        <DatePicker
          date={date}
          setDate={setDate}
          onSearch={() => {
  console.log("Current date:", date);
  loadImage(date);
}}
        />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {imageData && (
    <APODCard imageData={imageData} />
)}
    </div>
  );
}

export default App;
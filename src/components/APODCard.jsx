import "../styles/Card.css";

function APODCard({
imageData,
saveFavorite
}) {
  return (
    <div className="apod-card">

      <img
        src={imageData.hdurl || imageData.url}
        alt={imageData.title}
        className="apod-image"
      />

      <h2>{imageData.title}</h2>

      <p className="date">
        {imageData.date}
      </p>

      <p className="description">
        {imageData.explanation}
      </p>
      <button onClick={saveFavorite}>

⭐ Save Favorite

</button>

    </div>
  );
}

export default APODCard;
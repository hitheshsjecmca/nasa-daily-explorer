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
      <div className="action-buttons">

  <button
    className="favorite-btn"
    onClick={saveFavorite}
  >
    ⭐ Save Favorite
  </button>

  <a
    href={imageData.hdurl || imageData.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="download-btn">
      📥 Download HD Image
    </button>
  </a>

</div>
    </div>
  );
}

export default APODCard;
import "../styles/Card.css";

function APODCard({ imageData }) {
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

    </div>
  );
}

export default APODCard;
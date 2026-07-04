function Favorites({ favorites }) {
  return (
    <div className="favorites-section">

      <h2>⭐ Favorite Images</h2>

      {
        favorites.length === 0 ? (

          <p>No favorites yet.</p>

        ) : (

          favorites.map((item) => (

            <div
              className="favorite-card"
              key={item.date}
            >

              <img
                src={item.url}
                alt={item.title}
              />

              <h4>{item.title}</h4>

              <p>{item.date}</p>

            </div>

          ))

        )
      }

    </div>
  );
}

export default Favorites;
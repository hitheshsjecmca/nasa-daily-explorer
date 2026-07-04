import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading NASA Image...</p>
    </div>
  );
}

export default Loader;
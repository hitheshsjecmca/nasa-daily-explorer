import "../styles/DatePicker.css";

function DatePicker({ date, setDate, onSearch }) {
  return (
    <div className="date-container">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={onSearch}>
        🔍 Search
      </button>
    </div>
  );
}

export default DatePicker;
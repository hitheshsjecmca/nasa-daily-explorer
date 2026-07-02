function DatePicker({ date, setDate, onSearch }) {
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default DatePicker;
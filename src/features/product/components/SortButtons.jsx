const SortButtons = ({ filter, setFilter }) => {
  return (
    <div>
      <h4>Sort By :</h4>
      <button
        className={`btn ${filter === "asc" ? "active" : ""}`}
        onClick={() => setFilter("asc")}
      >
        Sort Price ↑
      </button>
      <button
        className={`btn ${filter === "desc" ? "active" : ""}`}
        onClick={() => setFilter("desc")}
      >
        Sort Price ↓
      </button>
    </div>
  );
};
export default SortButtons;

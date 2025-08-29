export default function SortButtons({ sortOrder, setSortOrder }) {
  return (
    <div className="sort-buttons">
      <button
        className={sortOrder === "asc" ? "active" : ""}
        onClick={() => setSortOrder("asc")}
      >
        Price: Low → High
      </button>
      <button
        className={sortOrder === "desc" ? "active" : ""}
        onClick={() => setSortOrder("desc")}
      >
        Price: High → Low
      </button>
      <button
        className={sortOrder === null ? "active" : ""}
        onClick={() => setSortOrder(null)}
      >
        Clear
      </button>
    </div>
  );
}

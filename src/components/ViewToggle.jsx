export default function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button
        className={view === "grid" ? "active" : ""}
        onClick={() => setView("grid")}
      >
        Grid
      </button>
      <button
        className={view === "table" ? "active" : ""}
        onClick={() => setView("table")}
      >
        Table
      </button>
    </div>
  );
}

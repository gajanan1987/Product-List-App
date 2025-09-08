const ViewToggle = ({ view, setView }) => {
  return (
    <div>
      <h4>View By :</h4>
      <button
        className={`btn ${view === "grid" ? "active" : ""}`}
        onClick={() => setView("grid")}
      >
        Grid View
      </button>
      <button
        className={`btn ${view === "table" ? "active" : ""}`}
        onClick={() => setView("table")}
      >
        Table View
      </button>
    </div>
  );
};
export default ViewToggle;

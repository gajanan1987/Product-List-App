import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sortProducts } from "../features/productsSlice";
import ProductGrid from "../components/ProductGrid";
import ProductTable from "../components/ProductTable";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("");

  const filterData = (filterBy) => {
    setFilter(filterBy);
    dispatch(sortProducts(filterBy));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <div className="btn-wrapper">
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
        <div>
          <h4>Sort By :</h4>
          <button
            className={`btn ${filter === "asc" ? "active" : ""}`}
            onClick={() => filterData("asc")}
          >
            Sort Price ↑
          </button>
          <button
            className={`btn ${filter === "desc" ? "active" : ""}`}
            onClick={() => filterData("desc")}
          >
            Sort Price ↓
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <ProductGrid products={items} />
      ) : (
        <ProductTable products={items} />
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectSortedProducts } from "../../redux/productsSlice";
import ProductGrid from "./components/ProductGrid";
import ProductTable from "./components/ProductTable";
import ViewToggle from "./components/ViewToggle";
import SortButtons from "./components/SortButtons";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("");

  const productList = useSelector((state) =>
    selectSortedProducts(state, filter)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <div className="btn-wrapper">
        <ViewToggle view={view} setView={setView} />
        <SortButtons filter={filter} setFilter={setFilter} />
      </div>

      {view === "grid" ? (
        <ProductGrid products={productList} />
      ) : (
        <ProductTable products={productList} />
      )}
    </div>
  );
};

export default ProductList;

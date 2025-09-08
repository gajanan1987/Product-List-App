import { Routes, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/Home"));
const ProductList = lazy(() => import("./features/product/ProductList"));

export default function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
=======
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Suspense>
>>>>>>> d4d7843 (new)
  );
}

import { Routes, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/Home"));
const ProductList = lazy(() => import("./features/product/ProductList"));
const Project = lazy(() => import("./features/project/Project1"));

export default function App() {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Suspense>
  );
}

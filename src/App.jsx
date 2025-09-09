import { Routes, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/Home"));
const ProductList = lazy(() => import("./features/product/ProductList"));
const Project = lazy(() => import("./features/project/Project1"));

const generateTasks = (numTasks) => {
  const tasks = [];

  for (let i = 1; i <= numTasks; i++) {
    tasks.push({
      task: i,
      msg: `ToDo ${i}`,
      status: 0,
    });
  }

  return tasks;
};

const tasks = generateTasks(10);

export default function App() {
  return (
    <Suspense fallback="Loading.....">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project tasks={tasks} />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Suspense>
  );
}

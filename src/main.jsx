import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <div className="conatiner-common">
        <App />
      </div>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);

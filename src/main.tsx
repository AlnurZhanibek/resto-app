import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { RestaurantPage } from "./pages/RestaurantPage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="restaurants">
          <Route path=":restaurant" element={<RestaurantPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

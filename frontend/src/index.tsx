import React from "react";
import ReactDOM from "react-dom/client";
// Tooltip
import Tooltip from "./mui/Tooltip";
// Home 
import Home from "./Home";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Tooltip />
    <Home />
  </React.StrictMode>
);

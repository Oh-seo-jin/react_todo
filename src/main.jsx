import React from "react"; // 18버전부터 생략 가능
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App1 from "./App1.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

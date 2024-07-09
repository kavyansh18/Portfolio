import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Homepg } from './Pages/Homepg';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/form" element={<Homepg />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

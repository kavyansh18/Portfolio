import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Homepg } from './Pages/Homepg';
import Contact from './Pages/Contact'
import Projects from "./Pages/Projects";
import ReactGA from 'react-ga'

ReactGA.initialize('G-Y6X1755VPZ')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/form" element={<Homepg />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

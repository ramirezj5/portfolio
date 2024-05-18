import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "./layout/NavBar";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/connect" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

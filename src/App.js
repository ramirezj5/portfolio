import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

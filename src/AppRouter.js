// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="" exact component={About} />
        <Route path="skills" component={Skills} />
        <Route path="projects" compoent={Project}/>
        <Route path="contact" compoent={Contact}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;

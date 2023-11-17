import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Profil from './components/profil';
import Search from './components/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/profil" element={<Profil />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
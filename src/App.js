import React, { useState, useMemo } from 'react';

import './styles/App.css';

import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './component/Navbar';
import Error from './pages/Error';
import AppRouter from './UI/AppRouter/AppRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

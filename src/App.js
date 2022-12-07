import React, { useState, useMemo, useEffect } from 'react';

import './styles/App.css';

import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './component/Navbar';
import Error from './pages/Error';
import AppRouter from './UI/AppRouter/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;

import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import About from '../../pages/About';
import Error from '../../pages/Error';
import PostIdPages from '../../pages/PostIdPages';
import Posts from '../../pages/Posts';
import { privateRoutes, publicRoutes } from '../../router';
import Loader from '../Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} element={route.component} path={route.path} />
          ))}

          <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} element={route.component} path={route.path} />
          ))}

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;

{
  /*    <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPages />} />
        <Route path="/error" element={<Error />} /> */
}

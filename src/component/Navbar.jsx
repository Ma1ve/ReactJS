import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import MyButton from '../UI/button/MyButton';

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div>
      <div className="navbar">
        <MyButton onClick={logout}>Выйти</MyButton>
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

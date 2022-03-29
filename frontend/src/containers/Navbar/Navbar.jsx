import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <AiFillHome color="#fff" className="home-icon" />
        </Link>
      </div>
      <div className="navbar__right">
        {' '}
        {!isLoggedIn ? (
          <>
            <Link className="auth-btn" to="/login">
              Login
            </Link>

            <Link className="auth-btn" to="/register">
              Register
            </Link>
          </>
        ) : (
          <h1 className="auth-name">Hello, Mohit</h1>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

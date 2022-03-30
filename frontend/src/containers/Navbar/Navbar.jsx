import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import './Navbar.css';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <AiFillHome color="#fff" className="home-icon" />
        </Link>
      </div>
      <div className="navbar__right">
        {' '}
        {!isAuthenticated ? (
          <>
            <Link className="auth-btn" to="/login">
              Login
            </Link>

            <Link className="auth-btn" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <h1 className="auth-name">Hello, Mohit</h1>
            {/* <Link className="auth-btn" to="/register">
              Logout
            </Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  const { isAuthenticated } = state.user;
  return { isAuthenticated };
};

export default connect(mapStateToProps)(Navbar);

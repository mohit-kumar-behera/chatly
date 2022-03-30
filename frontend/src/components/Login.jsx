import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { userLogin } from '../redux/User/action';
import { ENDPOINT_URL } from '../utils';

const Login = function ({ isAuthenticated, userLogin }) {
  const [loginToken, setLoginToken] = useState('');
  const socketRef = useRef();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT_URL);
    return () => socketRef.current.disconnect();
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (loginToken === '') return alert("Field can't be left empty");

    socketRef.current.emit('login', loginToken, ({ error, decode, token }) => {
      if (error) {
        alert(error.message);
      }

      // successfull login
      if (!decode.iat) {
        alert('Token is not Valid');
      }
      const { name, mobileNumber } = decode;
      const user = { name, mobileNumber };
      userLogin({ user, token });
    });
  };

  const renderOrRedirect = () => {
    if (isAuthenticated) return <Navigate to={from} replace={true} />;

    return (
      <div className="page-div">
        <h2 className="page-head">Enter Your Token</h2>
        <form
          method="post"
          className="auth-form login"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            name="login-token"
            value={loginToken}
            onChange={e => setLoginToken(e.target.value)}
            className="user-input"
            placeholder="Token"
          />
          <button className="form-btn">Login</button>
        </form>
      </div>
    );
  };

  return renderOrRedirect();
};

const mapStateToProps = state => {
  const { isAuthenticated } = state.user;
  return { isAuthenticated };
};

export default connect(mapStateToProps, { userLogin })(Login);

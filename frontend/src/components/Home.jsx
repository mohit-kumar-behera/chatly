import React from 'react';
import { Link } from 'react-router-dom';

const Home = function () {
  return (
    <div className="page-div">
      <h2 className="page-head">About Chatly</h2>
      <p className="page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Link to="chat" className="page-action-btn">
        Start Chatting
      </Link>
    </div>
  );
};

export default Home;

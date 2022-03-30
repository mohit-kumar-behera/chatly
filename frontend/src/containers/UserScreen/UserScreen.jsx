import React from 'react';
import { NavLink } from 'react-router-dom';

import UserCard from '../../components/UserCard/UserCard';
import './UserScreen.css';

const UserScreen = () => {
  return (
    <div className="user-screen-div">
      <h3 className="head">Active Users</h3>
      <NavLink
        to={`/chat/1234`}
        className={({ isActive }) =>
          isActive ? 'chat-user-navlink active' : 'chat-user-navlink'
        }
      >
        <UserCard id="1234" name="Mohit Kumar" number="9861013399" />
      </NavLink>
      <NavLink
        to={`/chat/5678`}
        className={({ isActive }) =>
          isActive ? 'chat-user-navlink active' : 'chat-user-navlink'
        }
      >
        <UserCard id="5678" name="Rahul Singh" number="9861013399" />
      </NavLink>
      <NavLink
        to={`/chat/8765`}
        className={({ isActive }) =>
          isActive ? 'chat-user-navlink active' : 'chat-user-navlink'
        }
      >
        <UserCard id="8765" name="Karan Vohra" number="9861013399" />
      </NavLink>
      <NavLink
        to={`/chat/4321`}
        className={({ isActive }) =>
          isActive ? 'chat-user-navlink active' : 'chat-user-navlink'
        }
      >
        <UserCard id="4321" name="Abdul Bari" number="9861013399" />
      </NavLink>
    </div>
  );
};

export default UserScreen;

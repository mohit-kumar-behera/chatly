import React from 'react';

import UserCard from '../UserCard/UserCard';
import './ChatScreenUser.css';

const ChatScreenUser = () => {
  return (
    <div className="chat-screen__user">
      <div>
        <UserCard id="1234" name="Mohit Kumar" number="9861013399" />
      </div>
    </div>
  );
};

export default ChatScreenUser;

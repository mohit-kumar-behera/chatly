import React from 'react';

import './ChatScreen.css';

import ChatScreenUser from '../../components/ChatScreenUser/ChatScreenUser';
import ChatScreenMessageDisplay from '../../components/ChatScreenMessageDisplay/ChatScreenMessageDisplay';
import ChatScreenMessageCreate from '../../components/ChatScreenMessaegCreate/ChatScreenMessageCreate';

const ChatScreen = () => {
  return (
    <div className="chat-screen-wrapper">
      <ChatScreenUser />
      <ChatScreenMessageDisplay />
      <ChatScreenMessageCreate />
    </div>
  );
};

export default ChatScreen;

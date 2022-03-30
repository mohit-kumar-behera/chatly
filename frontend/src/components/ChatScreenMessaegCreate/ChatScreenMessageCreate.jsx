import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import './ChatScreenMessageCreate.css';

const ChatScreenMessageCreate = () => {
  const [message, setMessage] = useState('');

  const sendMessageHandler = e => {
    e.preventDefault();

    if (message === '') return alert('Message Field is empty');

    // After successfully sending the message
    setMessage('');
  };

  return (
    <div className="chat-screen__message-create">
      <form
        className="message-form"
        method="post"
        onSubmit={sendMessageHandler}
      >
        <input
          type="text"
          name="message"
          className="input-message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Write your message"
          spellCheck="false"
        />
        <button className="message-send-btn">
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default ChatScreenMessageCreate;

import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import io from 'socket.io-client';

import './ChatScreenMessageCreate.css';
import { ENDPOINT_URL } from '../../utils';

const initialMessageObj = { name: '', message: '' };

const ChatScreenMessageCreate = () => {
  const [messageObj, setMessageObj] = useState(initialMessageObj);
  const [chats, setChats] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT_URL);
    socketRef.current.on('message', ({ name, message }) => {
      setChats([...chats, { name, message }]);
    });

    return () => socketRef.current.disconnect();
  }, [chats]);

  const sendMessageHandler = e => {
    e.preventDefault();

    if (messageObj.message === '') return alert('Message Field is empty');

    const { name, message } = messageObj;
    socketRef.current.emit('message', { name, message });

    // console.log(messageObj);

    // After successfully sending the message
    setMessageObj(initialMessageObj);
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
          value={messageObj.message}
          onChange={e =>
            setMessageObj({
              ...messageObj,
              message: e.target.value,
              name: 'Mohit',
            })
          }
          placeholder="Write your message"
          spellCheck="false"
        />
        <button className="message-send-btn">
          <AiOutlineSend />
        </button>
      </form>
      {chats
        ? chats.map((chat, idx) => (
            <div key={idx}>
              <h4>{chat.name}</h4>
              <h4>{chat.message}</h4>
            </div>
          ))
        : ''}
    </div>
  );
};

export default ChatScreenMessageCreate;

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import './ChatScreen.css';

import ChatScreenUser from '../../components/ChatScreenUser/ChatScreenUser';
import ChatScreenMessageDisplay from '../../components/ChatScreenMessageDisplay/ChatScreenMessageDisplay';
import ChatScreenMessageCreate from '../../components/ChatScreenMessaegCreate/ChatScreenMessageCreate';

const ENDPOINT_URL = 'http://localhost:8000';

const ChatScreen = ({ loggedInUser }) => {
  const { id } = useParams();
  const [chatWithUser, setChatWithUser] = useState('');
  const [room, setRoom] = useState('');

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT_URL);
    return () => socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    socketRef.current.emit('getOpponentUser', id, opponentUser => {
      if (!opponentUser) return alert('Something went wrong');

      setChatWithUser(opponentUser);

      if (loggedInUser) {
        let roomStr =
          loggedInUser.mobileNumber +
          opponentUser.mobileNumber +
          loggedInUser.name +
          opponentUser.name;
        roomStr = roomStr.split('').sort().join('');

        setRoom(roomStr);
      }
    });
    return () => socketRef.current.disconnect();
  }, [id, loggedInUser]);

  return (
    <div className="chat-screen-wrapper">
      {/* <p>{room}</p> */}
      <ChatScreenUser chatWithUser={chatWithUser} />
      <ChatScreenMessageDisplay />
      <ChatScreenMessageCreate />
    </div>
  );
};

const mapStateToProps = state => {
  const loggedInUser = state.user.user;
  return { loggedInUser };
};

export default connect(mapStateToProps)(ChatScreen);

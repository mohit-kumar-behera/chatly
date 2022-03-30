import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './ChatScreenMessageDisplay.css';

const ChatScreenMessageDisplay = () => {
  return (
    <ScrollToBottom className="chat-screen__message-display__wrapper">
      <div className="chat-screen__message-display">
        <div className="message-div">
          <p>Hello</p>
        </div>
        <div className="message-div myself">
          <p>
            How are you?sdugudsy fudsygfdsuygf sdgfo udgfoua dgouags
            doifugdsoiufg dsiougf iosdug foiuadsg foiudsag foiusdh fiudsh ioug
          </p>
        </div>
        <div className="message-div">
          <p>I am good and what about you?</p>
        </div>
        <div className="message-div">
          <p>Hii</p>
        </div>
        <div className="message-div myself">
          <p>Hello</p>
        </div>
        <div className="message-div myself">
          <p>
            How are you?sdugudsy fudsygfdsuygf sdgfo udgfoua dgouags
            doifugdsoiufg dsiougf iosdug foiuadsg foiudsag foiusdh fiudsh ioug
          </p>
        </div>
        <div className="message-div">
          <p>I am good and what about you?</p>
        </div>
      </div>
    </ScrollToBottom>
  );
};

export default ChatScreenMessageDisplay;

import React from 'react';

import ChatWindow from './ChatWindow';
import ChatBox from './ChatBox';

class Chat extends React.Component {
  render() {
    const testMessages = [
      { message: 'Heya!' },
      { message: 'Whaddup?' },
      { message: "Not much, how 'bout you?" },
      { message: 'Whatever, MARA' },
      { message: 'lorem ipsum' },
      { message: 'test this' },
      { message: 'test that' },
    ];
    return (
      <div className="chat-wrapper">
        <ChatWindow title="Test Chat" messages={testMessages} />
        <ChatBox />
      </div>
    );
  }
}

export default Chat;

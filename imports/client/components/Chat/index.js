import React from 'react';

import ChatWindow from './ChatWindow';

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
      <ChatWindow title="Test Chat" messages={testMessages} />
    );
  }
}

export default Chat;

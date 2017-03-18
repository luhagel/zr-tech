import React from 'react';

import ChatWindow from './ChatWindow';
import ChatBox from './ChatBox';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testMessages: [
        { message: 'Heya!' },
        { message: 'Whaddup?' },
        { message: "Not much, how 'bout you?" },
        { message: 'Whatever, MARA' },
        { message: 'lorem ipsum' },
        { message: 'test this' },
        { message: 'test that' },
      ],
    };
  }

  onSubmit = () => {
    const fullHistory = this.state.testMessages.push({ message: 'Heya it works' });
    this.setState({
      messages: fullHistory,
    });
  }
  render() {
    return (
      <div className="chat-wrapper">
        <ChatWindow title="Test Chat" messages={this.state.testMessages} />
        <ChatBox onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Chat;

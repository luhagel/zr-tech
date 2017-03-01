import React, { PropTypes } from 'react';

class ChatWindow extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return (
      <div>
        { this.props.messages.map(m => (<p>{m.message}</p>)) }
      </div>
    );
  }
}

export default ChatWindow;

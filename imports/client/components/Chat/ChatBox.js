import React, { PropTypes } from 'react';

const ChatWindow = props => (
  <div>
    <input type="text" placeholder="Type your message..." />
    <button type="submit" onClick={props.onSubmit}>Send</button>
  </div>
);

ChatWindow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChatWindow;

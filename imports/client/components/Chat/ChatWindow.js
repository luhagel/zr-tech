import React, { PropTypes } from 'react';

const ChatWindow = props => (
  <div>
    <h1>{props.title}</h1>
    { props.messages.map((m, i) => {
      const key = `chatmsg_${i}`;
      return (<p key={key}>{m.message}</p>);
    })}
  </div>
);

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default ChatWindow;

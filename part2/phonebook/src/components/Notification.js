import React from "react";

const Notification = ({ message }) => {
  const notificationStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: 22,
    border: "3px solid green",
    padding: "2px",
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={notificationStyle}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

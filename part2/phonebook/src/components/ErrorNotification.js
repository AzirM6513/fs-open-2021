import React from "react";

const ErrorNotification = ({ message }) => {
  const notificationStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: 22,
    border: "3px solid red",
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

export default ErrorNotification;

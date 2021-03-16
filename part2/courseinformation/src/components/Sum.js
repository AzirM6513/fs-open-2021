import React from "react";

const Sum = ({ parts }) => {
  const sum = parts
    .map((part) => part.exercises)
    .reduce((sum, exercise) => sum + exercise, 0);

  return (
    <footer>
      <p>
        <strong>total of {sum} exercises</strong>
      </p>
    </footer>
  );
};

export default Sum;

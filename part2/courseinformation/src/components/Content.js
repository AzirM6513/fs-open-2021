import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <main>
      {props.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </main>
  );
};

export default Content;

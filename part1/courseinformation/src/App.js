import React from "react";

const Header = (props) => (
  <header>
    <h1>{props.course.name}</h1>
  </header>
);

const Content = (props) => {
  return (
    <main>
      {props.course.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.name} />
      ))}
    </main>
  );
};

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Total = (props) => {
  console.log(props);
  const sum = props.course.parts
    .map((part) => part.exercises)
    .reduce((sum, exercise) => sum + exercise, 0);

  return (
    <footer>
      <p>Number of exercises {sum}</p>
    </footer>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;

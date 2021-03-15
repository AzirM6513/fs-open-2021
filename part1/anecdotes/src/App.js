import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const updateVotes = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };
  const findLargestVote = () => votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdotes={anecdotes} value={selected} />
      <Statistics votes={votes} value={selected} />
      <Button handleClick={() => updateVotes()} text="vote" />
      <Button
        handleClick={() => setSelected(getRandomInt(anecdotes.length - 1) + 1)}
        text="next anecdote"
      />

      <Header text="Anecdote with most votes" />
      <Anecdote anecdotes={anecdotes} value={findLargestVote()} />
      <Statistics votes={votes} value={findLargestVote()} />
    </div>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ anecdotes, value }) => <p>{anecdotes[value]}</p>;

const Statistics = ({ votes, value }) => <p>has {votes[value]} votes</p>;

export default App;

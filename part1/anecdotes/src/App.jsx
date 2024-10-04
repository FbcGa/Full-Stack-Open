import "./App.css";
import { useState } from "react";

const App = () => {
  const [voted, setVoted] = useState(0)
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length - 1));
    setSelected(randomNumber);
  };

  const getMostVoted = (points) => {
    return Object.keys(points).reduce((maxIndex, key) => {
      return points[key] > points[maxIndex] ? key : maxIndex;
    }, 0);
  };

  const handleVote = () => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints(newPoints);
    const mostVoted = getMostVoted(newPoints);
    setVoted(mostVoted);
  };

  return (
    <div>
      <section className="anecdote">
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <span>has {points[selected]} </span>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleAnecdote} type="button">
          Next Anecdote
        </button>
      </section>
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[voted]}</p>
      </section>
    </div>
  );
};

export default App;
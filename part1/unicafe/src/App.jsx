import "./App.css";
import { useState } from "react";

function Buttons({ handleButton, text }) {
  return (
    <button onClick={handleButton} type="button">
      {text}
    </button>
  );
}

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} </td>
    </tr>
  );
}

function Statistics({ good, neutral, bad, total, avg, positive }) {
  return (
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={total} />
        <StatisticsLine text={"average"} value={avg} />
        <StatisticsLine text={"positive"} value={positive} />
      </tbody>
    </table>
  );
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const avg = (good - bad) / (good + neutral + bad);
  const positive = (good * 100) / (good + neutral + bad);

  const handleButtonGood = () => {
    setGood(good + 1);
  };
  const handleButtonNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleButtonBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <section>
        <h2> Give feedback</h2>
        <Buttons handleButton={handleButtonGood} text={"good"} />
        <Buttons handleButton={handleButtonNeutral} text={"neutral"} />
        <Buttons handleButton={handleButtonBad} text={"bad"} />
      </section>
      <h2>Stadistics</h2>
      {total === 0 ? (
        <span>No feedback given</span>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
          avg={avg}
        />
      )}
    </div>
  );
};

export default App;

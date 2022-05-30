import React, { useState } from 'react'

const Btn = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

// a proper place to define a component
const Statistics = ({ good, bad, neutral }) => {
  if ((good + bad + neutral) > 0) {
    return (
      <>
        <h2>statistic</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + bad + neutral} />
        <StatisticLine text="average" value={(good + bad + neutral) / 3} />
        <StatisticLine text="positive" value={good + neutral} />
      </>
    )
  }
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Btn handleClick={() => setGood(good + 1)} text={"good"}></Btn>
      <Btn handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Btn>
      <Btn handleClick={() => setBad(bad + 1)} text={"bad"}></Btn>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>

  )
}

export default App
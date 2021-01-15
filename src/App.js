import React, { useState } from "react"
import styled from "styled-components"

const App = () => {
  const [joke, setJoke] = useState("")

  const fetchJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((err) => console.log(err))
  }

  const Button = styled.button`
    cursor: pointer;
    border: 3px solid #454362;
    padding: 12px 32px;
    font-size: clamp(1.2em, -1em + 3.2vw, 1.8em);
    font-family: "Inter", sans-serif;
    background-color: #454362;
    color: #f1f1f1;
    border-radius: 12px;
    transition: 0.3s ease;

    &:hover {
      color: #454362;
      background-color: #f1f1f1;
    }

    &:focus {
      outline: 0;
    }
  `

  return (
    <div className='container'>
      <h1>
        JOKE
        <br />
        <span>Just a random 💩 joke:</span>
      </h1>
      <div className='box'>
        <p>
          {joke === "" ? (
            <p>
              Click <b>button</b> below to load a joke!
            </p>
          ) : (
            <p>{joke}</p>
          )}
        </p>
        <Button onClick={fetchJoke}>Joke Me!</Button>
      </div>
    </div>
  )
}

export default App

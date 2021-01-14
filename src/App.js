import React, { useState } from "react"

const App = () => {
  const [joke, setJoke] = useState("")

  const fetchJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((err) => console.log(err))
  }

  return (
    <div className='container'>
      <h1>JOKE</h1>
      <div className='box' onClick={fetchJoke}>
        <p>{joke === "" ? "Click to load a joke!" : joke}</p>
      </div>
    </div>
  )
}

export default App

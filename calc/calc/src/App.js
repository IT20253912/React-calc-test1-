import React from 'react'
import { useState } from 'react';

const App = () => {

  const [noOne, setnoOne] = useState(0)
  const [noTwo, setnoTwo] = useState(0)
  const [answer, setanswer] = useState(0)

  const calc = () => {
    console.log('This is calculator')
    const res = Number(noOne) + Number(noTwo)
    setanswer(res)
  }

  return (

    <div>
      <h4>calculator</h4>
      <input type='text'
      placeholder='Number 1' 
      value={noOne}
      onChange = {(e) => setnoOne(e.target.value)}


      />

      <span> + </span>

      <input type='text'
      placeholder='Number 2'
      value={noTwo}
      onChange = {(e) => setnoTwo(e.target.value)}
       /> 

      <span> = </span>

      <input type='text' 
      placeholder='answer' 
      value={answer}
      />

      <span> </span>
      

      <button
      onClick={calc}
      >Answer
      </button>


      
    </div>
  )
}

export default App
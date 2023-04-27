import React, { useEffect, useState } from 'react'
import './App.css';

export default function Setcounter() {
  let [count, setCount]=useState(0)

  useEffect(()=>{
    document.title=`count ${count}`
  })

  const increaseCount=()=>{
    setCount(count+1)
  }

  const decreaseCount=()=>{
    setCount(count-1)
    if(count===0){
        alert("Limit Reached")
        setCount(0)
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <div className='btn'>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
      </div>
    </>
  )
}

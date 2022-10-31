import React, { useReducer, useState } from 'react'

function AppRed() {

    const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer({count:0})

    function increment(){
        setCount(prev => prev + 1)
    }

    function decrement(){
        setCount(prev => prev - 1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default AppRed

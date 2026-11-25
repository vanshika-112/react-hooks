import { useState } from "react"

const App = () => {
  const [counter, setcounter] = useState(0)

  function increase(){
    setcounter(counter+1)
  }
  function decrease(){
    setcounter(counter-1)
  }

  return (
    <>
      <div id="title"><h2>COUNTER</h2></div>
      <div id="content">
        <div id="counter">
          <h1>{counter}</h1>
        </div>
        <div id="change">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
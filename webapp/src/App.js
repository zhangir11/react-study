import './App.css'
import React, { useState } from 'react';

function App() {
  // console.log(likes)
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  let [likes, updatelike] = useState(5)
  let [valInput, updateInp] = useState("")
  return (
    <div>
      <p>
        {likes}
      </p>
      <input type="text" value={valInput}
        onChange={
          event => updateInp(event.target.value)
        } />
      <button onClick={() => updatelike(likes + 1)}>
        Increment
      </button>
      <button onClick={() => updatelike(likes - 1)}>
        Decrement
      </button>
    </div>
  )

}

export default App;

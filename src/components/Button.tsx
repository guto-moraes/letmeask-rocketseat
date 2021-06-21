import { useState } from 'react';

export function Button() {

  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return <button onClick={incrementCounter}>{counter}</button>;
}
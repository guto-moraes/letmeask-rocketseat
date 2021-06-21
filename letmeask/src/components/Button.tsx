import { useState } from 'react';

// type ButtonsProps = {
//   num?: number;
// }
// props: ButtonsProps

export function Button(){

  const [counter, setCounter] = useState(0)
  function increment(){
    setCounter(counter + 1)
  }
  return(
    <button onClick={increment}>{counter}</button>
  )
}

// export function Button( props: ButtonsProps ){
//   return(
//     <button>{props.children}</button>
//   )
// }
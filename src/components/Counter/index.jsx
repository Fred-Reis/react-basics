import { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>Increment + 1</button>
    </div>
  );
}

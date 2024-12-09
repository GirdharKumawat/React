import { useState } from "react"

function App() {
 
  let [count,setCount] = useState(0);

  const add = ()=>{
    if(count==20)return;
    setCount(count+1)
  }
  const sab = ()=>{
    if(count==0)return;
    setCount(count-1)
  }
  
  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count {count}</h2>
      <button onClick={add}>
       +1
      </button>
      <button onClick={sab}>-1</button>
    </div>
  )
}

export default App

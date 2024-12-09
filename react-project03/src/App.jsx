import { useState } from 'react'
 

function App() {
  const [color,setColor] = useState('olive')

   return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"red"}}
       onClick={()=>setColor("Red")}>
        Red</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"aqua"}} onClick={()=>setColor("aqua")}>Aqua</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>olive</button>
       <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
       style={{backgroundColor:"black"}}onClick={()=>setColor("black")}>Black</button>

     
     </div>
      </div>
    </div>
   )
}

export default App

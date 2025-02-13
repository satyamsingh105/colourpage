import React, { useState } from "react";


function App() {
  const[color, setColor ] = useState("olive")
  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
         <button onClick={()=>setColor("red")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"red"}}>RED</button>
       <button onClick={()=>setColor("green")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"green"}}>GREED</button>
       <button onClick={()=>setColor("blue")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"blue"}}>BLUE</button>
        <button onClick={()=>setColor("olive")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"olive"}}>OLIVE</button>
        <button onClick={()=>setColor("yellow")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"yellow"}}>YELLOW</button>
        <button onClick={()=>setColor("brown")} className="outline-non px-4 py-1 rounded-full
      text-white shadow-lg " style={{backgroundColor:"brown"}}>BROWN</button>
     

</div>
      </div>
     
    </div>
  )
}
export default App
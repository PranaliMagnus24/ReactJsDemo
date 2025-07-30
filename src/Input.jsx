import { useState } from "react"

function Input(){
    const [val,valSet]=useState("Dummy")
    return(
        <div>
            <h2>Input field demo</h2>
            <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="Enter your name" />
             <input type="text" value={val} onChange={(event)=>valSet(event.target.value)} placeholder="Enter your name" />
            <h2>{val}</h2>
            <button onClick={()=>valSet("")}>Clear</button>

        </div>
    )
}
export default Input
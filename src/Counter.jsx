import { useState } from "react"
import User,{Multiple, Props} from "./User"
const Counter=()=>{
    const [count, setCount] = useState(0)
    const [rcount, rCount] = useState(10)
    const [display, setDisplay] = useState(true)

    return(
        <div>
            <h1>Increment {count}</h1>
            <button onClick={()=>setCount((count) => count + 1)}>Increment</button>
            <h1>Decrement {rcount}</h1>
            <button onClick={()=>rCount((rcount)=>rcount - 1)}>Decrement</button>
            <button onClick={()=>setDisplay((!display))}>Display</button>
           

            {/* {
                display? <h1>ReactJs</h1>:null
            } */}
            {
                display? <User/>:null
            }
             <Multiple/>
           

        </div>
    )
}

export default Counter
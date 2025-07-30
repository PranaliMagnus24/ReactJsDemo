import { useEffect, useState } from "react"

function Clock(){
    const [time,setTime] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[] )
    const [color, setColor] = useState("yellow")

    return(
        <div>
            
            <h3 style={{color: "red"}}>Clock with color change</h3>
            <h3>Select Color</h3>
            <select name="" value={color} onChange={(event)=>setColor(event.target.value)} id="">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
            </select>
            <h3>Timer</h3>
            <h3 style={{color: color, backgroundColor: "#000", width: "120px", padding: "10px", borderRadius: "5px"}}>{time}</h3>

        </div>
    )
}
export default Clock
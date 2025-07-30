import { useEffect, useState } from "react";

function Hooks()
{
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);
    function callonce(){
        console.log("Call one function")
    }
    function dummy(){
        console.log("Agjgjsdf")
    }
    useEffect(()=>{
        callonce();
    },[])
    useEffect(()=>{
        dummy();
    }, [data])

    const cssStyle={
        border: "1px",
        borderRadius: "5px, solid, #000",
        backgroundColor: "#000",
        color: "#fff",
        width: "100px",
        padding: "10px",
        margin: "10px",

    }
    
    return(
        <div>
            <h3 style={{color: "red"}}>useEffect Hooks</h3>
            <button onClick={()=>setCounter(counter+1)} style={cssStyle}>Counter {counter}</button>
            <button onClick={()=>setData(data+1)} style={cssStyle}>Data {data}</button>
        </div>
    )
}
export default Hooks
import { useRef } from "react"
function UseRef()
{
    const inputRef=useRef(null);
    const inputHandler=()=>{
        inputRef.current.focus();
        inputRef.current.style.color="red"
    }

    return(
        <div>
            <h3 style={{color: "red"}}>Use of useRef</h3>
            <input ref={inputRef} type="text" placeholder="Enter your name" />
            <button onClick={inputHandler}>Focus on input field</button>
        </div>
    )
}
export default UseRef
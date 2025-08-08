import useToggle from "./useToggle";
function CustomeHook(){
    const [value, toggleValue] = useToggle(true);
    return(
        <>
        <h3 style={{color:"red"}}>Use of Custome Hook</h3>
        <button onClick={toggleValue}>Toggle Heading</button>
        <button onClick={()=>toggleValue(false)}>Hide Heading</button>
        <button onClick={()=>toggleValue(true)}>Show Heading</button>
        {
            value ? <h3 style={{color:"blue"}}>This is Heading</h3> : <h3 style={{color:"red"}}>This is Hidden Heading</h3>
        }

        </>
    )
}
export default CustomeHook
import { useId } from "react"

function UseIdHook(){
    const data=useId();
    return(
        <>
        <h3 style={{color: "red"}}>Use of useId Hook</h3>
        <form action="">
            <label htmlFor={data}>For Data</label>
            <input type="text" id={data} placeholder="for unique id" />
        </form>
        <Uid/>

        </>
    )
}
function Uid(){
     const data=useId();
    return(
        <>
        <h3 style={{color: "red"}}>Use of useId Hook</h3>
        <form action="">
            <label htmlFor={data}>For Data</label>
            <input type="text" id={data} placeholder="for unique id" />
        </form>

        </>
    )
}
export default UseIdHook
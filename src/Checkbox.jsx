import { useState } from "react"

function Checkbox()
{
    const [checkbox, setCheckbox] = useState([]);
    const handleCheckbox=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setCheckbox([...checkbox, event.target.value])
        }else{
            setCheckbox([...checkbox.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3>Select your skills</h3>
            <input onChange={handleCheckbox} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <input onChange={handleCheckbox} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br />
            <input onChange={handleCheckbox} type="checkbox" id="python" value="python" />
            <label htmlFor="python">Python</label>
            <br />
            <input onChange={handleCheckbox} type="checkbox" id="html" value="html" />
            <label htmlFor="html">HTML</label>

            <h1>{checkbox.toString()}</h1>

        </div>
    )
}
export default Checkbox
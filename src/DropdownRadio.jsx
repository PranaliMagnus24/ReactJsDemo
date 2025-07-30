import { useState } from "react"

function DropdownRadio()
{
    const [gender,setGender]=useState('female');
    const [city,setCity]=useState('palghar')
    return(
        <div>
            <h2>Dropdown and radio button logic</h2>
            <h3 style={{color:"red"}}>Select gender</h3>
            <input type="radio" value={"male"} checked={gender=='male'} onChange={(event)=>setGender(event.target.value)} name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" value={"female"} checked={gender=='female'} onChange={(event)=>setGender(event.target.value)} name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <h3>Selected gender:- {gender}</h3>
            <h3 style={{color: "red"}}>Select City</h3>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"palghar"}>
                <option value="thane">Thane</option>
                <option value="mumbai">Mumbai</option>
                <option value="palghar">Palghar</option>
            </select>
            <h3>Selected City:- {city}</h3>

        </div>
    )
}
export default DropdownRadio
import { useState } from "react"

function UpdateArray(){
    const [data,setData]=useState([
        'pranali','karuna','aruna'
    ])
    const handleUser=(name)=>{
        const newData = [...data];
        newData[newData.length - 1] = name;
        setData(newData);
    }
    const [details, setDetails]=useState([
        {name: "abc", age: "20"},
        {name: "bcd", age: "30"},
        {name: "ajk", age: "26"},
    ])
const handleAge = (age) => {
    const newDetails = [...details];
    newDetails[newDetails.length - 1] = {
        ...newDetails[newDetails.length - 1],
        age: age,
    };
    setDetails(newDetails);
};

    return(
        <>
        <h3 style={{color: "red"}}>Updating Array in State</h3>
        <input type="text" placeholder="enter last user name" onChange={(e)=>handleUser(e.target.value)} />
        {
            data.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))
        }
         <hr />

         <input type="text" placeholder="enter last user age" onChange={(e)=>handleAge(e.target.value)} />
         
         {
            details.map((item, index) => (
                <h3 key={index}>{item.name}, {item.age}</h3>

            ))
         }
        </>
       

    )
}
export default UpdateArray
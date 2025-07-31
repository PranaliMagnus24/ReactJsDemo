import { useState } from "react"

function DriveState(){
    const [users, setUsers]=useState([]);
    const [user, setUser]=useState('');
    const handleAddUsers=()=>{
        setUsers([...users,user])
    }

    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length
    return(
        <>
        <h3 style={{color: "red"}}>Drive State Example</h3>
        <h3>Total Users: {total}</h3>
        <h3>Last User: {last}</h3>
        <h3>Unique User: {unique}</h3>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add user" />
        <button onClick={handleAddUsers}>Add User</button>
        {
            users.map((item, index) => (
                <h4 key={index}>{item}</h4>
            ))
        }
        </>
    )
}
export default DriveState
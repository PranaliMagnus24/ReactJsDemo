import { useState } from "react"

function Controller(){
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    return(
        <div>
            <h2>Controller Component</h2>
            <form action="">
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter name" />
                <br />
                <input type="text" value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder="Enter phone" />
                <br />
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
                <br />
                <button>Submit</button>
                <button onClick={()=>{setName('');setPhone('');setEmail('');}}>Clear</button>
                <h3>{name}</h3>
    
                <h3>{phone}</h3>
                
                <h3>{email}</h3>
            </form>

        </div>
    )
}
export default Controller
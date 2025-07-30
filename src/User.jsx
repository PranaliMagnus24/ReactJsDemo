import { useState } from "react"

function User(){
    return(
    <div>
        <h1>ReactJs</h1>
    </div>
    )
}
export function Multiple(){
    const [count1,setCount]=useState(0);
    return(
        <div>
            <h1>{count1}</h1>
            <button onClick={()=>setCount(count1+1)}>Counter</button>
            {
                count1==0?<h1>Condition 0</h1>
                :count1==1?<h1>Condition 1</h1>
                :count1==2?<h1>Condition 2</h1>
                :count1==3?<h1>Condition 3</h1>
                :count1==4?<h1>Condition 4</h1>
                :count1==5?<h1>Condition 5</h1>
                :<h1>Null</h1>
            }
        </div>
    )
}

export function Props({user}){
    console.log(user)
    return(
        <div>
            <h5>Name {user.name}</h5>
            <h5>Name {user.email}</h5>
            <h5>Name {user.age}</h5>
        </div>
    )
}
export function Abc({data}){
    return(
        <div>
            <h1>Fruits Name {data}</h1>
        </div>
    )
}
export default User
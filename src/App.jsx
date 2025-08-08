import { useState } from "react"
import Header,{Setting} from "./Header"
import Counter from "./Counter"
import { Props, Abc } from "./User"
import Wrapper from "./Wrapper"
import Input from "./Input"
import Controller from "./Controller"
import Checkbox from "./Checkbox"
import DropdownRadio from "./DropdownRadio"
import Loop from "./Loop"
import Clock from "./Clock"
import Nestedloop from "./NestedLoop"
import Hooks from "./Hooks"
import CssModule from "./CssModule"
import StyleComponent from "./StyleComponent"
import Bootstrap from "./Bootstrap"
import UseRef from "./UseRef"
import Uncontroller from "./UncontrollerComponent"
import ForwardRef from "./ForwardRef"
import UseFormStatus from "./UseFormStatus"
import UseTransition from "./UseTransition"
import DriveState from "./DriveState"
import LiftingState from "./LiftingState"
import UpdateArray from "./UpdateArray"
import UseActionState from "./UseActionState"
import UseIdHook from "./UseIdHook"
import CustomeHook from "./CustomeHook"
import { BrowserRouter, Routes, Route, Link } from "react-router"
import NavbarDemo from "./Navbar"
import ProfileDemo from "./Profile"
import AboutDemo from "./AboutDemo"
import Home from "./Home"
import PageNotFound from "./PageNotFound"
import DynamicRoute from "./DynamicRoute"
import DynamicRouteDetail from "./DynamicRouteDetail"



function App(){
  ///For Counter
  const [count, setCount] = useState(0)

  ///Change value when click on button
  const [fruit1, setFruit]=useState("Pinapple")
  const handleFruit=()=>{
    setFruit("Blueberry")
  }
  ////Display User Name
  const userName="Dog";
  ///Calculate
  let x=30;
  let y=20;
  //Display Img
  let path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw";

  /////Display perticular object
  const userObj={
    name:"Dog",
    email:"abc@gmail.com",
    age:"27",
  }
   const userObj2={
    name:"Dog1",
    email:"abc@gmail.com",
    age:"27",
  }


  ////Display array value
  const userArray=["abc","bcd","efg","hijk"]
  return(
    
    
    <div>
      <Header/>
      <Setting/>
      <h1>Dummy Text {sum()}, {sub()}</h1>
      <h5>Testing purpose</h5>
       <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h3>{userName?userName:"User not found"}</h3>
        <h3>{x*y}</h3>
        <h4>{20+30-20}</h4>
        <h1>{operation(10,5,"/")}</h1>
        <h1>{userObj.email}</h1>
        <h1>{userObj.age}</h1>
        <h1>{userArray["0"]}</h1>
        <h2>{userArray["1"]}</h2>
        <input type="text" value={userName} id={userName} />
        <br />
        <img src={path} />
        <br />
        <button onClick={callFun}>Click here</button>
        <button onClick={fruit}>For Fruit</button>
        <button onClick={()=>fruits('apple')}>Apple</button>
        <button onClick={()=>fruits('banana')}>Banana</button>
        <h1>{fruit1}</h1>
        <button onClick={handleFruit}>Click Change</button>
        <Counter/>
        <Props user={userObj}/>
        <hr />
        <Props user={userObj2}/>
        { fruit1 && <Abc data={fruit1}/> }
        <button onClick={()=>setFruit("Orange")}>Click here</button>
        {/* Wrapper */}
        <Wrapper color="blue">
          <h4>Hii</h4>
          <h4>MagnusIdeas</h4>
        </Wrapper>
        <Wrapper color="orange">
          <h4>Hello</h4>
          <h4>MagnusIdeas</h4>
        </Wrapper>
         <Wrapper>
          <h4>Hello</h4>
          <h4 style={{color:"green"}}>MagnusIdeas</h4>
        </Wrapper>
        {/* Input name with value */}
        <Input/>

        {/* controller component using form */}
        <Controller/>

        {/* Checkbox */}
        <Checkbox/>

        {/* Drodown & Radio button logic */}
        <DropdownRadio/>

        {/* Loop with map function */}
        <Loop/>
        {/* Clock with change color */}
        <Clock/>
        {/* Nested loop */}
        <Nestedloop/>

        {/* Different types of hooks */}
        <Hooks/>
        {/* Css modules */}
        <CssModule/>
        {/* style component */}
       <StyleComponent/>
       {/* react bootstrap npm install react-bootstrap bootstrap */}
       <Bootstrap/>
       {/* use of userRef */}
       <UseRef/>
       {/* use of uncontroller component in form */}
       <Uncontroller/>
       {/* use for forward ref */}
       <ForwardRef/>
       {/* use of useFormStatus */}
       <UseFormStatus/>
       {/* Use Transition example using loader */}
       <UseTransition/>
       {/* use of drive state */}
       <DriveState/>
       {/* lifiting state example share data between component */}
       <LiftingState/>
       <UpdateArray/>
       <UseActionState/>
       <UseIdHook/>
       <CustomeHook/>


        <BrowserRouter>
        <NavbarDemo/>
        {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}

        {/* <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/about" element={<StyleComponent/>}></Route>
          <Route path="/contact" element={<h1>Contact Page</h1>}></Route>
          <Route path="/" element={<NavbarDemo/>}></Route>
        </Routes> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutDemo />} />
        <Route path="/profile" element={<ProfileDemo />} />
        <Route path="/users/list?" element={<DynamicRoute />} />
        <Route path="/users/details/:id/:name?" element={<DynamicRouteDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

        </BrowserRouter> 



       
        
        

    </div>
  )
  
}
///Display function without write export
export function Profile(){
  return (
    <div>
      <h1>User Profile</h1>
    </div>
  )
}
/////Calculation based on operator
function operation(a,b, op){
  if(op=="+"){
    return a+b;
  }else if(op=="-"){
    return a-b;
  }else if(op=="*"){
    return a*b;
  }else if(op=="/"){
    return a/b;
  }
}
////Addition
function sum(){
  return 10+10
}
///Sub
function sub(){
  return 10-10
}
////Alert message click on button
function callFun(){
  alert("Your function is ready")
}

const fruit=()=>{
  alert("apple")
}
const fruits=(name)=>{
  alert(name)

}

  export function Looping ({data}){
    return (
      <div style={{
        border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}>
      <h5>Name: {data.name}</h5>
       <h5>Age: {data.age}</h5>
      </div>
      
    )
  }


export default App
function Wrapper({children,color="red"}){
    return(
        <div style={{color:color, border:"5px red solid",}}>
            {children}
        </div>
    )
}
export default Wrapper
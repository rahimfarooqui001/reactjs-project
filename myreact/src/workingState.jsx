import  { useState } from "react";


const Working=()=>{
   const [state,setState]=useState(false);
    const [Color,setColor]=useState(false)
   
    return(
        <>
        {
         state?  (<h1 className={Color && "text-danger "}>My Address is Nanded</h1>)
            : ( <h1 className={Color && 'text-success'}>My name is rahim</h1>)
        }
       
        

        {/* <h1>This is Reactjs</h1> */}
        {/* {state && <h1>This is JavaScript</h1>} */}
        
        {/* <button className="btn btn-danger" onClick={()=>{
          
            setState(!state)
           }
          
          
        }
           
            >change title</button> */}

            <button className="btn btn-primary" onClick={()=>setState(!state)}>{
                state? 'Name': 'Address'
            }</button>


            <button className="btn btn-success"onClick={()=>setColor(!Color)}>Text Color Change</button>



        </>
    )
}



export default Working;
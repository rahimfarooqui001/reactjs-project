import { useState } from "react"


const Working=()=>{
    const data= ['car','bike','truck','plane','cycle']
    const [state,setState]=useState(data);
//    const  data2=['ab','bc']
    // setState(...state,'react')
    console.log(state);
    const  addData=()=>{
        const randitem=Math.random();
        setState([...state,randitem])
    }


   const removeItem=(index)=>{
    console.log(index);
    const newData=[...state]
    newData.splice(index,1)

    console.log(newData);
    setState(newData)
   }
   

    data.push('auto')
    return(
        <>
        <button className="btn btn-primary" onClick={addData}>Add New Element</button>
        <ul>
        {
            state.map((item,index)=>{
                console.log(item)
                console.log(index)

                return(
                    <div >
                    <li key={index}>{item}</li>
                    <button className="btn" onClick={()=>removeItem(index)}>Remove</button>
                    </div>
                )
            })
        }
    
</ul>


        
        
        </>
    )
}

export default Working;
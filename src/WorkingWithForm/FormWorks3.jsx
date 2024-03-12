

import React, { useState } from 'react'

export const FormWorks3 = () => {

    const [textArea,setTextArea]=useState("")
    const [selectCountry,setSelectCountry]=useState("USA")


    const handleSubmit=(event)=>{
        event.preventDefault()

        


        console.log(textArea);
        console.log(selectCountry);
    }

  return (

    <div>
        <form action="" onSubmit={handleSubmit}>

        <textarea name="" id="" cols="30" rows="10" className='form-control mb-4 ' onChange={(e)=>setTextArea(e.target.value)} required></textarea>
        

        <select className="form-select mb-4"  value={selectCountry} onChange={(e)=>setSelectCountry(e.target.value)} >
  <option >Select Your Country</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
  <option value="Saudi Arabia">Saudi Arabia</option>
</select>
        <button type='submit' className='btn btn-info' >Submit</button>

        </form>
        
        
         </div>
  )
}

export default FormWorks3

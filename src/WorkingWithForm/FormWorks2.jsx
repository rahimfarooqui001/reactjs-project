

import React, { useState } from 'react'

 const FormWorks2 = () => {

    const [userDetails,setUserDetails]=useState({
        userName:"",
        userEmail:"",
        mobileNumber:"",

    })

    const handleChange=(event)=>{
        const {name,value} =event.target
        setUserDetails({...userDetails, [name]:value})
        // console.log(userDetails);

    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        // {userDetails.userName && userDetails.userEmail && userDetails.mobileNumber ? alert("Data Submitted Sucessfully!" ,userDetails):alert("Plz fill all data") }
        
        if(userDetails.userName && userDetails.userEmail && userDetails.mobileNumber){
            alert("Data Submitted Sucessfully!" ,userDetails)
            console.log(userDetails);
        }else{
            alert("Plz fill all data")
        }

        



    }

    

  return (
    <div> 
       <form action="" onSubmit={handleSubmit}>
        <input type="text" className='form-control mb-4'  placeholder='Enter Full Name' value={userDetails.userName} name="userName" onChange={handleChange}    />
        <input type="email" className='form-control mb-4'  placeholder='Enter Email' value={userDetails.userEmail} name="userEmail" onChange={handleChange}  />
        <input type="number" className='form-control mb-4'  placeholder='Enter Mobile Number' value={userDetails.mobileNumber} name="mobileNumber" onChange={handleChange}  />
       
        <div className='text-end'>
        <button className='btn btn-danger' type='submit'>Submit</button>
        </div>

        <hr />
        <h1>Name: {userDetails.userName}</h1>
        <h1>Email: {userDetails.userEmail}</h1>
        <h1>Mobile Number: {userDetails.mobileNumber}</h1>


        
        
        
        </form>

    </div>
  )
}

export default FormWorks2

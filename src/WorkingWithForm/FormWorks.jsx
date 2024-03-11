

import React, { useState } from 'react'

export const FormWorks = () => {
    
    const [user,setUser]= useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let userName="Rahim";


    const handleInput=(event)=>{
        // console.log(event.target.value)
        setUser(event.target.value)
       let userD=event.target.value

        return userD
       

    }
    
    // console.log('new value' ,  user);
   
    const handleEmail=(event)=>{
        // console.log(event.target.value)
        setEmail(event.target.value)

    }
    const handlePass=(event)=>{
        // console.log(event.target.value)
        setPassword(event.target.value)

    }
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        console.log(email);
        console.log(password);
        if(userD.target.value===userName){
            alert("welcome", userName)
        }
        
    }


  return (
    <>
    <h1 className='mb-4'>{user}</h1>

    <form action=""  onSubmit={handleSubmit}>

    <input type="text" className='form-control w-50' placeholder='Enter Username'  name='user' value={user}
    onChange={handleInput} required />
    <input type="email" className='form-control w-50 mt-4' placeholder='Enter Email'  name='user' value={email}
    onChange={handleEmail}  required  />
    <input type="password" className='form-control w-50 mt-4' placeholder='Enter Password'  name='user' value={password}
    onChange={handlePass}  required  />
    
    <button type="submit" className="btn btn-primary mt-4 ">Submit</button>
    </form>
    </>
  )
}
export default FormWorks;


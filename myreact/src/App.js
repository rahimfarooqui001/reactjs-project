
// import { useState } from "react";

import { useState } from "react";
import './Style.css'
// import componentA from "./compA";

// import Working from "./workingState";

function App() {
useState()

  const [bulb,setBulb]=useState(false);
  const bulbButton=()=>{
    setBulb(!bulb);
  }
  
 
  
  // let person = {
  //   name: 'Rahim',
  //   age: 23,
  //   address: 'Nanded'
  // }

  // const init=2;
  // useState()
  // console.log(useState());
  // const [state, setState]=useState(Person)
  // console.log(state)

  // const [data, setData] = useState(person)

  // let { name, age, address } = data;
  // console.log(name);
  // console.log(age);
  // console.log(address);
  // const addData=()=>{
  //   setData({...data,education:'MCA'})
    
  // }

  // console.log(data);

  // const changeName=()=>{

  //   setState(state +1)
  // }
  // console.log(state);

  // const  decNum=()=>{
  //   setState(state-1)
  // }





  return (
    <div className="App">
      {/* <h1></h1> */}
      {/* <button className="btn btn-success" onClick={changeName}> Increment</button>
      <button className="btn btn-danger" onClick={decNum}>Decrement</button> */}




      {/* <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Address: {address}</h1>
      
      <button className="btn btn-danger" onClick={addData} >Add Data</button> */}




      {/* <Working/> */}
      
     <div className="bulb"> <img src={bulb?'https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image-thumb.png' :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0tT2rQ6IO6GTriSJzKGSZkhbM5Pm-W6nQOY2SmE8inJvUWN_c2RhlrALY-YjIjzT_WU&usqp=CAU' }alt="" />
      <button className="btn btn-success" onClick={bulbButton}> {bulb ? 'off':'on'}</button>
      <p>Click the light bulb to turn on/off the light.</p>
      </div>



{/* <componentA/> */}



    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Login from './Login';
import { ForwardRefWrapper } from './LoginClass';

function App() {

  let [name,setName] = useState("");
  let txtNameRef = useRef();
  //let [preValue,setPreValue] = useState([]);

  //useEffect(() => ,[]);

  // useEffect(() => {
  //   setPreValue([...preValue,txtNameRef.current.value]);
  // },[txtNameRef.current.value]);

   function handleClick() {
     if(name === "") {
       txtNameRef.current.style.border = "1px solid red";
     }
   }

  return (
    <div className="App">
      {/* <Login ref={txtNameRef} /> */}
      <ForwardRefWrapper ref={txtNameRef} />
      {/* <input type='text'
        ref={txtNameRef}
      placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
  */}
      <button onClick={handleClick}>Click Me</button>
      
    </div>
  );
}

export default App;

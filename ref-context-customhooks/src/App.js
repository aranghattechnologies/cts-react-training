import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
// import Login from './Login';
// import ForwardRefWrapper from './LoginClass';
import Product from './Product';
import DiscountContext from './DiscountContext';
import useCurrentDateTime from './useCurrentDatetime';
import { Link, Outlet } from 'react-router-dom';

function App() {

  let [name,setName] = useState("");
 // let [currentDateTime,updateFormat,showDate] = useCurrentDateTime(2);

  let txtNameRef = useRef();
  let [isDiwaliDiscountActive,setIsDiwaliDiscountActive] = useState(true);
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
      <Link to='/contact'>Contact us</Link>
      <Link to='/aboutus'>About us</Link>
      <Link to='/products/apple'>Mac Products</Link>
      <Link to='/products/windows'>Windows Products</Link>
      <Outlet />
      {/* <h5>{currentDateTime}</h5>
      <button onClick={() => updateFormat(1)}>Show Seconds</button> */}
      {/* <Login ref={txtNameRef} />
      <ForwardRefWrapper ref={txtNameRef} /> */}
      {/* <input type='text'
        ref={txtNameRef}
      placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
  
   <button onClick={handleClick}>Click Me</button>
  */}

     
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import ProductList from './ProdutList';
import TopNavBar from './Navbar';
import CartItems from './CartItems';



function App() {

  let [displyType,setDisplayType] = useState("list");

  function changeDisplayType() {
    setDisplayType(displyType === "list" ? "grid" : "list");
  }


  return (
    <div className="App">
      <TopNavBar />
      <div className='container-fluid '>
        <div className='row vh-100'>
          <div className='col'><ProductList /></div>
          <div className='col bg-light h-100'> <CartItems /></div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

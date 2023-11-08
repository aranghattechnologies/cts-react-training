import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { set } from 'react-hook-form';
import ToDoItem from './ToDoItem';
import { StatusComponent } from './Status';
import Status2Component from './Status2';
import FavQuotes from './FavQuotes';

function App() {

  let [toDoItems, setToDoItems] = useState([]);
  let [newItem, setNewItem] = useState('');

  function handleOnItemAdd(){
    if(newItem === '') return;

    setToDoItems([...toDoItems, { ToDo : newItem, IsCompleted : false }]);
    setNewItem('');
  }

  function onMarkAsCompleted(index)
  {
    let items = toDoItems;
    items[index].IsCompleted = true;
    setToDoItems([...items]);
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
               {/* <h1>My To Do List</h1>
               <div className='card'>
                  <div className='card-header'>
                      <div className='input-group'>
                          <input value={newItem} type='text' placeholder='Enter the to do item' className='form-control' onChange={(e) => setNewItem(e.target.value)} />
                          <button className='btn btn-primary' onClick={handleOnItemAdd}>
                            <i className='bi bi-plus-lg me-3'></i>
                            Add</button>
                      </div>
               </div>
               <div className='card-body'>
                 <ul className='list-group'>
                  { 
                    toDoItems.map((item, index) => <ToDoItem 
                      index={index}
                      onMarkAsCompleted={onMarkAsCompleted}
                      key={index} title={item.ToDo} 
                      isCompleted={item.IsCompleted} />) 
                  }
                  </ul>
               </div>
               <div className='card-footer'>
                  {/* <StatusComponent items={toDoItems} /> */}
                  {/* <Status2Component items={toDoItems} />
               </div>
               </div>  */}
               <FavQuotes />
            </div>
        </div>
    </div>
  );
}

export default App;

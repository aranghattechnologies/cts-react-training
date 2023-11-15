import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponentProps';

function App() {

  let [state,setState] = React.useState<TestComponentProps>({title : "Hello",isupperCase : true,color : 'red'});

  return (
    <div className="App">
      <input type='text' value={state.title} onChange={(e)=>setState({...state,title : e.target.value})} />
      <input type='color' value={state.color} onChange={(e) => setState({...state,color : e.target.value})} />
      <input type='checkbox' checked={state.isupperCase} onChange={(e) => setState({...state,isupperCase : e.target.checked})} />
      <TestComponent title={state.title} isupperCase={state.isupperCase} color={state.color} />
      <TestComponent {...state} />
    </div>
  );
}

export default App;

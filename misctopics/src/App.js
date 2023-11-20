import logo from './logo.svg';
import './App.css';
import { MessageComponent } from './MessageComponent';
import { Profiler, useState } from 'react';
import MessageComponent2 from './MessageComponent2';
import DemoComponent from './DemoComponent';

function App() {

  let [message, setMessage] = useState("Message From Parent Component");
  let [count, setCount] = useState(0);

  return (
    <div className="App">

      <DemoComponent />
      <h1>Count {count}</h1>
      <Profiler id="MessageComponent" onRender={(id, phase, actualDuration) =>  console.log("Message Component 2 ",actualDuration)}>
      {/* <MessageComponent message = {message} /> */}
         <MessageComponent2 message={message} />
      </Profiler>

   
        <MessageComponent message = {message} />


      <button type='button' onClick={() => setMessage("Updated Message From Parent Component")}>Update Message</button>
    
      <hr />
      <button type='button' onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default App;

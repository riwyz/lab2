import React from 'react';
import './App.css';
import MyName from "./Components/MyName/MyName";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList";


const Func = () =>{
  return <div>

  </div>
}
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;

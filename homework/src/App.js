import React from 'react';
import './App.css';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thoughts from './components/Thoughts';

function App() {
  return (
    <div className="App">
      <h1 className="text-light text-center">My To-Do List</h1>
      <Todo/><br/><br/>
      <h1 className="text-light text-center">My Thoughts For The Day</h1>
      <Thoughts/> 
  </div>
  )
}

export default App;

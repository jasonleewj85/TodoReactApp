import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import Parent from './components/Parent';
import Sample from './components/Sample';
import TodoList from './components/ToDoList';

library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      {/* <h1>App component</h1> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;

import './css/App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { id:1 ,text: "almorzar", completed: false },
  { id:2  ,text: "ver tele", completed: false },
  { id:3 ,text: "salir a comprar", completed: false },
  { id:4 ,text: "terminar ejemplo", completed: true },
  { id:5 ,text: "cenar", completed: false },
];

function App() {
  return (
    
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
       
        {todos.map((todo) => (
          // iterar  en el array añadir yn atributo key 
          
          <TodoItem  key ={todo.id} completed={todo.completed} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

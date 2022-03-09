import './App.css';
import React from 'react';
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";


function AppUi ({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  temporalTodos,
  completeTodos,
  deleteTodo,
}){

return(

    <React.Fragment>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
     />
    {/* aqui envio el estado al componente hijo */}
    <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
    />

    <TodoList>
     
      {temporalTodos.map((todo) => (
        // iterar  en el array añadir yn atributo key 
        <TodoItem  key ={todo.text} 
        completed={todo.completed} 
        text={todo.text} 
        onComplete = {()=>completeTodos(todo.text) }
        onDelete = {() => deleteTodo(todo.text) }
        />
      ))}
    </TodoList>
    <CreateTodoButton/>
  </React.Fragment>
)


}

export {AppUi}
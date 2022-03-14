import './App.css';
import React from 'react';
import { TodoContext } from '../../todoContext';
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";


function AppUi (){

return(

    <React.Fragment>
    <TodoCounter/>
    {/* aqui envio el estado al componente hijo ya no necesito enviar props,  estan englobadas en el provider */}
    <TodoSearch/>
    {/* aqui esta el consumidor, comparto los values que pusimos en el context */}
    <TodoContext.Consumer>
      {/* esto es una render props */}
      {/* o tambien puedo traer{error, loading, etc  y evitar llamarlo con value} */}
      {(value) =>{

          return(
            <TodoList>
            {value.error && <p>Desespérate, hubo un error...</p>}
            {value.loading && <p>Estamos cargando, no desesperes...</p>}
            {(!value.loading && !value.temporalTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {value.temporalTodos.map((todo) => (
              // iterar  en el array añadir yn atributo key 
              <TodoItem  key ={todo.text} 
              completed={todo.completed} 
              text={todo.text} 
              onComplete = {()=>value.completeTodos(todo.text) }
              onDelete = {() => value.deleteTodo(todo.text) }
              />
            ))}
          </TodoList>
          );

      }}


    </TodoContext.Consumer>

    <CreateTodoButton/>
  </React.Fragment>
)


}

export {AppUi}
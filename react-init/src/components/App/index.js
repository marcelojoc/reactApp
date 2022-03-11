import React, { useState } from "react";
import { AppUi } from "./AppUi";
import {useLocaltodos} from "../../hooks/useLocaltodos"
/**
 * verifico si hay items guardados
 * si estan los transfiero a un array en el estado todoState
 */
// const todosDefault = [
//   { id: 1, text: "almorzar", completed: false },
//   { id: 2, text: "ver tele", completed: false },
//   { id: 3, text: "salir a comprar", completed: false },
//   { id: 4, text: "terminar ejemplo", completed: true },
//   { id: 5, text: "cenar", completed: false },
// ];



function App() {

 
  const {
    item: todosState,
    saveItem: saveTodosLocal,
    loading,
    error,
  } = useLocaltodos('TODOS_V1', []); // aqui llamo al hook

  const [searchValue, setSearchValue] = useState(""); // creo el estado
  const completedTodos = todosState.filter((item) => {
    return item.completed === true;
  }).length;
  const totalTodos = todosState.length; // total de todos

  let temporalTodos = []; // guardo temporalemtne  para la busqueda

  if (!searchValue.length >= 1) {
    // verifico busqueda en todomomento por searchValue
    temporalTodos = todosState;
  } else {
    temporalTodos = todosState.filter((todo) => {
      //  pongo todo  en minusculas
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); // me fijo si existe la cadena en cada  item
    });
  }

  const completeTodos = (text) => {
    // la funcion recibe el indice, en este caso es un texto
    const todoIndex = todosState.findIndex((todo) => todo.text === text); // aqui tengo el indice
    // genero una copia del estado
    const newTodos = [...todosState];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // le pongo un completed true  a la copia del estado
    // ahora  modifico el Estado
    saveTodosLocal(newTodos);
  };

  const deleteTodo = (text) => {
    // elimino items de acuerdo al indice
    const todoIndex = todosState.findIndex((todo) => todo.text === text);
    const newTodos = [...todosState];
    newTodos.splice(todoIndex, 1);
    saveTodosLocal(newTodos);
  };


  return (
    <AppUi
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      temporalTodos={temporalTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

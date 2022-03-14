import React , { useState }  from 'react'
import { useLocaltodos } from '../hooks/useLocaltodos';

//const {Provider, Consumer} = React.createContext(); // aqui creo un contexto de proveedor  y consumidor
// o bien

const TodoContext = React.createContext();

function Todoprovider(props){ // creo una funcion que englobe todo el context Provider

    const {
        item: todosState,
        saveItem: saveTodosLocal,
        loading,
        error,
      } = useLocaltodos('TODOS_V1', []); // aqui llamo al hook personalizado
    
      const [searchValue, setSearchValue] = useState(""); // creo el estado de lo que colocas  en el formulario
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

      

        /* la propiedad value  me dice que valores vamos a compartir */
        return (
            <TodoContext.Provider value ={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                temporalTodos,
                completeTodos,
                deleteTodo,
            }}>
                {props.children}
            </TodoContext.Provider>

        );

}




export {Todoprovider, TodoContext }
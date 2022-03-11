import { useState } from "react";
// hook personalizado
function useLocaltodos(itemLocal, initialValue){

    const localTodos = localStorage.getItem(itemLocal);
    let parsedTodos = [];
    
    if (!localTodos) {
      localStorage.setItem(itemLocal, JSON.stringify(initialValue));
      parsedTodos = initialValue;
    } else {
      parsedTodos = JSON.parse(localTodos);
    }
    
    const [todosState, setTodos] = useState(parsedTodos); // creo estado para los todos
    const saveTodosLocal = (newTodos) => {
      let stringTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemLocal , stringTodos);
      setTodos(newTodos);
    };
      // para que funcione el HOOK hay que retornar los metodos y el State
    return [
      todosState,
      saveTodosLocal,
    ];
  
  }

  export {useLocaltodos}
import React , { useState} from "react";
// hook personalizado
function useLocaltodos(itemLocal, initialValue){

    // const localTodos = localStorage.getItem(itemLocal);
    // let parsedTodos = [];
    
    // if (!localTodos) {
    //   localStorage.setItem(itemLocal, JSON.stringify(initialValue));
    //   parsedTodos = initialValue;
    // } else {
    //   parsedTodos = JSON.parse(localTodos);
    // }

    const [error, setError] = React.useState(false); // estado para errores
    const [loading, setLoading] = React.useState(true); // estados para loading
    const [item, setItem] = useState(initialValue); // creo estado para los todos

    React.useEffect(() => {
        setTimeout(() => {
          try {
            const localTodos = localStorage.getItem(itemLocal);
            let parsedTodos = [];

            if (!localTodos) {
              localStorage.setItem(itemLocal, JSON.stringify(initialValue));
              parsedTodos = initialValue;
            } else {
                parsedTodos = JSON.parse(localTodos);
            }
    
            setItem(parsedTodos);
            setLoading(false);
          } catch(error) {
            setError(error);
          }
        }, 4000);
      });


    // guardo los todos  en localStorage y en el estado
    const saveTodosLocal = (newTodos) => {
      let stringTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemLocal , stringTodos);
      setItem(newTodos);
    };
      // para que funcione el HOOK hay que retornar los metodos y el State
    return [
      item,
      saveTodosLocal,
      loading,
      error,
    ];
  
  }

  export {useLocaltodos}
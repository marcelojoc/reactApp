import React from "react";
import { Todoprovider } from "../../todoContext";
import { AppUi } from "./AppUi";

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

  // aqui llamo al componente todoProvider que en su interior tienen el contexto
  return (
    
    <Todoprovider>
      <AppUi/>
    </Todoprovider>
  );
}

export default App;

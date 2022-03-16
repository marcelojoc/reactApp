import React from "react";
import { TodoContext } from "../../todoContext";
import "./TodoCounter.css";

function TodoCounter() {
  // dejo de usar <TodoContext.Consumer> </TodoContext.Consumer>
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };

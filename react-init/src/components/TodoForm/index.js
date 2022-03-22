import React from "react";
import { TodoContext } from "../../todoContext";
import "./TodoForm.css"

function TodoForm() {
  const { saveTodos, setOpenModal } = React.useContext(TodoContext);

  const [newTodoText, setNewTodoText] = React.useState(""); // creo un estado local

  const onChange = (event) => { // metodo para cambiar el estado del text area
    setNewTodoText(event.target.value);
  };

  const onCancel = () => { // metodo para cancelar el modal
    // TODO
    setOpenModal(false);
  };

  const onAdd = (event) => { // metodo para añadir
    event.preventDefault(); // detengo el evento
    saveTodos(newTodoText); // guardo el item 
    setOpenModal(false);  // cierro el modal
  };

  return (
    <form onSubmit={onAdd}>
      <label>Añadir tu nueva tarea TODO</label>
      <textarea
        placeholder="colocar  lo que debe hacerrrr"
        value={newTodoText}
        onChange={onChange}
      ></textarea>
      <div>
        <button> Añadir</button>

        <button onClick={onCancel} type="button">
          {" "}
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

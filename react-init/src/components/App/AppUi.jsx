import "./App.css";
import React from "react";
import { TodoContext } from "../../todoContext";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoForm } from "../TodoForm";
import {EmptyTodos} from "../EmptyTodos"; // Skeletons
import {TodosError} from "../TodosError";
import {TodosLoading} from "../TodosLoading";
import {Article} from "../TodosLoading/ArticleLoader";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { Modal } from "../Modal";

function AppUi() {
  const { error, loading, temporalTodos, completeTodos, deleteTodo , openModal, setOpenModal } =
  React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      {/* aqui envio el estado al componente hijo ya no necesito enviar props,  estan englobadas en el provider */}
      <TodoSearch />
      {/* aqui esta el consumidor, comparto los values que pusimos en el context */}

      {/* esto es una render props */}
      {/* o tambien puedo traer{error, loading, etc  y evitar llamarlo con value} */}

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <TodosLoading/>}
        {loading && <Article/>}
        {!loading && !temporalTodos.length && <p>¡Crea tu primer TODO!</p>}

        {temporalTodos.map((todo) => (
          // iterar  en el array añadir yn atributo key
          <TodoItem
            key={todo.text}
            completed={todo.completed}
            text={todo.text}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

          { openModal && (

            <Modal>

              <TodoForm/>

            </Modal>
          )}

      <CreateTodoButton 
        setOpenModal= {setOpenModal}
        openModal = {openModal}
      />
    </React.Fragment>
  );
}

export { AppUi };

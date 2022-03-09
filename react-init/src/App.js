import './css/App.css';
import React , {useState} from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todosDefault = [
  { id:1 ,text: "almorzar", completed: false },
  { id:2  ,text: "ver tele", completed: false },
  { id:3 ,text: "salir a comprar", completed: false },
  { id:4 ,text: "terminar ejemplo", completed: true },
  { id:5 ,text: "cenar", completed: false },
];

function App() {

  const [todosState , setTodos] = useState(todosDefault); // creo estado para los todos
  const [searchValue, setSearchValue ]= useState(''); // creo el estado
  const completedTodos = todosState.filter((item) => { return item.completed === true;}).length;
  const totalTodos = todosState.length; // total de todos

  let temporalTodos = []

  if( !searchValue.length >=1){

      temporalTodos = todosState;
  }else{
      temporalTodos = todosState.filter((todo) => {
      //  pongo todo  en minusculas
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); // me fijo si existe la cadena en cada  item
      });
  }

  const completeTodos = (text) => { // la funcion recibe el indice, en este caso es un texto
    const todoIndex = todosState.findIndex(todo => todo.text === text); // aqui tengo el indice
    // genero una copia del estado
    const newTodos = [...todosState];

    newTodos[todoIndex].completed = true; // le pongo un completed true  a la copia del estado
    // ahora  modifico el Estado
    setTodos(newTodos);

  }

  const deleteTodo = (text) => {
    const todoIndex = todosState.findIndex(todo => todo.text === text);
    const newTodos = [...todosState];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    
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
  );
}

export default App;

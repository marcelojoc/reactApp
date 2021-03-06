import React from "react";
import "./TodoSearch.css";
import {TodoContext} from "../../todoContext"
function TodoSearch() {
  //const [searchValue, setSearchValue] = useState(''); // llamo al UseState  de react

  const{searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChanges = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value); // modifico el State  con los valores
  };

  return (
    <div>
      <input
        placeholder="Buscar"
        className="TodoSearch"
        value={searchValue}
        onChange={onSearchValueChanges}
      ></input>
      <p>{searchValue}
      +</p>
    </div>
  );
}

export { TodoSearch };

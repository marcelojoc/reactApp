import React from "react";
import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
  //const [searchValue, setSearchValue] = useState(''); // llamo al UseState  de react

  const onSearchValueChanges = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value); // modifico el State  con los valores
  };

  return (
    <div>
      <input
        placeholder="prueba de placeholder"
        className="TodoSearch"
        value={searchValue}
        onChange={onSearchValueChanges}
      ></input>
      <p>{searchValue}</p>
    </div>
  );
}

export { TodoSearch };
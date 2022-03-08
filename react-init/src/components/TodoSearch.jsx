import React from 'react';
import './../css/TodoSearch.css'
function TodoSearch() {

  const onSearchValueChanges = (event) =>{

    console.log(event.target.value);
  }

  return (
    <div>
      <input placeholder="prueba de placeholder" className='TodoSearch' onChange={onSearchValueChanges}></input>
      
    </div>
  );
}

export { TodoSearch };

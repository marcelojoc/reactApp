import React from 'react';
import './../css/CreateTodoButton.css'
function CreateTodoButton(){



    const clickbutton = () =>{
    
        alert('sasasasasasasa');
    }

    return (

        <div>
            <button className="CreateTodoButton"
            onClick={clickbutton}>
            +
            </button>
      </div>
    );



}

export {CreateTodoButton}
import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton(props) {
  const clickbutton = () => {
    props.setOpenModal(!props.openModal)
    // o tambien puedo colocar la opcion prevState que me muestra el estando anterior que tenia
    // prevstate => !prevstate
  };

  console.log(props.openModal);

  return (
    <div>
      <button className="CreateTodoButton" onClick={clickbutton}>
        + 
      </button>
    </div>
  );
}

export { CreateTodoButton };

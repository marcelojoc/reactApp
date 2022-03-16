import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton(props) {
  const clickbutton = () => {
    props.setOpenModal(!props.openModal)
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

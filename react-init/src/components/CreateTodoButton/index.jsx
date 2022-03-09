import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
  const clickbutton = () => {
    alert("sasasasasasasa");
  };

  return (
    <div>
      <button className="CreateTodoButton" onClick={clickbutton}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };

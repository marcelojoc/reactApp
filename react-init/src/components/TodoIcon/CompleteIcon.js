import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onCompleted }) {
  // completed vof

  return (
    <TodoIcon
      type="check"
      color={completed ? "#4caf50" : "gray"}
      onClick={onCompleted}
    />
  );
}

export { CompleteIcon };

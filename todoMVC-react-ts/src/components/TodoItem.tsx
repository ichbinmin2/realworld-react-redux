import React from "react";

type Todo = {
  task: string;
  completed: boolean;
};

const TodoItem = ({ task, completed }: Todo) => {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{task}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="to do list" />
    </li>
  );
};

export default TodoItem;

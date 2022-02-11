import React from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

const TodoItem = ({ id, task, completed }: Todo) => {
  return (
    <li className={completed ? "completed" : ""} data-task-id={id}>
      {/* Q. data-task-id={id} 속성을 받아오는 이유 */}
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

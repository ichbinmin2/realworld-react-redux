import React from "react";

const TodoItem = () => {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked={false} />
        <label>투두 리스트</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="투두 리스트" />
    </li>
  );
};

export default TodoItem;

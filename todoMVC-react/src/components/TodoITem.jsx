import React from "react";

const TodoITem = ({ content, completed }) => {
  const onChange = () => {
    if (completed === false) {
      completed = true;
    }
  };
  return (
    <li className="completed">
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onChange}
        />
        <label>{content}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={content} />
    </li>
  );
};
export default TodoITem;

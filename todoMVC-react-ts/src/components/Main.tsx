import React from "react";
import TodoItem from "./TodoItem";

const Main = () => {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={false}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <TodoItem task="To do list" completed={false} />
      </ul>
    </section>
  );
};

export default Main;

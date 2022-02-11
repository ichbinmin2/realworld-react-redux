import React, { useState } from "react";
import TodoItem from "./TodoItem";

type TodoListType = {
  todoList: { id: string; task: string; completed: boolean }[];
};

const Main = ({ todoList }: TodoListType) => {
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
        {todoList.map((todo) => {
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />;
        })}
      </ul>
    </section>
  );
};

export default Main;

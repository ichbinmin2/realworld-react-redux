import React, { useState } from "react";
import TodoItem from "./TodoItem";

type TodoListType = {
  todoList: { id: string; task: string; completed: boolean }[];
  // 배열 안에 객체인 todoList 의 값들을 객체 안에 담아 type을 지정.
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

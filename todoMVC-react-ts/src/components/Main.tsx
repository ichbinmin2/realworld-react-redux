import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

const Main = () => {
  const initialState = [
    { id: uuid(), task: "To do an assignment", completed: false },
    { id: uuid(), task: "Be a FE developer", completed: false },
    { id: uuid(), task: "Do what I do like", completed: false },
  ];

  const [todoList, setTodoList] = useState(initialState);
  // initialState 배열 값을 todoList default 값으로 담음.

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
          <TodoItem key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} />;
        })}
      </ul>
    </section>
  );
};

export default Main;

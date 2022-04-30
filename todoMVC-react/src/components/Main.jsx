import React, { useState } from "react";
import TodoITem from "./TodoITem";

const Main = () => {
  const initialState = [
    { content: "전화하기", completed: false },
    { content: "책 읽기", completed: true },
    { content: "공부하기", completed: false },
    { content: "운동하기", completed: true },
  ];

  const [todoList, setTodoList] = useState(initialState);

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
        {/* {todoList.map((todo) => { */}
        {/* <TodoITem {...todo} />; */}
        <TodoITem conten="첫번째 할일" completed={false} />;{/* })} */}
      </ul>
    </section>
  );
};
export default Main;

import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { v4 as uuid } from "uuid";

const App = () => {
  const initialState = [
    { id: uuid(), task: "To do an assignment", completed: false },
    { id: uuid(), task: "Be a FE developer", completed: false },
    { id: uuid(), task: "Do what I do like", completed: false },
  ];

  const [todoList, setTodoList] = useState(initialState);
  // initialState 배열 값을 todoList default 값으로 담음.

  return (
    <section className="todoapp">
      <div>
        <Header addTask={setTodoList} />
        <Main todoList={todoList} />
        <Footer />
      </div>
    </section>
  );
};

export default App;

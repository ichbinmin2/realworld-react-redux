import React, { useState } from "react";

const Header = () => {
  const [task, setTask] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={task}
        onChange={onInputChange}
      />
    </header>
  );
};

export default Header;

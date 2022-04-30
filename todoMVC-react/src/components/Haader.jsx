import React from "react";

const Haader = (props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value=""
      />
    </header>
  );
};

export default Haader;

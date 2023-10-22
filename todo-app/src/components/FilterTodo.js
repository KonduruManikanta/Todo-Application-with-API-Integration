// src/components/FilterTodo.js
import React from "react";

function FilterTodo({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("active")}>Active</button>
    </div>
  );
}

export default FilterTodo;

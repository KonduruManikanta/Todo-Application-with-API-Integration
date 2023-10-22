// src/components/AddTodo.js
import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;

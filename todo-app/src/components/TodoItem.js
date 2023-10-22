// src/components/TodoItem.js
import React, { useState } from "react";

function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEdit = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </li>
  );
}

export default TodoItem;

// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulate fetching initial todos from the provided API
    const initialTodos = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: false,
      },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false,
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false,
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: false,
      },
      {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false,
      },
      {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: false,
      },
      {
        userId: 1,
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: false,
      },
      {
        userId: 1,
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: false,
      },
      {
        userId: 1,
        id: 13,
        title: "et doloremque nulla",
        completed: false,
      },
      {
        userId: 1,
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: false,
      },
      {
        userId: 1,
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: false,
      },
      {
        userId: 1,
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: false,
      },
      {
        userId: 1,
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: false,
      },
      {
        userId: 1,
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: false,
      },
      {
        userId: 1,
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: false,
      },
      {
        userId: 1,
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: false,
      },

      // Add more sample todos here
    ];

    setTodos(initialTodos);
  }, []);

  const addTodo = (title) => {
    // Add a new task
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    // Toggle the completion status of a task
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, title) => {
    // Edit the task name
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    // Delete a task
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <FilterTodo filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;

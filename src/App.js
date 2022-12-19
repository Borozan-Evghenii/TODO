import "./App.css";
import React, { useState } from "react";
import ToDoForm from "./component/form/ToDoForm";
import ToDo from "./component/todo/ToDo";

export default function App() {
  // useEffect(() => {
  //   getPosts();
  // }, []);
  // async function getPosts() {
  //   const posts = await PostService.getAll();
  //   setPost(posts);
  // }

  const [todos, setTodos] = useState([]);

  const addTask = (value) => {
    if (value) {
      const newItem = {
        id: Date.now(),
        title: value,
        completed: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="appContainer">
      <header>
        <h1>List contain: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleTask={handleToggle}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

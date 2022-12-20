import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import PostList from "./components/postList/PostList";
import BottomBar from "./components/bottomBar/BottomBar";
import Template from "./components/template/Template";
import Modal from "./components/modal/Modal";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 0, task: "Create ToDo List", completed: true },
    { id: 1, task: "Create Currency App", completed: false },
    { id: 2, task: "Create Weather App", completed: false },
    { id: 3, task: "Create Quiz App", completed: true },
    { id: 4, task: "Create Quiz App", completed: true },
    { id: 5, task: "Create Quiz App", completed: true },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addTask = (value) => {
    if (value) {
      const newItem = {
        id: Date.now(),
        task: value,
        completed: false,
      };
      setTasks([newItem, ...tasks]);
    }
  };

  const removeTask = () => {};

  const completedTask = (id) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : { ...task }
      ),
    ]);
  };

  return (
    <div className="appContainer">
      <Header tasks={tasks}>My Tasks</Header>
      {showModal ? (
        <Modal
          addTask={addTask}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        ""
      )}
      {tasks.length ? (
        <PostList tasks={tasks} completedTask={completedTask} />
      ) : (
        <Template> Add New TASK</Template>
      )}
      <BottomBar setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

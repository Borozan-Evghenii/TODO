import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import PostList from "./components/postList/PostList";
import BottomBar from "./components/bottomBar/BottomBar";
import Template from "./components/template/Template";
import Modal from "./components/modal/Modal";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Create App", completed: true },
    { id: 2, task: "Create App", completed: false },
    { id: 3, task: "Create App", completed: false },
    { id: 3, task: "Create App", completed: true },
  ]);

  return (
    <div className="appContainer">
      <Header tasks={tasks}>My Tasks</Header>
      {/* <Modal/> */}
      {tasks.length ? <PostList /> : <Template> Add New TASK</Template>}
      <BottomBar />
    </div>
  );
}

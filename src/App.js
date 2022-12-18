import "./App.css";
import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import data from "./API/Posts";

export default function App() {
  // useEffect(() => {
  //   getPosts();
  // }, []);
  // async function getPosts() {
  //   const posts = await PostService.getAll();
  //   setPost(posts);
  // }

  const [posts, setPost] = useState(data);
  const [status, setStatus] = useState(false);

  return (
    <div className="appContainer">
      {posts.map((post) => (
        <TodoItem
          key={post.id}
          onClick={() => setStatus(!status)}
          status={status}
          completed={post.completed}
        >
          {post.title}
        </TodoItem>
      ))}
    </div>
  );
}

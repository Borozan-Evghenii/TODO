import "./App.css";
import Heading from "./components/heading/Heading";
import PostList from "./components/postList/PostList";
import BottomBar from "./components/bottomBar/BottomBar";

export default function App() {
  const posts = [
    { _id: 1, category: "important", body: "Make a TODO app with react" },
    { _id: 2, category: "important", body: "Make a CV for intership" },
    { _id: 3, category: "important", body: "Make a TODO app with react" },
    { _id: 4, category: "important", body: "Make a TODO app with react" },
    { _id: 5, category: "important", body: "Make a TODO app with react" },
    { _id: 6, category: "important", body: "Make a TODO app with react" },
    { _id: 7, category: "important", body: "Make a TODO app with react" },
    { _id: 8, category: "important", body: "Make a TODO app with react" },
    { _id: 9, category: "important", body: "Make a TODO app with react" },
    { _id: 10, category: "important", body: "Make a TODO app with react" },
    { _id: 11, category: "important", body: "Make a TODO app with react" },
  ];

  return (
    <div className="appContainer">
      <Heading />
      <PostList posts={posts} />
      <BottomBar />
    </div>
  );
}

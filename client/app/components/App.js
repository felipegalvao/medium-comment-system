import React from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const App = () => {
  const comments = [
    {
      id: 1,
      start: 5,
      end: 15,
      text: "test comment 1"
    },
    {
      id: 2,
      start: 1,
      end: 20,
      text: "test comment 2"
    }
  ]

  return (
    <div className="container">
      <h1 className="text-center">Medium Post</h1>
      <Post />
      <AddComment />
      <CommentList comments={comments} />
    </div>
  )
};

export default App;

import React from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Medium Post</h1>
      <Post />
      <AddComment />
      <CommentList />
    </div>
  )
};

export default App;

import React from "react";

const Comment = ({ text, postFragment }) => {
  return (
    <div className="comment">
      {postFragment === "" ? "" : <p className="comment__post-fragment">{postFragment}</p>}
      <p className="comment__text">{text}</p>
    </div>
  );
};

export default Comment;

import React from "react";

const Comment = ({ text, postFragment, postText }) => {
  return (
    <div className="comment">
      {postFragment === "" ? "" : <p className="comment__post-fragment">{postFragment}</p>}
      <p>{text}</p>
    </div>
  );
};

export default Comment;

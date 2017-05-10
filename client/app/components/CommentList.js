import React from "react";

const CommentList = ({ comments }) => {
  const commentList = comments.map((comment) => {
    return (
      <p>{comment.id} - {comment.text}</p>
    )
  })

  return (
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2">
        <p>Comment List</p>
        {commentList}
      </div>
    </div>
  );
};

export default CommentList;

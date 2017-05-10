import React from "react";

import Comment from "./Comment";

const CommentList = ({ comments }) => {
  const commentList = comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        text={comment.text}
        start={comment.start}
        end={comment.end}
      />
    );
  });

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

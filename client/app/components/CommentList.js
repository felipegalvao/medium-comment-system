import React from "react";

import Comment from "./Comment";

const CommentList = ({ comments, postText, commentsLoading }) => {
  const commentList = comments.map(comment => {
    return (
      <Comment
        key={comment._id}
        text={comment.text}
        start={comment.start}
        end={comment.end}
        postText={postText}
      />
    );
  });

  return (
    <div className="row comment-list">
      <div className="col-xs-8 col-xs-offset-2 comment-list__column">
        <h3>Comment List</h3>
        {commentsLoading ? <p>Comments Loading...</p> : commentList}
      </div>
    </div>
  );
};

export default CommentList;

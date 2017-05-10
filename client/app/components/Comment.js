import React from "react";

const Comment = ({ text, start, end, postText }) => {
  return (
    <div>
      <p>Comment related to: {postText.slice(start, end+1)}</p>
      <p>{text} (starts at {start} and ends at {end})</p>
    </div>
  );
};

export default Comment;

import React from "react";

const Comment = ({ text, start, end }) => {
  return (
    <div>
      <p>{text} (starts at {start} and ends at {end})</p>
    </div>
  );
};

export default Comment;

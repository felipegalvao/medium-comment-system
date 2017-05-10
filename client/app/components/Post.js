import React from "react";

const Post = ({postText}) => {
  return (
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2">
        <p>
          {postText}
        </p>
      </div>
    </div>
  );
};

export default Post;

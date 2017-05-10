import React, { Component } from "react";
import Post from "./Post";

import AddComment from "./AddComment";
import CommentList from "./CommentList";
import api from "../api/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
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
      ],
      commentsLoading: true,
      postText: `Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they
      live in Bookmarksgrove right at the coast of the Semantics, a large
      language ocean. A small river named Duden flows by their place and
      supplies it with the necessary regelialia. It is a paradisematic
      country, in which roasted parts of sentences fly into your mouth.
      Even the all-powerful Pointing has no control about the blind texts
      it is an almost unorthographic life One day however a small line of
      blind text by the name of Lorem Ipsum decided to`
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Medium Post</h1>
        <Post postText={this.state.postText} />
        <AddComment />
        <CommentList comments={this.state.comments} postText={this.state.postText} />
      </div>
    );
  }
}

export default App;

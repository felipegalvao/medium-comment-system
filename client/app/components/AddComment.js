import React, { Component } from "react";
import api from "../api/api";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      selectedText: "",
      commentText: ""
    };
  }

  onShowFormClick = () => {
    let selectedText;
    if (window.getSelection) {
      selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      selectedText = document.selection.createRange().text;
    }
    this.setState({ showForm: true, selectedText: selectedText });
  };

  onHideFormClick = () => {
    this.setState({ showForm: false, selectedText: "" });
  };

  onCommentTextChange = e => {
    this.setState({ commentText: e.target.value });
  };

  onAddCommentFormSubmit = e => {
    e.preventDefault();
    api
      .saveComment(this.state.selectedText, this.state.commentText)
      .then(res => {
        this.props.updateAppState(res.data);
      });
    this.setState({ showForm: false, selectedText: "", selectedText: "" });
  };

  renderForm = () => {
    if (this.state.showForm) {
      return (
        <div>
          <form onSubmit={this.onAddCommentFormSubmit}>
            {this.state.selectedText === ""
              ? ""
              : <p>Comment for: {this.state.selectedText}</p>}
            <div className="form-group">
              <label htmlFor="comment" className="text-center">
                Add your comment below
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="4"
                onChange={this.onCommentTextChange}
              />
            </div>
            <button className="btn btn-primary btn-block">
              Finish Adding Comment
            </button>
          </form>
          <button
            className="btn btn-danger btn-block"
            onClick={() => this.onHideFormClick()}
          >
            Cancel
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <button
            className="btn btn-block"
            onClick={() => this.onShowFormClick()}
          >
            Add Comment
          </button>
          {this.renderForm()}

        </div>
      </div>
    );
  }
}

export default AddComment;

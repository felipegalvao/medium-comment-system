import React, { Component } from "react";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  renderForm = () => {
    if (this.state.showForm) {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="comment" className="text-center">
              Add your comment below
            </label>
            <textarea className="form-control" id="comment" rows="4" />
          </div>
          <button className="btn btn-primary btn-block">Add Comment</button>
        </form>
      );
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <button
            className="btn btn-block"
            onClick={() => this.setState({ showForm: true })}
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

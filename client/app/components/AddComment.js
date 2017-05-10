import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <form>
            <div className="form-group">
              <label htmlFor="comment" className="text-center">Add your comment below</label>
              <textarea className="form-control" id="comment" rows="4" />
            </div>
            <button className="btn btn-primary btn-block">Add Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddComment;

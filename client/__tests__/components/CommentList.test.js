import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

import CommentList from "../../app/components/CommentList";

describe("CommentList", () => {
  let wrapper;
  const commentsData = [
    {
      _id: 1,
      text: "text 1",
      postFragment: "postFragment 1"
    },
    {
      _id: 2,
      text: "text 2",
      postFragment: "postFragment 2"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<CommentList comments={commentsData} commentsLoading={false} />)
  })

  it("should render loading message if commentsLoading props is true", () => {
    wrapper = shallow(<CommentList comments={commentsData} commentsLoading={true} />)
    expect(wrapper.find(".comment-list__loading-notification").length).to.equal(1);
  })

  it("should render one Comment component for each passed comment object", () => {
    expect(wrapper.find("Comment").length).to.equal(commentsData.length);
  })
});

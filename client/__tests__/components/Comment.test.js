import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

import Comment from "../../app/components/Comment";

describe("CommentList", () => {
  it("should render a paragraph with the comment text", () => {
    const wrapper = shallow(
      <Comment text="Comment text" postFragment="Post fragment" />
    );
    expect(wrapper.find(".comment__text").length).to.equal(1);
  });

  it(`should render a paragraph with the post fragment if postFragment prop is
  passed`, () => {
    const wrapper = shallow(
      <Comment text="Comment text" postFragment="Post fragment" />
    );
    expect(wrapper.find(".comment__post-fragment").length).to.equal(1);
  });

  it(`should not render a paragraph with the post fragment if empty
    postFragment prop is passed`, () => {
    const wrapper = shallow(<Comment text="Comment text" postFragment="" />);
    expect(wrapper.find(".comment__post-fragment").length).to.equal(0);
  });
});

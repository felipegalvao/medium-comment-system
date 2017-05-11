import React from "react";
import {expect} from "chai";
import { shallow, mount } from "enzyme";
import App from "../../app/components/App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a Post component", () => {
    expect(wrapper.find("Post").length).to.equal(1);
  })

  it("should render a AddComment component", () => {
    expect(wrapper.find("AddComment").length).to.equal(1);
  })

  it("should render a CommentList component", () => {
    expect(wrapper.find("CommentList").length).to.equal(1);
  })
})

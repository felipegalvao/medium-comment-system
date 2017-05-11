import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

import AddComment from "../../app/components/AddComment";

describe("AddComment", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddComment />);
  });

  it("should not render form initially", () => {
    expect(wrapper.find("form").length).to.equal(0);
  });

  it("should render form if state.showForm is true", () => {
    wrapper.setState({ showForm: true });
    expect(wrapper.find("form").length).to.equal(1);
  });

  it("should set state.showForm to true if Add Comment button is clicked", () => {
    expect(wrapper.state("showForm")).to.equal(false);
    wrapper.find(".add-comment__show-form-button").first().simulate("click");
    expect(wrapper.state("showForm")).to.equal(true);
  });

  it("should set state.showForm back to false if Cancel button is clicked", () => {
    expect(wrapper.state("showForm")).to.equal(false);
    wrapper.find(".add-comment__show-form-button").first().simulate("click");
    expect(wrapper.state("showForm")).to.equal(true);
    wrapper.find(".add-comment__cancel-button").first().simulate("click");
    expect(wrapper.state("showForm")).to.equal(false);
  });
});

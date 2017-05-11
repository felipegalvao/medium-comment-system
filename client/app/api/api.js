import axios from "axios";

module.exports = {
  getComments: () => {
    return axios
      .get("http://localhost:3000/comments")
      .then(res => {
        return res.data;
      })
      .catch(res => {
        return "An error has occured";
      });
  },

  saveComment: (postFragment, text) => {
    return axios
      .post("http://localhost:3000/comments", {
        postFragment: postFragment,
        text: text
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

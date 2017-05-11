import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

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
    return axios({
      method: "post",
      url: "http://localhost:3000/comments",
      data: {
        postFragment: postFragment,
        text: text
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

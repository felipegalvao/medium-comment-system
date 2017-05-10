import axios from "axios";

module.exports = {
  getComments: () => {
    return axios
      .get("http://localhost:3000/comments")
      .then(res => {
        return res.data;
      })
      .catch(res => {
        return "An error has occured"
      });
  },

  consoleTest: () => {
    console.log("consoleTest");
  }
};

"use strict";//es의 규정의 준수하겠다는 의미 

const User = require("../../models/User");

const output ={
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    console.log("body :", req.body);
    const response = user.login();
    console.log("response:", response);
    return res.json(response);
  }
}


module.exports = {
  output,
  process,
}
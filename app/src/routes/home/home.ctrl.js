"use strict";//es의 규정의 준수하겠다는 의미 

const User = require("../../models/User");

const output ={
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }

};

const process = {
  login: async(req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  }, 
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register()
    return res.json(response);
  }
}


module.exports = {
  output,
  process,
}
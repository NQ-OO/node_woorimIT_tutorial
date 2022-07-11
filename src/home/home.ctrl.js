"use strict"; //es의 규정의 준수하겠다는 의미 

const home = (req, res) => {
  res.render("home/index");
}

const login = (req, res) => {
  res.render("home/login");
}

module.exports = {
  home,
  login, 
}
"use strict"; //es의 규정의 준수하겠다는 의미 

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home)
router.get("/login", ctrl.login)

module.exports = router;
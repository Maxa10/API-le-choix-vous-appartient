const express = require("express");
const router = express.Router();
const userControler = require("../controlers/userControler");

router.get("/", userControler.getAllUsers);

router.post("/", userControler.postUser);

router.post("/login", userControler.login);

module.exports = router

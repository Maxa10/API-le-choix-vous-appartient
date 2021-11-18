const express = require("express");
const router = express.Router();
const userControler = require("../controlers/userControler");
router.get("/api/users", userControler.getAllUsers);
module.exports = router
const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/", (request, response) => {
  response.end("This is users list");
});

router.post("/", userController.createUser);

module.exports = router;

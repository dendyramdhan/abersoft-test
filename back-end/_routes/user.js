const express = require("express");
const router = express.Router();
const userController = require("../_controllers").user;
const userValidator = require("../_validators").user;

router.get("/", userController.get);
router.post(
  "/authenticate",
  userValidator.authenticate,
  userController.authenticate
);
router.post("/register", userValidator.create, userController.create);

module.exports = router;

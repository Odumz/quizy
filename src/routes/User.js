const express = require("express");
const registerRouter = express.Router();

//import controller
const registerCtrl = require("../controllers/User");

// do the routing
registerRouter.get("/", registerCtrl.testCtrl);
registerRouter.post(
  "/auth/register",
  registerCtrl.AuthControllerForRegistration
);

//export router
module.exports = registerRouter;

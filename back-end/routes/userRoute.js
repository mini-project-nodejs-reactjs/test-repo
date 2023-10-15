const userRoute = require("express").Router();
const { userController } = require("../controllers");

userRoute.get("/", userController.getAllUsers);
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.put("/:id/update", userController.update);
userRoute.delete("/:id/delete", userController.delete);

module.exports = userRoute;

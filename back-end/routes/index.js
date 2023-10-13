const route = require("express").Router();
const userRoutes = require("./userRoute");
const boardRoutes = require("./boardRoute");
// const typeRoutes = require("./typeRoute");
const todoRoutes = require("./todoRoute");

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Todo App API",
  });
});

route.use("/users", userRoutes);
route.use("/boards", boardRoutes);
// route.use("/api/types", typeRoutes);
route.use("/todos", todoRoutes);

module.exports = route;

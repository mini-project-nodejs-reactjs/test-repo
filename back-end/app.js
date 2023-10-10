const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

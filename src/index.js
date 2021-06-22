const express = require("express");
const app = express();
const mongoose = require("mongoose");

//import controllers
const registerRouter = require("./routes/User");

//init express middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// create and initiate the mongo Db
mongoose
  .connect("mongodb://localhost:27017/testDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongo DB connected successfully"))
  .catch(() => console.log("Could not connect the database"));

//use controllers
app.use("/api", registerRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const user = require("./userSchema");
const createRoute = require("./routes/create");
const readRoute = require("./routes/read");
const updateRoute = require("./routes/update");
const deleteRoute = require("./routes/delete");

mongoose
  .connect("mongodb://localhost/database")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(express.json())
app.use("/create", createRoute);
app.use("/read", readRoute);
app.use("/update", updateRoute);
app.use("/delete", deleteRoute);

app.listen(3000, () => {
  console.log("Listening to the port")
})

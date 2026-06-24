const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("Home");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);

const express = require("express");
const helmet = require("helmet");
const userRouter = require("./users/users-router");
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.json({
    message: "this is the server"
  });
});

server.use("/users", userRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong with server"
  });
});

server.listen(8080, () => {
  console.log("http://localhost:", 8080);
});

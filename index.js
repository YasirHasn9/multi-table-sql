const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.json({
    message: "this is the server"
  });
});

server.listen(8080, () => {
  console.log("http://localhost:", 8080);
});

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

const indexViewPath = path.join(__dirname, "views", "index.html");
app.get("/", (req, res) => {
  res.sendFile(indexViewPath);
});

app.listen(PORT, () => {
  console.log("server running");
});

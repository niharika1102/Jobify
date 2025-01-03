import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello hooman");
});

app.listen(5100, () => {
  console.log("Server listening on port 5100");
});

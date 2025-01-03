import express from "express";

const app = express();
app.use(express.json()); //middleware setup

app.get("/", (req, res) => {
  res.send("Hello hooman");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.listen(5100, () => {
  console.log("Server listening on port 5100");
});

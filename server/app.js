import express from "express";

const app = express();
const port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.status(200).json("Your home route");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

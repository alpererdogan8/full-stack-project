import express from "express";
import albums from "./routes/albums.js";

const PORT = process.env.PORT;

const app = express();

app.use("/albums", albums);

app.get("/", (req, res) => {
  res.redirect("/albums");
});

app.listen(PORT, () => {
  console.log(`Starting http://localhost:${PORT}`);
});

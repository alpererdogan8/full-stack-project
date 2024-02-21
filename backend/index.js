import express from "express";
import albums from "./routes/albums.js";
import search from "./routes/search.js";

const PORT = process.env.PORT;

const app = express();

app.use("/", search);
app.use("/albums", albums);

app.listen(PORT, () => {
  console.log(`Starting http://localhost:${PORT}`);
});

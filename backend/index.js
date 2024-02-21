import express from "express";
import { rateLimit } from "express-rate-limit";
import albums from "./routes/albums.js";
import search from "./routes/search.js";
const PORT = process.env.PORT;

const app = express();
const limiter = rateLimit({
  message: "too many requests, please wait a bit",
  windowMs: 10000, // 10 second
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: true,
});

app.use(limiter);

app.use("/", search);
app.use("/albums", albums);

app.listen(PORT, () => {
  console.log(`Starting http://localhost:${PORT}`);
});

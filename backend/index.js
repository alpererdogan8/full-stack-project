import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import albums from "./routes/albums.js";
import search from "./routes/search.js";

const PORT = process.env.PORT;

const app = express();
const apiUrl = process.env.NODE_ENV === "production" ? process.env.CORS_URL_PROD : process.env.CORS_URL_DEV;
app.set("trust proxy", 1);

console.log(process.env.NODE_ENV);
console.log(apiUrl);

/**
 * Actually I could not include it in cors in Render.com (hosting)
 * Although I added it to Environment
 */
app.use(
  cors({
    origin: ["https://full-stack-project-sigma.vercel.app"],
  }),
);
const limiter = rateLimit({
  message: "too many requests, please wait a bit",
  windowMs: 10000, // 10 second
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
app.use(limiter);

app.use("/", search);
app.use("/albums", albums);

app.get("/", (req, res) => {
  res.redirect("/albums");
});

app.listen(PORT, () => {
  console.log(`Starting ${apiUrl}`);
});

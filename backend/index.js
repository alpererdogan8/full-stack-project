import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import albums from "./routes/albums.js";
import search from "./routes/search.js";

const PORT = process.env.PORT;

const app = express();
const apiUrl = process.env.NODE_ENV === "production" ? process.env.CORS_URL_PROD : process.env.CORS_URL_DEV;
app.set("trust proxy", 1);
app.use((req, res, next) => {
  res.header("Contet-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", [apiUrl]);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
console.log(process.env.NODE_ENV);
console.log(apiUrl);
app.use(cors({ origin: [apiUrl], credentials: true, methods: ["GET", "POST", "PUT", "DELETE"] }));
const limiter = rateLimit({
  message: "too many requests, please wait a bit",
  windowMs: 10000, // 10 second
  limit: 10,
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
  console.log(`Starting http://localhost:${PORT}`);
});

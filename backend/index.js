import express from "express";

const PORT = process.env.PORT;

const app = express();
app.get("/", (req, res) => {
  res.json({ ok: 200 });
});

app.listen(PORT, () => {
  console.log(`Starting http://localhost:${PORT}`);
});

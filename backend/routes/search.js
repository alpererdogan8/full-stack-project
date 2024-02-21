import { Router } from "express";
import SearchService from "../services/SearchService.js";

const search = Router();

search.get("/", async (req, res) => {
  try {
    const { type, search } = req.query;
    if (type === undefined && search === undefined) {
      return res.redirect("/albums");
    }
    const { data } = await SearchService.query(type, search);
    res.send(data);
  } catch (error) {
    console.error("Error during search:", error.message);
    res.status(403).send({ error: "An error occurred during the search process." });
  }
});

export default search;

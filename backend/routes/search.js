import { Router } from "express";
import { paginate } from "../middlewares/paginationMiddleware.js";
import SearchService from "../services/SearchService.js";

const search = Router();

search.get("/search", async (req, res) => {
  try {
    const { type, search } = req.query;
    if (type === undefined && search === undefined) {
      return res.redirect("/albums");
    }
    const { data } = await SearchService.query(type, search);

    // console.log(data[0].photos);
    paginate(data[0].photos)(req, res, () => {
      res.json({ title: data[0].title, ...res.paginatedResults });
    });
    // res.json(data[0].photos);
  } catch (error) {
    console.error("Error during search:", error.message);
    res.status(403).json({ error: "An error occurred during the search process." });
  }
});

export default search;

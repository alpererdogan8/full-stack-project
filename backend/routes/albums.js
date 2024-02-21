import { Router } from "express";
import { paginate } from "../middlewares/paginationMiddleware.js";
import AlbumsService from "../services/AlbumsService.js";

const albums = Router();

albums.get("/", async (req, res) => {
  try {
    const { data } = await AlbumsService.getAlbums();
    const { type, search } = req.query;
    console.log(type, search);

    paginate(data)(req, res, () => {
      res.json(res.paginatedResults);
    });
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

albums.get("/:albumId", async (req, res) => {
  const { albumId } = req.params;
  const { data } = await AlbumsService.getPicturesOfAlbums({ albumId });
  paginate(data)(req, res, () => {
    res.json(res.paginatedResults);
  });
});
albums.get("/:albumId/photos/:photoId", async (req, res) => {
  const { albumId, photoId } = req.params;
  const data = await AlbumsService.getSingleImageDetails({ albumId, photoId });
  res.json(data);
});

export default albums;

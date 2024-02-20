import { Router } from "express";
import AlbumsService from "../services/AlbumsService.js";
import CommentsService from "../services/CommentsService.js";

const albums = Router();

albums.get("/", async (req, res) => {
  const { data } = await AlbumsService.getAlbums();

  res.json({ data });
});

albums.get("/:albumId", async (req, res) => {
  const { albumId } = req.params;
  const { data } = await AlbumsService.getPicturesOfAlbums({ albumId });
  res.json({ albums: data });
});
albums.get("/:albumId/photos/:photoId", async (req, res) => {
  const { albumId, photoId } = req.params;
  const data = await AlbumsService.getSingleImageDetails({ albumId, photoId });
  res.json({ albums: data });
});

export default albums;

import API from "../API/ApiServices.js";
import BaseService from "./BaseService.js";
import CommentsService from "./CommentsService.js";

class AlbumsService extends BaseService {
  constructor(APIConfig) {
    super(APIConfig);
  }
  /**
   * JSONPlaceHolder's albums call all of them
   * @returns {Promise}
   */
  async getAlbums() {
    return this.get("/albums");
  }
  /** Retrieves JSONPlaceHolder's album by id and retrieves photos related to the albums id
   * @param {object} params  Calls request according to album id
   * @param {string} params.albumId Calls request according to album id
   * @returns {Promise} Returns an object
   */
  async getPicturesOfAlbums({ albumId }) {
    return this.get(`/albums/${albumId}/photos`);
  }
  /** Retrieves details of a single image from a specific album.
   * @param {Object} params - The parameters for fetching image details.
   * @param {string} params.albumId - The ID of the album containing the image.
   * @param {string} params.photoId - The ID of the image to retrieve.
   * @returns {Promise} A promise that resolves with the details of the specified image.
   */
  async getSingleImageDetails({ albumId, photoId }) {
    const { data } = await this.get(`/albums/${albumId}/photos?id=${photoId}`);
    if (!data.length) return [];
    const comments = await CommentsService.getComment();
    return { ...data[0], comments };
  }
}

export default new AlbumsService(API);

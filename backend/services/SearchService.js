import API from "../API/ApiServices.js";
import BaseService from "./BaseService.js";

class SearchService extends BaseService {
  constructor(APIConfig) {
    super(APIConfig);
  }
  /**
   * @param {"albums"| "albums-photos" | "photos"} searchType - The type of search (either "albums" or "photos").
   * @param {string} searchText - The text to search.
   * @returns {Promise<void>} - A Promise that resolves when the query is complete.
   */
  async query(searchType, searchText) {
    switch (searchType) {
      case "albums":
        return this.get(`/${searchType}?q=${searchText}`);
      case "albums-photos":
        return this.get(`/albums?_embed=photos&q=${searchText}`);
      case "photos":
        return this.get(`/${searchType}?q=${searchText}`);

      default:
        throw new Error("Invalid searchType. It should be either 'albums' or 'photos'.");
    }
  }
}

export default new SearchService(API);

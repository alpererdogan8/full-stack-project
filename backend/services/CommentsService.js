import API from "../API/ApiServices.js";
import BaseService from "./BaseService.js";

class CommentsService extends BaseService {
  constructor(APIConfig) {
    super(APIConfig);
    this.numberOfRandomComments = Math.floor(Math.random() * 30) + 1;
    this.commentList = [];
  }
  async getComment() {
    for (let i = 1; i <= this.numberOfRandomComments; i++) {
      const { data } = await this.get(`/comments/${i}`);

      this.commentList.push(data);
    }
    this.numberOfRandomComments = 0;
    return this.commentList;
  }
}

export default new CommentsService(API);

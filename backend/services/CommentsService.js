import API from "../API/ApiServices.js";
import BaseService from "./BaseService.js";

class CommentsService extends BaseService {
  constructor(APIConfig) {
    super(APIConfig);
    this.numberOfRandomComments = Math.floor(Math.random() * 50) + 1;
    this.randomCommentId =
      Math.floor(Math.random() * (500 - this.numberOfRandomComments)) + this.numberOfRandomComments + 1;
    this.commentList = [];
  }
  async getComment() {
    for (let i = 0; i < this.numberOfRandomComments; i++) {
      const commentId = this.randomCommentId;
      const { data: comment } = await this.get(`/comments/${commentId}`);
      this.commentList.push(comment);
    }
    return this.commentList;
  }
}

export default new CommentsService(API);

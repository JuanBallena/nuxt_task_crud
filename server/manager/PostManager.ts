import { postRepository } from "../repository/PostRepository";

export default class PostManager {

  public async getPosts() {
    return await postRepository.findAll();
  }

  public async updatePostLikes(likes: number, idPost: number) {
    return await postRepository.updatePostLikes(likes, idPost);
  }
}

export const postManager = new PostManager();
import { Request, Response } from "express";
import { postManager } from '../manager/PostManager';

class PostController {

  public async index(req: Request, res: Response) {

    const response = await postManager.getPosts();
    res.json(response);
  
  }

  public async store(req: Request, res: Response) {

    const { likes, idPost } = req.body;
    const response = await postManager.updatePostLikes(likes, idPost);
    res.json(response);
  
  }
}

export const postController = new PostController();
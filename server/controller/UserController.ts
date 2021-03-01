import { Request, Response } from "express";
import { userManager } from '../manager/UserManager';

class UserController {

  public async index(req: Request, res: Response) {

    const response = await userManager.getUsers();
    res.json(response);
  
  }

  public async show(req: Request, res: Response) {
    
    const id = req.params.id;
    const response = await userManager.getUser(id);
    res.json(response);
  
  }
}

export const userController = new UserController();
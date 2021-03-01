import { userRepository } from "../repository/UserRepository";

export default class UserManager {

  public async getUsers() {
    return await userRepository.findAll();
  }

  public async getUser(id: string) {
    return await userRepository.findByIdUser(id);
  }
}

export const userManager = new UserManager();
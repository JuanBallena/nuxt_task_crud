export default class User {
  id: number
  username: string
  email: string
  state: number

  constructor(
    id: number,
    username: string,
    email: string,
    state: number
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.state = state;
  }

  public getState(): string {
    return this.state == 0 ? 'Inactivo' : 'Activo';
  }

  public getStateColor(): string {
    return this.state == 0 ? 'danger' : 'success';
  }
}

export function toUserModel(dataUserApi: any): User {
  const user = new User(
    dataUserApi['User_Id'],
    dataUserApi['User_Username'],
    dataUserApi['User_Email'],
    dataUserApi['User_State']
  );
  
  return user;
}
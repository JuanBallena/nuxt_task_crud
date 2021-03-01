import MySQL from "../database/index";

class UserRepository {

  public result: any[][] = []; 

  public async findAll() {

    const connection = await MySQL.instance.getConnection();
    this.result = await connection.execute(`
      SELECT * 
      FROM users`
    );

    connection.end();
    return this.result[0];
  }

  public async findByIdUser(id: string) {

    const connection = await MySQL.instance.getConnection();

    this.result = await connection.execute(`
      SELECT * 
      FROM users u 
      WHERE u.User_Id = ${id}
    `);
    connection.end();
    return this.result[0][0];

  }
}

export const userRepository = new UserRepository();
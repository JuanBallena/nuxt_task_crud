import MySQL from "../database/index";

class CommentRepository {

  public result: any[][] = []; 

  // public async findAll() {

  //   const connection = await MySQL.instance.getConnection();
  //   this.result = await connection.execute(`
  //     SELECT * 
  //     FROM users`
  //   );
  //   return this.result[0];
  // }

  public async findByIdPost(idPost: string) {

    const connection = await MySQL.instance.getConnection();

    this.result = await connection.execute(`
      SELECT * 
      FROM comments c
      WHERE c.Comment_IdPost = ${idPost}
    `);

    connection.end();

    return this.result[0];

  }
}

export const commentRepository = new CommentRepository();
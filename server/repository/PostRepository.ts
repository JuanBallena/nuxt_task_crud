import MySQL from "../database/index";
import { commentRepository } from './CommentRepository';

class PostRepository {

  public queryResult: any[][] = [];
  public comments: any[] = [];

  public async findAll() {

    const connection = await MySQL.instance.getConnection();
    this.queryResult = await connection.execute(`
      SELECT * 
      FROM posts`
    );

    connection.end();

    const posts = this.queryResult[0];
    var data: object[] = [];

    for (var post of posts) {
      this.comments = await commentRepository.findByIdPost(post['Post_Id']);

      data.push({
        ...post,
        comments: this.comments
      });
    }
    return data;
  }

  public async updatePostLikes(likes: number, idPost: number) {

    const connection = await MySQL.instance.getConnection();
    this.queryResult = await connection.execute(`
      UPDATE posts p
      SET p.Post_Likes = ${ likes }
      WHERE p.Post_Id = ${ idPost }`
    );
    connection.end();

    // console.log(this.queryResult);
  }
}

export const postRepository = new PostRepository();
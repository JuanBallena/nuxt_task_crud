export default class Comment {
  id: number
  idPost: number
  body: string

  constructor(
    id: number,
    idPost: number,
    body: string
  ) {
    this.id = id;
    this.idPost = idPost;
    this.body = body;
  }
}

export function toCommentModel(data: any): Comment {
  const comment = new Comment(
    data['Comment_Id'],
    data['Comment_IdPost'],
    data['Comment_Body']
  );
  
  return comment;
}
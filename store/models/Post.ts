import Comment from "./Comment";
import { toCommentModel } from "./Comment";

export default class Post {
  id: number
  title: string
  description: string
  state: number
  likes: number
  comments: Comment[]

  constructor(
    id: number,
    title: string,
    description: string,
    state: number,
    likes: number,
    comments: Comment[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
    this.likes = likes;
    this.comments = comments
  }

  public getState(): string {
    return this.state == 1 ? 'Destacado' : 'Nuevo';
  }

  public getStateColor(): string {
    return this.state == 1 ? 'warning' : 'success';
  }
}

export function toPostModel(data: any): Post {

  const comments: Comment[] = [];

  data['comments'].forEach((comment: any) => {
    comments.push(toCommentModel(comment));
  })

  const post = new Post(
    data['Post_Id'],
    data['Post_Title'],
    data['Post_Description'],
    data['Post_State'],
    data['Post_Likes'],
    comments
  );
  
  return post;
}
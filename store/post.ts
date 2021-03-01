import axios from 'axios';
import Post from './models/Post';
import { toPostModel } from './models/Post';

export const state = () => ({
  
  posts: [] as Post[]
});

export const mutations = {
  
  SET_POSTS(state: any, data: []): void {
    state.posts = [];
    data.forEach( (post) => {
      state.posts.push(toPostModel(post));
    });
  }
}

export const actions = {

  async getPosts({ commit }: any): Promise<void> {
    const { data } = await axios.get('http://localhost:4000/api/posts');
    commit('SET_POSTS', data);
  },

  async addReaction({ commit }: any, dataPost: object): Promise<void> {

    // console.log(dataPost);

    await axios.post('http://localhost:4000/api/posts', dataPost);


    // commit('SET_POSTS', data);
  }
}

export const getters = {

  getPosts(state: any): Array<Post> {
    return state.posts;
  }
};
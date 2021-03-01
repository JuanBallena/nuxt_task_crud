import axios from 'axios';
import User from './models/User';
import { toUserModel } from './models/User';

export const state = () => ({
  
  users: [] as User[],
  user: {} as User
});

export const mutations = {
  
  SET_USERS(state: { users: User[] }, data: any[]): void {
    state.users = [];
    data.forEach( (user) => {
      state.users.push(toUserModel(user));
    });
    console.log(state.users);
  },

  SET_USER(state: { user: User }, data: any): void {
    state.user = toUserModel(data);
  }
}

export const actions = {

  async getUsers({ commit }: any): Promise<void> {
    const { data } = await axios.get('http://localhost:4000/api/users');
    commit('SET_USERS', data);
  },

  async getUser({ commit }: any, id: number): Promise<void> {
    const { data } = await axios.get(`http://localhost:4000/api/users/${id}`);
    commit('SET_USER', data);
  }
}

export const getters = {

  getUsers(state: any): User[] {
    return state.users;
  },

  getUser(state: any): User {
    return state.user;
  }
};
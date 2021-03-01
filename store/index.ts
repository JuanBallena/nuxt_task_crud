export const state = () => ({
  _counter: 0
});

export const getters = {
  getCounter(state: any): number {
    return state._counter;
  }
};

export const actions = {
  addCounter({ commit }: any): void {
    commit('increment');
  },

  /*
    vuexContext / commit, dispatch, state
    context / acceso a toda la app: app, $axios, env, store
  */

  // async nuxtServerInit({ dispatch }: any, context: any): Promise<void> {
  //   await dispatch('user/loadUsers');
  // }
}

export const mutations = {
  increment(state: any): void {
    state._counter ++;
  }
}


import api from '../../api/posts'

// initial state
const state = {
    posts:[]
}

// getters
const getters = {
    getPosts(state){
        return state.posts;
    }
}

// actions
const actions = {
    fetchPosts({commit}){
        api.getPosts( posts => {
            commit('savePosts',{posts});
        });
    }
  
}

// mutations
const mutations = {
  savePosts(state, {posts}){
    state.posts = posts;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

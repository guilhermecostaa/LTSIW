import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: 0
  },
  mutations: {
    USER_LOGGED_IN(state, id) {
      state.loggedUserId = id;
    },
    USER_LOGGED_OUT(state) {
      state.loggedUserId = 0;
    },
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  getters: {
    getUserByNumber: state => number => {
      return state.users.find(user => user.number === number);
    },
    getUsers: state => {
      return state.users;
    },
    getLoggedUserId: state => {
      return state.loggedUserId;
    },
    getUserById: state => id => {
      return state.users.find(user => user.id === id);
    },
    getLoggedUsernameById: state => id => {
      let name = "";
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users.id) {
          name = state.users[i].name;
        }
      }
      return name;
    },
    getUserTypeById: state => id => {
      let type = "";
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users[i].id) {
          type = state.users[i].userType;
        }
      }
      
      return type;
    }
  }
})

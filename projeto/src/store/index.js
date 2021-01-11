import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: 0,
    activities: [],
    ucs: []
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
    },
    ADD_USER(state, user) {
      state.users.push(user)
    },
    REMOVE_USER_BY_ID(state, payload) {
      let index = state.users.findIndex(user => user.id === payload)
      state.users.splice(index, 1)
    },
    ADD_UC(state, uc) {
      state.ucs.push(uc)
    },
    SET_UCS(state, ucs) {
      state.ucs = ucs;
    },
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
        if (id === state.users[i].id) {
          name = state.users[i].name;
        }
      }
      return name;
    },
    getUserNextID: state => {
      if (state.users.length === 0) {
        return 1
      } else {
        return state.users[state.users.length - 1].id + 1
      }
    },
    getUserTypeById: state => id => {
      let type = "";
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users[i].id) {
          type = state.users[i].userType;
        }
      }
      return type;
    },
    getUsersByUserType: state => userType => {
      return state.users.filter(user => user.userType == userType);
    },
    getUcs: state => {
      return state.ucs
    },
    getUcNextId: state => {
      if (state.ucs.length === 0) {
        return 1
      } else {
        return state.ucs[state.ucs.length - 1].id + 1
      }
    },
    getUcByName: state => name => {
      return state.ucs.find(uc => uc.name === name)
    },
    getActivities: state => {
      return state.activities
    },
  }
})

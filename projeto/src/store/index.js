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
    getUserTypeById: state => id => {
      let type = "";
      for (let i = 0; i < state.users.length; i++) {
        if (id === state.users[i].id) {
          type = state.users[i].userType;
        }
      }
      return type;
    },
    getTeachersByUserType: state => userType => {
      return state.users.filter(user => user.userType == userType).name;
    },
    getUcs: state => {
      return state.ucs
    },
    getActivities: state => {
      return state.activities
    },
  }
})

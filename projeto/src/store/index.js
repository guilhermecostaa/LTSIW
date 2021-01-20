import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: 0,
    activities: [],
    ucs: [],
    grades: []
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
    REMOVE_UC_BY_ID(state, payload) {
      let index = state.ucs.findIndex(uc => uc.id === payload)
      state.ucs.splice(index, 1)
    },
    ADD_ACTIVITY(state, activity) {
      state.activities.push(activity)
    },
    SET_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
    REMOVE_ACTIVITY_BY_ID(state, payload) {
      let index = state.activities.findIndex(activity => activity.id === payload)
      state.activities.splice(index, 1)
    },
    SET_GRADES(state, grades) {
      state.grades = grades
    },
    ADD_GRADE(state, grade) {
      state.grades.push(grade)
    },
    REMOVE_GRADE_BY_ID(state, payload) {
      let index = state.grades.findIndex(grade => grade.id === payload)
      state.grades.splice(index, 1)
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
    getUsersByName: state => name => {
      return state.users.filter(user => user.name == name);
    },
    getFilterUser: state => name => number => {
      return state.users.filter(
        user => {
          let filterNameResult = true
          let filterNumberResult = true

          // Filter name
          if (state.users.name !== "") {
            filterNameResult = user.name === name
          }

          // Filter number                    
          if (state.users.number !== "") {
            filterNumberResult = user.number === number
          }

          // return the conjunction of the two filters
          return filterNameResult && filterNumberResult
        }
      )
    },
    getUcs: state => {
      return state.ucs
    },
    getUcById: state => id => {
      return state.ucs.find(uc => uc.id === id)
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
    getStudentsByUc: state => uc => {
      return state.users.filter(user => user.ucs.some(userUc => userUc == uc))
    },
    getActivities: state => {
      return state.activities
    },
    getActivityByName: state => name => {
      return state.activities.find(activity => activity.name === name)
    },
    getActivityNextId: state => {
      if (state.activities.length === 0) {
        return 1
      } else {
        return state.activities[state.activities.length - 1].id + 1
      }
    },
    getGrades: state => {
      return state.grades
    },
    getGradeNextId: state => {
      if (state.grades.length === 0) {
        return 1
      } else {
        return state.grades[state.grades.length - 1].id + 1
      }
    },
    getStudentsByUserType: state => userType => {
      return state.users.filter(user => user.userType == userType)
    }
  }
})

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: 0,
    activities: [],
    ucs: [],
    grades: [],
    typeActivities: []
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
    },
    ADD_USER_TO_ACTIVITY(state, payload) {
      let index = state.users.findIndex(user => user.id === state.loggedUserId)
      state.users[index].activities.push(payload)
    },
    SET_TYPE_ACTIVITIES(state, typeActivities) {
      state.typeActivities = typeActivities
    },
    EDIT_USER_BY_ID(state, payload) {
      const { user } = payload
      state.users.forEach(stateUser => {
        if (stateUser.id == user.id) {
          stateUser.name = user.name
          stateUser.password = user.password
          stateUser.number = user.number
          stateUser.userType = user.userType
        }
      })
    },
    EDIT_UC_BY_ID(state, payload) {
      const { uc } = payload
      state.ucs.forEach(stateUc => {
        if (stateUc.id == uc.id) {
          stateUc.name = uc.name
          stateUc.teacher = uc.teacher
          stateUc.year = uc.year
          stateUc.semester = uc.semester
        }
      })
    },
    EDIT_ACTIVITY_BY_ID(state, payload) {
      const { activity } = payload
      state.activities.forEach(stateActivity => {
        if (stateActivity.id == activity.id) {
          stateActivity.name = activity.name
          stateActivity.type = activity.type
          stateActivity.description = activity.description
          stateActivity.classroom = activity.classroom
          stateActivity.hourStart = activity.hourStart
          stateActivity.hourEnd = activity.hourEnd
          stateActivity.dateStart = activity.dateStart
          stateActivity.durationDays = activity.durationDays
          stateActivity.photo = activity.photo
        }
      })
    },
    EDIT_GRADE_BY_ID(state, payload) {
      const { grade } = payload
      state.grades.forEach(stateGrade => {
        if (stateGrade.id == grade.id) {
          stateGrade.uc = grade.uc
          stateGrade.student = grade.student
          stateGrade.grade = grade.grade
        }
      })
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
    getActivityById: state => id => {
      return state.activities.find(activity => activity.id === id)
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
    getTypeActivities: state => {
      return state.typeActivities
    },
    getGrades: state => {
      return state.grades
    },
    getGradeById: state => id => {
      return state.grades.find(grade => grade.id === id)
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
    },
    getUserGradesByIdStudent: state => idStudent => {
      return state.grades.filter(grade => grade.idStudent == idStudent) 
    },
    getTypeActivityNameById: state => id => {
      let name = "";
      for (let i = 0; i < state.typeActivities.length; i++) {
        if (id === state.typeActivities[i].id) {
          name = state.typeActivities[i].name;
        }
      }
      return name;
    },
    getUcYearById: state => id => {
      let year = "";
      for (let i = 0; i < state.ucs.length; i++) {
        if (id === state.ucs[i].id) {
          year = state.ucs[i].year;
        }
      }
      return year;
    },
    getUcSemesterById: state => id => {
      let semester = "";
      for (let i = 0; i < state.ucs.length; i++) {
        if (id === state.ucs[i].id) {
          semester = state.ucs[i].semester;
        }
      }
      return semester;
    },
    getUserActivitiesById: state => id => {
      return state.users.find(user => user.id == id).activities || []
    }
  }
})

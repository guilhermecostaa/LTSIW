<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import data from "@/store/data.js";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  created() {
    window.addEventListener("beforeunload", () => {
      this.$destroy();
    });
    if (!localStorage.users) {
      localStorage.users = JSON.stringify(data.users);
      this.SET_USERS(data.users);
    } else {
      this.SET_USERS(JSON.parse(localStorage.users));
    }
    if (!localStorage.ucs) {
      localStorage.ucs = JSON.stringify(data.ucs);
      this.SET_UCS(data.ucs);
    } else {
      this.SET_UCS(JSON.parse(localStorage.ucs));
    }
    if (!localStorage.activities) {
      localStorage.activities = JSON.stringify(data.activities);
      this.SET_ACTIVITIES(data.activities);
    } else {
      this.SET_ACTIVITIES(JSON.parse(localStorage.activities));
    }
    if (!localStorage.typeActivities) {
      localStorage.typeActivities = JSON.stringify(data.typeActivities);
      this.SET_TYPE_ACTIVITIES(data.typeActivities);
    } else {
      this.SET_TYPE_ACTIVITIES(JSON.parse(localStorage.typeActivities));
    }
    if (!localStorage.grades) {
      localStorage.grades = JSON.stringify(data.grades);
      this.SET_GRADES(data.grades);
    } else {
      this.SET_GRADES(JSON.parse(localStorage.grades));
    }
    if (localStorage.loggedUserId) {
      this.USER_LOGGED_IN(parseInt(localStorage.loggedUserId));
    }
  },
  destroyed() {
    localStorage.users = JSON.stringify(this.getUsers);
    localStorage.ucs = JSON.stringify(this.getUcs);
    localStorage.activities = JSON.stringify(this.getActivities);
    localStorage.grades = JSON.stringify(this.getGrades);
    localStorage.loggedUserId = JSON.stringify(this.getLoggedUserId);
    localStorage.typeActivities = JSON.stringify(this.getTypeActivities);
  },
  methods: {
    ...mapMutations([
      "SET_USERS",
      "USER_LOGGED_IN",
      "SET_UCS",
      "SET_ACTIVITIES",
      "SET_GRADES",
      "SET_TYPE_ACTIVITIES"
    ])
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getLoggedUserId",
      "getUcs",
      "getActivities",
      "getGrades",
      "getTypeActivities"
    ])
  }
};
</script>



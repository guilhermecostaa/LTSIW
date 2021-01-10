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
    if (localStorage.loggedUserId) {
      this.USER_LOGGED_IN(parseInt(localStorage.loggedUserId));
    }
  },
  destroyed() {
    localStorage.users = JSON.stringify(this.getUsers);
    localStorage.loggedUserId = JSON.stringify(this.getLoggedUserId);
  },
  methods: {
    ...mapMutations(["SET_USERS", "USER_LOGGED_IN"])
  },
  computed: {
    ...mapGetters(["getUsers", "getLoggedUserId"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

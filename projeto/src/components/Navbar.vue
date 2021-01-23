<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" style="heigth: 59px">
    <router-link class="mr-4" id="router"
      :to="(getUserTypeById(getLoggedUserId) == 'admin' || getUserTypeById(getLoggedUserId) == 'teacher') ? {name: 'searchStudents'} : {name: 'students', params:{id: getLoggedUserId}}"
    >LTSIW</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-show="getLoggedUserId == '0' ? false : true">
        <b-nav-item href @click="btnActivitiesClicked">Atividades</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-show="getLoggedUserId == '0' ? false : true">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Olá, {{getLoggedUsernameById(getLoggedUserId)}}</em>
          </template>
          <b-dropdown-item
            href="#"
            @click="btnBackofficeClicked"
            v-show="getUserTypeById(getLoggedUserId) == 'admin' ? true : false"
          >Backoffice</b-dropdown-item>
          <b-dropdown-item
            href="#"
            @click="btnLogoutClicked"
            v-show="getLoggedUserId == '0' ? false : true"
          >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  methods: {
    btnLogoutClicked() {
      this.$swal({
        title: "Tem a certeza?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sair"
      }).then(result => {
        if (result.value) {
          this.$swal("Sessão terminada!", "Até a próxima!", "success");
          this.$store.commit("USER_LOGGED_OUT");
          this.$router.push({ name: "login" });
        }
      });
    },
    btnBackofficeClicked() {
      this.$router.push({ name: "backofficeUsers" });
    },
    btnActivitiesClicked() {
      this.$router.push({ name: "atividades" });
    }
  },
  computed: {
    ...mapGetters([
      "getUserTypeById",
      "getLoggedUserId",
      "getLoggedUsernameById"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#router {
  color: white !important;
}
#router:hover {
  text-decoration: none !important;
}
</style>

<template>
  <!--
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       Right aligned nav items 
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#Home">Home</b-nav-item>

        <b-nav-item-dropdown right>
          Using 'button-content' slot 
          <template v-slot:button-content>
            <em>Área Utilizador</em>
          </template>
          <b-dropdown-item @click="btnPerfilClicked" href="#">Perfil</b-dropdown-item>
          <b-dropdown-item @click="btnLogoutClicked" href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  -->

  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">LTSIW</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="btnBackofficeClicked" v-show="getUserTypeById(getLoggedUserId) == 'admin' ? true : false">Backoffice</b-dropdown-item>
          <b-dropdown-item href="#" @click="btnLogoutClicked">Sign Out</b-dropdown-item>
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
    }
  },
  computed: {
    ...mapGetters(["getUserTypeById", "getLoggedUserId"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

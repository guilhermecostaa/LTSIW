<template>
  <div class="navbar">
    <b-navbar toggleable="lg" type="Light" variant="follow2">
      <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#Home">Home</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Área Utilizador</em>
            </template>
            <b-dropdown-item @click="btnPerfilClicked" href="#">Perfil</b-dropdown-item>
            <b-dropdown-item @click="btnLogoutClicked" href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
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
    btnPerfilClicked() {
      this.$router.push({ name: "backoffice" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-default {
  background-color: #ffac4b !important;
}
.navbar-brand {
  margin-left: 10px;
}
.navbar-brand:hover {
  transform: scale(1.05);
}
.nav-item {
  font-size: 1.05rem;
  color: #cee6df !important;
  font-weight: 600;
  cursor: pointer;
  font-family: Gotham Light;
}
.nav-link:hover {
  color: #ffffff !important;
}
.active-route {
  color: #ffffff !important;
}
#nav-user-logged:hover {
  text-decoration: none !important;
}
.dropdown-item:active {
  background-color: #ffffff;
}
</style>

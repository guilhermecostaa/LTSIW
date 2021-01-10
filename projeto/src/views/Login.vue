<template>
  <div class="login container">
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-number" label="Número" label-for="input-number">
        <b-form-input id="input-number" v-model="form.number" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-password" label="Password" label-for="input-password">
        <b-form-input id="input-password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">LOGIN</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        number: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const user = this.getUserByNumber(this.form.number);
      console.log(user);
      if (user) {
        if (user.password === this.form.password) {
          this.$store.commit("USER_LOGGED_IN", user.id);
          this.form.number = "";
          this.form.password = "";
          this.$swal({
            text: `Bem-vindo ${user.name}!`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
          if (
            this.getUserTypeById(this.getLoggedUserId) == "admin" ||
            this.getUserTypeById(this.getLoggedUserId) == "teacher"
          ) {
            this.$router.push({
              name: "searchStudents",
            });
          } else {
            this.$router.push({
              name: "students",
              params: { id: this.getLoggedUserId }
            });
          }
        }
      } else {
        this.$swal({
          text: "Utilizador não encontrado!",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getUserByNumber", "getLoggedUserId", "getUserTypeById"])
  }
};
</script>

<style scoped>
form {
  text-align: center;
  display: block;
  margin: 230px 0 10px;
}
</style>
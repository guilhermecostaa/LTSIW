<template>
  <div id="container">
    <b-container>
      <b-form @submit.prevent="searchStudent">
        <b-form-group id="input-name" label="Nome" label-for="input-name">
          <b-form-input id="input-name" v-model="form.name" type="text"></b-form-input>
        </b-form-group>

        <b-form-group id="input-number" label="Número" label-for="input-number">
          <b-form-input id="input-number" v-model="form.number" type="text"></b-form-input>
        </b-form-group>

        <b-button class="col-6" type="submit" variant="primary">Procurar</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
export default {
  name: "SearchStudents",
  data() {
    return {
      form: {
        name: "",
        number: ""
      },
      Users: []
    };
  },
  methods: {
    searchStudent() {
      if (!this.form.number && !this.form.name) {
        this.$swal({
          text: "Por favor preencha pelo menos um dos campos",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      }
      if (this.getStudentsByUserType('student')) {
        this.getFilterUser(this.form.name, this.form.number)

       /* console.log(this.getFilterUser(this.form.name, this.form.number))
        this.$router.push({
          name: "students",
          params: { id: this.getFilterUser.id }
        }); */
      } else{
        this.$swal({
          text: "Não existem estudantes",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getUserByNumber",
      "getUsersByName",
      "getFilterUser",
      "getStudentsByUserType"
    ])
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
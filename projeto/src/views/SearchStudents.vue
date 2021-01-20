<template>
  <div id="container">
    <b-container>
      <b-form @submit.prevent="searchStudent">
        <h2>Pesquisar alunos</h2>
        <b-form-group id="input-name" label="Nome" label-for="input-name">
          <b-form-input id="input-name" v-model="form.name" type="text"></b-form-input>
        </b-form-group>

        <b-form-group id="input-number" label="Número" label-for="input-number">
          <b-form-input id="input-number" v-model="form.number" type="text"></b-form-input>
        </b-form-group>

        <b-button class="col-6" type="submit" variant="primary">Procurar</b-button>

        <br />
        <br />
        <div class="dataTable container" v-if="filteredUsers.length > 1">
          <h2>Resultados da pesquisa</h2>
          <DataTable :items="filteredUsers" :fields="['name', 'number', 'userType', 'actions']" type="searchStudent" ></DataTable>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
// @ is an alias to /src
export default {
  name: "SearchStudents",
  components: { DataTable },
  data() {
    return {
      form: {
        name: "",
        number: ""
      },
      filteredUsers: [],
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
      } else {
        this.filteredUsers = this.getFilteredUsers(
          this.form.name,
          this.form.number
        );
        if (!this.filteredUsers.length) {
          this.$swal({
            text: "Não existem estudantes",
            icon: "error",
            timer: 2000,
            showConfirmButton: false
          });
        } else if (this.filteredUsers.length == 1) {
          this.$router.push({
            name: "students",
            params: { id: this.filteredUsers[0].id }
          });
        }
        console.log(this.getFilteredUsers(this.form.name, this.form.number));
      }
    },
    getFilteredUsers(name, number) {
      return this.getUsers.filter(user => {
        if (user.userType === "student") {
          let filterNameResult = true;
          let filterNumberResult = true;

          // Filter name
          if (name !== "") {
            filterNameResult = user.name
              .toLowerCase()
              .includes(name.toLowerCase());
          }

          // Filter number
          if (number !== "") {
            filterNumberResult = user.number === number;
          }

          // return the conjunction of the two filters
          return filterNameResult && filterNumberResult;
        }
        return false;
      });
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
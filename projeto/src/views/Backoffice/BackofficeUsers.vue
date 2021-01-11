<template>
  <div class="addUser container">
    <b-form @submit.prevent="addUser">
      <b-form-group id="input-name" label="Nome" label-for="input-name">
        <b-form-input id="input-name" v-model="form.name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-number" label="Número" label-for="input-number">
        <b-form-input id="input-number" v-model="form.number" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-password" label="Password" label-for="input-password">
        <b-form-input id="input-password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-userType" label="Tipo de Utilizador" label-for="input-userType">
        <div class="form-group">
          <select class="form-control" name id="input-userType" v-model="form.userType">
            <option>admin</option>
            <option>student</option>
            <option>teacher</option>
          </select>
        </div>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">Adicionar</b-button>
    </b-form>

    <br />
    <br />

    <h1>Utilizadores</h1>
    <div class="dataTable container">
      <DataTable :items="getUsers" :fields="['name','number', 'userType', 'actions']" type="users"></DataTable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "BackofficeUsers",
  components: { DataTable },
  data() {
    return {
      form: {
        name: "",
        number: "",
        password: "",
        userType: ""
      },
      Users: []
    };
  },
  methods: {
    addUser() {
      const user = this.getUserByNumber(this.form.number);
      if (user) {
        this.$swal({
          text: "Já existe utilizador com esse número!",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        const newUser = {
          id: this.getUserNextID,
          name: this.form.name,
          number: this.form.number,
          password: this.form.password,
          userType: this.form.userType
        }
        this.$store.commit("ADD_USER", newUser);
        this.form.name = "";
        this.form.number = "";
        this.form.password = "";
        this.form.userType = "";
        this.$swal({
          text: `${newUser.name} Adicionado!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getUserByNumber", "getUsers", "getUserNextID"])
  }
};
</script>

<style scoped>
</style>
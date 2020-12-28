<template>
  <div class="addUser">
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

      <b-form-group id="input-userType" label="User Type" label-for="input-userType">
        <div class="form-group">
          <label for></label>
          <select class="form-control" name id="input-userType" v-model="form.userType">
            <option>Admin</option>
            <option>Student</option>
            <option>Teacher</option>
          </select>
        </div>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "BackofficeUsers",
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
        this.form.name = "";
        this.form.number = "";
        this.form.password = "";
        this.form.userType = "";
        this.$swal({
          text: `${user.name} adicionado!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getUserByNumber"])
  }
};
</script>
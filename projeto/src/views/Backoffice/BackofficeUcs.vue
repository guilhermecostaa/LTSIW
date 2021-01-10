<template>
  <div id="addUc  container">
    <b-form @submit.prevent="addUcs">
      <b-form-group id="input-name" label="Nome" label-for="input-name">
        <b-form-input id="input-name" v-model="form.name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-teacher" label="Professor" label-for="input-teacher">
        <div class="form-group">
          <b-form-select v-model="form.teacher" :options="getTeachersByUserType('teacher')"></b-form-select>
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
  name: "BackofficeUcs",
  data() {
    return {
      form: {
        name: "",
        teacher: ""
      },
      Users: []
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters(["getUserByNumber", "getTeachersByUserType"])
  }
};
</script>
<template>
  <div id="addUc" class="container">
    <b-form @submit.prevent="addUc">
      <b-form-group id="input-name" label="Nome" label-for="input-name">
        <b-form-input id="input-name" v-model="form.name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-teacher" label="Professor" label-for="input-teacher">
        <div class="form-group">
          <b-form-select v-model="form.teacher" :options="getUsersByUserType('teacher').map(teacher => {return {value: teacher.id, text: teacher.name}})" required></b-form-select>
        </div>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">Adicionar</b-button>
    </b-form>

    <br />
    <br />

    <h1>Ucs</h1>
    <div class="dataTable container">
      <DataTable :items="getUcs.map(uc => {return {id: uc.id, name: uc.name, teacher: getUserById(uc.teacher).name, abbreviation: uc.abbreviation}})" :fields="['name','teacher', 'abbreviation', 'actions']" type="ucs"></DataTable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "BackofficeUcs",
  components: { DataTable },
  data() {
    return {
      form: {
        name: "",
        teacher: ""
      },
      Ucs: []
    };
  },
  methods: {
    addUc() {
      const uc = this.getUcByName(this.form.name);
      if (uc) {
        this.$swal({
          text: "Já existe uc com esse nome!",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        const newUc = {
          id: this.getUcNextId,
          name: this.form.name,
          teacher: this.form.teacher,
          abbreviation: this.getAbbreviationByName(this.form.name)
        }
        this.$store.commit("ADD_UC", newUc);
        this.form.name = "";
        this.form.teacher = "";
        this.$swal({
          text: `${newUc.name} Adicionada!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    },
    getAbbreviationByName(name) {
      let data = name.split(' ')
      let output = "";

      for (var i = 0; i < data.length; i++) {
        output += data[i].substring(0, 1);
      }
      return output;
    },
  },
  computed: {
    ...mapGetters(["getUcByName", "getUsersByUserType", "getUcs", "getUcNextId", "getUserById"])
  }
};
</script>
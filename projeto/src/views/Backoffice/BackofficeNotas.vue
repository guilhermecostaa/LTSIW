<template>
  <div id="addGrade" class="container">
    <b-form @submit.prevent="addGrade">
      <b-form-group id="input-uc" label="Uc" label-for="input-uc">
        <div class="form-group">
          <b-form-select
            v-model="form.uc"
            :options="getUcs.map(uc => {return {value: uc.id, text: uc.name}})"
            required
          ></b-form-select>
        </div>
      </b-form-group>

      <b-form-group id="input-student" label="Student" label-for="input-student">
        <div class="form-group">
          <b-form-select
            v-model="form.student"
            :options="getStudentsByUc(form.uc).map(user => {return {value: user.id, text: user.name}})"
            required
          ></b-form-select>
        </div>
      </b-form-group>

      <b-form-group id="input-grade" label="Nota" label-for="input-grade">
        <b-form-input id="input-name" v-model="form.grade" type="number" min="0" max="20" required></b-form-input>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">Adicionar</b-button>
    </b-form>

    <br />
    <br />

    <h1>Notas</h1>
    <div class="dataTable container">
      <DataTable
        :items="getGrades.map(grade => {return {id: grade.id, student: getUserById(grade.idStudent).name, uc: getUcById(grade.idUc).name, grade: grade.grade}})"
        :fields="['student','uc', 'grade', 'actions']"
        type="grades"
      ></DataTable>
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
        uc: "",
        student: "",
        grade: ""
      },
      Ucs: [],
      Grades: []
    };
  },
  methods: {
    addGrade() {
      const studentHasAlreadyGrade = this.getGrades.some(grade => grade.idUc == this.form.uc && grade.idStudent == this.form.student);
      if (studentHasAlreadyGrade) {
        this.$swal({
          text: "Esse estudante já tem nota atribuida",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        const newGrade = {
          id: this.getGradeNextId,
          idStudent: this.form.student,
          idUc: this.form.uc,
          grade: this.form.grade
        };
        this.$store.commit("ADD_GRADE", newGrade);
        this.form.student = "";
        this.form.uc = "";
        this.form.grade = "";
        this.$swal({
          text: `Nota de ${this.getUserById(newGrade.idStudent).name} adicionada!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters([
      "getUcByName",
      "getUsersByUserType",
      "getUcs",
      "getUcNextId",
      "getUserById",
      "getStudentsByUc",
      "getGrades",
      "getUcById"
    ])
  }
};
</script>
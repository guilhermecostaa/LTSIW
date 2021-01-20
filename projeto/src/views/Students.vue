<template>
  <div class="user container">
    <br />
    <br />
    <h1>Perfil de {{getUserById($route.params.id).name}}</h1>
    <br />
    <h2>Dados pessoais:</h2>
    <br />
    <p>Nome: {{getUserById($route.params.id).name}}</p>
    <p>Número: {{getUserById($route.params.id).number}}</p>
    <br />
    <h2>Atividades:</h2>
    <h2>Notas:</h2>
    <p v-if="getUserGradesByIdStudent.length == 0">Este aluno ainda não tem notas</p>
    <div v-else>
      <DataTable
        :items="getUserGradesByIdStudent($route.params.id).map(grade => {return {uc: getUcById(grade.idUc).name, grade: grade.grade}})"
        :fields="['uc', 'grade']"
        type="grades"
      ></DataTable>
    </div>
    <h2>Media:</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "Students",
  components: { DataTable },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["getUserById", "getUserGradesByIdStudent", "getUcById"])
  }
};
</script>

<style scoped>
p {
  text-align: left;
}
h2 {
  text-align: left;
}
</style>
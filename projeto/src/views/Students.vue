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
    <span
      v-if="getUserActivitiesById(parseInt($route.params.id)).length===0"
    >Este aluno ainda não está inscrito em atividades</span>
    <div v-else>
      <div class="cards container">
        <b-row>
          <Card
            v-for="activityId in getUserActivitiesById(parseInt($route.params.id))"
            :key="'activityUser' + activityId"
            :activity="getActivityById(activityId)"
          ></Card>
        </b-row>
      </div>
    </div>
    <h2>Notas:</h2>
    <span v-if="getUserGradesByIdStudent.length == 0">Este aluno ainda não tem notas</span>
    <div v-else>
      <DataTable
        :items="getUserGradesByIdStudent($route.params.id).map(grade => {return {uc: getUcById(grade.idUc).name, year: getUcYearById(grade.idUc), semester: getUcSemesterById(grade.idUc), grade: grade.grade}})"
        :fields="['uc', 'year', 'semester', 'grade']"
        type="grades"
      ></DataTable>
    </div>
    <h2>Media:</h2>
    <table>
      <tr>
        <th>Year</th>
        <th>Average</th>
      </tr>
      <tr :key="'Average' + year" v-for="year in 3">
        <td>{{ year }}</td>
        <td>{{ getStudentAveragePerYear($route.params.id, year + 1) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Students",
  components: { DataTable, Card },
  data() {
    return {};
  },
  created() {
    console.log(this.getStudentAveragePerYear(2, 2));
  },
  methods: {
    getStudentAveragePerYear(idStudent, year){
      let sum = 0;
      let grades = 0;
      for(let i = 0; i< this.getGrades.length; i++) {
        const grade = this.getGrades[i]
        if (this.getUcById(grade.id).year === year && grade.idStudent === idStudent) {
          sum += grade.grade
          grades++
        }
      }
        return sum / grades
    }
  },
  computed: {
    ...mapGetters([
      "getUserById",
      "getUserGradesByIdStudent",
      "getUcById",
      "getUcSemesterById",
      "getUcYearById",
      "getUserActivitiesById",
      "getActivityById",
      "getGrades"
    ])
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
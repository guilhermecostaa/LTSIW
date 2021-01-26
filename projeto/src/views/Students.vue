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
            type="studentPage"
            :activity="getActivityById(activityId)"
          ></Card>
        </b-row>
      </div>
    </div>
    <h2>Notas:</h2>
    <span
      v-if="getUserGradesByIdStudent(parseInt($route.params.id)).length == 0"
    >Este aluno ainda não tem notas</span>
    <div v-else>
      <DataTable
        :items="getUserGradesByIdStudent($route.params.id).map(grade => {return {uc: getUcById(grade.idUc).name, year: getUcYearById(grade.idUc), semester: getUcSemesterById(grade.idUc), grade: grade.grade}})"
        :fields="['uc', 'year', 'semester', 'grade']"
        type="grades"
      ></DataTable>
    </div>
    <h2>Media:</h2>
    <div>
      <b-table striped hover :items="getAverage"></b-table>
    </div>
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
    return {
      average: []
    };
  },
  created() {
    this.average = this.getStudentAverage(this.$route.params.id);
  },
  methods: {
    getStudentAverage(idStudent) {
      const studentGradesList = this.getGrades
        .filter(grade => grade.idStudent == idStudent)
        .map(grade => {
          const uc = this.getUcById(grade.idUc);
          return {
            year: uc.year,
            grade: grade.grade
          };
        });
      const average = [
        {
          total: 0,
          quantity: 0
        },
        {
          total: 0,
          quantity: 0
        },
        {
          total: 0,
          quantity: 0
        },
        {
          total: 0,
          quantity: 0
        }
      ];
      for (let i = 0; i < studentGradesList.length; i++) {
        const grade = studentGradesList[i];
        average[grade.year - 1].total += grade.grade;
        average[grade.year - 1].quantity++;
        average[3].total += grade.grade;
        average[3].quantity++
      }
      return average.map(year =>
        isNaN(year.total / year.quantity) ? 0 : year.total / year.quantity
      );
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
    ]),
    getAverage() {
      return [
        { year: 1, average: this.average[0] },
        { year: 2, average: this.average[1] },
        { year: 3, average: this.average[2] },
        { year: "Final", average: this.average[3].toFixed(1) }
      ];
    }
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
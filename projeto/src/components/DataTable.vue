<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input v-model="filter" type="search" placeholder="Procurar"></b-form-input>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <b-table
          :bordered="bordered"
          :hover="hover"
          :items="items"
          :fields="fields"
          :filter="filter"
          :perPage="perPage"
          :currentPage="currentPage"
          @row-selected="$emit('clicked-student', 1)"
        >
          <template v-slot:cell(actions)="data">
            <b-button
              class="mr-2"
              v-if="type != 'searchStudent'"
              variant="primary"
              @click="editItem(data.item.id)"
            >Edit</b-button>
            <b-button
              v-if="type != 'searchStudent'"
              variant="danger"
              @click="deleteItem(data.item.id)"
            >Delete</b-button>
            <b-button
              v-if="type == 'searchStudent'"
              variant="primary"
              @click="searchStudent(data.item.id)"
            >Ver</b-button>
          </template>
        </b-table>
        <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
      </b-col>
    </b-row>

    <b-modal ref="mdlupdate" v-model="modal" hide-footer>
      <div class="d-block text-center">
        <!-- Form de users-->
        <b-form @submit.prevent="updateUser()" v-if="type == 'users'">
          <label for="txtName">Nome:</label>
          <b-form-input type="text" id="txtName" v-model="frm.edit.user.name" required />
          <br />
          <label for="txtPassword">Password:</label>
          <b-form-input type="password" id="txtPassword" v-model="frm.edit.user.password" required />
          <br />
          <label for="txtNumber">Número:</label>
          <b-form-input type="text" id="txtNumber" v-model="frm.edit.user.number" required />
          <br />
          <label for="txtUserType">Tipo de utilizador:</label>
          <select class="form-control" name id="input-userType" v-model="frm.edit.user.userType">
            <option>admin</option>
            <option>student</option>
            <option>teacher</option>
          </select>
          <br />
          <b-button class="mr-2 mt-2" variant="primary" type="submit" block>Update</b-button>
        </b-form>

        <!-- Form de ucs-->
        <b-form @submit.prevent="updateUc()" v-if="type == 'ucs'">
          <label for="txtName">Nome:</label>
          <b-form-input type="text" id="txtName" v-model="frm.edit.uc.name" required />
          <br />
          <label for="txtPassword">Professor:</label>
          <b-form-select
            v-model="frm.edit.uc.teacher"
            :options="getUsersByUserType('teacher').map(teacher => {return {value: teacher.id, text: teacher.name}})"
            required
          ></b-form-select>
          <br />
          <label for="txtYear">Ano:</label>
          <b-form-input
            id="input-year"
            v-model="frm.edit.uc.year"
            type="number"
            min="0"
            max="3"
            required
          ></b-form-input>
          <br />
          <label for="txtSemester">Semestre:</label>
          <b-form-input
            id="input-semester"
            v-model="frm.edit.uc.semester"
            type="number"
            min="0"
            max="2"
            required
          ></b-form-input>
          <br />
          <b-button class="mr-2 mt-2" variant="primary" type="submit" block>Update</b-button>
        </b-form>

        <!-- Form de Atividades-->
        <b-form @submit.prevent="updateActivity()" v-if="type == 'activities'">
          <label for="txtName">Nome:</label>
          <b-form-input type="text" id="txtName" v-model="frm.edit.activity.name" required />
          <br />
          <label for="txtPassword">Tipo de Atividade:</label>
          <b-form-select
            v-model="frm.edit.activity.type"
            :options="getTypeActivities.map(type => {return {value: type.id, text: type.name}})"
            required
          ></b-form-select>
          <br />
          <label for="txtDesc">Descrição:</label>
          <b-form-input
            id="input-description"
            v-model="frm.edit.activity.description"
            type="text"
            required
          ></b-form-input>
          <br />
          <label for="txtClassroom">Sala:</label>
          <b-form-input
            id="input-classroom"
            v-model="frm.edit.activity.classroom"
            type="text"
            required
          ></b-form-input>
          <br />
          <label for="txtHourStart">Hora de Inicio:</label>
          <b-form-timepicker v-model="frm.edit.activity.hourStart" locale="en"></b-form-timepicker>
          <br />
          <label for="txtHourEnd">Hora de Fim:</label>
          <b-form-timepicker v-model="frm.edit.activity.hourEnd" locale="en"></b-form-timepicker>
          <br />
          <label for="txtHourEnd">Data:</label>
          <b-form-datepicker
            id="input-dateStart"
            v-model="frm.edit.activity.dateStart"
            :pickerOptions="pickerOptions"
            type="date"
            class="mb-2"
            required
          ></b-form-datepicker>
          <br />
          <label for="txtDuration">Duração:</label>
          <b-form-input
            id="input-durationDays"
            v-model="frm.edit.activity.durationDays"
            type="number"
            required
          ></b-form-input>
          <br />
          <label for="txtPhoto">Foto:</label>
          <b-form-input id="input-photo" v-model="frm.edit.activity.photo" type="url" required></b-form-input>
          <br />

          <b-button class="mr-2 mt-2" variant="primary" type="submit" block>Update</b-button>
        </b-form>

        <!-- Form de Notas-->
        <b-form @submit.prevent="updateGrade()" v-if="type == 'grades'">
          <label for="txtUc">Uc:</label>
          <b-form-select
            v-model="frm.edit.grade.uc"
            :options="getUcs.map(uc => {return {value: uc.id, text: uc.name}})"
            required
          ></b-form-select>
          <br />
          <label for="txtStudent">Estudante:</label>
          <b-form-select
            v-model="frm.edit.grade.student"
            :options="getStudentsByUc(frm.edit.grade.uc).map(user => {return {value: user.id, text: user.name}})"
            required
          ></b-form-select>
          <br />
          <label for="txtGrade">Nota:</label>
          <b-form-input
            id="input-grade"
            v-model="frm.edit.grade.grade"
            type="number"
            min="0"
            max="20"
            required
          ></b-form-input>
          <br />
          <b-button class="mr-2 mt-2" variant="primary" type="submit" block>Update</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["items", "fields", "type"],
  data() {
    return {
      bordered: true,
      hover: true,
      perPage: 5,
      currentPage: 1,
      filter: "",
      frm: {
        edit: {
          user: {
            id: "",
            name: "",
            password: "",
            number: "",
            userType: ""
          },
          uc: {
            id: "",
            name: "",
            teacher: "",
            year: "",
            semester: ""
          },
          activity: {
            id: "",
            name: "",
            type: "",
            description: "",
            classroom: "",
            hourStart: "",
            hourEnd: "",
            dateStart: "",
            durationDays: "",
            photo: ""
          },
          grade: {
            id: "",
            uc: "",
            student: "",
            grade: ""
          }
        }
      },
      modal: false
    };
  },
  methods: {
    searchStudent(id) {
      this.$router.push({
        name: "students",
        params: { id: id }
      });
    },
    deleteItem(id) {
      console.log(id);
      this.$swal({
        title: "Tem a certeza?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Apagar"
      }).then(result => {
        if (result.value) {
          if (this.type === "users") {
            this.$store.commit("REMOVE_USER_BY_ID", id);
          }
          if (this.type === "ucs") {
            this.$store.commit("REMOVE_UC_BY_ID", id);
          }
          if (this.type === "activities") {
            this.$store.commit("REMOVE_ACTIVITY_BY_ID", id);
          }
          if (this.type === "grades") {
            this.$store.commit("REMOVE_GRADE_BY_ID", id);
          }
          this.$swal("Apagado!", "", "success");
        }
      });
    },
    editItem(id) {
      this.modal = true;
      // Exibir a janela
      if (this.type === "users") {
        const user = this.getUserById(id);
        (this.frm.edit.user.id = user.id),
          (this.frm.edit.user.name = user.name),
          (this.frm.edit.user.password = user.password),
          (this.frm.edit.user.number = user.number),
          (this.frm.edit.user.userType = user.userType);
      }
      if (this.type === "ucs") {
        const uc = this.getUcById(id);
        (this.frm.edit.uc.id = uc.id),
          (this.frm.edit.uc.name = uc.name),
          (this.frm.edit.uc.teacher = uc.teacher),
          (this.frm.edit.uc.year = uc.year),
          (this.frm.edit.uc.semester = uc.semester);
      }
      if (this.type === "activities") {
        const activity = this.getActivityById(id);
        (this.frm.edit.activity.id = activity.id),
          (this.frm.edit.activity.name = activity.name),
          (this.frm.edit.activity.type = activity.type),
          (this.frm.edit.activity.description = activity.description),
          (this.frm.edit.activity.classroom = activity.classroom),
          (this.frm.edit.activity.hourStart = activity.hourStart),
          (this.frm.edit.activity.hourEnd = activity.hourEnd),
          (this.frm.edit.activity.dateStart = activity.dateStart),
          (this.frm.edit.activity.durationDays = activity.durationDays),
          (this.frm.edit.activity.photo = activity.photo);
      }
      if (this.type === "grades") {
        const grade = this.getGradeById(id);
        (this.frm.edit.grade.id = grade.id),
          (this.frm.edit.grade.uc = grade.uc),
          (this.frm.edit.grade.student = grade.student),
          (this.frm.edit.grade.grade = grade.grade);
      }
    },
    updateUser() {
      this.$store.commit("EDIT_USER_BY_ID", {
        user: {
          id: this.frm.edit.user.id,
          name: this.frm.edit.user.name,
          password: this.frm.edit.user.password,
          number: this.frm.edit.user.number,
          userType: this.frm.edit.user.userType
        }
      });
      this.$swal({
        text: `${this.frm.edit.user.name} atualizado!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
      this.modal = false;
    },
    updateUc() {
      this.$store.commit("EDIT_UC_BY_ID", {
        uc: {
          id: this.frm.edit.uc.id,
          name: this.frm.edit.uc.name,
          teacher: this.frm.edit.uc.teacher,
          year: this.frm.edit.uc.year,
          semester: this.frm.edit.uc.semester
        }
      });
      this.$swal({
        text: `${this.frm.edit.uc.name} atualizada!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
      this.modal = false;
    },
    updateActivity() {
      this.$store.commit("EDIT_ACTIVITY_BY_ID", {
        activity: {
          id: this.frm.edit.activity.id,
          name: this.frm.edit.activity.name,
          type: this.frm.edit.activity.type,
          description: this.frm.edit.activity.description,
          classroom: this.frm.edit.activity.classroom,
          hourStart: this.frm.edit.activity.hourStart,
          hourEnd: this.frm.edit.activity.hourEnd,
          dateStart: this.frm.edit.activity.dateStart,
          durationDays: this.frm.edit.activity.durationDays,
          photo: this.frm.edit.activity.photo
        }
      });
      this.$swal({
        text: `${this.frm.edit.activity.name} atualizada!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
      this.modal = false;
    },
    updateGrade() {
      this.$store.commit("EDIT_GRADE_BY_ID", {
        grade: {
          id: this.frm.edit.grade.id,
          uc: this.frm.edit.grade.uc,
          student: this.frm.edit.grade.student,
          grade: this.frm.edit.grade.grade
        }
      });
      this.$swal({
        text: `Nota de ${
          this.getUserById(this.frm.edit.grade.student).name
        } atualizada!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
      this.modal = false;
    }
  },
  computed: {
    ...mapGetters([
      "getUserById",
      "getUcById",
      "getUsersByUserType",
      "getTypeActivities",
      "getActivityById",
      "getUcs",
      "getStudentsByUc",
      "getGradeById",
      "getUserByNumber",
      "getValidatedUserById"
    ])
  }
};
</script>
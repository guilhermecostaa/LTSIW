<template>
  <div id="addActivity" class="container">
    <b-form @submit.prevent="addActivity">
      <b-form-group id="input-name" label="Nome" label-for="input-name">
        <b-form-input id="input-name" v-model="form.name" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-type" label="Tipo de atividade" label-for="input-type">
        <div class="form-group">
          <b-form-select
            v-model="form.type"
            :options="getTypeActivities.map(type => {return {value: type.id, text: type.name}})"
            required
          ></b-form-select>
        </div>
      </b-form-group>

      <b-form-group id="input-description" label="Descrição" label-for="input-description">
        <b-form-input id="input-description" v-model="form.description" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-classroom" label="Sala" label-for="input-classroom">
        <b-form-input id="input-classroom" v-model="form.classroom" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-hourStart" label="Hora Inicio" label-for="input-hourStart">
        <b-form-timepicker v-model="form.hourStart" locale="en"></b-form-timepicker>
      </b-form-group>

      <b-form-group id="input-hourEnd" label="Hora Fim" label-for="input-hourEnd">
        <b-form-timepicker v-model="form.hourEnd" locale="en"></b-form-timepicker>
      </b-form-group>

      <b-form-group id="input-dateStart" label="Dia de começo" label-for="input-dateStart">
        <b-form-datepicker
          id="input-dateStart"
          v-model="form.dateStart"
          :pickerOptions="pickerOptions"
          type="date"
          class="mb-2"
          required
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group id="input-durationDays" label="Duração" label-for="input-durationDays">
        <b-form-input id="input-durationDays" v-model="form.durationDays" type="number" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-photo" label="Foto" label-for="input-photo">
        <b-form-input id="input-photo" v-model="form.photo" type="url" required></b-form-input>
      </b-form-group>

      <b-button class="col-6" type="submit" variant="primary">Adicionar</b-button>
    </b-form>

    <br />
    <br />

    <h1>Atividades</h1>
    <div class="dataTable container">
      <DataTable
        :items="getActivities.map(activity => {return {id: activity.id, name: activity.name, type: getTypeActivityNameById(activity.type), dateStart: activity.dateStart, hourStart: activity.hourStart, durationDays: activity.durationDays, photo: activity.photo}})"
        :fields="['name', 'type', 'dateStart', 'hourStart', 'durationDays', 'actions']"
        type="activities"
      ></DataTable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "BackofficeAtividades",
  components: { DataTable },
  data() {
    return {
      form: {
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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      Activities: []
    };
  },
  methods: {
    addActivity() {
      const errors = [];
      if (new Date(this.form.dateStart) < new Date()) {
        errors.push("Data inválida.");
      }
      if (this.getActivityByName(this.form.name)) {
        errors.push("Já existe uma atividade com esse nome")
      }
      if (errors.length) {
          this.$swal({
          text: errors.join(" "),
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        const newActivity = {
          id: this.getActivityNextId,
          name: this.form.name,
          type: this.form.type,
          description: this.form.description,
          classroom: this.form.classroom,
          hourStart: this.form.hourStart,
          hourEnd: this.form.hourEnd,
          dateStart: this.form.dateStart,
          durationDays: this.form.durationDays,
          photo: this.form.photo
        };
        this.$store.commit("ADD_ACTIVITY", newActivity);
        this.form.name = "";
        this.form.type = "";
        this.form.description = "";
        this.form.classroom = "";
        this.form.hourStart = "";
        this.form.hourEnd = "";
        this.form.dateStart = "";
        this.form.durationDays = "";
        this.form.photo = "";
        this.$swal({
          text: `${newActivity.name} Adicionado!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters([
      "getActivities",
      "getActivityByName",
      "getActivityNextId",
      "getTypeActivities",
      "getTypeActivityNameById"
    ])
  }
};
</script>
<template>
  <div class="Atividades container">
    <br />
    <br />
    <h1>{{getActivityById($route.params.id).name}}</h1>
    <br />
    <b-img :src="getActivityById($route.params.id).photo" fluid alt="Responsive image"></b-img>
    <div class="divleft">
      <h4 class="mt-3">Descrição</h4>
      <p>{{getActivityById($route.params.id).description}}</p>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Categoria:</label>
        <label>{{getActivityById($route.params.id).type}}</label>
      </span>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Sala:</label>
        <label>{{getActivityById($route.params.id).classroom}}</label>
      </span>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Data de inicio:</label>
        <label>{{getActivityById($route.params.id).dateStart}}</label>
      </span>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Duração:</label>
        <label>{{getActivityById($route.params.id).durationDays > 1 ? getActivityById($route.params.id).durationDays + ' dias' : getActivityById($route.params.id).durationDays + ' dia'}}</label>
      </span>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Hora de Inicio:</label>
        <label>{{getActivityById($route.params.id).hourStart}}</label>
      </span>
    </div>
    <div class="divleft">
      <span>
        <label style="font-size: 20px; font-weight: bold">Hora do fim:</label>
        <label>{{getActivityById($route.params.id).hourEnd}}</label>
      </span>
    </div>
    <b-button href="#" variant="primary" @click="activityPage()">Voltar</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Atividades",
  data() {
    return {
      activity: ""
    };
  },
  methods: {
    activityPage() {
      this.$router.push({
        name: "atividades"
      });
    }
  },
  computed: {
    ...mapGetters(["getActivityById"])
  }
};
</script>

<style>
.divleft {
  text-align: left;
}
</style>
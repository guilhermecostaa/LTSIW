<template>
  <div class="user container">
    <br>
    <br>
    <h1>Perfil de {{getUserById($route.params.id).name}}</h1>
    <br>
    <h2>Dados pessoais: </h2>
    <br>
    <p>Nome: {{getUserById($route.params.id).name}}</p>
    <p>Número: {{getUserById($route.params.id).number}}</p>
    <br>
    <h2>Atividades: </h2>
    <h2>Notas: </h2>
    <h2>Media: </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Students",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["getUserById"])
  }
};
</script>

<style scoped>
  p{
    text-align: left;
  }
  h2{
    text-align: left;
  }
</style>
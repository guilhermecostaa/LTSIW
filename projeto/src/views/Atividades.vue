<template>
  <div class="Atividades container">
    <br />
    <br />
    <h1>Atividades</h1>
    <br />
    <div>
      <span v-if="this.getActivities.length===0">SEM ATIVIDADES ADICIONADAS</span>
      <div v-else>
        <div class="cards container">
          <b-row>
            <Card v-for="activity in getActivities" :key="activity.id" type="activities" :activity="activity"></Card>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Atividades",
  components: { Card },
  data() {
    return {
      activities: []
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getActivities"])
    
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
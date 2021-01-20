<template>
  <div class="Atividades container">
    <br />
    <br />
    <h1>Atividades</h1>
    <br />
    <div>
      <span v-if="this.getActivities.length===0">SEM ATIVIDADES ADICIONADAS</span>
      <div v-else>
        <b-row>
          <div class="cards container">
            <Card 
                v-for="activity in getActivities"
                :key="activity.title"
                :activity="activity"
            ></Card>
          </div>
        </b-row>
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
  },
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
<template>
  <b-col lg="3" md="4" sm="6">
    <b-card :title="activity.name" :img-src="activity.photo" class="mb-2">
      <b-card-text>{{ getDescription(activity.description)}}</b-card-text>
        <b-button
          class="mr-3"
          v-if="type != 'studentPage'"
          href="#"
          variant="primary"
          @click="signInActivity(activity.id)"
          :disabled="getUserActivitiesById(getLoggedUserId).find(activityId => activityId == activity.id) ? true : false"
        >{{getUserActivitiesById(getLoggedUserId).find(activityId => activityId == activity.id) ? 'Já está inscrito' : 'Inscrever'}}</b-button>
        <b-button v-if="type != 'studentPage'" href="#" variant="primary" @click="activityPage(activity.id)">Ver</b-button>
    </b-card>
  </b-col>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  props: ["activity", "type"],
  data() {
    return {};
  },
  methods: {
    signInActivity(id) {
      this.$swal({
        title: "Pretende-se inscrever na atividade?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Inscrever"
      }).then(result => {
        if (result.value) {
          this.$store.commit("ADD_USER_TO_ACTIVITY", id);
          this.$swal("Inscrito!", "", "success");
        }
      });
    },
    getDescription(desc) {
      if (desc.length < 90) {
        return desc;
      } else {
        const spacePosition = desc.indexOf(" ", 90);
        return `${desc.substr(0, spacePosition)}...`;
      }
    },
    activityPage() {
      this.$router.push({
        name: "atividade",
        params: { id: this.activity.id }
      });
    }
  },
  computed: {
    ...mapGetters(["getUserActivitiesById", "getLoggedUserId"])
  }
};
</script>

<style>

</style>
<template>
  <b-col lg="3" md="4" sm="6" col="12">
    <b-card
      :title="activity.name"
      :img-src="activity.photo"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{ getDescription(activity.description)}}</b-card-text>

      <b-button href="#" variant="primary" @click="signInActivity(activity.id)">Inscrever-me</b-button>
    </b-card>
  </b-col>
</template>


<script>
export default {
  props: ["activity"],
  data() {
    return {};
  },
  computed: {},
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
    }
  }
};
</script>
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
        <b-card
          :title="activity.title"
          :img-src="activity.img"
          style="max-width: 20rem;"
          class="mb-2"
          :filter="filter"
        >
          <b-card-text>{{ getDescription(activity.description)}}</b-card-text>

          <b-button href="#" variant="primary" @click="signInActivity()">Inscrever-me</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
export default {
  props: [{ activity: Object }, "filter"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    signInActivity(id) {
      console.log(id);
    },
    getDescription(desc) {
      if (desc.length < 30) {
        return desc;
      } else {
        return `${(desc.substr(0), 30)}...`;
      }
    }
  }
};
</script>
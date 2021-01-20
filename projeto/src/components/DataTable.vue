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
  </div>
</template>

<script>
export default {
  props: ["items", "fields", "type"],
  data() {
    return {
      bordered: true,
      hover: true,
      perPage: 5,
      currentPage: 1,
      filter: ""
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
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
    }
  }
};
</script>
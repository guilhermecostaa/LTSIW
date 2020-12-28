<template>
  <div>
    <b-table
      :bordered="bordered"
      :hover="hover"
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
  export default {
    props: [
      "items",
      "fields"
    ],
    data() {
      return {
        bordered: true,
        hover: true,
      }
    }
  }
</script>
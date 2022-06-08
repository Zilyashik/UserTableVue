<template>
  <tr>
    <td>{{ row.id }}</td>
    <td>{{ row.firstName }}</td>
    <td>{{ row.lastName }}</td>
    <td>{{ row.email }}</td>
    <td>{{ row.phone }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ['row'],
  methods: {
  }
}
</script>

<style scoped>
  tr {
    cursor: pointer;
  }
</style>
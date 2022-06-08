<template>
  <div>
    Id: {{row.id}}
    <br>
    Firstname: {{row.firstName}}
    <br>
    Lastname: {{row.lastName}}
    <br>
    Email: {{row.email}}
    <br>
    Phone: {{row.phone}}
    <br>
    Description: {{row.description}}
    <br>
    State: {{row.address.state}}
    <br>
    City: {{row.address.city}}
    <br>
    Street: {{row.address.streetAddress}}
    <br>
    Zip-code: {{row.address.zip}}
  </div>
</template>

<script>
export default {
  name: "RowInfo",
  props: ['row']
}
</script>

<style scoped>
  div {
    cursor: pointer;
  }
</style>
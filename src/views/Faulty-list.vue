<template>
  <div style="max-width: 100vw;">
    <NavigationBar />
    <table>
      <tr>
        <th>Device</th>
        <th>Device ID</th>
        <th>Problem</th>
        <th>User</th>
        <th>User Email</th>
      </tr>
      <tr v-for="problem in problems" v-bind:key="problem.id">
        <td>{{ problem.device }}</td>
        <td>{{ problem.device_id }}</td>
        <td>{{ problem.description }}</td>
        <td>{{ problem.name }}</td>
        <td>{{ problem.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
  },
  /* Update data to be real time binded so it updates as someone else changes it. */
  data: function() {
    return {
      problems: this.$store.state.problems
    };
  }
};
</script>

<style scoped>
table {
  font-size: 1em;
  border: 1px solid black;
}

td,
th {
  border: 1px solid black;
}
</style>

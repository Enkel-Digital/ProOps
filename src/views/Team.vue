<template>
  <div>
    <BackBtn />
    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Walkie</th>
        <th>Ipad</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.email">
        <td>{{ user.name }}</td>
        <td>{{ user.team }}</td>
        <!-- <td>{{ walkie.id }}</td>
        <td>{{ ipad.id }}</td>-->
      </tr>
    </table>
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";

// Tmp direct import of the users mock data to build the UI first.
import users from "../store/mock_data/users";

export default {
  components: {
    BackBtn
  },
  /* Update data to be real time binded so it updates as someone else changes it. */
  data: function() {
    return {
      users
    };
  }
};
</script>

<style scoped>
</style>
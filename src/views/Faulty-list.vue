<template>
  <div>
    <BackBtn />
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
        <!-- <td>{{ getUserWalkie(user.email) }}</td> -->
        <!-- <td>{{ getUserIpad(user.email) }}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    BackBtn
  },
  /* Update data to be real time binded so it updates as someone else changes it. */
  data: function() {
    return {
      problems: this.$store.state.problems
    };
  },
  methods: {
    // getUserIpad(user_email) {
    //   const { ipads } = this.$store.state;
    //   for (const key in ipads) {
    //     const ipad = ipads[key];
    //     if (ipad.user === user_email) return ipad.id;
    //   }
    //   return "Nil";
    // },
    // getUserWalkie(user_email) {
    //   const { walkies } = this.$store.state;
    //   for (const key in walkies) {
    //     const walkie = walkies[key];
    //     if (walkie.user === user_email) return walkie.id;
    //   }
    //   return "Nil";
    // }
  }
};
</script>

<style scoped>
table {
  font-size: 4em;
  border: 1px solid black;
}

td,
th {
  border: 1px solid black;
}
</style>
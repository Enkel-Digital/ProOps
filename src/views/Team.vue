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
        <td>{{ getUserWalkie(user.email) }}</td>
        <td>{{ getUserIpad(user.email) }}</td>
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
  },
  methods: {
    // Return ipad ID of ipad the user is using, else return "Nil"
    getUserIpad(user_email) {
      const { ipads } = this.$store.state;

      for (const key in ipads) {
        const ipad = ipads[key];
        if (ipad.user === user_email) return ipad.id;
      }

      return "Nil";
    },
    // Return walkie ID of walkie the user is using, else return "Nil"
    getUserWalkie(user_email) {
      const { walkies } = this.$store.state;

      for (const key in walkies) {
        const walkie = walkies[key];
        if (walkie.user === user_email) return walkie.id;
      }

      return "Nil";
    }
  }
};
</script>

<style scoped>
table {
  font-size: 3em;
  border: 1px solid black;
}

td,
th {
  border: 1px solid black;
}
</style>
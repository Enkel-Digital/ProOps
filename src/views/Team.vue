<template>
  <div>
    <NavigationBar />
    <router-link class="button" to="/history">HISTORY</router-link>
    <table>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Walkie</th>
        <th>Ipad</th>
      </tr>
      <tr v-for="user in users_with_2_device" v-bind:key="user.email">
        <td>{{ user.name }}</td>
        <td>{{ user.team }}</td>
        <td>{{ getUserWalkie(user.email) }}</td>
        <td>{{ getUserIpad(user.email) }}</td>
      </tr>
      <tr v-for="user in users_with_1_device" v-bind:key="user.email">
        <td>{{ user.name }}</td>
        <td>{{ user.team }}</td>
        <td>{{ getUserWalkie(user.email) }}</td>
        <td>{{ getUserIpad(user.email) }}</td>
      </tr>
      <tr v-for="user in users_all_nil" v-bind:key="user.email">
        <td>{{ user.name }}</td>
        <td>{{ user.team }}</td>
        <td>{{ getUserWalkie(user.email) }}</td>
        <td>{{ getUserIpad(user.email) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

// Tmp direct import of the users mock data to build the UI first.
import users from "../store/mock_data/users";

export default {
  components: {
    NavigationBar
  },
  /* Update data to be real time binded so it updates as someone else changes it. */
  data: function() {
    return {
      users,
      users_with_2_device: {},
      users_with_1_device: {},
      users_all_nil: {}
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
  },
  created: function arrange() {
    const users = this.users;
    for (const key in users) {
      const user = users[key];

      let num_of_device_checkedout = 0;
      if (this.getUserIpad(user.email) !== "Nil") ++num_of_device_checkedout;
      if (this.getUserWalkie(user.email) !== "Nil") ++num_of_device_checkedout;

      if (num_of_device_checkedout === 2)
        this.users_with_2_device[user.email] = user;
      else if (num_of_device_checkedout === 1)
        this.users_with_1_device[user.email] = user;
      else if (num_of_device_checkedout === 0)
        this.users_all_nil[user.email] = user;
      else {
        // eslint-disable-next-line no-console
        console.log(
          "Internal Error, num_of_device_checkedout is invalid: ",
          num_of_device_checkedout
        );
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 96vw;

  font-size: 1em;
  border: 1px solid grey;
}

td,
th {
  border: 1px solid grey;
}
</style>

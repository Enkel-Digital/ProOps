<template>
  <div class="profile">
    <NavigationBar />

    <img alt="Login image" src="../assets/login.jpg" width="400" height="300" />

    <h3>Profile Page</h3>

    <p class="error">{{ error_msg }}</p>

    <div v-if="!edit">
      <p>Email: {{ email }}</p>
      <p>Name: {{ name }}</p>
      <button @click="edit = true">Edit</button>
    </div>

    <div v-if="edit">
      <p>Email: <input type="text" v-model="email" required /></p>
      <p>Name: <input type="text" v-model="name" required /></p>
      <button @click="save">Save</button>
    </div>

    <p><i>*Ordered by latest event</i></p>
    <table>
      <tr>
        <th>Name</th>
        <th>Device</th>
        <th>ID</th>
        <th>Status</th>
        <th>time</th>
        <th>Email</th>
      </tr>
      <tr v-for="snapshot in history" v-bind:key="snapshot.historyId">
        <td>{{ snapshot.name }}</td>
        <td>{{ snapshot.device }}</td>
        <td>{{ snapshot.id }}</td>
        <td>{{ snapshot.status }}</td>
        <td>{{ snapshot.time }}</td>
        <td>{{ snapshot.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "profile",
  components: {
    NavigationBar
  },
  data() {
    const user_email = this.$store.state.email;
    return {
      email: user_email,
      name: this.$store.state.name,
      history: this.$store.state.history.filter(
        history => history.email === user_email
      ),
      error_msg: "",
      edit: false
    };
  },
  methods: {
    save() {
      // Save data with vuex and reload page? Or use data binding to show changes?
      this.$store.commit("update_email", this.email);
      this.$store.commit("update_name", this.name);

      this.edit = false;
    }
  }
};
</script>

<style scoped>
.profile {
  text-align: left;
}

table {
  width: 96vw;
  border: 1px solid grey;
}

td,
th {
  border: 1px solid grey;
}
</style>

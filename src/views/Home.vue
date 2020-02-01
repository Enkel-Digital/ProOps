<template>
  <div class="home">
    <router-link class="button" to="/walkie">
      <img alt="Walkie ICON" src="../assets/walkie.png" width="84" height="84" />
      Walkie Talkie
    </router-link>
    <router-link class="button" to="/ipad">
      <img alt="Ipad ICON" src="../assets/ipad.png" width="84" height="84" />
      Ipad
    </router-link>
    <router-link class="button" to="/team">Team Shift List</router-link>
    <router-link class="button" to="/faulty">Faulty Devices</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "home",
  methods: {
    logout() {
      alert("You have now been logged out");

      // Signout current user and redirect to welcome page afterwards.
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.push({ name: "welcome" }));
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  text-align: center;
  font-size: 40px;
}
</style>

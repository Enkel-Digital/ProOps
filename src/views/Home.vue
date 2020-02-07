<template>
  <div class="home">
    <router-link class="button" to="/walkie">
      <img
        alt="Walkie ICON"
        src="../assets/walkie.png"
        width="84"
        height="84"
      />
      <br />
      Walkie Talkie
      <br />
      <br />
    </router-link>
    <router-link class="button" to="/ipad">
      <img alt="Ipad ICON" src="../assets/ipad.png" width="84" height="84" />
      <br />
      Ipad
      <br />
      <br />
    </router-link>
    <router-link class="button" to="/team">
      <img
        alt="Team Shift ICON"
        src="../assets/teamshift.jpg"
        width="84"
        height="84"
      />
      <br />
      Team Shift List
      <br />
      <br />
    </router-link>
    <router-link class="button" to="/faulty">
      <img
        alt="Faulty Icon"
        src="../assets/faulty.jpg"
        width="84"
        height="84"
      />
      <br />
      Faulty Devices
    </router-link>
    <button class="button" @click="logout">Logout</button>
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
  align-items: center;
  text-align: center;
}

.button,
a:visited {
  border-style: solid;
  border-radius: 1em;
  border-width: 0.2em;
  background-color: white;
  margin-bottom: 1.5em;
  text-align: center;
  text-decoration: none;
  color: black;

  min-width: 8em;
}
</style>

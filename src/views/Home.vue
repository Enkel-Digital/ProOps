<template>
  <div class="home">
    <router-link class="button" to="/walkie">
      <img
        alt="Walkie ICON"
        src="../assets/walkie.png"
        width="120"
        height="120"
      />
      <br />
      Walkie Talkie
      <br />
      <br />
    </router-link>
    <router-link class="button" to="/ipad">
      <img alt="Ipad ICON" src="../assets/ipad.png" width="120" height="120" />
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
        height="100"
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
        width="110"
        height="84"
      />
      <br />
      Faulty Devices
    </router-link>
    <router-link class="button" to="/profile">
      <img
        alt="Faulty Icon"
        src="../assets/faulty.jpg"
        width="110"
        height="84"
      />
      <br />
      Profile
    </router-link>
    <button class="button" @click="logout">
      Logout
    </button>
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
  align-items: center;
  margin-top: 8vh;

  display: grid;
  grid-template-columns: repeat(2, auto);
  /* grid-template-areas: "back-btn home-btn"; */
  grid-gap: 1em;
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

  min-height: 10em;
  max-height: 10em;
  min-width: 10em;
}
</style>

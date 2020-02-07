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
    alt= "Team Shift ICON"
    src="../assets/teamshift.jpg" width= "84" height= "84" />
<br/> 
Team Shift List
  <br />
    <br />
    </router-link>
    <router-link class="button" to="/faulty">
    <img alt= "Faulty Icon" 
    src="../assets/faulty.jpg" width="84" height= "84" />
    <br/>
    Faulty Devices
    </router-link>
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
  text-align: center;
  background-color: rgb(236, 133, 133)
  
}

.button {
  border-style: solid;
  border-radius: 1em;
  border-width: 0.2em;
  background-color: rgb(153, 35, 35);
  margin-bottom: 1.5em;
  text-align: center;
  text-decoration: none;
  
}

button,
a:visited {
  background-color: white;
  max-width: 5em;
  margin-bottom: 1em;
  font-size: 3em;
  text-decoration: none;
  color: black;

}
</style>

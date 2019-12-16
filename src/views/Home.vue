<template>
  <div class="home">
    <ul>
      <li>
        <router-link class="button" to="/walkie">Walkies</router-link>
      </li>
      <li>
        <router-link class="button" to="/ipad">iPad</router-link>
      </li>
      <li>
        <router-link class="button" to="/team">Team Shift</router-link>
      </li>
      <li>
        <router-link class="button" to="/device-status"
          >Check In/Out Devices</router-link
        >
      </li>
      <li>
        <router-link class="button" to="/faulty">Faulty devices</router-link>
      </li>
      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>

    <footer>
      <router-link to="/about">About</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    async logout() {
      alert("You have now been logged out");
      this.$router.push("login");
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}

/* Make all the links look like buttons */
a:visited {
  color: black;
}

.button {
  font: bold 11px Arial;
  text-decoration: none;
  background-color: #f8efef;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 1em;

  margin-top: 1em;
}

button {
  padding: 1em;
  background-color: #f8efef;
  border: 1px solid #cccccc;
  border-radius: 1em;
}

ul {
  list-style-type: none;
}

li {
  margin-top: 2em;
}

footer {
  /* margin-top: auto;
  margin-bottom: auto; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4em;
}
</style>

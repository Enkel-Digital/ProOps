<template>
  <div class="home">
    <router-link class="button" to="/walkie">
      <img alt="Walkie ICON" src="../assets/walkie.png" width="84" height="84" />
      Walkies
    </router-link>
    <router-link class="button" to="/ipad">
      <img alt="Ipad ICON" src="../assets/ipad.png" width="84" height="84" />
      ipad
    </router-link>
    <router-link class="button" to="/team">Team Shift</router-link>
    <router-link class="button" to="/device-status">Check In/Out Devices</router-link>
    <router-link class="button" to="/faulty">Faulty devices</router-link>
    <button @click="logout">Logout</button>

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
      this.$router.push({ name: "welcome" });
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>

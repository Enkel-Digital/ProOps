<template>
  <div class="welcome">
    <router-link class="button" to="/login">Login</router-link>
    <br />
    <router-link class="button" to="/signup">Sign Up</router-link>

    <footer>
      <router-link to="/about">About</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "welcome"
};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
}
</style>

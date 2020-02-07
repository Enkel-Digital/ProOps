<template>
  <div class="welcome">
    <router-link class="button" to="/login">Login</router-link>
    <br />
    <router-link class="button" to="/signup">Sign Up</router-link>
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
  font-family: sans-serif;
}

.button {
  background-color: rgb(211, 211, 192);

  max-width: 10em;
  margin-bottom: 1em;

  font-size: 2em;

  text-decoration: none;
  color: black;
}
</style>

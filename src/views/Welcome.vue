<template>
  <div class="welcome">
    <h1 style="font-size: 3em;">PROOPS</h1>
    <router-link class="button" to="/login">Login</router-link>
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

  align-items: center;

  position: absolute;
  top: 34vh;
  left: 50%;
  right: 50%;
}

.button {
  background-color: white;

  max-width: 10em;
  min-width: 8em;
  margin-bottom: 1em;

  font-size: 2em;

  text-decoration: none;
  color: black;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.05em;
}
</style>

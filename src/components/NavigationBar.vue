<template>
  <div class="nav">
    <button id="back-btn" @click="back">Back</button>
    <button id="home-btn" @click="home">Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    home() {
      // Route user back to home page
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-areas: "back-btn home-btn";
  grid-gap: 1em;
}

button {
  color: blue;
  border: 0em;

  margin: 1em;
}
</style>

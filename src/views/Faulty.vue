<template>
  <div>
    <NavigationBar />
    <br />
    <p>Report faulty device</p>
    <br />
    <router-link class="button" to="/faulty/add/walkie">Walkie</router-link>
    <br />
    <br />
    <router-link class="button" to="/faulty/add/ipad">Ipad</router-link>
    <br />
    <br />
    <router-link class="button" to="/faulty/list"
      >List all faulty devices</router-link
    >
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
  }
};
</script>

<style scoped>
.button {
  text-decoration: none;
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-size: 2em;
  border-style: solid;
  border-radius: 4em;

  text-align: center;
  text-decoration: none;
  background-color: white;

  padding: 0.1em 1em;

  min-width: 100em;
}

p {
  font-size: 3em;
  font-family: "Times New Roman", Times, serif;
  border-style: solid;
  border-radius: 0.5em;
}
</style>

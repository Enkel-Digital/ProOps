<template>
  <div>
    <NavigationBar />
    <br />
    <hr />
    <p>Report faulty device</p>
    <!-- <router-link to="/faulty/add/walkie">test</router-link> -->
    <br />
    <router-link class="button" to="/faulty/add/walkie">Walkie</router-link>
    <br />
    <br />
    <router-link class="button" to="/faulty/add/ipad">Ipad</router-link>
    <br />
    <br />
    <hr />
    <router-link class="button" to="/faulty/list">List all faulty devices</router-link>
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
  border-style: double;
  background-color: antiquewhite;
}

p {
  font-size: 3em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-style: solid;
  border-radius: 0.5em;
  background-color: rgb(250, 216, 216);
}
</style>
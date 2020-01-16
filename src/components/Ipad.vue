<template>
  <div id="ipad-component">
    <img alt="Ipad ICON" src="../assets/ipad.png" width="84" height="84" @click="clicked(ipad.id)" />

    <p>{{ ipad.id }}</p>
    <p v-if="ipad.available">Available</p>
    <p v-else>In Use</p>
  </div>
</template>

<script>
export default {
  name: "ipad",
  props: ["ipad"],
  methods: {
    clicked(id) {
      alert(`You clicked ipad: ${id}`);
      // Toggle the ipad's status in ipad object of vuex store
      this.$store.commit("toggle_ipad_status", id);
      // Route user back to the home page.
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
#ipad-component {
  border-width: 1em;
  border-color: black;
  border: 1px solid black;
}
</style>

<template>
  <div id="walkie-component">
    <img
      alt="Walkie ICON"
      src="../assets/walkie.png"
      width="84"
      height="84"
      @click="clicked(walkie.id)"
    />

    <p>{{ walkie.id }}</p>
    <p v-if="walkie.available">Available</p>
    <p v-else>In Use</p>
  </div>
</template>

<script>
export default {
  name: "walkie",
  props: ["walkie"],
  methods: {
    clicked(id) {
      const selected_walkie = this.$store.state.walkies[id];

      // If the device is checked out
      if (!selected_walkie.available) {
        // we want to ensure only the same user can check back in the device
        if (selected_walkie.user !== this.$store.state.email) {
          alert(`You did not checkout walkie "${id}" thus cannot check it in.`);
          // Ends the function since current user is not allowed to check in device
          return;
        }
      }

      alert(`You clicked walkie: ${id}`);
      this.$store.commit("toggle_walkie_status", id);

      // Route user back to the home page.
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
#walkie-component {
  border-width: 1em;
  border-color: black;
  border: 1px solid black;
}
</style>

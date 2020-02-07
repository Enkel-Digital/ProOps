<template>
  <div id="ipad-component">
    <img
      alt="Ipad ICON"
      src="../assets/ipad.png"
      width="84"
      height="84"
      @click="clicked(ipad.id)"
    />

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
      const selected_ipad = this.$store.state.ipads[id];

      // If the device is checked out
      if (!selected_ipad.available) {
        // we want to ensure only the same user can check back in the device
        if (selected_ipad.user !== this.$store.state.email) {
          alert(`You did not checkout ipad "${id}" thus cannot check it in.`);
          // Ends the function since current user is not allowed to check in device
          return;
        }
      }

      alert(`You clicked ipad: ${id}`);
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

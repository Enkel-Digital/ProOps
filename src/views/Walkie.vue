<template>
  <div>
    <NavigationBar />
    <walkie
      v-for="walkie in walkies"
      v-bind:key="walkie.id"
      v-bind:walkie="walkie"
    />
    <br />
    <br />
  </div>
</template>

<script>
import walkie from "@/components/Walkie.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    walkie,
    NavigationBar
  },

  data: function() {
    // Tmp placed here
    // Checks if the data has been loaded from server, if not, load it.
    if (!Object.keys(this.$store.state.walkies).length)
      this.$store.dispatch("load_walkie_data");

    return {
      walkies: this.$store.state.walkies
    };
  }
};
</script>

<style scoped></style>

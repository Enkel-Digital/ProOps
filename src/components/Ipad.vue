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
      alert(`U clicked ipad: ${id}`);
      this.$router.push({ name: "home" });
      // this.$props.ipad.available = !this.$props.ipad.available;
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

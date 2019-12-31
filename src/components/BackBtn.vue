<template>
  <div>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
button {
  color: blue;
  border: 0em;
}
</style>
<template>
  <div>
    <button>Button representing a Walkie</button>
    <p>{{ id }}</p>
    <p v-if="available">Available</p>
    <p v-else>In Use</p>
  </div>
</template>

<script>
export default {
  name: "walkie",
  data: function() {
    return {
      available: false,
      id: 1
    };
  }
};
</script>

<style scoped></style>

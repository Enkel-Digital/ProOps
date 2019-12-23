<template>
  <div>
    <button>Button representing a iPad</button>
    <p>{{ id }}</p>
    <p v-if="available">Available</p>
    <p v-else>In Use</p>
  </div>
</template>

<script>
export default {
  name: "ipad",
  data: function() {
    return {
      available: true,
      id: 1
    };
  }
};
</script>

<style scoped></style>

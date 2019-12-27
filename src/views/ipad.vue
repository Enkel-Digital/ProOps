<template>
  <div>
    <ipad v-for="ipad in ipads" v-bind:key="ipad.id" v-bind:ipad="ipad" />
  </div>
</template>

<script>
import ipad from "@/components/Ipad.vue";
import ipads from "@/store/ipad.js";

export default {
  components: {
    ipad
  },
  data: function() {
    return {
      ipads
    };
  }
};
</script>

<style scoped></style>

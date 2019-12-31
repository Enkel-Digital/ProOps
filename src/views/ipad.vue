<template>
  <div>
    <BackBtn />
    <ipad v-for="ipad in ipads" v-bind:key="ipad.id" v-bind:ipad="ipad" />
  </div>
</template>

<script>
import ipad from "@/components/Ipad.vue";
import ipads from "@/store/ipad.js";
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    ipad,
    BackBtn
  },
  data: function() {
    return {
      ipads
    };
  }
};
</script>

<style scoped></style>

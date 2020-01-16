<template>
  <div>
    <BackBtn />
    <ipad v-for="ipad in ipads" v-bind:key="ipad.id" v-bind:ipad="ipad" />
  </div>
</template>

<script>
import ipad from "@/components/Ipad.vue";
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    ipad,
    BackBtn
  },
  data: function() {
    // Tmp placed here
    // Checks if the data has been loaded from server, if not, load it.
    if (!Object.keys(this.$store.state.ipads).length)
      this.$store.dispatch("load_ipad_data");

    // Pass in ipad data from vuex store
    return {
      ipads: this.$store.state.ipads
    };
  }
};
</script>

<style scoped></style>

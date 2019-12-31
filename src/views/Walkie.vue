<template>
  <div>
    <BackBtn />
    <walkie />
  </div>
</template>

<script>
import walkie from "@/components/Walkie.vue";
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    walkie,
    BackBtn
  }
};
</script>

<style scoped></style>

<template>
  <div>
    <BackBtn />
    <br />
    <hr />
    <p>Report faulty device</p>
    <!-- <router-link to="/faulty/add/walkie">test</router-link> -->
    <br />
    <router-link class="button" to="/faulty/add/walkie">Walkie</router-link>
    <br />
    <router-link class="button" to="/faulty/add/ipad">Ipad</router-link>
    <br />
    <hr />
    <router-link class="button" to="/faulty/list">List all faulty devices</router-link>
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    BackBtn
  }
};
</script>

<style scoped>
</style>
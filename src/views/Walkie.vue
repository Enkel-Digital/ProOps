<template>
  <div>
    <BackBtn />
    <walkie v-for="walkie in walkies" v-bind:key= "walkie.id" v-bind:walkie="walkie" />
  </div>
</template>

<script>
import walkie from "@/components/Walkie.vue";
import walkies from "@/store/walkie.js"
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    walkie,
    BackBtn
  
},
  
  data: function() {
    return {
        walkies
    }; 
   }
};
</script>

<style scoped></style>

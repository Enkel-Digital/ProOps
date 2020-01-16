<template>
    <div id="walkie-component">
      <img
      alt="Walkie ICON"
      src="../assets/walkie.png"
      width="84"
      height="84"
      @click="clicked(walkie.id)"
      />
    
    <p>{{ walkie.id }}</p>
    <p v-if="walkie.available">Available</p>
    <p v-else>In Use</p>
  </div>
</template>

<script>
export default {
  name: "walkie",
  props: ["walkie"],
  methods:{
      clicked(id){ alert(`You clicked walkie: ${id}`);
          this.$store.commit("toggle_walkie_status", id);
      // Route user back to the home page. 
         this.$router.push({ name: "home" }) 
      }
  }

};


</script>

<style scoped>
#walkie-component {
  border-width: 1em;
  border-color: black;
  border: 1px solid black;
}


</style>

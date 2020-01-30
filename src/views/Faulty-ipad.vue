<template>
  <div>
    <BackBtn />

    <input
      v-autofocus
      type="number"
      v-model="id"
      placeholder="ID of faulty Ipad"
      @keypress.enter="reportDevice"
      required
    />
    <br />
    <input
      type="text"
      v-model="description"
      placeholder="Write your problem here"
      @keypress.enter="reportDevice"
      required
    />

    <p class="error">{{ error_msg }}</p>
    <button @click="reportDevice">Report Device</button>
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";

export default {
  components: {
    BackBtn
  },
  data() {
    return {
      id: "",
      description: "",
      error_msg: ""
    };
  },
  methods: {
    reportDevice() {
      const current_user = {
        email: this.$store.state.email,
        name: this.$store.state.name
      };

      // Save user's email to vuex and update the user's name
      this.$store.commit("new_problem", {
        device_id: this.id,
        description: this.description,
        ...current_user,
        device: "ipad"
      });
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <NavigationBar />

    <input
      v-autofocus
      type="number"
      v-model="id"
      placeholder="ID of faulty Ipad"
      @keypress.enter="reportDevice"
      required
    />
    <br />
    <br />
    <textarea
      type="text"
      v-model="description"
      placeholder="Write your problem here"
      @keypress.enter="reportDevice"
      required
      rows="10"
      cols="40"
      style="resize: none;"
    />

    <p class="error">{{ error_msg }}</p>
    <button @click="reportDevice">Report Device</button>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
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

      // Route user to all fauly device page
      this.$router.push({ name: "faulty-list" });
    }
  }
};
</script>

<style scoped></style>

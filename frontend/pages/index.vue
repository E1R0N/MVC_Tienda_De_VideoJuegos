<template>
  <div>
    <Table :title="title" :headers="headers" :items="games" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "User", value: "name" },
        { text: "Game", value: "game" },
        { text: "Game", value: "state" },
        { text: "Game", value: "initDate" },
        { text: "Game", value: "fDate" },
        { text: "Game", value: "returnDate" },
        { text: "Deuda", value: "debt"}
      ],
      games: [],
      title: "Deudas",
    };
  },
  created() {
    this.fetch()
  },
  methods: {



    async fetch() {
    try {
      let games = await this.$axios.$get("http://localhost:5000/api/game", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJSb2xlIjoiQWRtaW4iLCJ1c2VyU3RhdHVzIjp0cnVlLCJfaWQiOiI2MWY3MTMyZmQ2MTkxYjViMzA0NjgwZWMiLCJ1c2VySWQiOjIsInVzZXJHZW5yZSI6Ik1hbGUiLCJ1c2VyRmlyc3ROYW1lIjoiQW5kcmVzIiwidXNlckxhc3ROYW1lIjoiVGF5dXBhbnRhIiwidXNlck1haWwiOiJtb3RAaG90bWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NDM2NDMwNTUsImV4cCI6MTY0NjIzNTA1NX0.GtBPNt6Lo6b99ToqgX7i9Aww2veWBC_lt0xdFxQQGIo",
        },
        progress: false,
      });
      this.games = games;
      console.log(this.games);
    } catch (e) {
      this.message = e.response.data.message;
      this.type = "error";
    }
  },
  },

};
</script>

<style>
</style>

<template>
  <div id="app">
    <div class="loader" v-if="$store.state.loading">Loading...</div>
    <div v-else class="footer-container">
      <Header />
      <Categories />
      <MainContent />
      <Footer />
    </div>
  </div>
</template>

<script>
import store from "./store/store";
import Header from "./components/Header";
import Categories from "./components/Categories";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default {
  name: "app",
  store,
  components: {
    Header,
    Categories,
    MainContent,
    Footer
  },
  created: function() {
    this.getStarwars("https://swapi.co/api/starships");
  },
  methods: {
    getStarwars(url) {
      let arr = [];
      store.dispatch("searchSuggestions", { url, arr });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/scss/app.scss";
</style>

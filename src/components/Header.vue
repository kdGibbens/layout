<template>
  <header class="header">
    <div class="row">
      <div class="logo image-container">
        <Images imgUrl="../assets/images/img/logo.png" altTxt="Platt" />
      </div>
      <nav class="header__nav nav" @click="focusInput()">
        <div class="nav__item">
          <Images imgUrl="../assets/images/ic/white/ic_search.png" altTxt="search" />
        </div>
        <div class="nav__item">
          <Images imgUrl="../assets/images/ic/white/ic_shopping_cart.png" altTxt="Alt Text" />
        </div>
        <div class="nav__item">
          <div class="warning"></div>
          <Images imgUrl="../assets/images/ic/white/ic_person.png" altTxt="Alt Text" />
        </div>
        <div class="nav__item">
          <Images imgUrl="../assets/images/ic/white/ic_menu.png" altTxt="Alt Text" />
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="nav-search">
        <input
          type="text"
          class="nav-search__input"
          placeholder="What are you looking for?"
          ref="searchBox"
          v-model="search"
          @input="searchTerm(search);"
        />
        <div class="search__icon">
          <Images imgUrl="../assets/images/ic/black/ic_search.png" altTxt="Alt Text" />
        </div>
        <div class="auto-complete" v-if="showResults" ref="autoComplete">
          <ul class="results-bar">
            <li v-for="result in results" :key="result.name" @click="setSearch(result.name)">
              <h3>{{result.name}}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Images from "./Images";
import store from "../store/store";
export default {
  name: "Header",
  store,
  components: {
    Images
  },
  data: function() {
    return {
      search: "",
      results: [],
      showResults: false
    };
  },
  methods: {
    focusInput() {
      this.$refs.searchBox.focus();
    },
    searchTerm(term) {
      if (this.search != "") {
        this.results = store.state.suggestions.filter(item =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );
        this.showResults = true;
      } else {
        this.showResults = false;
      }
    },
    setSearch(search) {
      this.search = search;
      this.showResults = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

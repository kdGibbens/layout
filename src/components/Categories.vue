<template>
  <div class="categories">
    <div class="category all-categories">
      <div class="wrapper">
        <img src="../assets/images/ic/black/ic_categories.png" alt="All Categories" />
        <h3 class="bold">Shop All Categories</h3>
      </div>

      <img src="../assets/images/ic/black/ic_arrow_forward.png" alt="arrow" class="icon icon-arrow" />
    </div>
    <Category v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<script>
import Category from "./Category";
export default {
  name: "Categories",
  components: {
    Category
  },
  data: function() {
    return {
      categories: [
        {
          id: 1,
          title: "My Catalog",
          iconUrl: "../assets/images/ic/black/ic_playlist_add_check.png"
        },
        {
          id: 2,
          title: "My List",
          iconUrl: "../assets/images/ic/black/ic_list.png"
        },
        {
          id: 3,
          title: "Live Help",
          iconUrl: "../assets/images/ic/green/ic_chat-active.png"
        },
        {
          id: 4,
          title: "My Products",
          iconUrl: "../assets/images/ic/black/ic_check_circle.png"
        },
        {
          id: 5,
          title: "Account",
          iconUrl: "../assets/images/ic/black/ic_person_black.png"
        },
        {
          id: 6,
          title: "Branch Location",
          iconUrl: "../assets/images/ic/black/ic_place.png"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

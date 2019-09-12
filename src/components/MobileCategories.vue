<template>
  <section id="mobile-categories">
    <div class="mobile-category" v-for="item in mobileCategories" :key="item.title">
      <div class="card circle">
        <img :src="item.path" :alt="item.title" />
      </div>
      <div class="title center">
        <h3>{{item.title}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MobileCategories",
  components: {},
  data: function() {
    return {
      mobileCategories: [
        {
          title: "Categories",
          path: "../assets/images/ic/green/ic_line_style.png"
        },
        {
          title: "Search",
          path: "../assets/images/ic/green/ic_search.png"
        },
        {
          title: "Scan",
          path: "../assets/images/ic/green/ic_scanner.png"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

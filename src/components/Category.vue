<template>
  <div class="category">
    <div class="wrapper">
      <img :src="category.iconUrl" :alt="category.title" class="icon" />
      <h3 class="category__title">{{category.title}}</h3>
    </div>
    <img src="../assets/images/ic/black/ic_arrow_forward.png" alt="arrow" class="icon icon-arrow" />
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

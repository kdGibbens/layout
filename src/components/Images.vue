<template>
  <img :src="imgUrl" :alt="altTxt" />
</template>

<script>
export default {
  name: "Images",
  props: {
    imgUrl: String,
    altTxt: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

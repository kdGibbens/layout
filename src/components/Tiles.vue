<template>
  <section id="tiles">
    <div class="card" v-for="tile in tiles" :key="tile.title">
      <h3 class="bold">{{tile.title}}</h3>
    </div>
  </section>
</template>
<script>
export default {
  name: "Tiles",
  data: function() {
    return {
      tiles: [
        {
          title: "My List"
        },
        {
          title: "Branch Locations"
        },
        {
          title: "Products"
        },
        {
          title: "Help Center"
        }
      ]
    };
  }
};
</script>

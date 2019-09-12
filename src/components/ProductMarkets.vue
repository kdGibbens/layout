<template>
  <section id="product-markets">
    <h1 class="heading-1 center">Lorem ipsum</h1>
    <div class="row">
      <div class="card" v-for="item in markets" :key="item.title">
        <img :src="item.imgPath" :alt="item.title" />
        <h3 class="bold">{{item.title}}</h3>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductMarkets",
  data: function() {
    return {
      markets: [
        {
          title: "Title 1",
          imgPath: "https://placekitten.com/640/360"
        },
        {
          title: "Title 2",
          imgPath: "https://placekitten.com/640/360"
        },
        {
          title: "Title 3",
          imgPath: "https://placekitten.com/640/360"
        },
        {
          title: "Title 4",
          imgPath: "https://placekitten.com/640/360"
        },
        {
          title: "Title 5",
          imgPath: "https://placekitten.com/640/360"
        },
        {
          title: "Title 6",
          imgPath: "https://placekitten.com/640/360"
        }
      ]
    };
  }
};
</script>

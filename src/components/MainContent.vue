<template>
  <main class="content main">
    <MobileCategories />
    <ProductMarkets />
    <div class="tablet-reorg">
      <TodaysDeals />
      <GetStarted />
      <RecentlyViewed />
    </div>
    <Tiles />
    <Apps />
  </main>
</template>
<script>
import MobileCategories from "./MobileCategories";
import ProductMarkets from "./ProductMarkets";
import TodaysDeals from "./TodayDeals";
import GetStarted from "./GetStarted";
import RecentlyViewed from "./RecentlyViewed";
import Tiles from "./Tiles";
import Apps from "./Apps";
export default {
  name: "MainContent",
  components: {
    MobileCategories,
    ProductMarkets,
    TodaysDeals,
    GetStarted,
    RecentlyViewed,
    Tiles,
    Apps
  },
  data: function() {
    return {
      categories: ["1", "2", "3", "4", "5", "6"]
    };
  }
};
</script>
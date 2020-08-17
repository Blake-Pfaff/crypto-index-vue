<template>
  <div>
    <CoinCard />
  </div>
</template>

<script>
import CoinCard from "@/components/CoinCard.vue";
import axios from "axios";

export default {
  components: {
    CoinCard,
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.coin = response));
  },
};
</script>

<style lang="scss" scoped></style>

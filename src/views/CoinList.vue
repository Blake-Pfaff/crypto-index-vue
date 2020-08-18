<template>
  <div class="coin-list">
    <div class="container">
      <div class="row">
        <CoinCard
          class="col-md-4"
          v-for="currency in currencies"
          :key="currency.id"
          :currency="currency"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CoinCard from "@/components/CoinCard.vue";
import axios from "axios";

export default {
  components: {
    CoinCard,
  },
  data() {
    return {
      currencies: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=162de255932e490817e3c9b976140884"
      )
      .then((response) => {
        this.currencies = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.coin-list {
  padding-top: 100px;
}
</style>

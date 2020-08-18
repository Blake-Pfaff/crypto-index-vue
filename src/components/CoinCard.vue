<template>
  <div class="coin-container">
    <div class="coin">
      <img :src="currency.logo_url" />
      <h5>Howdy, I'm {{ currency.name }}, price: {{ price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoinCard",
  props: {
    currency: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  computed: {
    price() {
      return Number(this.currency.price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style lang="scss">
.coin-container {
  .coin {
    margin: 10px;
    border: 1px solid gray;
    padding: 30px;
  }
}

img {
  max-width: 80px;
  max-height: 80px;
  padding: 0 0 20px 0;
}
</style>

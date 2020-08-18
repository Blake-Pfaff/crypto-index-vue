<template>
  <div id="app">
    <NavBar />
    <CoinList />
  </div>
</template>

<script>
import CoinList from "@/views/CoinList.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    CoinList,
    NavBar,
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@700&display=swap" rel="stylesheet');
#app {
  font-family: "Istok Web";
  background: rgb(188, 215, 186);
  background: rgb(247, 249, 247);
  background: rgb(247, 249, 247);
  background: linear-gradient(
    90deg,
    rgba(247, 249, 247, 1) 0%,
    rgba(238, 252, 239, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>

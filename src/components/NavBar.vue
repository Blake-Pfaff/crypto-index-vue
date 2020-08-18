<template>
  <div class="nav-bar">
    <h1>Stonks</h1>

    <select name="currencies">
      <option value="USD">USD</option>
      <option value="RUP">RUP</option>
      <option value="PND">PND</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  background: linear-gradient(
    90deg,
    rgba(188, 215, 186, 1) 0%,
    rgba(122, 215, 129, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  width: 100%;
  z-index: 1;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  select {
    background: transparent;
    border-radius: 5px;
  }
}
</style>

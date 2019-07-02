<template>
  <div>
    <div class="search-bar">
      <input class="ipt-btn" type="button" />
      <input class="ipt-text" type="text" value="搜索商品" name="keyword" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
div {
  .search-bar {
    display: flex;
    height: 0.31rem;
    align-items: center;
    background: #fff;
    justify-content: center;
    margin: 0.12rem;
    border: 1px #ccc solid;

    .ipt-btn {
      heigth: 0.24rem;
      width: 0.24rem;
      background: url('http://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee') no-repeat; // jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee) no-repeat
      background-size: 100%;
      border: 0;
      outline: none;
    }

    .ipt-text {
      height: 0.24rem;
      width: 3.09rem;
      padding-left: 0.1rem;
      outline: none;
      border: 0;
      color: #ccc;
    }
  }
}
</style>



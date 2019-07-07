<template>
  <!-- 精选专场 start -->
  <div>
    <div class="listType-wrap">
      <ul>
        <router-link to="/home/products" tag="li" active-class="active">精选专场</router-link>
        <router-link to="/home/singleproducts" tag="li" active-class="active">精选单品</router-link>
      </ul>
    </div>
  </div>
  <!-- 精选专场 end -->
</template>
<script>
export default {};
</script>

<style lang="stylus" scoped>
div {
  .listType-wrap {
    width: 100%;
    height: 0.44rem;
    background: #fff;

    ul {
      display: flex;
      align-items: center;

      li {
        width: 0.64rem;
        height: 0.44rem;
        line-height: 0.44rem;
        margin: 0 0.1rem;
        font-size: 0.16rem;

        &.active {
          border-bottom: 2px solid #ff464e;
          color: #ff464e;
        }
      }
    }
  }
}
</style>

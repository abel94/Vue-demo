<template>
  <!-- 轮播图 start -->
  <div class="main-banner swiper-container">
    <ul class="banner-wrap swiper-wrapper">
      <li class="swiper-slide">
        <img src="https://goods7.juancdn.com/jas/190628/c/f/5d15b29933b08943897eb60f_1080x418.png" />
      </li>
      <li class="swiper-slide">
        <img src="https://goods6.juancdn.com/jas/190628/a/7/5d15d9cbb6f8ea337d38a176_1080x418.jpg" />
      </li>
      <li class="swiper-slide">
        <img src="https://goods4.juancdn.com/jas/190628/6/6/5d15b33ab6f8ea2a373027a8_1080x418.png" />
      </li>
       <li class="swiper-slide">
        <img src="https://goods4.juancdn.com/jas/190628/6/6/5d15b33ab6f8ea2a373027a8_1080x418.png" />
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
  <!-- 轮播图 end -->
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.main-banner {
  .banner-wrap {
    font-size: 0;
    height: 0;
    margin-bottom: 38.667%;

    img {
      width: 100%;
    }
  }
}
</style>

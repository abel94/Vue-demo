<template>
  <div class="type-scroll">
    <div class="type-wrap">
      <div></div>
      <div class="type-wrap-con" v-if="flag">
        <div
          class="type-content"
          v-for="(proItem, index) in resultPro[_id].second_cate"
          :key="index"
        >
          <div class="type-item">
            <img :src="proItem.pic" />
            <a href="javascript:void(0)">{{proItem.text}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../utils/http";
import { Indicator } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      resultPro: [],
      index: 0,
      flag: false
    };
  },
  props: {
    _id: Number
  },

  async mounted() {
    Indicator.open();
    let result = await http.get({
      url: "category/main/list"
    });
    this.resultPro = result.data.category;
    this.flag = true;
    let bScroll = new BScroll(".type-scroll", {
      pullUpLoad: true,
      click: true
    });
    
    Indicator.close();
  }
};
</script>

<style lang="stylus" scoped>
.type-scroll {
  display: flex;
  flex: 5;
  background: #fff;
  overflow hidden
  height: 100%
  .type-wrap {
    .type-wrap-con {
      width: 100%;

      .type-content {
        width: 33.334%;
        display: inline-block;
        flex-wrap: wrap;

        .type-item {
          height: 0.94rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0 0.13rem;

          img {
            width: 100%;
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
            font-size: 0.12rem;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

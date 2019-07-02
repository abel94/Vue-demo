<template>
 <!-- 商品列表 start -->
  <div>
    <div class="products-list">
      <div class="product-item" v-for="goods in goodsList" :key="goods.goods_id">
        <div class="item-img">
          <img
            :src="goods.pic_url"
          />
        </div>
        <div class="item-price">
          <span>￥{{goods.cprice}}</span>
          <s>￥{{goods.oprice}}</s>
        </div>
        <div class="item-title">
          <p>{{goods.title}}</p>
          <span>{{goods.time_left}}</span>
        </div>
      </div>
  
    </div>
  </div>

  <!-- 商品列表 end -->
</template>

<script>
import http from "../../utils/http";
import { Indicator, Toast } from "mint-ui";
import _ from "lodash";
export default {
  data() {
    return {
      goodsList: []
    };
  },

  async mounted() {
    let page = 0;
    let result = await http.get({
      url:
        "api/getGoods?page=2&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
    });
    this.goodsList = result.data.goods;
  }
};
</script>


<style lang="stylus" scoped>
.products-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .product-item {
    width: 50%;
    height: 2.43rem;

    .item-img {
      img {
        width: 100%;
      }
    }

    .item-price {
      height: 0.22rem;
      padding: 0.06rem 0.08rem 0 0.08rem;

      span {
        font-size: 0.15rem;
        color: red;
      }

      s {
        font-size: 0.12rem;
        transform: scale(0.83);
      }
    }

    .item-title {
      display: flex;
      padding-top: 0.05rem;
      justify-content: space-between;

      p {
        width: 1.5rem;
        font-size: 0.12rem;
        color: #3b3b3b;
        transform: scale(0.83);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      span {
        font-size: 0.12rem;
        color: #bbb;
        transform: scale(0.83);
      }
    }
  }
}
</style>


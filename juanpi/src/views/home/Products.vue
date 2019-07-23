<template>
  <!-- 商品列表 start -->
  <div>
    <div class="products-list">
      <div
        class="product-item"
        v-for="goods in goodsList"
        :key="goods.goods_id"
        @click="handleClick(goods.goods_id)"
      >
        <div class="item-img">
          <img :src="goods.pic_url" />
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
import BScroll from "better-scroll";

export default {
  data() {
    return {
      goodsList: {}
    };
  },

  async mounted() {
    let page = 3;
    Indicator.open();
    let result = await http.get({
      url:
        "api/getGoods?page=2&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
    });
    // console.log("p" + this.$store.state.position);

    this.goodsList = result.data.goods;
    Indicator.close();
    let bScroll = new BScroll(".scroll-wrap", {
      pullUpLoad: true,
      click: true
    });
    let _this = this;

    // 从详情页返回时，位置回复到上次滚动的地方
    // bScroll.scrollTo(0, this.$store.state.position);
    // console.log("product is height" + this.$store.state.position);

    // 上拉刷新
    bScroll.on("pullingUp", async function() {
      Indicator.open();
      let moreResult = await http.get({
        url: `api/getGoods?page=${page}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`
      });

      if (moreResult.data.goods) {
        _this.goodsList = [..._this.goodsList, ...moreResult.data.goods];
        _this.$nextTick(() => {
          Indicator.close();
          page++;
          this.refresh();
          this.finishPullUp();
        });
      } else {
        Toast({
          message: "到底了",
          position: "bottom",
          duration: 2000
        });
        Indicator.close();
      }
    });

    // 记录滚动的位置
    bScroll.on("scrollEnd", function() {
      // _this.$store.commit("setPosition", this.y);   
      // console.log("scroll is position " + _this.$store.state.position);
    });
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        name: "detail",
        params: {
          id
        }
      });
    }
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
    height: 2.6rem;

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


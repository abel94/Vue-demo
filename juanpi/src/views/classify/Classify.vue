<template>
  <div class="classify-scroll">
    <div class="classify-wrap">
      <div class="search-wrap">
        <div class="search-bar">
          <input class="ipt-btn" type="button" />
          <input class="ipt-text" type="text" value="搜索商品" name="keyword" />
        </div>
      </div>
      <div class="classify-wrap">
        <div class="classify-type">
          <ul
            @click="activeHover(index)"
            v-for="(tItem, index) in productType"
            :key="tItem.first_cate.cid"
          >
            <li
              @click="handleClick(index)"
              :class="isactive === index ? 'active' : '' "
            >{{ tItem.first_cate.text }}</li>
          </ul>
        </div>
        <ClassifyItem :_id=flag />
      </div>
    </div>
  </div>
</template>

<script>
import ClassifyItem from "./ClassifyItem";
import http from "../../utils/http";
import BScroll from "better-scroll";
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      productType: [],
      isactive: 0,
      flag: 0,
      bsFlag: null
    };
  },
  components: {
    ClassifyItem
  },
  async mounted() {
    Indicator.open()
    let resultType = await http.get({
      url: "category/main/list"
    });
    this.productType = resultType.data.category;
    let bScroll = new BScroll(".classify-scroll", {
      click: true,
      pullUpLoad: true
    });
    this.bsFlag = bScroll
    bScroll.scrollTo(0, 0);
  },
  methods: {
    handleClick(id){
      this.flag = id
      this.bsFlag.scrollTo(0, 0)
    },
    activeHover(index) {
      this.isactive = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.classify-scroll {
  height: 100%;
  overflow: hidden;
  background: #fff;
  .classify-wrap {
    .search-wrap {
      height: 0.45rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;

      .search-bar {
        display: flex;
        height: 0.31rem;
        align-items: center;
        background: #fff;
        justify-content: center;
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

    .classify-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      overflow: scroll;

      .classify-type {
        flex: 2;
        height: 100%;
        background: #f9f9f9;
        ul {
          width: 100%;

          li {
            width: 100%;
            height: 0.46rem;
            display: flex;
            padding-left: 0.1rem;
            align-items: center;

            &.active {
              background: #fff;
              border-left: 0.02rem red solid;
            }
          }
        }
      }
    }
  }
}
</style>



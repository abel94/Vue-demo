<template>
  <div class="scroll-wrap">
    <div class="scroll-content">
      <!-- 搜索 start -->
      <div class="main-search">
        <div class="search-content">
          <a href="javascript:void(0)">
            <svg
              width="15"
              height="15"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#8a8a8a"
                d="M184.1152 727.1936A384 384 0 1 1 727.1936 184.1152 384 384 0 0 1 184.1152 727.1936z m36.1984-36.1984a332.8 332.8 0 1 0 470.6816-470.6816 332.8 332.8 0 0 0-470.6816 470.6816zM745.2672 672.8704l181.0432 181.0432a51.2 51.2 0 0 1-72.3968 72.3968l-181.0432-181.0432 72.3968-72.3968z"
              />
            </svg>
            <span class="search-red">卷皮</span>
            <span class="search-333">搜索</span>
          </a>
          <img width="44" height="44" src="../../assets/images/searchtype_132x132.png" />
        </div>
      </div>
      <!-- 搜索 end -->
      <!-- 轮播图 start -->
      <Banner />
      <!-- 轮播图 end -->
      <!-- 秒杀列表 start -->
      <div class="type-list">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img
                src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png"
              />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img
                src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png"
              />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img
                src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png"
              />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img
                src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png"
              />
            </a>
          </li>
        </ul>
      </div>
      <!-- 秒杀列表 end -->
      <!-- 秒杀清仓图片 start -->
      <div class="preferential-wrap">
        <div class="pre-left">
          <img src="https://s2.juancdn.com/jas/190608/1/a/5cfb0e4bb6f8ea66312fcaad_540x656.gif" />
        </div>
        <div class="pre-right">
          <img src="https://goods4.juancdn.com/jas/190628/6/6/5d156df633b08978c215df7d_540x328.png" />
          <img src="https://goods7.juancdn.com/jas/190628/d/2/5d156e16b6f8ea221358f96d_540x328.png" />
        </div>
      </div>
      <!-- 秒杀清仓图片 end -->
      <!-- 精选口碑好货 start -->
      <div class="main-select">
        <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png" />
      </div>
      <!-- 精选口碑好货 end -->
      <Nav></Nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
import Products from "./Products";
import Banner from "./Banner";
import BScroll from "better-scroll";

export default {
  components: {
    Nav,
    Products,
    Banner
  },
  async mounted() {
    let bScroll = new BScroll(".scroll-wrap", {
      click: true,
      pullUpLoad: true
    });
  }
};
</script>


<style lang="stylus" scoped>
.scroll-wrap {
  overflow: hidden;
  height: 100%;
  .scroll-content {
    .main-search {
      height: 0.44rem;
      background: #fff;
      width: 100%;

      .search-content {
        height: 100%;
        width: 100%;
        padding-left: 0.14rem;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

        a {
          height: 0.28rem;
          width: 3.1rem;
          display: flex;
          padding: 0 0.07rem;
          background: #f2f2f2;
          align-items: center;
          border-radius: 0.02rem;

          .search-red {
            color: red;
            font-size: 0.12rem;
            padding: 0 0.06rem 0 0.1rem;
          }

          .search-333 {
            color: #ccc;
            font-size: 0.13rem;
          }
        }
      }
    }

    .type-list {
      display: flex;
      background #fff
      height: 0.84rem;
      width 100%
      ul {
        width 100%
        display: flex;
        flex 1
        li {
          width 25%
          display: flex;
          a {
            width 100%
            display: flex;
            img {
              height : 100%;
            }
          }
        }
      }
    }

    .preferential-wrap {
      width: 100%;
      height: 2.28rem;
      display: flex;

      .pre-left {
        flex: 1;

        img {
          width: 100%;
        }
      }

      .pre-right {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }

    .main-select {
      width: 100%;
      height: 0.48rem;
      margin: 0.1rem 0;

      img {
        width: 100%;
      }
    }
  }
}
</style>

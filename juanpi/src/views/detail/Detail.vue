<template>
  <div class="detail-wrap">
    <div class="detail-scroll" v-if="productItem.oprice" >
      <div class="detail-content">
        <div class="detail-banner swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(imgItem, index) in bannerImg" :key="index">
              <img :src="imgItem" />
            </li>
          </ul>
          <div class="swiper-pagination"></div>
          <span class="detail-message">
            <svg
              t="1562248424157"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1393"
              width="200"
              height="200"
            >
              <path
                d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z"
                p-id="1394"
                fill="#ffffff"
              />
            </svg>
          </span>
        </div>
        <div class="pro-title">
          <div class="price-detail">
            <span class="n-price">
              <b>￥</b>{{productItem.cprice}}
            </span>
            <span class="o-price">￥{{productItem.oprice}}</span>
            <span class="pro-shop">包邮</span>
            <span class="purchased">1838人已购</span>
          </div>
          <div class="product-title">
            <p>{{productItem.title}}</p>
            <span>
              <svg
                t="1562323856614"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5400"
                width="200"
                height="200"
              >
                <path
                  d="M775.489066 146.93756c-79.003332-20.295232-188.462303-2.578732-263.495206 101.518115-75.030857-104.071264-184.477548-121.756041-263.491113-101.518115C150.449547 172.078147 55.672974 264.135796 64.97892 413.142481 78.512145 629.721145 252.782214 818.584584 498.625388 883.121436c3.40761 0.89744 6.815219 1.326205 10.17064 1.326205 1.081635 0 2.131547-0.180102 3.199878-0.267083 1.068332 0.086981 2.118244 0.267083 3.199878 0.267083 3.355421 0 6.776334-0.428765 10.17064-1.326205C771.210623 818.584584 945.480692 629.708865 959.020056 413.142481 968.332143 264.142959 873.556593 172.078147 775.489066 146.93756zM879.265618 408.161027c-11.256368 180.091658-158.521386 338.332658-367.269711 395.739113-208.748325-57.405431-356.007203-215.634152-367.263571-395.739113-6.464225-103.431697 57.428967-166.850076 123.617435-183.816492 64.940035-16.680914 152.71924 4.591575 204.263174 114.194832 7.287987 15.498996 23.275099 23.987321 39.383986 22.693862 16.111956 1.294482 32.105209-7.194866 39.381939-22.693862 51.543933-109.61042 139.335419-130.843 204.263174-114.194832C821.830511 241.309928 885.729843 304.728306 879.265618 408.161027z"
                  p-id="5401"
                  fill="#8a8a8a"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="pro-discount">
          <span class="dis1">满件折</span>
          <span class="dis2">满1件8折,满2件7.5折</span>
          <img src="https://web.juanpi.com/static/media/more.66830346.png" />
        </div>
        <div class="pro-subsidy">
          <p>
            <span class="dis">24小时发货</span>
            <span class="dis">7天包退</span>
            <span class="dis">售后补贴</span>
          </p>
          <img src="https://web.juanpi.com/static/media/more.66830346.png" />
        </div>
        <div class="pro-subsidy">
          <p>
            <span class="dis">请选择：</span>
            <span class="dis">颜色、</span>
            <span class="dis">尺码</span>
          </p>
          <img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" />
        </div>
        <div class="pro-store">
          <img
            :src="productItem.schedule_info.logo_url"
          />
          <div class="store-title">
            <p class="tit1">{{productItem.schedule_info.brand_title}}</p>
            <p class="tit2">{{productItem.schedule_info.store_info}}</p>
          </div>
          <div class="go-store">进入店铺 ></div>
        </div>
        <div class="product-img">
          <ul>
            <li v-for="(descItem, index) in descImg" :key="index">
              <img
                :src="descItem"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <svg
            t="1562330217065"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2076"
            width="25"
            height="25"
          >
            <path
              d="M1011.017143 560.091429L556.8 24.685714a57.6 57.6 0 0 0-89.6 0L12.982857 560.091429a57.6 57.6 0 0 0 44.8 93.805714c31.817143 0 77.348571 25.782857 77.348572 57.6v251.611428a57.6 57.6 0 0 0 57.6 57.6h102.948571a57.6 57.6 0 0 0 57.6-57.6v-171.154285a57.6 57.6 0 0 1 57.6-57.6h202.24a57.6 57.6 0 0 1 57.6 57.6v171.154285a57.6 57.6 0 0 0 57.6 57.6h102.948571a57.6 57.6 0 0 0 57.6-57.6V711.497143c0-31.817143 45.531429-57.6 77.348572-57.6a57.6 57.6 0 0 0 44.8-93.805714z"
              p-id="2077"
              fill="#707070"
            />
          </svg>
          首页
        </li>
        <li>
          <svg
            width="25"
            height="25"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#8a8a8a"
              d="M819.2 240H256l-8-48c-8-46.4-48-80-94.4-80H96c-17.6 0-32 14.4-32 32s14.4 32 32 32h57.6c16 0 28.8 11.2 32 27.2l75.2 432v3.2c6.4 28.8 32 49.6 62.4 49.6h440c30.4 0 57.6-22.4 62.4-52.8l57.6-320c0-3.2 1.6-8 1.6-11.2-1.6-35.2-30.4-64-65.6-64z m-56 384H323.2l-54.4-320h552l-57.6 320zM304 720c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z m0 128c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zM768 720c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z m0 128c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"
            />
          </svg>
          购物车
        </li>
        <li>立即购买</li>
        <li class="go-carts">加入购物车</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import http from "../../utils/http";
export default {
  data() {
    return {
      productItem: {},
      bannerImg: {},
      descImg: {}
    };
  },
  async mounted() {
    let result = await http.get({
      url: "/ptgoods/detail?",
      params: {
        goods_id: this.$route.params.id
      }
    });
    this.productItem = result.data.info;
    this.bannerImg = result.data.info.images;
    this.descImg = result.data.info.goods_content.gd_content
    this.$nextTick(() => {
      let bScroll = new BScroll(".detail-scroll", {
        click: true,
        pullUpLoad: true
      });
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      });
    });
  }
};
</script>


<style lang="stylus" scoped>
.detail-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;

  .detail-scroll {
    flex: 1;
    overflow: hidden;
    .detail-content {
      height 100%
      .detail-banner {
        position: relative;
        height: 3.75rem;

        ul {
          height: 100%;

          li {
            height: 100%;

            img {
              width: 100%;
            }
          }
        }

        .detail-message {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          z-index: 1;
          border-radius: 50%;
          width: 0.3rem;
          height: 0.3rem;
          background: #9e9f9b;
          overflow: hidden;

          svg {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
      }

      .pro-title {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 1.14rem;
        background: #fff;
        padding: 0.12rem 0.14rem 0.1rem;

        .price-detail {
          display: flex;
          align-items: baseline;
          height: 0.36rem;

          .n-price {
            font-size: 0.24rem;
            color: #ff464e;

            b {
              font-size: 0.16rem;
            }
          }

          .o-price {
            font-size: 0.12rem;
            color: #bbbbbb;
            margin-right: 0.1rem;
          }

          .pro-shop {
            width: 0.4rem;
            height: 0.15rem;
            font-size: 0.12rem;
            background: #ee464e;
            color: #ffffff;
            transform: scale(0.9);
          }

          .purchased {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            font-size: 0.12rem;
            color: #999;
          }
        }

        .product-title {
          height: 0.42rem;
          font-size: 0.16rem;
          display: flex;
          padding: 0.04rem 0 0.1rem 0;

          p {
            height: 0.42rem;
          }

          span {
            width: 0.24rem;
            height: 0.24rem;

            svg {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .pro-discount {
        width: 100%;
        height: 0.48rem;
        display: flex;
        align-items: center;
        font-size: 0.12rem;
        margin: 0.1rem 0;
        background: #ffffff;
        padding: 0 0.08rem;

        .dis1 {
          width: 0.5rem;
          height: 0.15rem;
          font-size: 0.12rem;
          color: #fff;
          margin-right: 0.05rem;
          background: #ff464e;
          transform: scale(0.9);
        }

        .dis2 {
          width: 100%;
        }

        img {
          width: 0.24rem;
          display: flex;
        }
      }

      .pro-subsidy {
        width: 100%;
        height: 0.48rem;
        display: flex;
        align-items: center;
        font-size: 0.12rem;
        margin: 0.1rem 0;
        background: #ffffff;
        padding: 0 0.08rem;

        p {
          width: 100%;

          .dis {
            width: 0.5rem;
            height: 0.15rem;
            font-size: 0.12rem;
            padding-right: 0.1rem;
          }
        }

        img {
          width: 0.24rem;
          display: flex;
        }
      }

      .pro-store {
        width: 100%;
        height: 0.74rem;
        display: flex;
        padding: 0.14rem 0.14rem 0.24rem 0.14rem;
        align-items: center;
        background: #ffffff;

        img {
          width: 0.45rem;
          height: 0.23rem;
        }

        .store-title {
          width: 2.2rem;
          padding: 0 0.1rem;

          .tit1 {
            font-size: 0.16rem;
          }

          .tit2 {
            font-size: 0.12rem;
            color: #999999;
          }
        }

        .go-store {
          width: 0.82rem;
          height: 0.32rem;
          text-align: center;
          line-height: 0.32rem;
        }
      }

      .product-img {
        img {
          width: 100%;
        }
      }
    }
  }

  nav {
    height: 0.48rem;
    width: 100%;
    background: #fff;

    ul {
      display: flex;

      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.12rem;
      }

      .go-carts {
        background: #ff464e;
        color: #fff;
        padding: 0 0.15rem;
      }
    }
  }
}
</style>

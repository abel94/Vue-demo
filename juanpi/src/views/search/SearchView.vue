<template>
    <div class="search-scroll">

        <div class="search-result">
            <div class="srh-title">
                <svg t="1562847276617"
                @click="goBack()" 
                class="icon" viewBox="0 0 1024 1024" version="1.1" 
                xmlns="http://www.w3.org/2000/svg" p-id="2311" width="20" height="20"><path d="M937.4 378.7c-13.8-27.4-33.4-51.9-58.3-72.8-50.1-42.1-116.4-65.3-186.7-65.3H436.9c-1.7 0-3.3 0.2-4.9 0.6V117.4c0-19.2-9.2-36.4-24.7-45.9-15.4-9.6-33.9-9.6-49.3 0L104.6 228.9c-15.4 9.6-24.7 26.8-24.7 45.9 0 19.2 9.2 36.4 24.7 45.9l253.5 157.5c7.7 4.8 16.2 7.2 24.7 7.2 6.7 0 13.4-1.5 19.7-4.5 18.2-8.6 29.6-28.4 29.6-49.8V288.3c1.6 0.4 3.2 0.6 4.9 0.6h255.5c60.3 0 116.8 19.6 159.1 55.1 40.6 34.1 63 79 63 126.3V730c0 47.3-22.4 92.1-63 126.3-42.3 35.5-98.8 55.1-159.1 55.1H86.2c-12.4 0-22.4 10.8-22.4 24.1s10 24.1 22.4 24.1h606.2c70.3 0 136.6-23.2 186.7-65.3 24.9-20.9 44.5-45.4 58.3-72.8 14.5-28.9 21.9-59.7 21.9-91.4V470.2c0.1-31.8-7.3-62.6-21.9-91.5z m-550.2 53.6c0 1.8-0.7 3.2-2.1 4.1-1.5 1-3.4 0.9-4.8-0.1L127 279c-1.5-0.9-2.2-2.3-2.3-4 0-1.9 1-3.6 2.5-4.5l253.3-157.3c1.5-0.9 2.9-0.9 4.4-0.1 1.5 0.9 2.4 2.7 2.4 4.5v314.7z" p-id="2312"></path></svg>
                <div class="view-search">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        @click="searchClick()"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill="#8a8a8a"
                        d="M184.1152 727.1936A384 384 0 1 1 727.1936 184.1152 384 384 0 0 1 184.1152 727.1936z m36.1984-36.1984a332.8 332.8 0 1 0 470.6816-470.6816 332.8 332.8 0 0 0-470.6816 470.6816zM745.2672 672.8704l181.0432 181.0432a51.2 51.2 0 0 1-72.3968 72.3968l-181.0432-181.0432 72.3968-72.3968z"
                    />
                    </svg>
                    <input type="text" placeholder="搜索商品" ref="iptVal" @keyup.enter="searchClick()">
                </div>
                <svg t="1562845215176"
                 viewBox="0 0 1024 1024" 
                 version="1.1" xmlns="http://www.w3.org/2000/svg" 
                 p-id="1378" 
                 width="30" height="30"><path d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z" p-id="1379" fill="#8a8a8a"></path></svg>
            </div>

            <ul class="list-banner">
                <li>推荐</li>
                <li>
                    价格
                    <svg t="1562848266056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1663" width="200" height="200"><path d="M836.8 633.6H187.2c-32 0-51.2 20.8-35.2 36.8 24 25.6 310.4 324.8 324.8 339.2 17.6 19.2 56 16 72 0C560 998.4 854.4 688 872 670.4c16-17.6-4.8-35.2-35.2-36.8zM187.2 390.4h649.6c30.4 0 51.2-19.2 35.2-36.8-17.6-17.6-312-328-324.8-340.8-14.4-16-52.8-17.6-72 0C462.4 28.8 176 328 152 353.6c-16 16 3.2 36.8 35.2 36.8z" fill="#8a8a8a" p-id="1664"></path></svg>
                </li>
                <li>销量</li>
                <li>上新</li>
                <li>
                    筛选
                    <svg t="1562848414024" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2453" width="200" height="200"><path d="M938.205184 0 85.794816 0C38.58315 0 0.176713 38.408777 0.176713 85.620443 0.176713 108.1344 8.867255 129.218267 24.725797 145.352997 25.198592 146.230711 25.802459 147.044059 26.519845 147.763785L326.109477 447.376823 326.109477 602.683099 326.107136 602.683099 326.107136 629.539986 326.114158 629.539986C326.114158 629.63712 326.107136 629.733083 326.107136 629.830217 326.107136 649.414949 341.983232 665.291045 361.567963 665.291045 381.152695 665.291045 397.028791 649.414949 397.028791 629.830217 397.028791 629.733083 397.021769 629.63712 397.021769 629.539986L397.028791 629.539986 397.028791 628.411831C397.033472 628.290121 397.047515 628.168411 397.047515 628.045531L397.047515 422.299941C397.047515 419.543918 395.952128 416.900242 394.002432 414.950546L78.183278 99.151287C77.639095 98.287616 76.957989 97.496503 76.156343 96.809545 74.122386 95.06816 70.707493 91.29984 70.707493 85.620443 70.707493 77.300882 77.475255 70.53312 85.795986 70.53312L938.207525 70.53312C946.511872 70.53312 953.267931 77.300882 953.267931 85.620443 953.267931 91.319735 949.871762 95.077522 947.843657 96.810715 947.020946 97.514057 946.330478 98.326235 945.779273 99.210971L630.020974 414.928311C628.068937 416.879177 626.97355 419.525193 626.97589 422.282386 626.97589 425.101605 627.105792 706.772992 627.105792 938.360832 627.105792 946.66635 620.290048 953.423579 611.910802 953.423579 606.155337 953.423579 602.337865 950.000494 600.575415 947.959515 599.86037 947.130953 599.032978 946.435803 598.131858 945.884599L516.772425 865.6896C512.705682 861.681371 506.166126 861.703607 502.12981 865.738752L466.577701 901.265115C464.618642 903.223003 463.522085 905.881893 463.530277 908.651959 463.539639 911.422025 464.654921 914.072722 466.626853 916.017737L549.501806 997.725915C550.226213 998.443301 551.048923 999.042487 551.936 999.510601 568.15499 1015.329353 589.320777 1023.99883 611.908462 1023.99883 659.328439 1023.99883 697.908078 985.590053 697.908078 938.379557L697.908078 447.376823 997.496539 147.762615C998.227968 147.031186 998.837687 146.202624 999.316334 145.307355 1015.146789 129.179648 1023.823287 108.112165 1023.823287 85.620443 1023.826798 38.409947 985.41685 0 938.205184 0L938.205184 0Z" p-id="2454" fill="#707070"></path><path d="M361.567963 716.997778C339.14997 716.997778 320.912238 735.235511 320.912238 757.654674 320.912238 780.073838 339.14997 798.312741 361.567963 798.312741 383.985957 798.312741 402.223689 780.073838 402.223689 757.654674 402.223689 735.235511 383.985957 716.997778 361.567963 716.997778L361.567963 716.997778Z" p-id="2455" fill="#707070"></path></svg>    
                </li>
            </ul>
             <div class="products-list">
                <div v-for="item in showList"
                    :key="item.id"
                    class="product-item"
                >
                    <div class="item-img">
                        <img :src="item.picurl" />
                    </div>
                    <div class="item-price">
                        <span>￥{{item.cprice}}</span>
                        <s>￥{{item.oprice}}</s>
                    </div>
                    <div class="item-title">
                        <p>{{item.vip_mark.text}}</p>
                        <p class="font-12">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from "mint-ui";

export default {
    data() {
        return {
            searchVal: this.$route.params.resultVlaue,
            showList: []
        }
    },

    async mounted() {
        let page = 2
        this.$refs.iptVal.value = this.$route.params.resultVlaue
        console.log('未上拉'+ page)
        Indicator.open()
        let result = await http.get({
             url: 'search',
                params:{
                    keyword: this.searchVal,
                    item:'' ,
                    user_groupids: 'p8_c4_l4_222',
                    page: 1,
                    is_ajax: 1,
                    order: '',
                    sort: '',
                    cat_threeids:'' ,
                    price_range: '',
                    filter_id: '',
                }
        })
        this.showList = result.data.list
        let bScroll = new BScroll('.search-scroll',{
            click: true,
            pullUpLoad: true
        })
        let _this = this
        Indicator.close()
        bScroll.on('pullingUp', async function() {
            Indicator.open()
            console.log(_this.searchVal)
            let moreResult = await http.get({
                url: 'search',
                params:{
                    keyword: _this.searchVal,
                    item:'' ,
                    user_groupids: 'p8_c4_l4_222',
                    page,
                    is_ajax: 1,
                    order: '',
                    sort: '',
                    cat_threeids:'' ,
                    price_range: '',
                    filter_id: '',
                }
            });
            console.log(moreResult.data.list)
            console.log('上拉刷新'+ page)
            if (moreResult.data.list) {
                _this.showList = [..._this.showList, ...moreResult.data.list];
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
                Indicator.close()
            }
        })
    },

    methods: {
        goBack() {
            this.$router.go(-1)
        },

        searchClick() {
            this.searchVal = this.$refs.iptVal.value
            console.log(this.searchVal)
        }
    },

    watch: {
       async searchVal() {
            let result = await http.get({
             url: 'search',
                params:{
                    keyword: this.searchVal,
                    item:'' ,
                    user_groupids: 'p8_c4_l4_222',
                    page: 1,
                    is_ajax: 1,
                    order: '',
                    sort: '',
                    cat_threeids:'' ,
                    price_range: '',
                    filter_id: '',
                }
        })
        this.showList = result.data.list
        }
    }
}
</script>

<style lang="stylus" scoped>
.search-scroll
    height 100%
    overflow hidden
    background #fff
    .search-result
        display flex
        flex-direction column
        .srh-title
            width 100%
            display flex
            height .44rem
            justify-content center
            padding .1rem
            svg
                width .20rem
                height .20rem
            .view-search
                height: 0.28rem;
                width: 100%;
                display: flex;
                border .01rem solid #666666
                border-radius: 0.02rem;
                align-items: center;
                padding-left: 0.1rem;
                margin 0 .1rem
                svg
                    width .15rem
                    height .15rem
                input
                    width: 2.72rem;
                    height: 0.25rem;
                    padding-left: 0.1rem;
                    border: none;
    .list-banner
        height .30rem
        display flex
        align-items center
        justify-content center
        padding .05rem
        li
            flex 1
            display flex
            text-align center
            justify-content center
            align-items center
            svg
                width .2rem
                height .3rem
                padding-left .1rem
    .products-list
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        .product-item
            width: 50%;
            height: 2.53rem;

            .item-img
                img
                    width: 100%
            .item-price
                height: 0.22rem;
                padding: 0.06rem 0.08rem 0 0.08rem;

            span
                font-size: 0.15rem;
                color: red;
            s 
                font-size: 0.12rem;
            .item-title
                display: flex;
                padding-top: 0.05rem;
                flex-direction column
                p 
                    width: 1.5rem;
                    font-size: 0.12rem;
                    color: #3b3b3b;
                    transform: scale(0.83);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                .font-12
                    padidng .02rem 0 .03rem .08rem
                    font-size .15rem
                    color #3b3b3b
</style>

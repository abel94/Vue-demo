<template>
  <div>
    <div v-if="goodsItem">
        <div class="carts-item" v-for="item in goodsItem" :key="item.goods_id">
            <span class="item-box" @click="selectClick(item.goods_id)" :class="isFlag ? 'active' : ''">
                <svg t="1562156391999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2983" width="200" height="200"><path d="M512 64a448 448 0 1 1-448 448 448 448 0 0 1 448-448m0-64a512 512 0 1 0 512 512 512 512 0 0 0-512-512z" p-id="2984" fill="#8a8a8a"></path></svg>
            </span>
            <img :src="item.images[0]">
            <div class="item-desc">
                <p class="item-title">
                    {{item.title}}
                </p>
                <p class="item-type">
                    1505#白色 L
                </p>
                <span class="item-count">X{{item.quantity}}</span>
                <p class="item-price">
                <span class="n-price">￥{{item.cprice}}</span>
                <s class="o-price">￥{{item.oprice}}</s>
                </p>
            </div>
        </div>
    </div>
     <div v-if="goodsItem.length===0">购物车空空如也</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isFlag: false
        }
      
    },
   props: ['goodsItem'],

   methods: {
       selectClick(id) {
            this.$emit('selectItem', id)
            this.isFlag = !this.isFlag
            console.log(this.isFlag,id)
       }    
   }
};
</script>

<style lang="stylus" scoped>
    div
        .carts-item
            display flex
            width 100%
            height 1.23rem
            background #fff
            padding-left .14rem
            align-items center
            .item-box
                padding-right .1rem
                svg 
                    width .15rem
                    height .15rem
                &.active
                    background red
            img
                height .9rem
            .item-desc
                height .9rem
                width 100%
                display flex
                flex-direction column
                padding 0 .1rem
                .item-title
                    color #333
                    font-size .14rem
                .item-type
                    color #bbb
                    height .19rem
                    font-size .14rem
                .item-count
                    color #666
                    display flex
                    height .3rem
                    font-size .14rem
                    justify-content flex-end
                    align-items flex-end
                .item-price
                    display flex
                    .n-price
                        color #ff464e
                        font-size .12rem
                    .o-price
                        font-size .12rem 
                        color #999

</style>


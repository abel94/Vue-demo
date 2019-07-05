<template>
  <div class="carts-wrap">
    <div class="carts-content">
        <div class="item-title">
            <span class="select-box">
               <svg t="1562156391999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2983" width="200" height="200"><path d="M512 64a448 448 0 1 1-448 448 448 448 0 0 1 448-448m0-64a512 512 0 1 0 512 512 512 512 0 0 0-512-512z" p-id="2984" fill="#8a8a8a"></path></svg>
            </span>
            <img src="http://s2.juancdn.com/bao/170615/2/d/594233d5a43d1f45d646cb90_72x72.png">
            <span class="box-title">BeiLiNeiLi女装小店</span>
            <span class="arr-right">
              <svg viewBox="0 0 1024 1024" version="1.1" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M346.52382345477406 104.43830532674417c-12.257495055447652-12.257495055447652-30.6437359627898-12.257495055447652-42.90123101823747 0s-12.257495055447652 30.6437359627898 0 42.90123101823747L668.2830560915551 512 303.6225924365366 876.6604636550185c-12.257495055447652 12.257495055447652-12.257495055447652 30.6437359627898 0 42.90123101823747 6.128747527723826 6.128747527723826 15.3218679813949 9.193120453671073 21.450615509118734 9.193120453671073s15.3218679813949-3.064372925947246 21.450615509118734-9.193120453671073l386.1110791641372-386.1110791641372c12.257495055447652-12.257495055447652 12.257495055447652-30.6437359627898 0-42.90123101823747L346.52382345477406 104.43830532674417z"  /></svg>
            </span>
        </div>
        <CartsItem />
    </div>
    <div class="go-buy">
      <div class="all-select">
          <span class="all-check">
               <svg t="1562156391999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2983" width="200" height="200"><path d="M512 64a448 448 0 1 1-448 448 448 448 0 0 1 448-448m0-64a512 512 0 1 0 512 512 512 512 0 0 0-512-512z" p-id="2984" fill="#8a8a8a"></path></svg>              
          </span>
          全选
      </div>
      <div class="sum-pro">
          <p class="s-money">合计<span>￥2222.00</span></p>
          <p class="d-money">
            总额
            <span class="money-1">￥222.00</span>
            立减
            <span class="money-2">￥222.00</span></p>
      </div>
      <div class="pay-money">
          去结算(<span class="s-count">0</span>)
      </div>
    </div>
  </div>
</template>

<script>
import CartsItem from './CartsItem'
export default {
    components: {
      CartsItem
    }
}
</script>

<style lang="stylus" scoped>
    .carts-wrap
        height 100%
        display flex
        flex-direction column
        padding-bottom .44rem 
        .carts-content
          flex 1
          .item-title
            height .45rem
            width 100%
            display flex
            background #fff
            padding 0 .14rem
            align-items center
            border-bottom: .01rem solid #ebebeb;
            border-top: .01rem solid #ebebeb;
            .select-box
              display flex
              align-items center
              margin-right .05rem
              svg
                width .15rem
            img
              width .2rem
            .box-title
              padding 0 .05rem
              color #666
            .arr-right
              padding-left .05rem 
              svg
                width .11rem
                height .11rem
        .go-buy
          height .49rem
          width 100%
          background #fff
          display flex
          .all-select
            width .94rem
            height 100%
            color #333
            display flex
            justify-content center
            align-items center
            .all-check
              height 100%
              display flex
              align-items center
              padding-right .1rem
              svg
                width .15rem
                height .15rem
          .sum-pro
            width 1.64rem
            height 100%
            display flex
            flex-direction column
            justify-content flex-end
            align-items center
            padding-right .1rem 
            .s-money
              width 100%
              color #ff464e
              font-size .14rem
              display flex
              justify-content flex-end
              align-items center
            .d-money
              width 100%
              color #212121
              font-size .12rem
              transform scale(.9)
              display flex
              justify-content flex-end
              align-items center
          .pay-money
            width 1.125rem
            height .48rem
            display flex
            background #ff464e
            justify-content center
            align-items center
            font-size .18rem
            color #fff 



</style>



<template>
    <div>
        <div class="mine-wrap">
            <div class="mine-title">
                <span>
                   <svg t="1562164473332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1984" width="200" height="200"><path d="M352 512l384-384c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L288 486.4C281.6 492.8 275.2 505.6 275.2 512c0 6.4 0 19.2 6.4 25.6l409.6 409.6c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L352 512z" p-id="1985" fill="#ffffff"></path></svg>
                </span>
                <div>
                    个人中心
                </div>
                <a href="javascript:void(0)">退出</a>
            </div>
            <div class="user-img">
                <img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg">
                <div class="user-desc">
                    <p>jp_wasdfew</p>
                    <span>
                        我的账户
                        <svg t="1562221963079" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965" width="200" height="200"><path d="M377.895 812.748c11.584 9.682 28.84 8.112 38.506-3.48l233.204-279.755c4.248-5.068 6.347-11.286 6.347-17.513 0-6.219-2.1-12.445-6.347-17.513L416.401 214.733c-9.665-11.593-26.93-13.163-38.506-3.48s-13.163 26.896-3.498 38.505L593.022 512 374.397 774.242c-9.682 11.626-8.113 28.807 3.498 38.506z" p-id="1966" fill="#ffffff"></path></svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>    
   div
    height 100%
    width 100%
    .mine-wrap
        width 100%
        height 1.44rem
        background url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png) no-repeat
        background-size 100% 
        .mine-title
            width 100%
            height .44rem
            display flex
            color #fff
            span
                width .32rem
                height .44rem
                display flex
                margin 0 .14rem 
                justify-content center
                align-items center
                svg
                    width .2rem;
            div
                display flex
                justify-content center
                align-items center
                width 3.75rem
                font-size  .18rem 
                height .44rem
            a 
                display flex
                color #fff
                text-decoration none 
                justify-content center
                align-items center
                width .44rem
                height .44rem
                margin 0 .14rem 
                font-size .14rem
        .user-img
            height .56rem
            width 100%
            margin .24rem .1rem 
            display flex
            img
                width .54rem
                height .54rem
                border-radius 50%
            .user-desc
                display flex
                flex-direction column
                padding-left .1rem
                color #fff
                p
                    color #fff
                    font-size .16rem
                    padding-bottom .1rem 
                span
                    width .64rem
                    height  .17rem
                    background #f3414a
                    display flex 
                    justify-content center
                    align-items center
                    font-size .12rem
                    transform scale(.8)
                    border-radius .1rem
                    svg
                        width .15rem
                        height .15rem

</style>



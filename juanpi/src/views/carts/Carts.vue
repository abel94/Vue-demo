<template>
    <div>
        <div class="carts-title">
            <a>
                <svg width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" 
                xmlns="http://www.w3.org/2000/svg">
                <path fill="#8a8a8a" d="M324.211517 511.805631 787.889594 73.082583c16.19422-16.630365 16.19422-43.974704 0-60.605068-16.19422-16.630365-42.495607-16.630365-58.613976 0L235.750113 479.360302c-8.647031 8.969398-12.344775 20.934917-11.719003 32.445329-0.644735 11.90863 3.071972 23.874149 11.719003 32.824585l493.506542 466.882788c16.118369 16.649327 42.438718 16.649327 58.613976 0 16.19422-17.085471 16.19422-43.974704 0-60.605068L324.211517 511.805631" /></svg>
            </a>
            <div>
                购物车
            </div>
            <span>编辑</span>
        </div>
        <CartsList />
    </div>
</template>

<script>
import CartsList from './CartsList'

export default {
    components: {
        CartsList
    }
}
</script>

<style lang="stylus" scoped>    
    div
        height 100%
        width 100%
        .carts-title
            width 100%
            height .44rem
            display flex
            background #fff
            a
                width .32rem
                height .44rem
                display flex
                margin-left .1rem 
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
            span 
                display flex
                justify-content center
                align-items center
                width .44rem
                height .44rem
                margin-right .1rem 
                font-size .15rem 


</style>



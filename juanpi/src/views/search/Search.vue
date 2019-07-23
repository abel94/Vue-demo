<template>
  <div class="search-wrap">
    <div class="search-content">
      <div class="search-ipt">
        <svg
          @click="searchClick()"
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
        <input type="text" placeholder="搜索商品" ref="iptValue" @keyup.enter="searchClick()"/>
      </div>
      <a href="javascript:void(0)" @click="backClick()">取消</a>
    </div>
    <div class="hot-search">
      <p>热搜</p>
      <ul>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
      </ul>
    </div>
     <div class="old-search">
      <p>
        <span>搜索历史</span>
        <a href="javascript:void(0)">
            <svg t="1562419694265" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2000" width="20" height="20"><path d="M256 256v608a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V256z m480 704H288a96 96 0 0 1-96-96V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v640a96 96 0 0 1-96 96z" p-id="2001" fill="#8a8a8a"></path><path d="M160 256a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM352 448a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0zM480 448a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0zM608 448a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0z" p-id="2002" fill="#8a8a8a"></path><path d="M647.04 128h-270.08l-16 64h302.08zM704 256H320a32 32 0 0 1-32-39.68l32-128A32 32 0 0 1 352 64h320a32 32 0 0 1 32 24.32l32 128A32 32 0 0 1 704 256z" p-id="2003" fill="#8a8a8a"></path></svg>
        </a>
      </p>
      <ul>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
        <li>品质母婴清仓</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: null,
      goodsList: []
    }
  },

  methods: {
    backClick() {
      this.$router.go(-1)
    },
   
    searchClick() {
      this.searchValue = this.$refs.iptValue.value
      this.$router.push({
        name: 'searchview',
        params: {
          resultVlaue:  this.searchValue 
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-wrap {
  height: 100%;
  background: #ffffff;

  .search-content {
    height: 0.38rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.1rem;
    padding-top: 0.1rem;

    .search-ipt {
      height: 0.28rem;
      width: 100%;
      display: flex;
      background: #f2f2f2;
      border-radius: 0.02rem;
      align-items: center;
      padding-left: 0.1rem;

      input {
        width: 2.72rem;
        height: 0.28rem;
        padding-left: 0.1rem;
        border: none;
        background: #f2f2f2;
      }
    }

    a {
      width: 0.7rem;
      text-decoration: none;
      text-align: center;
      color: #333333;
    }
  }

  .hot-search {
    width: 100%;
    padding-left: 0.1rem;
    padding-top: 0.2rem;

    p {
      color: #999999;
    }

    ul {
      width: 100%;
      margin-top: 0.1rem;
      li {
        width: 0.94rem;
        height: 0.26rem;
        display: inline-block;
        line-height: 0.26rem;
        text-align: center;
        background: #f4f4f4;
        font-size: 0.12rem;
        color: #ff464e;
        border-radius: 0.1rem;
        margin-right: .2rem
        margin-top: .1rem  
      }
    }
  }
  .old-search{
    width: 100%;
    padding-left: 0.1rem;
    padding-top: 0.2rem;

    p {
      color: #999999;
      display flex
      align-items center
      justify-content space-between
      padding-right .2rem
    }

    ul {
      width: 100%;
      margin-top: 0.1rem;
      li {
        width: 0.94rem;
        height: 0.26rem;
        display: inline-block;
        line-height: 0.26rem;
        text-align: center;
        background: #f4f4f4;
        font-size: 0.12rem;
        color: #666666;
        border-radius: 0.1rem;
        margin-right: .2rem
        margin-top: .1rem  
      }
    }
    }
}
</style>


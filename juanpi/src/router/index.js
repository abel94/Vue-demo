import Vue from 'vue'
import VueRouter from 'vue-router'

// 主页
import Home from '../views/home/Home'
// 分类页
import Classify from '../views/classify/Classify'
// 购物车页
import Carts from '../views/carts/Carts'
// 我的页
import Mine from '../views/mine/Mine'

// 首页子路由
import Products from '../views/home/Products'
import SingleProducts from '../views/home/SingleProducts'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/products',
        children: [
            {
                path: 'products',
                name: 'products',
                component: Products
            },
            {
                path: 'singleproducts',
                name: 'singleproducts',
                component: SingleProducts
            }
        ]
    },
    {
        path: '/classify',
        name: 'classify',
        component: Classify
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/carts',
        name: 'carts',
        component: Carts
    }
]

export default new VueRouter({
    routes
})
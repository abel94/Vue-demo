import Vue from 'vue'
import VueRouter from 'vue-router'

// 主页
import Index from '../views/Index'
import Home from '../views/home/Home'
// 分类页
import Classify from '../views/classify/Classify'
// 分类页子路由
import ClassifyItem from '../views/classify/ClassifyItem'
// 购物车页
import Carts from '../views/carts/Carts'
// 我的页
import Mine from '../views/mine/Mine'
// 详情页
import Detail from '../views/detail/Detail'
// 搜索页
import Search from '../views/search/Search'

// 首页子路由
import Products from '../views/home/Products'
import SingleProducts from '../views/home/SingleProducts'
import {
    IndexKind
} from 'typescript';

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        redirect: '/home',
        component: Index,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                redirect: '/home/products',
                children: [{
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
                component: Classify,
                redirect: '/classify/classifyitem',
                children: [{
                    path: 'classifyitem',
                    name: 'classifyitem',
                    component: ClassifyItem
                }]
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
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]

export default new VueRouter({
    routes
})
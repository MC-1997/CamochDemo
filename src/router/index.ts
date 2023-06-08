import {createRouter, createWebHistory} from 'vue-router'
import {defineAsyncComponent} from "vue";

// @ts-ignore
const router = createRouter({
    // history: createWebHashHistory(),  // hash 模式
    history: createWebHistory(),  // history 模式
    routes: [
        {
            path: '/',
            name: 'login',
            component: defineAsyncComponent(() => import(`../views/login/login.vue`)),
            meta: {
                title: '登录',
            },
        },
        {
            path: '/home',
            name: 'home',
            component: defineAsyncComponent(() => import(`../views/sys/home/index.vue`)),
            meta: {
                title: 'sql解密',
            },
        }
    ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})

router.afterEach((to, from)=>{
    // console.log(to, from)
    console.log('afterEach')
})

export default router

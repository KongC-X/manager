import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        component: Home,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎体验Vue3全栈课程'
                },
                component: () => import('@/views/Welcome.vue')
            },
            {
                name: 'user',
                path: '/system/user',
                meta: {
                    title: '用户管理'
                },
                component: () => import('@/views/User.vue')
            },
            {
                name: 'role',
                path: '/system/role',
                meta: {
                    title: '角色管理'
                },
                component: () => import('@/views/Role.vue')
            },
            {
                name: 'dept',
                path: '/system/dept',
                meta: {
                    title: '部门管理'
                },
                component: () => import('@/views/Dept.vue')
            },
            {
                name: 'menu',
                path: '/system/menu',
                meta: {
                    title: '菜单管理'
                },
                component: () => import('@/views/Menu.vue')
            },
            {
                name: 'leave',
                path: '/audit/leave',
                meta: {
                    title: '休假申请'
                },
                component: () => import('@/views/Leave.vue')
            },
            {
                name: 'approve',
                path: '/audit/approve',
                meta: {
                    title: '待我审批'
                },
                component: () => import('@/views/Approve.vue')
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () => import('./../views/Login.vue')
    },
    {
        name: '404',
        path: '/404',
        meta: {
            title: '页面不存在'
        },
        component: () => import('@/views/404.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 动态路由
// async function loadAsyncRoutes() {
//     let userInfo = storage.getItem('userInfo') || {}
//     if (userInfo.token) {
//         try {
//             const { menuList } = await API.getPermissionList()
//             let routes = utils.generateRoute(menuList)
//             routes.map(route => {
//                 let url = `./../views/${route.component}.vue`
//                 route.component = () => import(url);
//                 router.addRoute("home", route);
//             })
//         } catch (error) {

//         }
//     }
// }
// loadAsyncRoutes();

// 导航守卫
router.beforeEach((to, from, next) => {
    if (router.hasRoute(to.name)) {
        document.title = to.meta.title;
        next()
    } else {
        next('/404')
    }
})

export default router
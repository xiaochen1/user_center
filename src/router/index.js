import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

import user from '@/pages/user/user'
import user_home from '@/pages/user/userhome'
import user_detail from '@/pages/user/detail'

import usergroup from '@/pages/usergroup/usergroup'
import usergroup_home from '@/pages/usergroup/grouphome'
import usergroup_detail from '@/pages/usergroup/detail'

import application from '@/pages/application/application'
import app_home from '@/pages/application/apphome'
import app_detail from '@/pages/application/detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: index,
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: index,
            redirect: "/user",
            children: [{
                    path: "/user",
                    name: "user",
                    component: user_home,
                    redirect: "/user/home",
                    children: [{
                        name: "userhome",
                        path: "/user/home",
                        component: user
                    }, {
                        name: "userdetail",
                        path: "/user/detail",
                        component: user_detail
                    }]
                },


                {
                    path: "/usergroup",
                    name: "usergroup",
                    component: usergroup_home,
                    redirect: "/usergroup/home",
                    children: [{
                            name: "grouphome",
                            path: "/usergroup/home",
                            component: usergroup,

                        },

                        {
                            name: "groupdetail",
                            path: "/usergroup/detail",
                            component: usergroup_detail
                        }

                    ]

                },

                {
                    path: "/application",
                    name: "application",
                    component: app_home,
                    redirect: "/application/home",
                    children: [{
                        name: "apphome",
                        path: "/application/home",
                        component: application
                    }, {
                        name: "appdetail",
                        path: "/application/detail",
                        component: app_detail
                    }]
                }
            ]

        },
    ],

    mode: "history"
})
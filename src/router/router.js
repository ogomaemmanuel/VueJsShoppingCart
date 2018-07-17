import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../components/Login.vue';
import Register from "../components/Register.vue"
import Home from "../components/Home.vue"
import ProductList from '../components/products/ProductList.vue'
import CartItemList from '../components/cart/CartItemList.vue'
import firebase from 'firebase'
import  Inventory from '../components/admin/Inventory/Inventory.vue'
import  InventoryEdit from '../components/admin/Inventory/InventoryEdit.vue'
import InventoryList from '../components/admin/Inventory/InventoryList.vue'

let router = new Router({
    routes: [
        {path: '*', redirect: "/"},
        {
            path: "/",
            name: 'login',
            component: Login
        },
        {
            path: "/register",
            name: 'register',
            component: Register,
        },

        {
            path: "/home",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: true
            },
            children: [{
                path: "/products",
                name: "products",
                component: ProductList,
                meta: {
                    requiresAuth: true
                }
            },
                {
                    path: "/cart",
                    name: "cart",
                    component: CartItemList,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "/inventory",
                    name: 'inventory',
                    component: Inventory,
                    children:[{
                        path: "/inventoryedit",
                        name: 'inventoryedit',
                        component: InventoryEdit,

                    },
                        {
                            path: "/inventorylist",
                            name: 'inventorylist',
                            component: InventoryList,

                        }
                    ]
                }


            ]

        },

    ],
    mode: 'history'

})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    console.log("firebasedata",currentUser);
    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!currentUser) {
            //console.log(currentUser);
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            if(to.matched.some(record => record.name==='login')){
                next({
                    path: '/home',
                    query: {redirect: to.fullPath}
                })

            }
            else {
                next();
            }

        }

    } else {

        next();
    }

})

export default router

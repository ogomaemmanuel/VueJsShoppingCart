import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/index'
import firebase from 'firebase'
import './components/firebaseInit';
import VueStripeCheckout from 'vue-stripe-checkout';
import stripeconfig from './stripeconfig'
// import '../node_modules/foundation-sites/dist/css/foundation.min.css';
// import * as Foundation from "foundation-sites";
Vue.use(Element, { locale })

Vue.use(VueStripeCheckout, stripeconfig)

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
        /* eslint-disable no-new */
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});


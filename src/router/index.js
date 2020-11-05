import Vue from 'vue'
import VueRouter from 'vue-router'
import CountTest from '../views/CountTest'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/counttest', component: CountTest}
    ]
});

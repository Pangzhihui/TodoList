// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import VueTouch from 'vue-touch'

Vue.use(VueRouter)
Vue.use(VueTouch,{name:'v-touch'})

//引入组件
import ShowOne from './components/ShowOne.vue'
import ShowAll from './components/ShowAll.vue'
import AddTask from './components/AddTask.vue'
import UpdateTask from './components/UpdateTask.vue'

const routes = [
    {path:'/',component:ShowOne},
    {path:'/show-one',component:ShowOne},
    {path:'/show-all',component:ShowAll},
    {path:'/add',component:AddTask},
    {path:'/update',component:UpdateTask,name:'update'}
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    store,
    ...App
})
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 先写个假数据
const state = {
  //list:[{pri:高优,sta:进行中,content:task}]
  list: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
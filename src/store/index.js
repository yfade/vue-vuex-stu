import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态对象
const state = {
    count: 0
}

//包含多个更新state函数的对象
const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
}

//包含多个对应事件回调函数的对象
const actions = {
    increment({commit}) {
        commit('INCREMENT');
    },
    decrement({commit}, param) {
        commit('DECREMENT');
        console.log('decrement param:' + param.name)
    }

}
//包含多个getters计算属性函数的对象
const getters = {
    msg(state) {
        return state.count % 2 === 1 ? '奇数' : '偶数'
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

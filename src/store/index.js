import { createStore } from 'vuex'
import data from '@/assets/data.json'
import _ from 'lodash'

export default createStore({
  state: {
    data: data,
    daedeok: null,
    yuseong: null,
    seo: null,
    dong: null,
    joong: null,
  },
  getters: {
    getDaedeok: state => state.daedeok,
  },
  mutations: {
    SET_DAEDEOK(state, daedeok) {
      console.log('SET_DAEDEOK mutation executed')
      state.daedeok = daedeok
    },
    SET_YUSEONG(state, yuseong) {
      state.yuseong = yuseong
    },
    SET_SEO(state, seo) {
      state.seo = seo
    },
    SET_DONG(state, dong) {
      state.dong = dong
    },
    SET_JOONG(state, joong) {
      state.joong = joong
    },
  },
  actions: {
    // beforeMount({ commit }) {
    //   const daedeok = _.find(data, { "시군구명": "대덕구" })
    //   const yuseong = _.find(data, { "시군구명": "유성구" })
    //   const seo = _.find(data, { "시군구명": "서구" })
    //   const dong = _.find(data, { "시군구명": "동구" })
    //   const joong = _.find(data, { "시군구명": "중구" })

    //   commit('SET_DAEDEOK', daedeok)
    //   commit('SET_YUSEONG', yuseong)
    //   commit('SET_SEO', seo)
    //   commit('SET_DONG', dong)
    //   commit('SET_JOONG', joong)

    //   console.log('beforeMount action executed')
    // },
  },
  modules: {},
})

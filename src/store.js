import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token,
      state.userId = userData.userId
    }
  },
  actions: {
    signup ({commit}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyDipzqtuBMkWRlumG3Bof-Kv75ouHZataI', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
           token: res.data.idToken,
           userId: res.data.localId  
          })
        })
        .catch(error => console.log(error))
    },
    login ({commit}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyDipzqtuBMkWRlumG3Bof-Kv75ouHZataI', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
        commit('authUser', {
         token: res.data.idToken,
         userId: res.data.localId  
        })
      })
        .catch(error => console.log(error))
    },
    storeUser ({commit}, userData) {
      globalAxios.post('/users.json', userDatas)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    },
    fetchUser ({commit}) {
      axios.get('/users.json')
      .then(res => {
        coonsole.log(res)
        const data = res.data
        const users = []
        for(let key in data){
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.email = users[0].email
      })
      .catch(error => console.log(error))
    }
  },
  getters: {

  }
})
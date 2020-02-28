import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: 'ddd' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  store.commit('setUser', user)
})

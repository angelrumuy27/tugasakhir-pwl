<template>
    <div id='app'>
        <div id='nav'>
            <router-link v-if='authenticated' to='/login' v-on:click='logout()' replace>Logout</router-link>
        </div>
        <router-view @authenticated='setAuthenticated' />
    </div>
</template>

<script>
import { db } from './db'
import Vue from 'vue'
// import loginVue from './views/login.vue'
db.collection('user')
  .where('nama', '==', 'angel')
  .get()
  .then(snap => {
    snap.forEach(doc => {
      Vue.prototype.$tes = doc.data().nama
    })
    console.log(Vue.prototype.$tes)
  })

export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'angel',
        password: '123'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>
<style>
    body {
        background-color: rgb(197, 105, 105);
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>

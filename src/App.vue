<template>
    <div>
        <div id='nav'>
            <router-link v-if='authenticated' to='/secure' v-on:click='logout()' replace>Logout</router-link>
        </div>
        <router-view @authenticated='setAuthenticated' />
        <div id="login">
      <table>
        <tr>
          <th> <v-img id="imgLogo" src="./assets/online-shopping.png"/></th>
          <th id="elLogin">
            <h1>Login</h1><br>
            <input id="ursnm" type='text' name='username' v-model='mockAccount.inpusername' placeholder='Username' />
            <input id="pass" type='password' name='password' v-model='mockAccount.inppassword' placeholder='Password' /><br>
            <button id='btnLogin' type='button' v-on:click='login()'>Login</button><br><br>
          </th>
        </tr>
      </table>
      <h5 id="register">Belum punya akun? <router-link to="/register">register</router-link></h5>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { db } from './db'
// import Vue from 'vue'
// import loginVue from './views/login.vue'

export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        inpusername: '',
        inppassword: ''
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: '/' })
    }
  },
  methods: {
    ...mapActions(['setApUser']),
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
      this.$router.replace({ name: 'login' })
    },
    login () {
      db.collection('user')
        .where('nama', '==', this.mockAccount.inpusername)
        .get()
        .then(snap => {
          const documents = snap.docs.map(doc => doc.data())
          console.log(documents[0].nama)
          if (this.mockAccount.inpusername !== '' && this.mockAccount.inppassword !== '') {
            // console.log(this.mockAccount.username)
            // console.log(this.mockAccount.inpusername)
            // console.log(this.mockAccount.username)
            if (this.mockAccount.inpusername === documents[0].nama && this.mockAccount.inppassword === documents[0].password) {
              this.setApUser(documents[0].nama)
              this.authenticated = true
              this.$router.replace({ name: 'secure' })
            } else {
              console.log('The username and / or password is incorrect')
            }
          } else {
            console.log('A username and password must be present')
          }
        })
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
    #ursnm{
  border: 1px black;
    }
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #elLogin{
      text-align: left;
      padding-left: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #elLogin input{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 5px 15px;
      margin: 5px 0px;
    }
    #imgLogo{
      width: 160px;
      padding-right: 20px;
      padding-left: 10px;
    }
    #login #btnLogin{
      background-color: rgb(82, 175, 159);
      padding: 5px 77px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #register{
      margin-left: 135px;
      text-align: center;
    }
</style>

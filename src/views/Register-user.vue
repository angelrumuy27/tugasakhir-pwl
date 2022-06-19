<template>
    <div id='register'>
      <table>
        <tr>
          <!-- <th> <img id="imgLogo" src="../assets/online-shopping.png"/></th> -->
          <th id="elLogin">
            <h1>Register</h1>
            <input type='text' name='username' v-model='input.username' placeholder='Username' required/><br>
            <input type='password' name='password' v-model='input.password' placeholder='Password' required/><br>
            <input type='password' name='confpassword' v-model='input.confpassword' placeholder='Ulangi Password' required /><br><br>
            <button id='btnLogin' type='button' v-on:click='register()'>Register</button>
            <h5><router-link to="/login">Login</router-link></h5>
          </th>
        </tr>
      </table>
    </div>
</template>
<script>
import { db } from '../db'
export default {
  name: 'RegisterUser',
  data () {
    return {
      input: {
        username: '',
        password: '',
        confpassword: ''
      }
    }
  },
  methods: {
    register () {
      if (this.input.username !== '') {
        if (this.input.password !== '') {
          if (this.input.password === this.input.confpassword) {
            db.collection('user').add({ nama: this.input.username, password: this.input.password })
          } else {
            console.log('password dan confirm password harus sama')
          }
        } else {
          console.log('password harus diisi')
        }
      } else {
        console.log('username harus diisi')
      }
    }
  }
}
</script>
<style scoped>
    #register {
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
      padding-left: 150px;
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
    #register #btnLogin{
      background-color: rgb(82, 175, 159);
      padding: 5px 75px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #register{
      margin-left: 280px;
      text-align: center;
    }
</style>

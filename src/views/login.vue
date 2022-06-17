<template>
    <div id='login'>
      <table>
        <tr>
          <th> <img id="imgLogo" src="../assets/online-shopping.png"/></th>
          <th id="elLogin">
            <h1>Login</h1>
            <input type='text' name='username' v-model='input.username' placeholder='Username' />
            <input type='password' name='password' v-model='input.password' placeholder='Password' /><br>
            <button id='btnLogin' type='button' v-on:click='login()'>Login</button>
          </th>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'LoginUser',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
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
</style>

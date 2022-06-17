<template>
  <div class="hello">
    <div class="topnav">
        <img id="logo" src="../assets/make-up.png" alt="">
        <a id="keranjang" href=""><img src="../assets/icons8-buying-64.png" alt="Chart"></a>
        <a href="#contact">Contact</a>
        <a href="/about">About</a>
        <a class="active" href="/">Home</a>
    </div>
    <h3>Baju kaos</h3>
    <ul>
        <li id="fotobarang"><ul><img src="https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q60.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q60.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q60.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q60.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
    </ul>
    <h3>Celana</h3>
    <ul>
        <li id="fotobarang"><ul><img src="https://www.berluti.com/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw5b7aa9db/images/R16TCU57-002_slim-fit-cotton-chino-pants_pleiades_berluti_01.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://www.berluti.com/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw5b7aa9db/images/R16TCU57-002_slim-fit-cotton-chino-pants_pleiades_berluti_01.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://www.berluti.com/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw5b7aa9db/images/R16TCU57-002_slim-fit-cotton-chino-pants_pleiades_berluti_01.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
        <li id="fotobarang"><ul><img src="https://www.berluti.com/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw5b7aa9db/images/R16TCU57-002_slim-fit-cotton-chino-pants_pleiades_berluti_01.jpg" alt="Italian Trulli"></ul><ul>kaos oblong</ul></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#fotobarang img {
    width: 200px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.topnav {
  overflow: hidden;
  background-color: #FC94AF;
}
.topnav img {
  height: 60px;
  float: left;
  padding: 5px 16px;
}
.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #9E4244;
  color: white;
}
#keranjang{
    width: 60px;
    padding: 0px;
    margin-right: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

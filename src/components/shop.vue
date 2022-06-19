<template>
  <div class="hello">
    <div class="topnav">
        <img id="logo" src="../assets/make-up.png" alt="">
        <table id="tableSearch">
            <th>
                <tr><input id="searching" type="text" placeholder="search..."/></tr>
            </th>
            <th>
                <tr><img src="../assets/magnifying-glass.png" alt="search" id="searchLogo"/></tr>
            </th>
        </table>
        <a id="keranjang" href=""><img src="../assets/icons8-buying-64.png" alt="Chart"></a>
        <a href="#contact">Contact</a>
        <a href="/about">About</a>
        <router-link to="/" class="active">Home</router-link>
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
    <h3>Follow Us</h3>
    <table>
        <th>
            <tr><img src="../assets/facebook.png" alt="fb" id="sosmed"/></tr>
            <tr><img src="../assets/instagram.png" alt="ig" id="sosmed"/></tr>
        </th>
        <th>
            <tr><a href="https://www.facebook.com/" target="_blank" rel="noopener" id="sosmedname">Facebook</a></tr>
            <tr><a href="https://www.instagram.com/" target="_blank" rel="noopener" id="sosmedname">Instagram</a></tr>
        </th>
    </table>
    <ul>
      <li></li>
      <li></li>
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
  background-color: #FDAB9F;
  color: black;
}
.topnav a.active {
  background-color: #9E4244;
  color: white;
}
#searching{
    border-radius: 5px;
    height: 30px;
    width: 250px;
    padding-left: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#tableSearch{
    display: block;
    float: left;
    padding-left: 170px;
    margin-top: 10px;
}
#searchLogo{
    width: 20px;
    height: 20px;
    padding: 0px;
}
#keranjang {
    width: 60px;
    padding: 0px;
    padding-right: 40px;
    margin-right: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sosmed {
    width: 20px;
}
#sosmedname{
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

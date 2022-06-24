<template>
  <v-app>
    <div class="topnav">
        <img id="logo" src="../assets/make-up.png" alt="">
        <table id="tableSearch">
            <th>
                <tr><input name= "search" id="searching" v-model='input.search' type="text" placeholder="search..."/></tr>
            </th>
            <th>
                <v-btn id="searchbtn" v-on:click = 'search()'>search</v-btn>
                <ul>
                  <li v-for= "produk in produks" id="itemSearch" :key="produk.img">
                  </li>
                </ul>
            </th>
        </table>
        <router-link to="/chart"><img src="../assets/icons8-buying-64.png" alt="Chart"></router-link>
        <a href="#contact">Contact</a>
        <a href="/about">About</a>
        <router-link to="/" class="active">Home</router-link>
    </div>
    <!-- <div v-for="b of produk" :key="b.id">{{b}}</div> -->
    <button id="allproduk" v-on:click = 'readFromFirestore()'>Lihat Semua Produk</button>
    <ul>
      <li v-for= "produk in produks" id="articleCardList" :key="produk.img">
      <ul><img :key="produk.img" :src="produk.img"/></ul>
      <ul> <h5 v-text= "produk.nama_produk"></h5></ul>
      <ul><li>Rp.</li><li><h5 v-text="produk.harga"></h5></li></ul>
      <ul><li><input type="number" id="qty" v-model="input.qty"></li></ul>
      <ul><v-btn id="addto" v-on:click="addtocart(produk.id)">+Cart</v-btn></ul>
      </li>
    </ul>
    <h3>Follow Us</h3>
    <table>
        <th>
            <tr><v-img src="../assets/facebook.png" alt="fb" id="sosmed"/></tr>
            <tr><v-img src="../assets/instagram.png" alt="ig" id="sosmed"/></tr>
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
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../db'
export default {
  name: 'HelloW',
  data () {
    return {
      input: {
        search: '',
        qty: 0
      },
      produks: []
    }
  },
  computed: {
    ...mapGetters(['apUser'])
  },
  methods: {
    async readFromFirestore () {
      this.produks = []
      db
        .collection('produk')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            this.produks.push({
              id: doc.id,
              nama_produk: doc.data().nama_produk,
              kategori: doc.data().kategori,
              harga: doc.data().harga,
              img: doc.data().img,
              stok: doc.data().stok
            })
          })
        })
      console.log(this.produks)
    },
    async search () {
      this.produks = []
      db
        .collection('produk')
        .where('nama_produk', '==', this.input.search)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            this.produks.push({
              id: doc.id,
              nama_produk: doc.data().nama_produk,
              kategori: doc.data().kategori,
              harga: doc.data().harga,
              img: doc.data().img,
              stok: doc.data().stok
            })
          })
        })
      console.log(this.produks)
    },
    addtocart (identify) {
      console.log(this.input.qty)
      db.collection('produk')
        .doc(identify)
        .get()
        .then((querySnapShot) => {
          const documents = querySnapShot.data()
          console.log('documents:\n', documents)
          db.collection('keranjang').add({ harga: documents.harga, img: documents.img, qty: this.input.qty, nama_produk: documents.nama_produk, user: this.apUser })
        })
    },
    onload () {
      console.log('haii')
      this.readFromFirestore()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addto{
  background-color: #cd7374;
}
#searchbtn{
  padding: 5px 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
#allproduk{
  margin-top: 20px;
  padding: 10px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
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
#jumlah{
  border: 1px black;
  background: #f1eded;
  width: 80px;
  margin-bottom: 10px;
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
    border: 5px black;
    background: #f2f2f2;
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

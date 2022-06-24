<template>
  <v-app>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">Keranjang</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">ITEM</th>
                <th class="text-center">PRICE</th>
                <th class="text-center">QUANTITY</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <button id="allproduk" v-on:click = 'readBelanja()'>Lihat Semua Produk</button>
              <tbody>
              <tr v-for= "produk in produks" id="im" :key="produk.id">
                <td>
                  <v-list-item>
                  <v-list-item-avatar>
                    <img :key="produk.img" :src="produk.img"/>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title ><h5 v-text= "produk.nama_produk"></h5></v-list-item-title>
                  </v-list-item-content>
                </v-list-item></td>
                <td>Rp.<h5 v-text="produk.harga"></h5><input :value="produk.harga" @load="updateTotal" type="number" id="hargaBrg" disabled hidden/>
                </td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number" v-text="produk.qty">
                  </v-text-field>
                </td>
                <td>Rp.<p type="number" v-text="produk.harga * produk.qty"></p></td>
                <td><a>X</a></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="overline">Alamat Pengiriman
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Provinsi/Kota:</td>
              </tr>
              <tr>
                  <input style="padding-left:15px; font-size: 15px;" type="text" name="" id="" placeholder="..">
              </tr>
              <tr>
                <td>Kecamatan</td>
              </tr>
              <tr>
                  <input style="padding-left:15px; font-size: 15px;" type="text" name="" id="" placeholder="..">
              </tr>
              <tr>
                <td>Nama Jalan</td>
              </tr>
              <tr>
                  <input style="padding-left:15px; font-size: 15px;" type="text" name="" id="" placeholder="..">
              </tr>
              <tr>
                <td>Alamat Lengkap</td>
              </tr>
              <tr>
                  <input v-model="message" style="padding-left:15px; font-size: 15px;" placeholder="alamat..">
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
              <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="primary white--text mt-5"
          >
          proceed
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Checkout</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Review</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Alamat Pengiriman</v-list-item-title>
              <v-list-item-subtitle><p> {{ message }}</p></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Estimasi</v-list-item-title>
              <v-list-item-subtitle>3-4 Hari</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Bubble Wrap</v-list-item-title>
              <v-list-item-subtitle>+5k</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Kotak Kayu</v-list-item-title>
              <v-list-item-subtitle>+20k</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Extra Protection</v-list-item-title>
              <v-list-item-subtitle>+40k</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <button style="padding:30px 100px; font-size: 15px; background-color: #4169E1; margin-left: 550px; color: aliceblue;">Kirim</button>
      </v-card>
    </v-dialog>
  </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
import { db } from '../db'
export default {
  name: 'keranjangUser',
  data () {
    return {
      input: {
        username: '',
        password: '',
        harga: 0,
        sale_total: this.harga * 9,
        alamat: ''
      },
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      visibleScrollingLongContentDemo: false,
      produks: []
    }
  },
  methods: {
    readBelanja () {
      this.produks = []
      db
        .collection('keranjang')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            this.produks.push({
              id: doc.id,
              nama_produk: doc.data().nama_produk,
              harga: doc.data().harga,
              img: doc.data().img,
              user: doc.data().user,
              qty: doc.data().qty
            })
          })
        })
      console.log(this.produks)
      // document.getElementById('total').innerHTML = this.updateTotal()
      // console.log(this.updateTotal())
    },
    updateTotal (event) {
      // this.input.harga = event.target.value
      // this.input.sale_total = this.input.harga * 0
      // document.getElementById('hargaBrg').value * 0
    },
    setHarga (hrg) {
      this.input.harga = hrg
      console.log(hrg)
    }
  }
}
</script>

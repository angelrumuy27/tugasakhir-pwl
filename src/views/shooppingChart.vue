<template>
  <div class="shop">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <chart/>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import chart from '@/components/chart.vue'

export default {
  name: 'shooppingChart',
  components: {
    chart
  }
}
</script>

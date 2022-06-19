<template>
  <div class="secure">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <shop msg="hallo"/>
  </div>
</template>
<!-- Bootstrap core JS-->
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> -->
<!-- Core theme JS-->
<!-- <script src="scripts.js"></script> -->
<script>
import shop from '@/components/shop.vue'
export default {
  name: 'SecurePage',
  components: {
    shop
  }
}
</script>
<style scoped lang="scss">
</style>

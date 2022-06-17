<template>
    <div id='secure'>
        <shop :msg='hello'></shop>
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
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>

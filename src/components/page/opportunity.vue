<template>
  <div>
    <app-cover></app-cover>
    <app-detail></app-detail>
  </div>
</template>
<script>
import detail from './pageContent/details.vue'
import cover from './pageCover/cover.vue'
export default {
  data(){
    return {

    }
  },
  components: {
    appDetail: detail,
    appCover: cover
  }
}
</script>
<style scoped>

</style>

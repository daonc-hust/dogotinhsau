<template>
  <div>bai viet</div>
</template>

<script>
  export default {
    name: 'Posts',
    asyncData({ $axios }) {
      console.log('async data===========')
      $axios.get('/test').then(res => console.log('res', res))
      return {
        test: 'res'
      }
    },
    mounted() {
      console.log('mounted')
    }
  }
</script>

<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HeaderApp from '../layouts/HeaderApp'
import Navbar from '../layouts/Navbar'
import Carousel from '../components/Carousel'

export default {
  name: 'AppMain',
  components: {
    Carousel,
    // Navbar,
    // HeaderApp,
    Logo
  }
}
</script>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
  /*position: relative;*/
}

h2 h3 {
  color: #35495e;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script>

export default {
  name: 'AppMain',
  components: {
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

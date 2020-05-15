<template>
  <h2>{{ title }}</h2>
</template>

<script>
  export default {
    name: 'Divider',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    position: relative;
    text-align: center;
    margin-bottom: 10px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 2%;
      width: 300px;
      height: 2px;
      background: #eaecef;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 2%;
      width: 300px;
      height: 2px;
      background: #eaecef;
    }
  }
</style>

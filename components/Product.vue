<template>
  <div class="product">
    <img width="280px" height="240px" :src="imageSrc" :alt="name">
    <div class="name">
      <nuxt-link class="product-name" to="/product-detail">{{ name }}</nuxt-link>
    </div>
    <div class="price">
      {{ price }} <span>đ</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      imageSrc: {
        type: String,
        default: 'https://www.scandichotels.com/Static/img/placeholders/image-placeholder_3x2.svg'
      },
      name: {
        type: String,
        default: ''
      },
      price: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .product-name {
    text-decoration: none;
    color: cornflowerblue;
    font-weight: 500;
  }

  .price {
    font-size: 13px;
    font-weight: bold;
    color: #FF5364;
    margin-top: 5px;

    span {
      text-decoration: underline #FF5364;
    }
  }
</style>

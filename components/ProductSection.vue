<template>
  <el-collapse class="collapse-section" v-model="activeNames" @change="handleChange">
    <el-collapse-item :title="title" name="1">
      <div class="product-section">
        <div class="head-wrapper">
          <div class="head-section">
            <h3 class="title">{{ title }}</h3>
            <a class="view-all" :href="href">Xem tất cả</a>
          </div>
          <slot name="description"></slot>
<!--          <div class="description">-->
<!--            <span>Đồ gỗ Tình Sáu</span> xin giới thiệu đến các bạn những mẫu bàn ghế phòng khách <span>gỗ tự nhiên</span> đẹp, độc đáo và đẳng cấp nhất. Chắc chắn sẽ giúp phòng khách nhà bạn toát lên vẻ sang trọng và quý phái-->
<!--          </div>-->
        </div>
        <div class="product-list">
          <product v-for="(product, idx) in productList" :key="idx" :name="product.name" :price="product.price" />
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import Product from './Product'

  export default {
    name: 'ProductSection',
    components: { Product },
    props: {
      title: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: '#'
      },
      productList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        activeNames: ['1'],
        // productList: [
        //   {
        //     name: 'Tay 12 huong da',
        //     price: '26.000.000'
        //   },
        //   {
        //     name: 'Tay 12 huong da',
        //     price: '26.000.000'
        //   },
        //   {
        //     name: 'Tay 12 huong da',
        //     price: '26.000.000'
        //   },
        //   {
        //     name: 'Tay 12 huong da',
        //     price: '26.000.000'
        //   }
        // ]
      }
    },
    methods: {
      handleChange() {

      }
    }
  }
</script>

<style lang="scss">
  .el-collapse {
    border: none !important;
  }
  .collapse-section {
    padding: 12px;
  }
  .product-section {
    /*padding: 12px;*/
  }
  .head-wrapper {

    .description {
      margin-top: 10px;
      font-size: 14px;
      color: black;
      span {
        font-weight: bold;
        color: #526488;
      }
    }
  }
  .head-section {
    display: flex;
    justify-content: center;

    .title {
      flex: 1;
      /*display: inline-block;*/
      color: #35495e;
      font-size: 24px;
      font-weight: bold;
    }
    .view-all {
      flex: 1;
      position: relative;
      font-weight: 600;
      text-align: right;
      padding-right: 24px;
      text-decoration: none;
      color: cornflowerblue;

      &:after {
        content: '>';
        position: absolute;
        right: 8px;
      }
    }
  }

  .product-list {
    display: flex;
    flex-direction: row;
    position: relative;
    /*flex-wrap: wrap;*/
    justify-content: center;
    align-items: center;

    .product {
      flex: 1;
      width: 300px;
    }
  }

</style>

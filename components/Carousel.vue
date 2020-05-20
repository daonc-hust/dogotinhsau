<template>
  <el-carousel class="carousel-app" type="card" trigger="click" height="450px">
    <el-carousel-item v-for="item in images" :key="item">
      <img class="slide" :src="item" alt="slide">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import img1 from './../assets/images/banghe.jpg'
  import img2 from './../assets/images/phongngu.png'

  export default {
    name: 'Carousel',
    data() {
      return {
        images: [
          img1,
          img2,
          'https://noithatvincen.com/public/images/tintuc/thiet-ke-noi-that-tuong-phong-ngu-dep-mat-cho-la-astoria-1217_background.jpg',
          'https://kientrucdmc.com/wp-content/uploads/2015/05/Modern-Kitchen-10-Desktop-Background.jpg'
        ]
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 1199px){
    .carousel-app {
      display: none;
    }
  }
  .el-carousel__mask {
    opacity: 0.3;
    background: #fff;
  }

  .slide {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 450px;
  }
</style>

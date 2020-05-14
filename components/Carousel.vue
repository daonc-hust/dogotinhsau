<template>
  <el-carousel trigger="click" height="450px">
    <el-carousel-item v-for="item in images" :key="item">
      <img class="slide" :src="item" alt="slide">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        images: [
          'https://saigon24gio.files.wordpress.com/2015/12/home-interior-design-background-hd-wallpaper.jpg?w=1365&h=768&crop=1',
          'https://noithatduongdai.vn/wp-content/uploads/2018/04/phong-tho.jpg',
          'https://noithatvincen.com/public/images/tintuc/thiet-ke-noi-that-tuong-phong-ngu-dep-mat-cho-la-astoria-1217_background.jpg',
          'https://kientrucdmc.com/wp-content/uploads/2015/05/Modern-Kitchen-10-Desktop-Background.jpg'
        ]
      }
    }
  }
</script>

<style>
  .slide {
    object-fit: cover;
  }
</style>

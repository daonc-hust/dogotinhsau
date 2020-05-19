<template>
  <div class="post">
    <img :src="imageSrc" alt="post">
    <div class="time">
      <p class="date" v-if="date">{{ date < 10 ? `0${date}` : date }}</p>
      <p class="month" v-if="month">th{{ month }}</p>
    </div>
    <nuxt-link to="/">{{ title }}</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      title: {
        type: String,
        default: ''
      },
      imageSrc: {
        type: String,
        default: 'https://www.scandichotels.com/Static/img/placeholders/image-placeholder_3x2.svg'
      },
      date: {
        type: Number,
        default: 0
      },
      month: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="scss">
  .post {
    flex: 1;
    padding: 12px;
    position: relative;

    .time {
      position: absolute;
      width: 60px;
      height: 70px;
      background: #fff;
      border: 2px solid #46B29D;
      top: 30px;
      left: -3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        color: #35495e;
      }

      .date {
        font-size: 20px;
        font-weight: bold;
      }

      .month {
        font-size: 13px;
        font-weight: 500;
      }
    }

    img {
      width: 280px;
      height: 160px;
      margin-bottom: 5px;
    }

    a {
      display: block;
      text-decoration: none;
      color: cornflowerblue;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>

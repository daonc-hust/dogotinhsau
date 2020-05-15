<template>
  <div class="feedback-wrapper">
    <div class="feedback">
      <img class="avatar-customer" src="https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="a">
      <el-rate value="4"></el-rate>
      <p class="description"></p>
      <p class="address"></p>
    </div>
    <div class="feedback">
      <img class="avatar-customer" src="https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="a">
      <el-rate value="5"></el-rate>
      <p class="description"></p>
      <p class="address"></p>
    </div>
    <div class="feedback">
      <img class="avatar-customer" src="https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="a">
      <el-rate value="5"></el-rate>
      <p class="description"></p>
      <p class="address"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Feedback'
  }
</script>

<style lang="scss">
  .feedback-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .feedback {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 5px;
      }
    }
  }
</style>

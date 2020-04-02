<template>
  <div class="page-container">
    <top-navigator></top-navigator>
    <div class="mine-container">
      <img class="mine-avatar" src="@/assets/images/sakurai.jpg" alt="">
      <p class="mine-desc">君に幸せを買っている誰かが傍に居るってこと、</p>
      <p class="mine-desc">忘れないで。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainPage",
    data() {
      return {}
    },
    components: {
      TopNavigator: resolve => require(['@/components/TopNavigator.vue'], resolve),
    },
    mounted() {

    },
  }
</script>

<style scoped>
  .page-container {
    height: 5000px;
    background: #108dc7; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ef8e38, #108dc7); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .mine-container {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mine-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .mine-desc {
    font-size: 13px;
    line-height: 1.8;
  }
</style>

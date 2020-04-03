<template>
  <div>
    <header>
      <h1>Hello Blog</h1>
      <img class="theme-bg" src="@/assets/images/nature-4974546_1920.jpg" alt="">
    </header>
    <section class="article">
      <div class="content-container">
        <p>这里是一名小小的前端的Blog</p>
        <p>&nbsp;</p>
        <p>不知道写些什么好，也不知道能不能坚持下去</p>
        <p>也许会是我记录生活点滴的地方</p>
        <p>也许会是我分享知识的地方</p>
        <p>又或许会变成一个情感宣泄的地方？</p>
        <p>&nbsp;</p>
        <p>愿好</p>
        <p style="margin-top: 200px">说是Blog,似乎不太合适，那就当作Personal Website罢。</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "blog200403",
  }
</script>

<style scoped>
  header {
    position: relative;
    height: 500px;
    line-height: 500px;
    overflow: hidden;
    user-select: none;
  }

  header .theme-bg {
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -1;
  }

  header h1 {
    position: relative;
    color: white;
    font-size: 80px;
  }

  .article {
    text-align: left;
    padding: 20px 0;
    box-shadow: 0 0 30px 30px #fff;
  }

  .content-container {
    width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  .article p {
    font-size: 16px;
    line-height: 1.2;
    margin: 20px 0;
  }
</style>

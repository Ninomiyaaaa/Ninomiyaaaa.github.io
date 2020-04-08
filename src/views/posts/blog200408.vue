<template>
  <div>
    <header>
      <h1>{{title}}</h1>
      <img class="theme-bg" src="@/assets/images/at-home-5000290_1920.jpg" alt="">
    </header>
    <section class="article">
      <div class="content-container">
        <p>放弃了React Native
          <del style="margin-left: 1em;font-style: italic">红色太刺眼了</del>
        </p>
        <p>查阅了许多跨端解决方案的文，在纠结了一周之后，最终决定用Flutter</p>
        <p>今天是Flutter学习第一天,希望能够坚持下去，写blog的原因也是为了提醒自己。</p>
        <p style="margin-top: 3em">【1小时后】woc真香！已经好久没有这么兴奋了，果断跳坑</p>
        <p style="margin-top: 3em">今日学习内容：</p>
        <ol class="list">
          <li>Flutter环境配置及项目搭建</li>
          <li>ListView的使用</li>
          <li>MaterialPageRoute的使用</li>
          <li>配置静态资源</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "blog200408",
    data() {
      return {
        title: '',
      }
    },
    mounted() {
      this.title = this.$route.meta.title
    },
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

  .content-container > * {
    font-size: 16px;
    line-height: 1.2;
    margin: 20px 0;
  }

  .content-container .list {
    list-style: decimal;
    padding: 0 2em;
  }

  .content-container .list * {
    line-height: 1.2;
    margin: 10px 0;
  }
</style>

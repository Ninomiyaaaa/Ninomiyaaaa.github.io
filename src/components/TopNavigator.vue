<template>
  <div id="container" class="container" :class="transparent?'transparent':''">
    <div class="logo">
      <router-link :to="{path:'/'}">
        <img class="logo-img" src="@/assets/images/arashi5.png">
      </router-link>
    </div>
    <ul class="navigator-list flex-list">
      <li class="navigator-item " v-for="(item,index) in navigator" :key="index">
        <router-link :to="item.path">{{item.meta.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import navigator from '@/router/navigator.js'

  export default {
    name: "TopNavigator",
    data() {
      return {
        scrollTop: 0,
        transparent: false,
        navigator: navigator,
      }
    },
    mounted() {
      document.onscroll = function () {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      }.bind(this)
    },
    methods: {
    },
    watch: {
      scrollTop: {
        handler: function (newVal, oldVal) {
          if (newVal > 200 && oldVal <= 200) {
            this.transparent = true
          } else if (newVal < 200 && oldVal > 200) {
            this.transparent = false
          }
        },
      },
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 15px;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    transition: all 500ms linear;
  }


  .transparent {
    background-color: transparent;
    transition: all 500ms linear;
  }

  .logo-img {
    width: 100px;
  }

  .container > * {
    /*height: 100%;*/
  }

  .navigator-list {
    font-size: 16px;
  }

  .navigator-item {
    padding: 0 15px;
  }
</style>

<template>
  <div id="container" class="container">
    <div class="logo">
      <img class="logo-img" src="@/assets/images/arashi5.png" alt="">
    </div>
    <ul class="navigator-list flex-list">
      <li class="navigator-item " v-for="i in 3">
        <a href="#">{{`item${i}`}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TopNavigator",
    data() {
      return {
        scrollTop: 0,
        transParent: false,
      }
    },
    mounted() {
      document.onscroll = function () {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      }.bind(this)
    },
    methods: {},
    watch: {
      scrollTop: {
        handler: function (newVal) {
          if (newVal > 200 && !this.transParent) {
            this.transParent = true
          } else if (newVal < 200 && this.transParent) {
            this.transParent = false
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
    width: 100%;
  }


  .transparent {
    background-color: transparent;
    transition: all 2s linear;
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

<template>
  <div>
    <top-navigator></top-navigator>
    <transition name="custom-classes-transition"
                :enter-active-class="isMounted?'animated faster fadeInLeft':''"
                :leave-active-class="isMounted?'animated faster fadeOutRight':''"
                mode="out-in">
      <router-view/>
    </transition>
    <bottom-tail></bottom-tail>
  </div>
</template>

<script>
  export default {
    name: "Index",
    components: {
      TopNavigator: resolve => require(['@/components/TopNavigator.vue'], resolve),
      BottomTail: resolve => require(['@/components/BottomTail.vue'], resolve),
    },
    data() {
      return {
        isMounted: false,
      }
    },
    watch: {
      $route(to, from) {
        if (to.meta.title) {
          document.title = to.meta.title
        }
      },
    },
    methods: {},
    mounted() {
      if (navigator.appName === 'Microsoft Internet Explorer') {
        console.log('fuck ie')
      }
      setTimeout(function () {
        this.isMounted = true
      }.bind(this), 1000)
    },
  }
</script>

<style scoped>

</style>

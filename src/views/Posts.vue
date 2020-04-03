<template>
  <div class="page-container">
    <ul class="post-list">
      <li class="post-item" v-for="(item,index) in blog" :key="index">
        <span class="post-time">{{item.meta.time}}</span>
        <router-link :to="{path:item.path}">{{item.meta.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import blog from '@/router/blog.js'

  export default {
    name: "Posts",
    data() {
      return {
        blog: blog,
      }
    },
    mounted() {
    },
  }
</script>

<style scoped>

  .page-container {
    padding: 200px 0;
    width: 1200px;
    margin: 0 auto;
    text-align: left;
  }

  .post-list {
    font-size: 16px;
  }

  .post-list > li {
    display: flex;
    align-items: center;
    cursor: default;
    margin: 15px 0;
  }


  .post-time {
    margin-right: 20px;
    color: rgba(44, 62, 80, .6);
    font-size: 14px;
  }
</style>

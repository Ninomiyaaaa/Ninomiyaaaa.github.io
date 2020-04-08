<template>
  <div id="app">
    <index-page/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      IndexPage: resolve => require(['@/views/Index.vue'], resolve),
    },
  }
</script>

<style>
  html {
    overflow-x: auto;
    overflow-y: scroll;
  }

  body, dl, dt, dd, ul, ol, li, pre, form, fieldset, input, p, blockquote, th, td {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h4, h5 {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #FFFFFF;
    color: #666666;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    padding: 0;
    text-align: left;
  }

  select {
    font-size: 12px;
  }

  table {
    border-collapse: collapse;
  }

  fieldset, img {
    border: 0 none;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  fieldset p {
    margin: 0;
    padding: 0 0 0 8px;
  }

  legend {
    display: none;
  }

  address, caption, em, strong, th, i {
    font-style: normal;
    font-weight: 400;
  }

  table caption {
    margin-left: -1px;
  }

  hr {
    border-bottom: 1px solid #FFFFFF;
    border-top: 1px solid #E4E4E4;
    border-width: 1px 0;
    clear: both;
    height: 2px;
    margin: 5px 0;
    overflow: hidden;
  }

  ol, ul {
    list-style: none outside none;
  }

  caption, th {
    text-align: left;
  }

  q:before, q:after, blockquote:before, blockquote:after {
    content: "";
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* 通用样式 */
  .flex-list {
    display: flex;
  }

  .flex-list > * {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }
</style>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding-top: 70px;
  }

</style>

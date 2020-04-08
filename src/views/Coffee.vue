<template>
  <div class="page-container">
    <div class="img-container">
      <div v-for="(item,index) in imgList" :key="index" class="img-item">
        <img v-lazy="item.source">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Coffee",
    data() {
      return {
        imgList: [
          {
            source: 'https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2017/08/10/06/58/cup-2619216_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2017/03/13/12/34/coffee-cup-2139592_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2016/04/20/14/29/coffee-1341259_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2019/11/25/06/21/coffee-4651087_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2016/08/07/16/28/coffee-1576552_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2015/03/26/09/50/coffee-690422_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2016/11/29/04/58/coffee-1867429_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2019/08/06/11/09/coffee-4388065_960_720.jpg',
          }, {
            source: 'https://cdn.pixabay.com/photo/2019/06/02/17/33/portrait-4246954_960_720.jpg',
          }],
      }
    },
  }
</script>

<style scoped>
  .page-container {
    padding: 50px 50px 100px;
    margin: 0 auto;
    text-align: left;
  }

  .img-container {
    display: flex;
    flex-wrap: wrap;
  }

  .img-container::after {
    content: '';
    flex-grow: 99;
  }

  .img-item {
    margin: 5px;
    position: relative;
    flex-grow: 1;
    height: 300px;
  }

  .img-item > img {
    width: unset;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
    transition: all .2s linear;
  }

  .img-item > img:hover {
    transform: scale(1.02);
    transition: all .2s linear;
  }

  img[lazy=loading] {
    background-color: #ddd;
  }

  img[lazy=error] {
    background: url(../assets/svg/cup_of_tea.svg) no-repeat 0 0/100% 100%;
  }
</style>

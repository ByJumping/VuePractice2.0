<template>
  <hr/>
  <h4>{{title}}</h4>
    <ul>
      <li v-for="item in news">{{item.title}} <span v-show="item.wasRead">!!!</span></li>
    </ul>
</template>

<script>
export default {
  name: "AppNewsList",
  inject: ['title', 'news']
}
</script>

<style scoped>

</style>

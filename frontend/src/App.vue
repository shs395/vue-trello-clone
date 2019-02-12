<template>
  <div class="main">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <router-view></router-view>
  </div>
</template>

<script>
import Board from './views/Board'

export default {
  name: 'App',
  components: {
    Board,
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
html,body{
  margin: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>


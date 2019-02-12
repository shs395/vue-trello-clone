<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <Toolbar/>
      <router-view></router-view>
      <!-- <Test4></Test4> -->
  </div>
</template>

<script>
import Board from './components/Board'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Board,
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
</style>


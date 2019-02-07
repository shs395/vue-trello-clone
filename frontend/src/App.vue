<template>
  <div>
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


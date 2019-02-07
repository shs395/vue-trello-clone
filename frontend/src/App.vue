<template>
  <div>
      <Toolbar/>
      <!-- <router-view></router-view> -->
      <Test4></Test4>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Test2 from './components/Test2'
import Test4 from './components/Test4'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    Test2,
    Test4,
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


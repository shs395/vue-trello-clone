<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>vue-trello-clone</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <Test/> -->
      <Test2/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Test2 from './components/Test2'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    Test2
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


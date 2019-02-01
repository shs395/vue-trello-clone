<template>
  <v-app class="green lighten-1">
    <v-toolbar app color="rgba(92,160,98)">
      <v-toolbar-title class="headline text-uppercase">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADISURBVEiJ7ZJLCsJAEESrm1xDRM/hB117jPlk42VchARyDneK6D3cSLxGu4pobDEZZ6GQWs3UVNdjoIF/F9UHa+2KiDYARl92noloXRTFFgD4TiLKIpQDwFhEsvqSPDwMAICZF3meH5pTxpglM+9aZoa1x82QNggAZVnuu2TeAmKrB/QAXcaYqeZba+dNL9GCn8TMR+dcu2wIoIt6QHeAc26iBb33sxCAtkUnbUNEJKT/6QdVUIOuywtARFIA1wjlFRGlEXp+RDeOHTMUxB8lNQAAAABJRU5ErkJggg==">
        <img src="https://img.icons8.com/color/24/000000/trello.png">
        <span>vue-trello-clone</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/shs395/vue-trello-clone"
        target="_blank"
      >
        <span class="mr-2">GITHUB</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <Test/> -->
      <!-- <Test2/> -->
      <router-view></router-view>
      <!-- <Test4/> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Test2 from './components/Test2'
import Test4 from './components/Test4'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    Test2,
    Test4
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


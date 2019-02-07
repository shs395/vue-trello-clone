<template>
  <div class="toolbar">
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet">
    <img id="trello-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADZSURBVEiJ7ZJNDgFBEIW/7riGCEcY7PyEDSOOwNjauIyFtWTugA0RtuIINsI1ykJGZKaEmbEgmbfqrn71vuqk4N9lgoPT8/oWpgjFdJFyQpgcVv4CwAZlK8zShwOYEsbMglvu6SV/H8C2Dqv5NtzmuMO2xaw/9BQeg4dNWiPAcelv4nheAr6tDJABdDmdQV2rV91hM1zLacZ3stbuKq4XqYvmTQKINUwGiA0od72aZqz2Ro0kgMgWGcNe3RDRduS9Hj8QuCRK0HWOAgxj4Jo2WeCCyDhtzu/oBpvAOWuCSh2OAAAAAElFTkSuQmCC">
      <span id="toolbar-title">vue-trello-clone</span>
    
      <a href="https://github.com/shs395/vue-trello-clone" target="_blank" id="toolbar-github-btn">
         <span>GITHUB</span>
      </a>
  </div>
</template>
<script>
export default {
  name: 'Toolbar',
  
}
</script>
<style>
.toolbar{
  background-color: rgba(0,0,0,0.15);
  height: 32px;
  padding: 4px;
  position: relative;
  text-align: center;
}
</style>

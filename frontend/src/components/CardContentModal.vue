<template>
  <div>
    <h1>{{ cardName }}</h1>
    <p>in list {{listName}}</p>
    <h2>Description</h2>
    <textarea placeholder="Add a more detailed description..."></textarea>
    <h2>Add Comment</h2>
    <textarea placeholder="Write a comment"></textarea>
  </div>
</template>
<script>
export default {
  name: 'CardContentModal',
  components:{
  },
  data:function(){
    return{

    }
  },
  props: ['cardName', 'listName']

}
</script>
<style>

</style>

<template>
  <div>
    <draggable v-model="list" :options="{group:'people'}" @start="drag=true" @end="drag=false">
      <div v-for="item in list" :key="item.id">{{item.name}}</div>
      <v-card v-for="item in list" :key="item.id">{{item.name}}</v-card>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'Test5',
  components: {
      draggable,
  },
  data:function(){
    return{
      list:[,
        {id:0, name:'a'},
        {id:1, name:'b'},
        {id:2, name:'c'},
      ],
      myArray:[
        {id:1 , name:'A'},
        {id:1 , name:'B'},
        {id:1 , name:'C'}
      ]
    }
  }
}
</script>
<style>

</style>

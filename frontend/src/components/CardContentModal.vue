<template>
  <div class="card-modal-grid">

    <div class="card-modal-header">
      <h1>{{ cardName }}</h1>
      <p>in list {{listName}}</p>
    </div>

    <div class="card-modal-main">
      <h2>Description</h2>
      <textarea placeholder="Add a more detailed description..."></textarea>
      <h2>Add Comment</h2>
      <textarea placeholder="Write a comment"></textarea>
    </div>

    <div class="card-modal-sidebar">
      <h3>ADD TO CARD</h3>
      <button>Members</button>
      <button>Labels</button>
      <button>Checklist</button>
      <button>Due Date</button>
      <button>Attachment</button>
      <h3>POWER-UPS</h3>
      <p>Get Power-Ups</p>
      <button>Move</button>
      <button>Copy</button>
      <button>Watch</button>
      <button>Archive</button>
      <button>Share</button>
    </div>
    
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
.card-modal-grid{
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: 28% auto;
}
.card-modal-header{
  grid-column-start: 1;
  grid-column-end: 3;
}
.card-modal-main{
  grid-column-start: 1;
  grid-column-end: 2;
}
.card-modal-sidebar{
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>

<template>
  <div>

    <div v-show="mainFlag">
      <div class="card-header-popover-header">
        <h3 >List Actions</h3>
        <p>currentColumn {{currentColumn}}</p>
      </div>
      <div class="card-header-popover-content">
        <ul>
          <li><a @click="openAddNewCard(currentColumn)">Add Card...</a></li>
          <li><a @click="copyList()">Copy List...</a></li>
          <li><a @click="moveList()"> Move List...</a></li>
          <li><a href="#">Watch</a></li>
        </ul>
        <ul>
          <li><a href="#">Move All Cards in This List...</a></li>
          <li><a href="#">Archive All Cards in This List...</a></li>
        </ul>
        <ul>
          <li><a href="#">Archive This List</a></li>
        </ul>
      </div>
    </div>

    <div v-show="copyFlag">
      <div class="card-header-popover-header">
        <h3 >Copy List</h3>
      </div>
      <div class="card-header-popover-content">
        <ul>
          <li><a @click="openAddNewCard(currentColumn)">Add Card...</a></li>
          <li><a @click="copyList()">Copy List...</a></li>
          <li><a href=""> Move List...</a></li>
          <li><a href="#">Watch</a></li>
        </ul>
        <ul>
          <li><a href="#">Move All Cards in This List...</a></li>
          <li><a href="#">Archive All Cards in This List...</a></li>
        </ul>
        <ul>
          <li><a href="#">Archive This List</a></li>
        </ul>
      </div>
    </div>

    <div v-show="moveFlag">
      <div class="card-header-popover-header">
        <h3 >Move List</h3>
      </div>
      <div class="card-header-popover-content">
        <ul>
          <li><a @click="openAddNewCard(currentColumn)">Add Card...</a></li>
          <li><a @click="copyList()">Copy List...</a></li>
          <li><a href=""> Move List...</a></li>
          <li><a href="#">Watch</a></li>
        </ul>
        <ul>
          <li><a href="#">Move All Cards in This List...</a></li>
          <li><a href="#">Archive All Cards in This List...</a></li>
        </ul>
        <ul>
          <li><a href="#">Archive This List</a></li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "CardHeaderPopover",
  props:['currentColumn','lists'],
  data: function(){
    return{
      // currentColumn: this.currentColumn,
      lists: this.lists,
      mainFlag: true,
      copyFlag: false,
      moveFlag: false,
    }
  },
  methods: {
    openAddNewCard (index) {
      alert(index)
      // this.popOverFlag = false;
      lists.children[index].footerFlag = !lists.children[index].footerFlag
    },

    copyList () {
      this.mainFlag = false;
      this.copyFlag = true;
    },

    moveList () {
      this.mainFlag = false;
      this.moveFlag = true;
    }
  }
}
</script>
<style>
.card-header-popover-header{
  text-align: center;
  border-bottom: 1px solid black;
}
</style>

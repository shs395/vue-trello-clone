<template>
  <div class="main">
    <div class="main">

      <Toolbar/>

      <Container
        orientation="horizontal"
        @drop="onColumnDrop($event)"
        @drag-start="dragStart"
        drag-class="card-ghost"
        drop-class="card-ghost-drop"
        drag-handle-selector=".card-header"
      >
        <Draggable class="list" v-for="column in lists.children" :key="column.id">
          <div class="card">
            <div class="card-header">
              <textarea class="card-header-name" v-model="column.name"></textarea>
              <div class="card-header-icon" v-popover="{ name: 'cardHeaderPopover' }" @click="()=>{currentColumn = column.id;popOverFlag = true}">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <Container
              group-name="col"
              @drop="(e) => onCardDrop(column.id, e)"
              @drag-start="(e) => log('drag start', e)"
              @drag-end="(e) => log('drag end', e)"
              :get-child-payload="getCardPayload(column.id)"
              drag-class="card-ghost"
              drop-class="card-ghost-drop"
            >
              <Draggable v-for="card in column.children" :key="card.id">
                <div class="card-content" @click="showCardContentModal(card.data, column.name)">
                  {{card.data}}
                </div>
              </Draggable>
            </Container>
            <div @click="column.footerFlag = !column.footerFlag" class="card-footer" v-if="column.footerFlag">
              + Add another card
            </div>
            <div v-if="!column.footerFlag">
              <textarea class="card-content new-card-textarea" v-model="column.newCardName" placeholder="Enter a title for this card..."></textarea>
              <button class="add-card-btn" @click="addNewCard(column.id, column.newCardName)">Add Card</button>
              <button @click="column.footerFlag = !column.footerFlag" >X</button>
              <button>dd</button>
            </div>
          </div>
        </Draggable>
        <Draggable class="list">

          <div @click="addNewListFlag = !addNewListFlag" id="add-list-btn" v-if="addNewListFlag">
              + Add another list
            </div>
            <div v-if="!addNewListFlag" id="add-list">
              <textarea class="" v-model="newListName" placeholder="Enter list title..."></textarea>
              <button class="add-card-btn" @click="addNewList">Add List</button>
              <button @click="addNewListFlag = !addNewListFlag" >X</button>
              <button>dd</button>
            </div>
        </Draggable>
      </Container>

      <modals-container/>
      
      <popover name="cardHeaderPopover" v-show="popOverFlag">
        <CardHeaderPopover 
          v-bind:currentColumn="currentColumn"
          v-bind:lists="lists"
        ></CardHeaderPopover>
      </popover>
      
    </div>
  
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '../utils/helpers'
import Toolbar from '../components/Toolbar'
import CardContentModal from '../components/CardContentModal.vue'
import CardHeaderPopover from '../components/CardHeaderPopover.vue'
import lists from '../assets/lists.js'

export default {
  name: 'Board',

  components: {
    Container, 
    Draggable,
    CardContentModal,
    Toolbar,
    CardHeaderPopover
  },

  data () {
    return {
      lists,
      addNewListFlag: true,
      newCardName: '',
      newListName: '',
      currentColumn: '',
      popOverFlag: false,
      
    }
  },

  methods: {
    onColumnDrop (dropResult) {
      const lists = Object.assign({}, this.lists)
      lists.children = applyDrag(lists.children, dropResult)
      this.lists = lists
    },

    onCardDrop (columnId, dropResult) {
      console.log("dropResult ")
      console.log(dropResult)
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const lists = Object.assign({}, this.lists)
        const column = lists.children.filter(p => p.id === columnId)[0]
        const columnIndex = lists.children.indexOf(column)

        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        lists.children.splice(columnIndex, 1, newColumn)

        this.lists = lists
      }
    },

    getCardPayload (columnId) {
      return index => {
        console.log("getCardPayload index :" + index)
        return this.lists.children.filter(p => p.id === columnId)[0].children[index]
      }
    },

    dragStart () {
      console.log('drag started')
    },

    log (...params) {
      console.log(...params)
    },

    addNewList () {
      if(this.newListName === '')
        return
      var length = this.lists.children.length
      this.lists.children.push(
        {
          id:`${length}`,
          type: 'container',
          name: this.newListName,
          props: {
            orientation: 'vertical',
            className: 'card-container'
          },
          footerFlag: true,
          children:[
          ]
        },
      )
      this.newListName = ''
      this.addNewListFlag = !this.addNewListFlag
    },

    addNewCard (index, newCardName) {
      if(newCardName === '')
        return
      var currentIndex = this.lists.children.findIndex(function(element){
        return element.id == index
      })
      this.lists.children[currentIndex].children.push(
        {
          type: 'draggable',
          id: this.lists.cardNumber += 1,
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: newCardName
        }
      )
      this.lists.children[currentIndex].newCardName = ''
      this.lists.children[currentIndex].footerFlag = !this.lists.children[currentIndex].footerFlag
    },

    showCardContentModal (cardName, listName) {
      this.$modal.show(CardContentModal, {
        cardName: `${cardName}`,
        listName: `${listName}`
      }, {
        // draggable: true,
        height: "auto",
        scrollable: true
      })
    },

   
  }
}
</script>
<style>

</style>
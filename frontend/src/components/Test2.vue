<template>
  <div>
    <Container
      orientation="horizontal"
      @drop="onListDrop"
    >
      <Draggable v-for="item in list" :key="item.id">
        <v-card>
          <v-card-title>
            {{item.name}}
          </v-card-title>
          <Container
            orientation="vertical"
            group-name="cards"
            :get-child-payload="getCardPayload(item.id)"
            @drag-start="onDragStart"
            @drag-enter="onDragEnter"
             @drop="onCardDrop"
          >
            <Draggable v-for="card in cards" :key="card.id">
              <v-btn>
                {{card.name}}
              </v-btn>
            </Draggable>

          </Container>

        <v-btn>
          + Add a card
        </v-btn>
        </v-card>
        
      </Draggable>
    </Container>
  </div>
</template>
<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from '../utils/helpers'

export default {
  name:'Test2',
  components:{
    Container,
    Draggable
  },
  data:function(){
    return{
      list:[
        {id:0 , name:"하고싶은 일"},
        {id:1 , name:"할일"},
        {id:2 , name:"진행중"},
        {id:3 , name:"예정"},
        {id:4 , name:"완료"}
      ],
      cards:[
        {id:0, name:"test"},
        {id:1, name:"a"},
        {id:2, name:"b"},
        {id:3, name:"c"},
        {id:4, name:"d"},
        {id:5, name:"e"},
      ]
    }
  },
  methods:{
    getCardPayload (columnId) {
      return index => {
        console.log(index)
        // return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    onDragStart (dragResult) {
      console.log(dragResult)
      const { isSource, payload, willAcceptDrop } = dragResult
    },
    onDragEnter () {
      console.log("hi")
    },
    onListDrop (dropResult) {
      console.log("ListDrop")
      console.log(dropResult)
      var list = this.list
      // const { removedIndex, addedIndex, payload, element } = dropResult;
      list = applyDrag(list, dropResult)
      this.list = list
    },
    onCardDrop (dropResult) {
      console.log("CardDrop")
      console.log(dropResult)
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        var cards = this.cards
        cards = applyDrag(cards, dropResult)
        this.cards = cards
      }
    }
  }
}
</script>
<style>

</style>

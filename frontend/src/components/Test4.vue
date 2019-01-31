<template>
  <div>
    <Container
      orientation="horizontal"
      @drop="onColumnDrop($event)"
      @drag-start="dragStart"
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
    >
      <Draggable class="list" v-for="column in scene.children" :key="column.id">
        <div class="card">
          <div class="card-header">
            {{ column.name }}
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
              <!-- <div :class="card.props.className" :style="card.props.style">
                <p>{{ card.data }}</p>
              </div> -->
              <div class="card-content">
                {{card.data}}
              </div>
            </Draggable>
          </Container>
          <div @click="test" class="card-footer">
            + Add another card
          </div>
        </div>
      </Draggable>
      <Draggable class="add-list">
        <!-- <div class="add-list"> -->
          +Add another list
        <!-- </div> -->
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '../utils/helpers'

const lorem = `Lorem`

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod']

const cardColors = [
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'burlywood',
  'cornsilk',
  'gainsboro',
  'ghostwhite',
  'ivory',
  'khaki'
]

const pickColor = () => {
  const rand = Math.floor(Math.random() * 10)
  return cardColors[rand]
}

const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(4, i => ({
    id: `column${i}`,
    type: 'container',
    name: columnNames[i],
    props: {
      orientation: 'vertical',
      className: 'card-container'
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
      type: 'draggable',
      id: `${i}${j}`,
      props: {
        className: 'card',
        style: {backgroundColor: pickColor()}
      },
      data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
    }))
  }))
}

export default {
  name: 'Test3',

  components: {Container, Draggable},

  data () {
    return {
      scene
    }
  },

  methods: {
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },

    onCardDrop (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)

        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)

        this.scene = scene
      }
    },

    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },

    dragStart () {
      console.log('drag started')
    },

    log (...params) {
      console.log(...params)
    },

    test () {
      alert("hi")
    }
  }
}
</script>
<style scoped>
.list{
  width: 18%;
}
.card{
  background-color: rgba(224,227,230);
  margin: 7% 0 0 7%;
  border-radius: 3px;
}
.card-header{
  margin: 0px 6px 0px 6px;
  color: rgba(31,57,75);
  font-weight: bold;
}
.card-content{
  background-color: rgba(255,255,255);
  margin: 0px 6px 6px 6px;
  color: rgba(31,57,75);
  border-radius: 3px;
}
.card-footer{
  margin: 0px 6px 0px 6px;
  color: rgba(125,141,152);
}
.card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
}
.card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
}
.add-list{
  width: 18%;
  background-color: rgba(95,166,101);
  color: rgba(223,237,224);
  margin: 7% 0 0 7%;
  border-radius: 3px;
}


</style>
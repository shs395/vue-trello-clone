<template>
  <div>
    <Container
      orientation="horizontal"
      @drop="onColumnDrop($event)"
      @drag-start="dragStart"
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      drag-handle-selector=".card-header"
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
          <div @click="footerFlag = !footerFlag" class="card-footer" v-if="footerFlag">
            + Add another card
          </div>
          <div v-if="!footerFlag">
            <textarea class="card-content new-card-textarea" v-model="newCardName" placeholder="Enter a title for this card..."></textarea>
            <button class="addCardBtn" @click="addNewCard">Add Card</button>
            <button @click="footerFlag = !footerFlag" >X</button>
            <button>dd</button>
          </div>
        </div>
      </Draggable>
      <Draggable class="list">

         <div @click="addNewListFlag = !addNewListFlag" id="add-list" v-if="addNewListFlag">
            + Add another list
          </div>
          <div v-if="!addNewListFlag">
            <textarea class="" v-model="newListName" placeholder="Enter list title..."></textarea>
            <button class="addCardBtn" @click="addNewList">Add List</button>
            <button @click="addNewListFlag = !addNewListFlag" >X</button>
            <button>dd</button>
          </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '../utils/helpers'

// const lorem = `Lorem`

// const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod']

// const cardColors = [
//   'azure',
//   'beige',
//   'bisque',
//   'blanchedalmond',
//   'burlywood',
//   'cornsilk',
//   'gainsboro',
//   'ghostwhite',
//   'ivory',
//   'khaki'
// ]

// const pickColor = () => {
//   const rand = Math.floor(Math.random() * 10)
//   return cardColors[rand]
// }

const scene = {
  // type: 'container',
  props: {
    // orientation: 'horizontal'
  },
  // children: generateItems(4, i => ({
  //   id: `column${i}`,
  //   type: 'container',
  //   name: columnNames[i],
  //   props: {
  //     orientation: 'vertical',
  //     className: 'card-container'
  //   },
  //   children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
  //     type: 'draggable',
  //     id: `${i}${j}`,
  //     props: {
  //       className: 'card',
  //       style: {backgroundColor: pickColor()}
  //     },
  //     data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
  //   }))
  // })),
  children:[
    //첫 번째 리스트
    {
      id:'0',
      type: 'container',
      name: '할일',
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children:[
        //첫 번째 카드
        {
          type: 'draggable',
          id: '00',
          props: {
            className: 'card',
            style: {backgroundColor: 'black'}
          },
          data: 'testA'
        },
         //두 번째 카드
        {
          type: 'draggable',
          id: '01',
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: 'testB'
        }
      ]
    },
    //두 번째 리스트
     {
      id:'1',
      type: 'container',
      name: '완료',
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children:[
        //첫 번째 카드
        {
          type: 'draggable',
          id: '10',
          props: {
            className: 'card',
            style: {backgroundColor: 'black'}
          },
          data: 'testC'
        },
         //두 번째 카드
        {
          type: 'draggable',
          id: '11',
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: 'testD'
        }
      ]
    },
    //세 번째 리스트
    {
      id:'2',
      type: 'container',
      name: '테스트',
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children:[
        //첫 번째 카드
        {
          type: 'draggable',
          id: '20',
          props: {
            className: 'card',
            style: {backgroundColor: 'black'}
          },
          data: 'testE'
        },
         //두 번째 카드
        {
          // type: 'draggable',
          id: '21',
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: 'testF'
        }
      ]
    },
    // {
    //   //마지막 리스트
    //   id:'3',
    //   type: 'container',
    //   name: '+Add another list',
    //   props: {
    //     orientation: 'vertical',
    //     className: 'card-container'
    //   },
    //   children:[
    //     // //첫 번째 카드
    //     // {
    //     //   type: 'draggable',
    //     //   id: '20',
    //     //   props: {
    //     //     className: 'card',
    //     //     style: {backgroundColor: 'black'}
    //     //   },
    //     //   data: 'testE'
    //     // },
    //     //  //두 번째 카드
    //     // {
    //     //   // type: 'draggable',
    //     //   id: '21',
    //     //   props: {
    //     //     className: 'card',
    //     //     style: {backgroundColor: 'red'}
    //     //   },
    //     //   data: 'testF'
    //     // }
    //   ]
    // }
  ]
}

export default {
  name: 'Test3',

  components: {Container, Draggable},

  data () {
    return {
      scene,
      footerFlag: true,
      addNewListFlag: true,
      newCardName: '',
      newListName: '',
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
    },

    addNewList () {
      var length = this.scene.children.length
      this.scene.children.push(
        {
          id:`${length}`,
          type: 'container',
          name: this.newListName,
          props: {
            orientation: 'vertical',
            className: 'card-container'
          },
          children:[
            //첫 번째 카드
            {
              type: 'draggable',
              id: `${length}0`,
              props: {
                className: 'card',
                style: {backgroundColor: 'black'}
              },
              data: 'testG'
            },
            //두 번째 카드
            {
              // type: 'draggable',
              id: `${length}1`,
              props: {
                className: 'card',
                style: {backgroundColor: 'red'}
              },
              data: 'testH'
            }
          ]
        },
      )
      this.newListName = ''
    },

    addNewCard () {
      this.scene.children[0].children.push(
        {
          type: 'draggable',
          id: '41',
          props: {
            className: 'card',
            style: {backgroundColor: 'red'}
          },
          data: this.newCardName
        }
      )
      this.newCardName = ''
    },
  }
}
</script>
<style>

</style>
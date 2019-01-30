<template>
  <div>
    <v-container> 
      <v-layout row>
        <v-flex ma-1 v-for="item in list" :key="item.id"> 
          <Container
          >
            <Draggable>
              <v-card>
                <v-card-title>
                  {{item.name}}
                </v-card-title>
                <v-card v-for="item in items" :key="item.id">
                  <Container>
                    <Draggable>
                      <p>
                        {{item.name}}
                      </p>
                    </Draggable>
                  </Container>
                </v-card>
              </v-card>
            </Draggable>
          </Container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { Container, Draggable } from "vue-smooth-dnd";

export default {
  name: 'Test',
  components:{
    Container,
    Draggable,
  },
  data:function(){
    return{
      list:[
        {id:1 , name:"할일"},
        {id:2 , name:"진행중"},
        {id:3 , name:"예정"},
        {id:4 , name:"완료"}
      ],
      items:[
        {id:1, name:"a"},
        {id:2, name:"b"},
        {id:3, name:"c"},
        {id:4, name:"d"},
        {id:5, name:"e"},
      ]
    }
  },
  methods:{

  }
  
}
</script>
<style>

</style>

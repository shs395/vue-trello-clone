<template>
  <div>
    <Container>
      <Draggable>
        <v-btn>1</v-btn>
      </Draggable>
      <Draggable>
        <v-btn>2</v-btn>
      </Draggable>
      <Draggable>
        <v-btn>3</v-btn>
      </Draggable>
      <v-card>
        <v-card-title>
          할일
        </v-card-title>
        <v-card-text>
          <Draggable>
            <v-card>1</v-card>
            <v-card>2</v-card>
            <v-card>3</v-card>
          </Draggable>
        </v-card-text>
      </v-card>
      
    </Container>
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

    }
  },
  methods:{

  }
  
}
</script>
<style>

</style>

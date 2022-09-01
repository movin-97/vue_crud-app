<template>
  <div class="row justify-content-around">
    <div class="card col-2 m-2 zoom" v-for="item in getToCard()" :key="item.id">
      <img :src="item.image" class="card-img-top" :alt="item.name" width="80" height="80"/>
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text para">
          {{item.discription}}
        </p>
        <p class="card-text">
          {{item.price}}
        </p>
        <button type="button" class="btn btn-primary" @click="addToSave(item)">Add</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class StatusMain extends Vue {

  // test(){
  //   return console.log(this.$store.getters.getSave)
  // }
  // created(){
  //   this.addToSave()
  // }
  addToSave(item:any){
    this.$store.dispatch('addToSaveProducts',item)
  }

  getToCard(){
    return this.$store.getters.getChange
  }
}
</script>
<style scoped>
.zoom {
  cursor: pointer;
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.1);
}
.para{
  height: 50px;
  overflow: hidden;
}
</style>
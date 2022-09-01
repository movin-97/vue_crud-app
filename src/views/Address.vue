<template>
  <div class="">
    <div class="container">
      <form class="row" @submit.prevent="updateName">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="mb-3">
            <label for="name" class="form-label"
              >Email address</label
            >
            <input type="text" class="form-control" placeholder="Name" id="name" v-model="p_address.name"/>
          </div>
          <div class="mb-3">
            <label for="floatingTextarea" class="form-label">Address</label>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a Address here"
                id="floatingTextarea"
                v-model="p_address.address"
              ></textarea>
              <label for="floatingTextarea">Leave a Address here</label>
            </div>
          </div>
          <!-- <router-link to="/done"> -->
              <button type="submit" class="btn btn-primary">Submit</button>
          <!-- </router-link> -->
          
        </div>

        <div class="col-3"></div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Address extends Vue {
   p_address: any = {
    name: "",
    address: "",
  };

  updateName(){
    this.$store.dispatch("updateAdress",this.p_address)
  }
  
}
</script>
<style scoped>
</style>
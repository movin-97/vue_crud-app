<template>
  <div class="">
    <div class="row justify-content-around">
      <div
        class="card col-2 m-2 zoom"
        v-for="item in getToCard()"
        :key="item.id"
      >
        <img
          :src="item.image"
          class="card-img-top"
          :alt="item.name"
          width="80"
          height="80"
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text para">
            {{ item.discription }}
          </p>
          <p class="card-text">
            {{ item.price }}
          </p>
        </div>
      </div>
    </div>
    {{ address }}
    <!-- <div class="" v-for="item in getAddress()" :key="item">
        <h1>Address</h1>
        <p>{{item}}</p>
        <p>{{item}}</p>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class SelectedProduct extends Vue {
  constructor() {
    super();
    console.log("select product called");
    console.log(this.address);
  }

  getToCard() {
    return this.$store.getters.getSave;
  }

  get address() {
    return this.$store.getters.getAddress;
  }
}
</script>
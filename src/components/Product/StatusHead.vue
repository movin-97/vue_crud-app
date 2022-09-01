<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-around text-center">
      <div class="">
        <router-link to="/" class="nav-link">
          <i
            class="bi bi-diagram-3-fill fs-3 text-success"
            style="cursor: pointer"
          ></i>
          <p class="form-label">Product</p>
        </router-link>
      </div>
      <div class="">
        <router-link to="/address" class="nav-link">
          <i
          class="bi bi-book-fill fs-3 text-success"
          style="cursor: pointer"
        ></i>
        <p class="form-label">Address</p>
        </router-link>
      </div>
      <div class="">
        <router-link to="/done" class="nav-link">
          <i
          class="bi bi-check-circle-fill fs-3 text-success"
          style="cursor: pointer"
        ></i>
        <p class="form-label">Complete</p>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class StatusHead extends Vue {}
</script>
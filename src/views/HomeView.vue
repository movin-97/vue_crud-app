<template>
  <div class="">
    <div class="main p-2">
      <StatusMain/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StatusMain from '../components/Product/StatusMain.vue';

@Component({
  components: {
    StatusMain,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>
.head{
  border-bottom: 2px solid blueviolet;
}
</style>
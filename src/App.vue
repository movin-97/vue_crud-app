<template>
  <div id="app">
    <StatusHead/>
    <router-view />
    <!-- <StatusFoot/> -->
  </div>
</template>
<script lang="ts">
import StatusHead from "./components/Product/StatusHead.vue";
import {Component, Vue} from 'vue-property-decorator';
// import StatusFoot from './components/Product/StatusFoot.vue';

@Component({
  components: {
    StatusHead,
    // StatusFoot
  },
})
export default class App extends Vue {}

</script>
<style>
</style>

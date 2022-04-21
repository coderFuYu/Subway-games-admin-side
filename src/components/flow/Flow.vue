<template>
  <div class="flow">
    <Chart :totalData="dayLiveData" chartId="dayLive" title="日活" class="chart"></Chart>
    <Chart :totalData="monthLiveData" chartId="monthLive" title="月活" class="chart"></Chart>
  </div>
</template>

<script>
  import {dayLive, monthLive} from "network/flow";
  import Chart from "./Chart";

  export default {
    name: "Flow",
    data() {
      return {
        dayLiveData: [],
        monthLiveData: []
      }
    },
    components: {
      Chart
    },
    methods: {
      init() {
        dayLive(this.$store.state.token).then(res => {
          this.dayLiveData = res.body;
        });
        monthLive(this.$store.state.token).then(res => {
          this.monthLiveData=res.body;
        });

      }
    },
    created() {
      this.init();
    }
  }
</script>

<style scoped>
  .flow {
    width: 100%;
    height: 100%;
    overflow: paged-y;
    padding-top: 1rem;
    box-sizing: border-box;

  }
  .chart{
    margin: 1rem  auto;
    width: 15rem;
    height: 5rem;

  }
</style>

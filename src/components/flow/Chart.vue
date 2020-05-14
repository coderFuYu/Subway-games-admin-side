<template>
  <div :id="chartId"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "Chart",
    props:{
      totalData:Array,
      chartId:String,
      title:String
    },
    data() {
      return {
        charts: '',
        opinionData: [],
        xAxisData:[]
      }
    },
    methods: {
      drawLine(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [this.title]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xAxisData

          },
          yAxis: {
            type: 'value'
          },

          series: [{
            name: this.title,
            type: 'line',
            stack: '总量',
            data: this.opinionData
          }]
        })
      }
    },
    //调用
    created() {
      setTimeout(()=>{
      for(let i=0;i<7;i++){
        this.opinionData.unshift(this.totalData[i].dayLiveAmount);
        this.xAxisData.unshift(this.totalData[i].localDate);
      }
        this.$nextTick(function() {
          this.drawLine(this.chartId)
        })
      },500)


    }
  }
</script>

<style scoped>

</style>

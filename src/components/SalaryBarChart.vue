<template>
  <section class="chart-section">
    <h2>各岗位平均薪资对比（万元/年）</h2>
    <div ref="chartRef" class="chart-container" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { positions, categoryOrder } from '../data/positions.js'

const chartRef = ref(null)

onMounted(() => {
  const orderMap = Object.fromEntries(categoryOrder.map((n, i) => [n, i]))
  const sorted = [...positions].sort((a, b) => a.salaryAvg - b.salaryAvg)

  const chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '3%', containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: '#888', fontSize: 10 }, splitLine: { lineStyle: { color: '#21262d' } } },
    yAxis: {
      type: 'category',
      data: sorted.map(p => p.name),
      axisLabel: { color: '#ccc', fontSize: 11 },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    series: [{
      type: 'bar',
      data: sorted.map(p => ({
        value: p.salaryAvg,
        itemStyle: { color: getCategoryColor(p.category) },
      })),
      barWidth: 14,
      label: {
        show: true,
        position: 'right',
        formatter: '{c}万',
        color: '#aaa',
        fontSize: 10,
      },
    }],
  })

  window.addEventListener('resize', () => chart.resize())
})

function getCategoryColor(name) {
  const m = { '前端': '#5470C6', '后端': '#91CC75', '客户端': '#FAC858', '游戏开发': '#EE6666', '其他': '#73C0DE' }
  return m[name] || '#888'
}
</script>

<style scoped>
.chart-section {
  padding: 0 16px;
  margin-bottom: 24px;
}
.chart-section h2 {
  font-size: 20px;
  margin: 0 0 12px;
  font-weight: 600;
}
.chart-container {
  height: 540px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #30363d;
}
</style>

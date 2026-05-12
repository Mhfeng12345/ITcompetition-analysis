<template>
  <section class="chart-section">
    <h2>竞争度 vs 需求趋势 四象限图</h2>
    <p class="chart-desc">右上角为最佳方向（竞争低 + 需求增长），左下角应谨慎进入（竞争高 + 需求下降）</p>
    <div ref="chartRef" class="chart-container" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { positions, categories } from '../data/positions.js'

const chartRef = ref(null)

onMounted(() => {
  const categoryColor = Object.fromEntries(categories.map(c => [c.name, c.color]))

  const chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: {
      formatter(params) {
        const d = params.data
        return `<b>${d.name}</b><br/>竞争度: ${d.competition}★<br/>需求趋势: ${d.trend >= 0 ? '+' : ''}${d.trend}%<br/>薪资: ${d.salary}万`
      },
    },
    grid: { left: '8%', right: '10%', bottom: '12%', top: '5%' },
    xAxis: {
      name: '需求趋势(%) →',
      nameLocation: 'center',
      nameGap: 30,
      nameTextStyle: { color: '#aaa', fontSize: 12 },
      axisLabel: { color: '#888', fontSize: 10 },
      splitLine: { lineStyle: { color: '#21262d' } },
      min: -30, max: 70,
    },
    yAxis: {
      name: '竞争度 →',
      nameLocation: 'center',
      nameGap: 40,
      nameTextStyle: { color: '#aaa', fontSize: 12 },
      axisLabel: { color: '#888', fontSize: 10 },
      splitLine: { lineStyle: { color: '#21262d' } },
      min: 0, max: 6,
    },
    series: [{
      type: 'scatter',
      symbolSize: val => 10 + (val[2] / 100) * 16,
      data: positions.map(p => ({
        value: [p.demandTrend, p.competition, p.salaryAvg],
        name: p.name,
        trend: p.demandTrend,
        competition: p.competition,
        salary: p.salaryAvg,
        itemStyle: { color: categoryColor[p.category] },
      })),
      markLine: {
        silent: true,
        lineStyle: { type: 'dashed', color: '#555', opacity: 0.4 },
        data: [
          { yAxis: 3, label: { formatter: '竞争度中线', color: '#888', fontSize: 10 } },
          { xAxis: 0, label: { formatter: '需求持平', color: '#888', fontSize: 10, position: 'end' } },
        ],
      },
      markArea: {
        silent: true,
        data: [
          [
            { xAxis: 0, yAxis: 3, itemStyle: { color: '#3fb950', opacity: 0.04 } },
            { xAxis: 70, yAxis: 0 },
          ],
          [
            { xAxis: -30, yAxis: 6, itemStyle: { color: '#f85149', opacity: 0.04 } },
            { xAxis: 0, yAxis: 3 },
          ],
        ],
      },
    }],
  })

  window.addEventListener('resize', () => chart.resize())
})
</script>

<style scoped>
.chart-section {
  padding: 0 16px;
  margin-bottom: 24px;
}
.chart-section h2 {
  font-size: 20px;
  margin: 0 0 4px;
  font-weight: 600;
}
.chart-desc {
  font-size: 12px;
  opacity: 0.6;
  margin: 0 0 12px;
}
.chart-container {
  height: 480px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #30363d;
}
</style>

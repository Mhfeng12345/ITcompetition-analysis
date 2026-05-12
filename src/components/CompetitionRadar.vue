<template>
  <section class="chart-section">
    <h2>各方向综合能力雷达图</h2>
    <div ref="chartRef" class="chart-container" />
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import * as echarts from 'echarts'
import { positions, categories } from '../data/positions.js'

const chartRef = ref(null)

const indicator = [
  { name: '竞争度', max: 5 },
  { name: 'AI风险', max: 5 },
  { name: '入行难度', max: 5 },
  { name: '薪资水平', max: 5 },
  { name: '需求趋势(正值)', max: 5 },
]

const seriesData = computed(() => {
  return categories.map(cat => {
    const catPositions = positions.filter(p => p.category === cat.name)
    const n = catPositions.length
    const avgCompetition = catPositions.reduce((s, p) => s + p.competition, 0) / n
    const avgAiRisk = catPositions.reduce((s, p) => s + p.aiRisk, 0) / n
    const avgDifficulty = catPositions.reduce((s, p) => s + p.entryDifficulty, 0) / n
    const avgSalary = catPositions.reduce((s, p) => s + p.salaryAvg, 0) / n
    const maxSalary = Math.max(...positions.map(p => p.salaryAvg))
    const salaryScore = (avgSalary / maxSalary) * 5
    const avgTrend = catPositions.reduce((s, p) => s + p.demandTrend, 0) / n
    const trendScore = Math.max(0, Math.min(5, ((avgTrend + 25) / 50) * 5))

    return {
      value: [avgCompetition, avgAiRisk, avgDifficulty, salaryScore, trendScore],
      name: cat.name,
      lineStyle: { color: cat.color },
      areaStyle: { color: cat.color + '33' },
      itemStyle: { color: cat.color },
    }
  })
})

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    legend: { data: categories.map(c => c.name), textStyle: { color: '#ccc' }, bottom: 0 },
    radar: {
      indicator,
      center: ['50%', '45%'],
      radius: '60%',
      axisName: { color: '#aaa', fontSize: 12 },
      splitArea: { areaStyle: { color: ['rgba(48,54,61,0.3)', 'rgba(33,38,45,0.3)'] } },
      axisLine: { lineStyle: { color: 'rgba(48,54,61,0.6)' } },
      splitLine: { lineStyle: { color: 'rgba(48,54,61,0.6)' } },
    },
    series: [{
      type: 'radar',
      data: seriesData.value,
      symbol: 'none',
      lineStyle: { width: 2 },
    }],
  })

  const resize = () => chart.resize()
  window.addEventListener('resize', resize)
})
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
  height: 420px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #30363d;
}
</style>

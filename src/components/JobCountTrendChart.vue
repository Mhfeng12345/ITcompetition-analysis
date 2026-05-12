<template>
  <section class="chart-section">
    <h2>岗位市场量级与需求趋势</h2>
    <p class="chart-desc">柱状图 = 岗位数量相对指数（Java=100 基准）&nbsp;&nbsp;|&nbsp;&nbsp;折线 = 需求同比变化（%）</p>
    <div ref="chartRef" class="chart-container" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { positions, categories } from '../data/positions.js'

const chartRef = ref(null)

onMounted(() => {
  const colorMap = Object.fromEntries(categories.map(c => [c.name, c.color]))
  const sorted = [...positions].sort((a, b) => a.jobCount - b.jobCount)

  const chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter(params) {
        const bar = params.find(p => p.seriesIndex === 0)
        const line = params.find(p => p.seriesIndex === 1)
        if (!bar) return ''
        const p = sorted[bar.dataIndex]
        return `<b>${p.name}</b><br/>
          市场量级: ${p.jobCount} (基准100)<br/>
          需求趋势: ${p.demandTrend >= 0 ? '+' : ''}${p.demandTrend}%<br/>
          竞争度: ${'★'.repeat(p.competition)}<br/>
          供需比: ${p.supplyDemand}`
      },
    },
    legend: {
      data: ['岗位量级(指数)', '需求趋势(%)'],
      textStyle: { color: '#ccc', fontSize: 11 },
      bottom: 0,
    },
    grid: { left: '3%', right: '8%', bottom: '14%', top: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: sorted.map(p => p.name),
      axisLabel: { color: '#888', fontSize: 9, rotate: 35 },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: [
      {
        type: 'value',
        name: '岗位量级指数',
        nameTextStyle: { color: '#888', fontSize: 10 },
        axisLabel: { color: '#888', fontSize: 10 },
        splitLine: { lineStyle: { color: '#21262d' } },
      },
      {
        type: 'value',
        name: '需求趋势(%)',
        nameTextStyle: { color: '#888', fontSize: 10 },
        axisLabel: { color: '#888', fontSize: 10, formatter: '{value}%' },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: '岗位量级(指数)',
        type: 'bar',
        yAxisIndex: 0,
        data: sorted.map(p => ({
          value: p.jobCount,
          itemStyle: { color: colorMap[p.category] },
        })),
        barWidth: 12,
        label: {
          show: true,
          position: 'top',
          color: '#aaa',
          fontSize: 9,
          formatter: '{c}',
        },
      },
      {
        name: '需求趋势(%)',
        type: 'line',
        yAxisIndex: 1,
        data: sorted.map(p => p.demandTrend),
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { color: '#f0c040', width: 2 },
        itemStyle: { color: '#f0c040' },
        smooth: false,
        label: {
          show: true,
          position: 'top',
          color: '#f0c040',
          fontSize: 9,
          formatter: ({ value }) => `${value >= 0 ? '+' : ''}${value}%`,
        },
      },
    ],
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
  height: 520px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #30363d;
}
</style>

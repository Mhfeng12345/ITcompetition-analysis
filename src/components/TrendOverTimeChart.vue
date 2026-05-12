<template>
  <section class="chart-section">
    <h2>各岗位近十年需求趋势变化</h2>
    <p class="chart-desc">
      以 2020 年为基准 100，图例可点击开关单个岗位，鼠标悬停查看详情
    </p>
    <div ref="chartRef" class="chart-container" />
    <div class="data-notes">
      <h4>关键数据说明</h4>
      <ul>
        <li><b>嵌入式 2024 年 +264%：</b>来自职友集，2024 年同比暴增。主因汽车电子、IoT、芯片国产化政策推动，基数小故增幅极高。</li>
        <li><b>Java 初级 -32%：</b>来自 CSDN 报告，2024 年基础 Java 开发岗较 2022 年减少 32%。</li>
        <li><b>AI/ML +67%：</b>猎聘数据，2025 年算法工程师需求同比增长 67%，缺口 500 万+。</li>
        <li><b>客户端持续下滑：</b>Android/iOS 黄金期在 2015-2018，此后逐年萎缩，转向车机/鸿蒙/出海新场景。</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { positionTrends } from '../data/positionTrends.js'

const chartRef = ref(null)

const palette = [
  '#5470C6','#91CC75','#FAC858','#EE6666','#73C0DE',
  '#3BA272','#FC8452','#9A60B4','#EA7CCC','#FF9845',
  '#2F4554','#61A0A8','#D48265','#91C7AE','#749F83',
  '#CA8622','#BDA29A','#6E7074','#546570','#C4CCD3',
  '#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C',
  '#FF9F7F','#FB7293',
]

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  const years = ['2018', '2020', '2022', '2024', '2026']

  const series = positionTrends.map((p, idx) => ({
    name: p.name,
    type: 'line',
    data: p.data.map(d => d.value),
    symbol: 'circle',
    symbolSize: 0,
    lineStyle: { color: palette[idx % palette.length], width: 2, opacity: 0.8 },
    itemStyle: { color: palette[idx % palette.length] },
    emphasis: {
      lineStyle: { width: 4, opacity: 1 },
      itemStyle: { borderWidth: 0 },
    },
    smooth: true,
    animationDuration: 800,
  }))

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(22,27,34,0.95)',
      borderColor: '#30363d',
      textStyle: { color: '#e6edf3', fontSize: 11 },
      formatter(params) {
        const year = params[0].axisValue
        params.sort((a, b) => b.value - a.value)
        let html = `<b style="font-size:13px">${year}</b><br/>`
        params.forEach(p => {
          html += `${p.marker} ${p.seriesName}: <b>${p.value}</b><br/>`
        })
        return html
      },
    },
    legend: {
      type: 'scroll',
      top: 0,
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: { color: '#ccc', fontSize: 10 },
      pageTextStyle: { color: '#888' },
      pageIconColor: '#888',
      pageIconInactiveColor: '#444',
      selectedMode: 'multiple',
    },
    grid: { left: '5%', right: '4%', bottom: '6%', top: '18%', containLabel: true },
    xAxis: {
      type: 'category',
      data: years,
      boundaryGap: false,
      axisLabel: { color: '#aaa', fontSize: 12, fontWeight: 'bold' },
      axisLine: { lineStyle: { color: '#30363d' } },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      name: '需求相对量 (2020=100)',
      nameTextStyle: { color: '#888', fontSize: 11 },
      axisLabel: { color: '#888', fontSize: 11 },
      splitLine: { lineStyle: { color: '#21262d', type: 'dashed' } },
      min: 0,
    },
    series,
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
  height: 540px;
  background: #161b22;
  border-radius: 12px;
  border: 1px solid #30363d;
}
.data-notes {
  margin-top: 12px;
  padding: 12px 16px;
  background: #161b22;
  border-radius: 8px;
  border: 1px solid #30363d;
  font-size: 12px;
  line-height: 1.7;
}
.data-notes h4 {
  font-size: 13px;
  margin: 0 0 6px;
  color: #d29922;
}
.data-notes ul {
  margin: 0;
  padding-left: 18px;
}
.data-notes li {
  margin-bottom: 4px;
  color: #bbb;
}
.data-notes li b {
  color: #e6edf3;
}
</style>

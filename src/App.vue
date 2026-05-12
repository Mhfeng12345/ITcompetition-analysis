<template>
  <div class="app">
    <PageHeader />
    <CategoryCards />
    <div class="chart-row">
      <CompetitionRadar />
      <TrendChart />
    </div>
    <SalaryBarChart />
    <TrendOverTimeChart />
    <CompetitionTable />
    <footer class="footer">
      <p>数据来源：BOSS直聘、猎聘、拉勾、脉脉、CSDN、中研普华、CoderPad 等公开报告</p>
      <p>仅供参考，实际竞争度因城市、经验、学历等因素存在差异</p>
    </footer>
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
import CategoryCards from './components/CategoryCards.vue'
import CompetitionRadar from './components/CompetitionRadar.vue'
import TrendChart from './components/TrendChart.vue'
import SalaryBarChart from './components/SalaryBarChart.vue'
import TrendOverTimeChart from './components/TrendOverTimeChart.vue'
import CompetitionTable from './components/CompetitionTable.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #0d1117;
  color: #e6edf3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.chart-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 900px) {
  .chart-row {
    grid-template-columns: 1fr;
  }
}
.footer {
  text-align: center;
  padding: 24px 16px;
  font-size: 12px;
  opacity: 0.45;
}
.footer p {
  margin: 2px 0;
}
</style>

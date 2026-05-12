<template>
  <section class="table-section">
    <h2>岗位竞争度全览</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>类别</th>
            <th>岗位名称</th>
            <th>语言/框架</th>
            <th>竞争度</th>
            <th>供需比</th>
            <th>需求趋势</th>
            <th>市场量级</th>
            <th>薪资范围(年)</th>
            <th>AI影响</th>
            <th>入行难度</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in sortedPositions" :key="p.id">
            <td>
              <span class="category-tag" :style="{ background: getCategoryColor(p.category) + '22', color: getCategoryColor(p.category) }">
                {{ p.category }}
              </span>
            </td>
            <td class="name-cell">{{ p.name }}</td>
            <td class="lang-cell">{{ p.language }}</td>
            <td class="center-cell">
              <span class="stars">{{ '★'.repeat(p.competition) }}{{ '☆'.repeat(5 - p.competition) }}</span>
            </td>
            <td class="center-cell">{{ p.supplyDemand }}</td>
            <td class="center-cell" :style="{ color: p.demandTrend >= 0 ? '#3fb950' : '#f85149' }">
              {{ p.demandTrend >= 0 ? '+' : '' }}{{ p.demandTrend }}%
            </td>
            <td class="center-cell">
              <div class="job-count-bar">
                <span class="bar-track">
                  <span class="bar-fill" :style="{ width: (p.jobCount / 100) * 100 + '%', background: getCategoryColor(p.category) }" />
                </span>
                <span class="count-label">{{ p.jobCount }}</span>
              </div>
            </td>
            <td class="center-cell">{{ p.salaryRange }}</td>
            <td class="center-cell">
              <span class="risk-dot" :class="riskClass(p.aiRisk)"></span>
              {{ aiRiskText(p.aiRisk) }}
            </td>
            <td class="center-cell">{{ difficultyText(p.entryDifficulty) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="table-note">
      ★ 竞争度：1~5星（星越多竞争越激烈）&nbsp;&nbsp;|&nbsp;&nbsp;
      AI影响：1~5级（等级越高越易被AI替代）&nbsp;&nbsp;|&nbsp;&nbsp;
      市场量级：相对指数（Java=100 基准）
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { positions, categories, categoryOrder } from '../data/positions.js'

const sortedPositions = computed(() => {
  const orderMap = Object.fromEntries(categoryOrder.map((name, i) => [name, i]))
  return [...positions].sort((a, b) => orderMap[a.category] - orderMap[b.category] || a.id - b.id)
})

function getCategoryColor(name) {
  const cat = categories.find(c => c.name === name)
  return cat ? cat.color : '#888'
}

function riskClass(val) {
  if (val >= 4) return 'risk-high'
  if (val >= 3) return 'risk-mid'
  return 'risk-low'
}

function aiRiskText(val) {
  if (val >= 4) return '高'
  if (val >= 3) return '中'
  return '低'
}

function difficultyText(val) {
  if (val >= 4) return '高'
  if (val >= 3) return '中'
  return '低'
}
</script>

<style scoped>
.table-section {
  padding: 0 16px;
  margin-bottom: 24px;
}
.table-section h2 {
  font-size: 20px;
  margin: 0 0 12px;
  font-weight: 600;
}
.table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #30363d;
  background: #161b22;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 1020px;
}
th {
  background: #1c2333;
  padding: 10px 12px;
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
  border-bottom: 2px solid #30363d;
}
td {
  padding: 8px 12px;
  border-bottom: 1px solid #21262d;
  vertical-align: middle;
}
tr:last-child td {
  border-bottom: none;
}
tr:hover {
  background: #1c2128;
}
.center-cell {
  text-align: center;
}
.name-cell {
  font-weight: 500;
  white-space: nowrap;
}
.lang-cell {
  font-size: 12px;
  opacity: 0.75;
  max-width: 140px;
}
.category-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.stars {
  letter-spacing: 2px;
  color: #d29922;
}
.risk-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.risk-low { background: #3fb950; }
.risk-mid { background: #d29922; }
.risk-high { background: #f85149; }
.table-note {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 8px;
  text-align: center;
}
.job-count-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 80px;
}
.bar-track {
  flex: 1;
  height: 6px;
  background: #30363d;
  border-radius: 3px;
  overflow: hidden;
}
.bar-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s;
}
.count-label {
  font-size: 11px;
  color: #888;
  min-width: 22px;
  text-align: right;
}
</style>

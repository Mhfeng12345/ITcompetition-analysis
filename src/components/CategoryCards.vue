<template>
  <section class="cards-section">
    <div
      v-for="cat in categories"
      :key="cat.name"
      class="category-card"
      :style="{ borderTopColor: cat.color }"
    >
      <div class="card-header">
        <span class="card-icon">{{ cat.icon }}</span>
        <h3>{{ cat.name }}</h3>
      </div>
      <div class="card-stats">
        <div class="stat">
          <span class="stat-value">{{ stats[cat.name].count }}</span>
          <span class="stat-label">岗位数</span>
        </div>
        <div class="stat">
          <span class="stat-value" :style="{ color: competitionColor(stats[cat.name].avgCompetition) }">
            {{ stats[cat.name].avgCompetition.toFixed(1) }}
          </span>
          <span class="stat-label">平均竞争度</span>
        </div>
        <div class="stat">
          <span class="stat-value" :style="{ color: stats[cat.name].avgTrend >= 0 ? '#3fb950' : '#f85149' }">
            {{ stats[cat.name].avgTrend >= 0 ? '+' : '' }}{{ stats[cat.name].avgTrend.toFixed(1) }}%
          </span>
          <span class="stat-label">需求趋势</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="competition-bar">
          <span
            class="bar-fill"
            :style="{ width: (stats[cat.name].avgCompetition / 5) * 100 + '%', background: cat.color }"
          />
        </span>
        <span class="bar-label">{{ competitionText(stats[cat.name].avgCompetition) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { positions, categories } from '../data/positions.js'

const stats = computed(() => {
  const result = {}
  for (const cat of categories) {
    const catPositions = positions.filter(p => p.category === cat.name)
    const avgCompetition = catPositions.reduce((s, p) => s + p.competition, 0) / catPositions.length
    const avgTrend = catPositions.reduce((s, p) => s + p.demandTrend, 0) / catPositions.length
    result[cat.name] = { count: catPositions.length, avgCompetition, avgTrend }
  }
  return result
})

function competitionColor(val) {
  if (val >= 4) return '#f85149'
  if (val >= 3) return '#d29922'
  return '#3fb950'
}

function competitionText(val) {
  if (val >= 4) return '竞争激烈'
  if (val >= 3) return '竞争中等'
  return '竞争缓和'
}
</script>

<style scoped>
.cards-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 0 16px;
  margin-bottom: 24px;
}
.category-card {
  background: #161b22;
  border-radius: 12px;
  padding: 16px;
  border-top: 3px solid;
  transition: transform 0.2s, box-shadow 0.2s;
}
.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.card-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.card-icon {
  font-size: 20px;
}
.card-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-value {
  font-size: 20px;
  font-weight: 700;
}
.stat-label {
  font-size: 11px;
  opacity: 0.6;
  margin-top: 2px;
}
.card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.competition-bar {
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
  transition: width 0.6s;
}
.bar-label {
  font-size: 11px;
  white-space: nowrap;
  opacity: 0.7;
}
</style>

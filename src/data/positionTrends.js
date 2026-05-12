// 各岗位近十年需求趋势估算（2018-2026）
// 以 2020 年各岗位自身岗位量为基准 100
// 基于职友集、CSDN、猎聘、BOSS直聘交叉估算，反映相对变化趋势
export const positionTrends = [
  // ---- 前端 ----
  { id: 1, name: 'Vue.js 前端开发', category: '前端', color: '#5470C6', data: [
    { year: '2018', value: 60 }, { year: '2020', value: 100 }, { year: '2022', value: 135 },
    { year: '2024', value: 115 }, { year: '2026', value: 95 }] },
  { id: 2, name: 'React 前端开发', category: '前端', color: '#5470C6', data: [
    { year: '2018', value: 55 }, { year: '2020', value: 100 }, { year: '2022', value: 130 },
    { year: '2024', value: 110 }, { year: '2026', value: 90 }] },
  { id: 3, name: 'Angular 前端开发', category: '前端', color: '#5470C6', data: [
    { year: '2018', value: 100 }, { year: '2020', value: 100 }, { year: '2022', value: 90 },
    { year: '2024', value: 75 }, { year: '2026', value: 65 }] },
  { id: 4, name: '原生 JS/HTML/CSS', category: '前端', color: '#5470C6', data: [
    { year: '2018', value: 130 }, { year: '2020', value: 100 }, { year: '2022', value: 80 },
    { year: '2024', value: 60 }, { year: '2026', value: 45 }] },
  // ---- 后端 ----
  { id: 5, name: 'Java 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 85 }, { year: '2020', value: 100 }, { year: '2022', value: 130 },
    { year: '2024', value: 100 }, { year: '2026', value: 85 }] },
  { id: 6, name: 'Go 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 30 }, { year: '2020', value: 100 }, { year: '2022', value: 180 },
    { year: '2024', value: 230 }, { year: '2026', value: 260 }] },
  { id: 7, name: 'Python 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 65 }, { year: '2020', value: 100 }, { year: '2022', value: 140 },
    { year: '2024', value: 170 }, { year: '2026', value: 190 }] },
  { id: 8, name: 'C# .NET 后端', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 90 }, { year: '2020', value: 100 }, { year: '2022', value: 105 },
    { year: '2024', value: 95 }, { year: '2026', value: 90 }] },
  { id: 9, name: 'PHP 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 140 }, { year: '2020', value: 100 }, { year: '2022', value: 75 },
    { year: '2024', value: 55 }, { year: '2026', value: 40 }] },
  { id: 10, name: 'Rust 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 20 }, { year: '2020', value: 100 }, { year: '2022', value: 180 },
    { year: '2024', value: 250 }, { year: '2026', value: 320 }] },
  { id: 11, name: 'Node.js 后端', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 80 }, { year: '2020', value: 100 }, { year: '2022', value: 115 },
    { year: '2024', value: 110 }, { year: '2026', value: 105 }] },
  { id: 12, name: 'C/C++ 后端开发', category: '后端', color: '#91CC75', data: [
    { year: '2018', value: 90 }, { year: '2020', value: 100 }, { year: '2022', value: 110 },
    { year: '2024', value: 120 }, { year: '2026', value: 125 }] },
  // ---- 客户端 ----
  { id: 13, name: 'Android 开发', category: '客户端', color: '#FAC858', data: [
    { year: '2018', value: 160 }, { year: '2020', value: 100 }, { year: '2022', value: 80 },
    { year: '2024', value: 60 }, { year: '2026', value: 45 }] },
  { id: 14, name: 'iOS 开发', category: '客户端', color: '#FAC858', data: [
    { year: '2018', value: 150 }, { year: '2020', value: 100 }, { year: '2022', value: 85 },
    { year: '2024', value: 65 }, { year: '2026', value: 50 }] },
  { id: 15, name: '跨平台 Flutter/RN', category: '客户端', color: '#FAC858', data: [
    { year: '2018', value: 40 }, { year: '2020', value: 100 }, { year: '2022', value: 150 },
    { year: '2024', value: 180 }, { year: '2026', value: 200 }] },
  { id: 16, name: 'Windows 桌面客户端', category: '客户端', color: '#FAC858', data: [
    { year: '2018', value: 120 }, { year: '2020', value: 100 }, { year: '2022', value: 90 },
    { year: '2024', value: 80 }, { year: '2026', value: 75 }] },
  // ---- 游戏开发 ----
  { id: 17, name: 'Unity 游戏开发', category: '游戏开发', color: '#EE6666', data: [
    { year: '2018', value: 80 }, { year: '2020', value: 100 }, { year: '2022', value: 130 },
    { year: '2024', value: 95 }, { year: '2026', value: 80 }] },
  { id: 18, name: 'Unreal Engine 开发', category: '游戏开发', color: '#EE6666', data: [
    { year: '2018', value: 40 }, { year: '2020', value: 100 }, { year: '2022', value: 140 },
    { year: '2024', value: 200 }, { year: '2026', value: 250 }] },
  { id: 19, name: 'Cocos 游戏开发', category: '游戏开发', color: '#EE6666', data: [
    { year: '2018', value: 120 }, { year: '2020', value: 100 }, { year: '2022', value: 80 },
    { year: '2024', value: 55 }, { year: '2026', value: 40 }] },
  { id: 20, name: '游戏后端/服务器', category: '游戏开发', color: '#EE6666', data: [
    { year: '2018', value: 90 }, { year: '2020', value: 100 }, { year: '2022', value: 110 },
    { year: '2024', value: 85 }, { year: '2026', value: 75 }] },
  // ---- 其他 ----
  { id: 21, name: '大数据开发', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 60 }, { year: '2020', value: 100 }, { year: '2022', value: 160 },
    { year: '2024', value: 180 }, { year: '2026', value: 200 }] },
  { id: 22, name: 'AI / 机器学习工程师', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 25 }, { year: '2020', value: 100 }, { year: '2022', value: 200 },
    { year: '2024', value: 350 }, { year: '2026', value: 500 }] },
  { id: 23, name: 'DevOps / SRE', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 40 }, { year: '2020', value: 100 }, { year: '2022', value: 160 },
    { year: '2024', value: 170 }, { year: '2026', value: 180 }] },
  { id: 24, name: '测试开发 / QA', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 100 }, { year: '2020', value: 100 }, { year: '2022', value: 110 },
    { year: '2024', value: 80 }, { year: '2026', value: 60 }] },
  { id: 25, name: '嵌入式开发', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 60 }, { year: '2020', value: 100 }, { year: '2022', value: 120 },
    { year: '2024', value: 400 }, { year: '2026', value: 500 }] },
  { id: 26, name: '全栈开发', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 70 }, { year: '2020', value: 100 }, { year: '2022', value: 130 },
    { year: '2024', value: 140 }, { year: '2026', value: 150 }] },
  { id: 27, name: '安全工程师', category: '其他', color: '#73C0DE', data: [
    { year: '2018', value: 50 }, { year: '2020', value: 100 }, { year: '2022', value: 140 },
    { year: '2024', value: 180 }, { year: '2026', value: 220 }] },
]

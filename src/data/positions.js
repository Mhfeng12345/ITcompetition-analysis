export const categoryOrder = ['前端', '后端', '客户端', '游戏开发', '其他']

export const categories = [
  { name: '前端', color: '#5470C6', icon: '🌐' },
  { name: '后端', color: '#91CC75', icon: '🖥️' },
  { name: '客户端', color: '#FAC858', icon: '📱' },
  { name: '游戏开发', color: '#EE6666', icon: '🎮' },
  { name: '其他', color: '#73C0DE', icon: '🔧' },
]

export const positions = [
  // ---- 前端 ----
  {
    id: 1, category: '前端', name: 'Vue.js 前端开发', language: 'JavaScript / TypeScript',
    competition: 4, supplyDemand: '33:1', demandTrend: -8, salaryRange: '15-35万', salaryAvg: 22,
    aiRisk: 4, entryDifficulty: 2, jobCount: 85,
    summary: '国内最主流前端框架，岗位量大但竞争激烈，初级饱和。需掌握组件库设计、性能优化等进阶能力。'
  },
  {
    id: 2, category: '前端', name: 'React 前端开发', language: 'JavaScript / TypeScript',
    competition: 4, supplyDemand: '30:1', demandTrend: -5, salaryRange: '18-40万', salaryAvg: 25,
    aiRisk: 4, entryDifficulty: 3, jobCount: 60,
    summary: '大厂和国际化项目首选，门槛略高于Vue。TypeScript覆盖率达80%+，需熟悉生态链。'
  },
  {
    id: 3, category: '前端', name: 'Angular 前端开发', language: 'TypeScript',
    competition: 2, supplyDemand: '8:1', demandTrend: -12, salaryRange: '18-38万', salaryAvg: 24,
    aiRisk: 3, entryDifficulty: 3, jobCount: 12,
    summary: '国内份额较小，集中在外企和特定企业级项目。竞争相对缓和但岗位少。'
  },
  {
    id: 4, category: '前端', name: '原生 JS/HTML/CSS 前端', language: 'JavaScript / HTML / CSS',
    competition: 3, supplyDemand: '25:1', demandTrend: -15, salaryRange: '10-25万', salaryAvg: 15,
    aiRisk: 5, entryDifficulty: 1, jobCount: 50,
    summary: '低代码(AI宜搭等)冲击最大，基础页面开发需求下降67%。需向高阶方向转型。'
  },
  // ---- 后端 ----
  {
    id: 5, category: '后端', name: 'Java 后端开发', language: 'Java',
    competition: 5, supplyDemand: '41:1', demandTrend: -15, salaryRange: '15-50万', salaryAvg: 28,
    aiRisk: 3, entryDifficulty: 3, jobCount: 100,
    summary: '竞争最激烈的岗位。初级需求降32%，但高级架构师供不应求。金融/电商核心系统仍以Java为主。'
  },
  {
    id: 6, category: '后端', name: 'Go 后端开发', language: 'Go',
    competition: 2, supplyDemand: '12:1', demandTrend: 28, salaryRange: '24-60万', salaryAvg: 35,
    aiRisk: 2, entryDifficulty: 4, jobCount: 35,
    summary: '云原生时代主力语言，新兴项目采用率43%。岗位集中在头部大厂，薪资溢价明显。'
  },
  {
    id: 7, category: '后端', name: 'Python 后端开发', language: 'Python',
    competition: 3, supplyDemand: '15:1', demandTrend: 10, salaryRange: '18-45万', salaryAvg: 28,
    aiRisk: 2, entryDifficulty: 3, jobCount: 40,
    summary: 'AI/数据方向拉动需求增长。Web后端竞争中等，但AI工程化方向人才缺口大。'
  },
  {
    id: 8, category: '后端', name: 'C# .NET 后端开发', language: 'C#',
    competition: 2, supplyDemand: '6:1', demandTrend: -5, salaryRange: '15-35万', salaryAvg: 22,
    aiRisk: 2, entryDifficulty: 2, jobCount: 18,
    summary: '主要集中在传统企业、制造业和政府信息化项目。岗位稳定，竞争相对缓和。'
  },
  {
    id: 9, category: '后端', name: 'PHP 后端开发', language: 'PHP',
    competition: 3, supplyDemand: '20:1', demandTrend: -18, salaryRange: '12-30万', salaryAvg: 18,
    aiRisk: 4, entryDifficulty: 1, jobCount: 22,
    summary: '市场持续萎缩，以存量项目维护为主。新项目极少选择PHP，建议转向其他语言。'
  },
  {
    id: 10, category: '后端', name: 'Rust 后端开发', language: 'Rust',
    competition: 1, supplyDemand: '3:1', demandTrend: 35, salaryRange: '30-70万', salaryAvg: 45,
    aiRisk: 1, entryDifficulty: 5, jobCount: 4,
    summary: '蓝海方向。内存安全、高性能场景(区块链/云基础设施)需求增长，人才极度稀缺。'
  },
  {
    id: 11, category: '后端', name: 'Node.js 后端开发', language: 'JavaScript / TypeScript',
    competition: 3, supplyDemand: '18:1', demandTrend: 0, salaryRange: '16-38万', salaryAvg: 24,
    aiRisk: 3, entryDifficulty: 2, jobCount: 22,
    summary: '全栈开发者常用，BFF层、工具链场景广泛。独立后端岗位较少，多为全栈需求。'
  },
  {
    id: 12, category: '后端', name: 'C/C++ 后端开发', language: 'C / C++',
    competition: 2, supplyDemand: '10:1', demandTrend: 5, salaryRange: '20-55万', salaryAvg: 32,
    aiRisk: 1, entryDifficulty: 4, jobCount: 25,
    summary: '高性能计算、中间件、数据库内核等领域刚需。学习曲线陡峭，但竞争格局好。'
  },
  // ---- 客户端 ----
  {
    id: 13, category: '客户端', name: 'Android 开发', language: 'Kotlin / Java',
    competition: 4, supplyDemand: '28:1', demandTrend: -10, salaryRange: '15-38万', salaryAvg: 23,
    aiRisk: 3, entryDifficulty: 2, jobCount: 35,
    summary: '传统移动端饱和。存量转向车机系统、鸿蒙开发、IoT等新场景仍有需求。'
  },
  {
    id: 14, category: '客户端', name: 'iOS 开发', language: 'Swift / Objective-C',
    competition: 3, supplyDemand: '22:1', demandTrend: -8, salaryRange: '18-40万', salaryAvg: 25,
    aiRisk: 3, entryDifficulty: 3, jobCount: 22,
    summary: '生态封闭，岗位少于Android。出海App和高端产品仍有稳定需求。'
  },
  {
    id: 15, category: '客户端', name: '跨平台开发 (Flutter/RN)', language: 'Dart / JavaScript',
    competition: 3, supplyDemand: '15:1', demandTrend: 15, salaryRange: '16-38万', salaryAvg: 24,
    aiRisk: 3, entryDifficulty: 3, jobCount: 28,
    summary: '中小公司首选，降低开发成本。Flutter增长势头最猛，RN保持稳定。'
  },
  {
    id: 16, category: '客户端', name: 'Windows 桌面客户端', language: 'C++ / C#',
    competition: 2, supplyDemand: '8:1', demandTrend: -3, salaryRange: '15-40万', salaryAvg: 24,
    aiRisk: 2, entryDifficulty: 3, jobCount: 12,
    summary: 'WPF/WinForms、Qt等存量维护为主。工控、医疗、政务等传统行业有稳定需求。'
  },
  // ---- 游戏开发 ----
  {
    id: 17, category: '游戏开发', name: 'Unity 游戏开发', language: 'C#',
    competition: 5, supplyDemand: '50:1', demandTrend: -5, salaryRange: '18-50万', salaryAvg: 28,
    aiRisk: 3, entryDifficulty: 3, jobCount: 30,
    summary: '手游主力引擎，初级岗位竞争激烈(单岗位50+简历)。高级TA/图形方向仍有缺口。'
  },
  {
    id: 18, category: '游戏开发', name: 'Unreal Engine 开发', language: 'C++',
    competition: 2, supplyDemand: '6:1', demandTrend: 25, salaryRange: '30-80万', salaryAvg: 48,
    aiRisk: 1, entryDifficulty: 5, jobCount: 10,
    summary: '高端游戏引擎供不应求！UE5技术总监需求是供给的4.3倍。薪资涨幅大，门槛极高。'
  },
  {
    id: 19, category: '游戏开发', name: 'Cocos 游戏开发', language: 'TypeScript / C++',
    competition: 3, supplyDemand: '20:1', demandTrend: -15, salaryRange: '12-30万', salaryAvg: 18,
    aiRisk: 4, entryDifficulty: 2, jobCount: 12,
    summary: '2D小游戏/ H5游戏为主，市场萎缩明显。受微信小游戏和AI工具冲击较大。'
  },
  {
    id: 20, category: '游戏开发', name: '游戏后端/服务器', language: 'Java / Go / C++',
    competition: 2, supplyDemand: '10:1', demandTrend: -10, salaryRange: '20-50万', salaryAvg: 30,
    aiRisk: 2, entryDifficulty: 3, jobCount: 18,
    summary: '客户端/服务器需求从5:5变为7:3，服务器需求占比下降。存量市场，高级仍稀缺。'
  },
  // ---- 其他 ----
  {
    id: 21, category: '其他', name: '大数据开发', language: 'Java / Scala / Python',
    competition: 3, supplyDemand: '15:1', demandTrend: 12, salaryRange: '22-55万', salaryAvg: 33,
    aiRisk: 2, entryDifficulty: 4, jobCount: 28,
    summary: 'Hadoop/Spark生态人才缺口150万+。数据平台、实时计算方向需求稳定增长。'
  },
  {
    id: 22, category: '其他', name: 'AI / 机器学习工程师', language: 'Python / C++',
    competition: 1, supplyDemand: '5:1', demandTrend: 67, salaryRange: '30-100万', salaryAvg: 55,
    aiRisk: 1, entryDifficulty: 5, jobCount: 35,
    summary: '最火赛道！人才缺口500万+。头部大厂年薪百万抢人，但学历门槛极高(硕博为主)。'
  },
  {
    id: 23, category: '其他', name: 'DevOps / SRE', language: 'Go / Python / Shell',
    competition: 3, supplyDemand: '18:1', demandTrend: 8, salaryRange: '22-55万', salaryAvg: 32,
    aiRisk: 2, entryDifficulty: 4, jobCount: 22,
    summary: '云计算人才缺口150万。需掌握K8s、Service Mesh、可观测性等，技术栈迭代快。'
  },
  {
    id: 24, category: '其他', name: '测试开发 / QA', language: 'Python / Java / JS',
    competition: 4, supplyDemand: '29:1', demandTrend: -22, salaryRange: '12-35万', salaryAvg: 20,
    aiRisk: 5, entryDifficulty: 1, jobCount: 32,
    summary: 'AI自动化冲击最严重的岗位。纯手工测试需求锐减，需转向测开/性能测试。'
  },
  {
    id: 25, category: '其他', name: '嵌入式开发', language: 'C / C++ / Rust',
    competition: 2, supplyDemand: '8:1', demandTrend: 264, salaryRange: '18-50万', salaryAvg: 28,
    aiRisk: 1, entryDifficulty: 4, jobCount: 18,
    summary: '招聘量同比暴增264%！AI替代风险最低，越老越吃香。汽车电子、IoT、工控领域爆发。'
  },
  {
    id: 26, category: '其他', name: '全栈开发', language: 'JS/TS + 任意后端',
    competition: 3, supplyDemand: '20:1', demandTrend: 10, salaryRange: '18-45万', salaryAvg: 28,
    aiRisk: 3, entryDifficulty: 3, jobCount: 42,
    summary: '中小企业"全栈特种兵"需求旺。大厂仍倾向分工，全栈更适初创/出海团队。'
  },
  {
    id: 27, category: '其他', name: '安全工程师', language: 'Python / Go / C',
    competition: 2, supplyDemand: '8:1', demandTrend: 20, salaryRange: '25-80万', salaryAvg: 40,
    aiRisk: 1, entryDifficulty: 5, jobCount: 12,
    summary: '渗透测试缺口140万，安全架构师年薪中位数80万。政策驱动的信创产业持续拉动需求。'
  },
]

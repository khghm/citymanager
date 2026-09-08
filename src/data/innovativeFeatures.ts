// =============================================
// داده‌های جامع ۵۰ ویژگی نوآورانه
// =============================================

// ۱. سیستم تشخیص چهره
export const faceRecognition = {
  totalScans: 12547,
  todayScans: 342,
  authorizedPersonnel: 856,
  visitors: 128,
  recentLogs: [
    { id: 1, name: 'علی محمدی', time: '۱۰:۳۰', location: 'ورودی اصلی', status: 'مجاز' },
    { id: 2, name: 'فاطمه احمدی', time: '۱۰:۲۸', location: 'ورودی اصلی', status: 'مجاز' },
    { id: 3, name: 'ناشناس', time: '۱۰:۲۵', location: 'ورودی فرعی', status: 'غیرمجاز' },
  ],
};

// ۲. تحلیل احساسات شبکه‌های اجتماعی
export const socialSentiment = {
  overallScore: 72,
  positive: 45,
  neutral: 35,
  negative: 20,
  platforms: [
    { name: 'توییتر', mentions: 1250, sentiment: 68 },
    { name: 'اینستاگرام', mentions: 890, sentiment: 75 },
    { name: 'تلگرام', mentions: 2100, sentiment: 70 },
  ],
  trendingTopics: [
    { topic: 'ترافیک', count: 450, sentiment: 'منفی' },
    { topic: 'فضای سبز', count: 320, sentiment: 'مثبت' },
    { topic: 'نظافت', count: 280, sentiment: 'خنثی' },
  ],
};

// ۳. دستیار صوتی
export const voiceAssistant = {
  totalCommands: 8954,
  todayCommands: 127,
  successRate: 94,
  languages: ['فارسی', 'English', 'العربیة'],
  recentCommands: [
    { command: 'وضعیت ترافیک', time: '۱۰:۳۰', status: 'موفق' },
    { command: 'گزارش بودجه', time: '۱۰:۲۵', status: 'موفق' },
    { command: 'تماس با مدیر پروژه', time: '۱۰:۲۰', status: 'موفق' },
  ],
};

// ۴. پیش‌بینی تقاضای خدمات
export const demandPrediction = {
  services: [
    { name: 'نظافت', current: 125, predicted: 145, confidence: 89 },
    { name: 'جمع‌آوری زباله', current: 85, predicted: 92, confidence: 92 },
    { name: 'تعمیرات', current: 45, predicted: 58, confidence: 85 },
    { name: 'فضای سبز', current: 65, predicted: 72, confidence: 88 },
  ],
  peakDays: ['شنبه', 'یکشنبه', 'دوشنبه'],
  seasonalTrend: 'افزایشی',
};

// ۵. تحلیل ویدئویی
export const videoAnalytics = {
  totalCameras: 450,
  activeCameras: 438,
  detectedIncidents: 23,
  todayAlerts: 5,
  incidentTypes: [
    { type: 'تخلف رانندگی', count: 12 },
    { type: 'سد معبر', count: 6 },
    { type: 'تجمع غیرمجاز', count: 3 },
    { type: 'آتش‌سوزی', count: 2 },
  ],
};

// ۶. سیستم توصیه‌گر
export const recommendationEngine = {
  suggestions: [
    { id: 1, category: 'ترافیک', suggestion: 'افزایش ظرفیت اتوبوس خط ۱', impact: 'بالا', confidence: 92 },
    { id: 2, category: 'بودجه', suggestion: 'کاهش هزینه‌های انرژی ۱۵٪', impact: 'متوسط', confidence: 87 },
    { id: 3, category: 'پرسنل', suggestion: 'جابجایی ۵ کارمند به بخش‌های بحرانی', impact: 'بالا', confidence: 90 },
  ],
  implementedSuggestions: 45,
  successRate: 78,
};

// ۷. تشخیص ناهنجاری انرژی
export const energyAnomaly = {
  monitoredPoints: 1250,
  anomalies: 8,
  critical: 2,
  warning: 6,
  recentAnomalies: [
    { id: 1, location: 'ساختمان شهرداری', deviation: '+45%', severity: 'بحرانی' },
    { id: 2, location: 'مرکز همایش‌ها', deviation: '+28%', severity: 'هشدار' },
  ],
};

// ۸. پیش‌بینی عمر مفید
export const lifespanPrediction = {
  infrastructure: [
    { name: 'پل منطقه ۲', currentAge: 25, predictedLife: 50, health: 85 },
    { name: 'تصفیه‌خانه شمال', currentAge: 15, predictedLife: 40, health: 92 },
    { name: 'ایستگاه پمپاژ ۳', currentAge: 30, predictedLife: 35, health: 68 },
  ],
  maintenanceSchedule: 12,
  urgentRepairs: 3,
};

// ۹-۱۶. سنسورهای IoT
export const iotSensorsAdvanced = {
  vibration: [
    { id: 1, bridge: 'پل منطقه ۱', frequency: 2.5, amplitude: 0.8, status: 'سالم' },
    { id: 2, bridge: 'پل منطقه ۲', frequency: 3.2, amplitude: 1.2, status: 'هشدار' },
  ],
  soilQuality: [
    { id: 1, park: 'پارک ملت', moisture: 45, ph: 6.8, nutrients: 85 },
    { id: 2, park: 'پارک لاله', moisture: 38, ph: 7.2, nutrients: 78 },
  ],
  pedestrianCount: [
    { id: 1, location: 'میدان تجریش', count: 12500, peak: '۱۸:۰۰' },
    { id: 2, location: 'بازار تهران', count: 25000, peak: '۱۶:۰۰' },
  ],
  gasLeak: [
    { id: 1, location: 'منطقه ۳', level: 0, status: 'سالم' },
    { id: 2, location: 'منطقه ۵', level: 12, status: 'هشدار' },
  ],
  groundwater: [
    { id: 1, well: 'چاه ۱', level: 45, quality: 92 },
    { id: 2, well: 'چاه ۲', level: 38, quality: 88 },
  ],
  noise: [
    { id: 1, location: 'بزرگراه همت', level: 78, status: 'بالا' },
    { id: 2, location: 'پارک ملت', level: 45, status: 'نرمال' },
  ],
  smoke: [
    { id: 1, location: 'منطقه ۱', detected: false, lastCheck: '۵ دقیقه پیش' },
    { id: 2, location: 'منطقه ۲', detected: false, lastCheck: '۳ دقیقه پیش' },
  ],
  wasteWeight: [
    { id: 1, station: 'ایستگاه ۱', weight: 2500, trend: 'افزایشی' },
    { id: 2, station: 'ایستگاه ۲', weight: 1800, trend: 'کاهشی' },
  ],
};

// ۱۷-۲۲. واقعیت افزوده و مجازی
export const arVrFeatures = {
  arProjects: [
    { id: 1, name: 'پل جدید', location: 'منطقه ۲', arReady: true, views: 1250 },
    { id: 2, name: 'پارکینگ طبقاتی', location: 'منطقه ۵', arReady: true, views: 890 },
  ],
  vrTours: [
    { id: 1, name: 'تور شهر', duration: '۳۰ دقیقه', views: 5600 },
    { id: 2, name: 'بازدید پروژه‌ها', duration: '۴۵ دقیقه', views: 2300 },
  ],
  holographicMeetings: 12,
  gamification: {
    activeUsers: 45000,
    totalPoints: 1250000,
    topPlayers: 100,
  },
  crisisSimulations: 8,
  undergroundAR: {
    mappedArea: 85,
    utilities: 12500,
  },
};

// ۲۳-۲۷. بلاکچین
export const blockchainAdvanced = {
  tokens: {
    totalIssued: 5000000,
    circulating: 3500000,
    value: 1250,
  },
  landRegistry: {
    totalRecords: 245000,
    verified: 240000,
    pending: 5000,
  },
  voting: {
    activePolls: 5,
    totalVotes: 125000,
    participation: 68,
  },
  supplyChain: {
    trackedItems: 8500,
    verifiedSuppliers: 125,
    qualityScore: 94,
  },
  smartContracts: {
    active: 45,
    executed: 1250,
    totalValue: 8500,
  },
};

// ۲۸-۳۲. تحلیل داده
export const advancedAnalytics = {
  personalizedDashboards: 156,
  dataStories: 45,
  budgetForecasts: {
    currentQuarter: 125,
    predicted: 118,
    confidence: 89,
  },
  benchmarking: {
    comparedCities: 12,
    rank: 3,
    improvement: 15,
  },
  autoReports: {
    generated: 250,
    distributed: 1250,
    readership: 45000,
  },
};

// ۳۳-۳۸. اپلیکیشن شهروندی
export const citizenApp = {
  rewards: {
    totalUsers: 125000,
    pointsDistributed: 5000000,
    redeemed: 2500000,
  },
  arCitizen: {
    activeUsers: 45000,
    scannedLocations: 12500,
  },
  videoComplaints: {
    total: 8500,
    resolved: 6800,
    avgResolutionTime: '۴۸ ساعت',
  },
  localMarket: {
    activeVendors: 2500,
    dailyTransactions: 12500,
    revenue: 850,
  },
  carSharing: {
    activeCars: 1250,
    dailyTrips: 4500,
    co2Saved: 25000,
  },
  healthApp: {
    activeUsers: 85000,
    dailyChecks: 125000,
    alerts: 450,
  },
};

// ۳۹-۴۳. حمل‌ونقل
export const smartTransportAdvanced = {
  bikeRoutes: {
    totalLength: 250,
    dailyUsers: 12500,
    safeRoutes: 45,
  },
  sharedParking: {
    totalSpaces: 5000,
    dailyRentals: 1250,
    revenue: 85,
  },
  integratedPayment: {
    totalCards: 850000,
    dailyTransactions: 2500000,
    revenue: 12500,
  },
  droneDelivery: {
    activeDrones: 25,
    dailyDeliveries: 450,
    avgTime: '۱۵ دقیقه',
  },
  autonomousTaxis: {
    totalFleet: 50,
    dailyTrips: 250,
    safetyRecord: 100,
  },
};

// ۴۴-۴۸. انرژی و محیط زیست
export const greenInitiatives = {
  smartWaste: {
    sortedPercentage: 65,
    recycledTons: 850,
    revenue: 125,
  },
  microgrids: {
    totalGrids: 12,
    coverage: 25,
    reliability: 98,
  },
  rainwater: {
    collectionPoints: 250,
    dailyCollection: 12500,
    usage: 8500,
  },
  verticalFarming: {
    totalFarms: 15,
    dailyProduction: 2500,
    waterSaved: 85,
  },
  lightPollution: {
    monitoredAreas: 45,
    reducedLighting: 25,
    energySaved: 180,
  },
};

// ۴۹-۵۰. سلامت
export const healthSystems = {
  diseasePrediction: {
    monitoredDiseases: 12,
    alerts: 3,
    accuracy: 92,
  },
  mentalHealth: {
    activeUsers: 25000,
    sessions: 12500,
    satisfaction: 88,
  },
};

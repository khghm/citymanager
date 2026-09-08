// =============================================
// سیستم‌های عملیاتی - داده‌های داینامیک و قابل تعامل
// =============================================

// ۱. سیستم تشخیص چهره - عملیاتی
export interface FaceLog {
  id: number;
  name: string;
  time: string;
  location: string;
  status: 'مجاز' | 'غیرمجاز' | 'هشدار';
  confidence?: number;
}

export const faceRecognitionLogs: FaceLog[] = [
  { id: 1, name: 'علی محمدی', time: '۱۰:۳۰', location: 'ورودی اصلی', status: 'مجاز', confidence: 98.5 },
  { id: 2, name: 'فاطمه احمدی', time: '۱۰:۲۸', location: 'ورودی اصلی', status: 'مجاز', confidence: 97.2 },
  { id: 3, name: 'ناشناس', time: '۱۰:۲۵', location: 'ورودی فرعی', status: 'غیرمجاز', confidence: 23.4 },
  { id: 4, name: 'رضا کریمی', time: '۱۰:۲۲', location: 'ورودی اصلی', status: 'مجاز', confidence: 99.1 },
  { id: 5, name: 'مریم حسینی', time: '۱۰:۲۰', location: 'ساختمان اداری', status: 'مجاز', confidence: 96.8 },
];

// ۲. تحلیل احساسات - عملیاتی
export interface SentimentData {
  platform: string;
  mentions: number;
  positive: number;
  neutral: number;
  negative: number;
  trend: 'up' | 'down' | 'stable';
}

export const sentimentData: SentimentData[] = [
  { platform: 'توییتر', mentions: 1250, positive: 45, neutral: 35, negative: 20, trend: 'up' },
  { platform: 'اینستاگرام', mentions: 890, positive: 52, neutral: 30, negative: 18, trend: 'up' },
  { platform: 'تلگرام', mentions: 2100, positive: 48, neutral: 32, negative: 20, trend: 'stable' },
];

// ۳. سنسورهای IoT - عملیاتی
export interface SensorData {
  id: number;
  type: string;
  location: string;
  value: number;
  unit: string;
  status: 'سالم' | 'هشدار' | 'بحرانی';
  lastUpdate: string;
}

export const iotSensors: SensorData[] = [
  { id: 1, type: 'لرزش‌نگار', location: 'پل شهید رجایی', value: 2.3, unit: 'mm/s', status: 'سالم', lastUpdate: '۲ دقیقه پیش' },
  { id: 2, type: 'کیفیت خاک', location: 'پارک ملت', value: 68, unit: '%', status: 'سالم', lastUpdate: '۵ دقیقه پیش' },
  { id: 3, type: 'شمارش عابر', location: 'میدان تجریش', value: 1250, unit: 'نفر/ساعت', status: 'سالم', lastUpdate: '۱ دقیقه پیش' },
  { id: 4, type: 'نشت گاز', location: 'منطقه ۳', value: 0, unit: 'ppm', status: 'سالم', lastUpdate: '۳ دقیقه پیش' },
  { id: 5, type: 'سطح آب', location: 'چاه ۱۲', value: 45, unit: 'متر', status: 'هشدار', lastUpdate: '۱۰ دقیقه پیش' },
];

// ۴. سیستم‌های AR/VR - عملیاتی
export interface ARProject {
  id: number;
  name: string;
  location: string;
  completion: number;
  arViews: number;
  status: 'فعال' | 'در حال توسعه' | 'تکمیل';
}

export const arProjects: ARProject[] = [
  { id: 1, name: 'پارک شرق', location: 'منطقه ۱', completion: 75, arViews: 1250, status: 'فعال' },
  { id: 2, name: 'پل عابر میدان آزادی', location: 'منطقه ۴', completion: 90, arViews: 890, status: 'فعال' },
  { id: 3, name: 'مرکز فرهنگی', location: 'منطقه ۲', completion: 30, arViews: 450, status: 'در حال توسعه' },
];

// ۵. بلاکچین - عملیاتی
export interface BlockchainTransaction {
  id: string;
  type: string;
  amount: number;
  from: string;
  to: string;
  timestamp: string;
  status: 'تایید شده' | 'در انتظار' | 'رد شده';
  blockNumber: number;
}

export const blockchainTransactions: BlockchainTransaction[] = [
  { id: '0x1a2b3c', type: 'پرداخت عوارض', amount: 5000000, from: 'شهروند ۱۲۳', to: 'شهرداری', timestamp: '۱۰:۳۰', status: 'تایید شده', blockNumber: 12547 },
  { id: '0x4d5e6f', type: 'قرارداد پیمانکاری', amount: 150000000, from: 'شهرداری', to: 'شرکت عمرانی', timestamp: '۱۰:۲۵', status: 'تایید شده', blockNumber: 12546 },
  { id: '0x7g8h9i', type: 'رأی‌گیری', amount: 0, from: 'شهروند ۴۵۶', to: 'سیستم', timestamp: '۱۰:۲۰', status: 'تایید شده', blockNumber: 12545 },
];

// ۶. مدیریت بحران - عملیاتی
export interface CrisisAlert {
  id: number;
  type: string;
  severity: 'بحرانی' | 'خطر' | 'هشدار';
  location: string;
  time: string;
  status: 'فعال' | 'تحت کنترل' | 'پایان یافته';
  resources: number;
}

export const crisisAlerts: CrisisAlert[] = [
  { id: 1, type: 'زلزله', severity: 'هشدار', location: 'منطقه ۲', time: '۱۰:۳۰', status: 'تحت کنترل', resources: 15 },
  { id: 2, type: 'سیلاب', severity: 'خطر', location: 'منطقه ۵', time: '۱۰:۲۵', status: 'فعال', resources: 25 },
  { id: 3, type: 'آتش‌سوزی', severity: 'بحرانی', location: 'منطقه ۱', time: '۱۰:۲۰', status: 'فعال', resources: 35 },
];

// ۷. حمل‌ونقل هوشمند - عملیاتی
export interface TransportRoute {
  id: number;
  name: string;
  type: 'دوچرخه' | 'پیاده' | 'عمومی';
  length: number;
  users: number;
  status: 'فعال' | 'در دست ساخت' | 'برنامه‌ریزی';
}

export const transportRoutes: TransportRoute[] = [
  { id: 1, name: 'مسیر ولیعصر', type: 'دوچرخه', length: 12.5, users: 2500, status: 'فعال' },
  { id: 2, name: 'مسیر پارک ملت', type: 'پیاده', length: 3.2, users: 4500, status: 'فعال' },
  { id: 3, name: 'مسیر منطقه ۳', type: 'دوچرخه', length: 8.7, users: 1200, status: 'در دست ساخت' },
];

// ۸. محیط زیست - عملیاتی
export interface GreenInitiative {
  id: number;
  name: string;
  type: 'بازیافت' | 'انرژی' | 'آب' | 'کشاورزی';
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export const greenInitiatives: GreenInitiative[] = [
  { id: 1, name: 'بازیافت روزانه', type: 'بازیافت', value: 450, unit: 'تن', trend: 'up' },
  { id: 2, name: 'انرژی خورشیدی', type: 'انرژی', value: 125, unit: 'MWh', trend: 'up' },
  { id: 3, name: 'جمع‌آوری آب باران', type: 'آب', value: 850, unit: 'متر مکعب', trend: 'stable' },
  { id: 4, name: 'کشاورزی عمودی', type: 'کشاورزی', value: 2.5, unit: 'تن', trend: 'up' },
];

// ۹. سلامت شهری - عملیاتی
export interface HealthAlert {
  id: number;
  disease: string;
  severity: 'بحرانی' | 'هشدار' | 'عادی';
  affectedAreas: number;
  predictedSpread: number;
  status: 'فعال' | 'تحت کنترل' | 'پایان یافته';
}

export const healthAlerts: HealthAlert[] = [
  { id: 1, disease: 'آنفولانزا', severity: 'هشدار', affectedAreas: 5, predictedSpread: 12, status: 'تحت کنترل' },
  { id: 2, disease: 'آلودگی هوا', severity: 'بحرانی', affectedAreas: 8, predictedSpread: 15, status: 'فعال' },
  { id: 3, disease: 'بیماری گوارشی', severity: 'عادی', affectedAreas: 2, predictedSpread: 4, status: 'تحت کنترل' },
];

// ۱۰. دیجیتال توین - عملیاتی
export interface DigitalTwinSimulation {
  id: number;
  name: string;
  type: string;
  progress: number;
  status: 'در حال اجرا' | 'تکمیل' | 'متوقف';
  result?: string;
}

export const digitalTwinSimulations: DigitalTwinSimulation[] = [
  { id: 1, name: 'شبیه‌سازی ترافیک', type: 'ترافیک', progress: 100, status: 'تکمیل', result: 'کاهش ۲۵٪ ترافیک' },
  { id: 2, name: 'تحلیل آلودگی', type: 'محیط زیست', progress: 75, status: 'در حال اجرا' },
  { id: 3, name: 'پیش‌بینی مصرف انرژی', type: 'انرژی', progress: 45, status: 'در حال اجرا' },
];

// توابع کمکی برای عملیات CRUD
export const addNewItem = <T extends { id: number }>(items: T[], newItem: Omit<T, 'id'>): T[] => {
  const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0;
  return [...items, { ...newItem, id: maxId + 1 } as T];
};

export const updateItem = <T extends { id: number }>(items: T[], id: number, updates: Partial<T>): T[] => {
  return items.map(item => item.id === id ? { ...item, ...updates } : item);
};

export const deleteItem = <T extends { id: number }>(items: T[], id: number): T[] => {
  return items.filter(item => item.id !== id);
};

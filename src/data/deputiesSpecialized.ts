// =============================================
// داده‌های تخصصی هر معاونت
// =============================================

// ۱. معاونت عمرانی و فنی
export const civilDept = {
  manager: 'مهندس رضا کریمی',
  budget: 450,
  performance: 85,
  projects: [
    { id: 1, title: 'پل غیرهمسطح شهید رجایی', type: 'پل', area: 'منطقه ۲', budget: 120, progress: 40, startDate: '1402/06/01', endDate: '1403/12/29', contractor: 'شرکت پارس سازه', status: 'در حال اجرا' },
    { id: 2, title: 'بهسازی خیابان ولیعصر', type: 'معبر', area: 'منطقه ۳', budget: 30, progress: 100, startDate: '1402/01/10', endDate: '1402/09/20', contractor: 'شرکت راه‌سازی نوین', status: 'کامل' },
    { id: 3, title: 'پارکینگ طبقاتی میدان آزادی', type: 'ساختمان', area: 'منطقه ۴', budget: 200, progress: 20, startDate: '1402/08/15', endDate: '1404/06/30', contractor: 'هلدینگ عمران شهر', status: 'در حال اجرا' },
    { id: 4, title: 'توسعه شبکه فاضلاب منطقه ۱', type: 'تأسیسات', area: 'منطقه ۱', budget: 80, progress: 65, startDate: '1402/03/01', endDate: '1403/06/30', contractor: 'شرکت آب‌سازان', status: 'در حال اجرا' },
    { id: 5, title: 'نوسازی پل قدیمی رودخانه', type: 'پل', area: 'منطقه ۳', budget: 70, progress: 0, startDate: '1403/02/01', endDate: '1404/02/28', contractor: '-', status: 'متوقف' },
  ],
  equipment: [
    { id: 1, name: 'بولدوزر کوماتسو', count: 5, status: 'فعال', lastService: '1402/10/15' },
    { id: 2, name: 'جرثقیل ۵۰ تن', count: 3, status: 'فعال', lastService: '1402/09/20' },
    { id: 3, name: 'غلتک راه‌سازی', count: 8, status: 'فعال', lastService: '1402/11/01' },
    { id: 4, name: 'کامیون کمپرسی', count: 15, status: 'تعمیر', lastService: '1402/08/10' },
  ],
  inspections: [
    { id: 1, project: 'پل غیرهمسطح', date: '1402/11/10', inspector: 'مهندس احمدی', result: 'تأیید', notes: 'کیفیت بتن مناسب' },
    { id: 2, project: 'بهسازی ولیعصر', date: '1402/11/05', inspector: 'مهندس رضایی', result: 'تأیید', notes: 'آسفالت استاندارد' },
    { id: 3, project: 'پارکینگ طبقاتی', date: '1402/11/01', inspector: 'مهندس کریمی', result: 'هشدار', notes: 'نیاز به تقویت فونداسیون' },
  ],
};

// ۲. معاونت حمل‌ونقل و ترافیک
export const transportDept = {
  manager: 'دکتر فاطمه احمدی',
  budget: 280,
  performance: 78,
  routes: [
    { id: 1, name: 'اتوبوسرانی خط ۱', type: 'اتوبوس', length: 25, stations: 32, dailyPassengers: 15000, satisfaction: 82 },
    { id: 2, name: 'اتوبوسرانی خط ۲', type: 'اتوبوس', length: 18, stations: 24, dailyPassengers: 12000, satisfaction: 78 },
    { id: 3, name: 'مترو خط ۱', type: 'مترو', length: 40, stations: 25, dailyPassengers: 250000, satisfaction: 88 },
    { id: 4, name: 'مترو خط ۲', type: 'مترو', length: 22, stations: 15, dailyPassengers: 180000, satisfaction: 85 },
    { id: 5, name: 'تاکسی خطی منطقه ۱', type: 'تاکسی', length: 8, stations: 12, dailyPassengers: 5000, satisfaction: 75 },
  ],
  trafficLights: [
    { id: 1, location: 'میدان تجریش', type: 'هوشمند', status: 'فعال', lastUpdate: '1402/11/15' },
    { id: 2, location: 'چهارراه ولیعصر', type: 'هوشمند', status: 'فعال', lastUpdate: '1402/11/15' },
    { id: 3, location: 'میدان انقلاب', type: 'معمولی', status: 'تعمیر', lastUpdate: '1402/10/20' },
    { id: 4, location: 'پل صدر', type: 'هوشمند', status: 'فعال', lastUpdate: '1402/11/14' },
  ],
  parkingLots: [
    { id: 1, name: 'پارکینگ میدان آزادی', capacity: 500, occupied: 420, rate: 5000, revenue: 2100000 },
    { id: 2, name: 'پارکینگ تجریش', capacity: 300, occupied: 280, rate: 7000, revenue: 1960000 },
    { id: 3, name: 'پارکینگ ونک', capacity: 400, occupied: 350, rate: 6000, revenue: 2100000 },
  ],
  violations: [
    { id: 1, type: 'سرعت غیرمجاز', count: 1250, revenue: 62500000 },
    { id: 2, type: 'پارک دوبل', count: 890, revenue: 26700000 },
    { id: 3, type: 'عبور از چراغ قرمز', count: 450, revenue: 45000000 },
    { id: 4, type: 'طرح ترافیک', count: 3200, revenue: 160000000 },
  ],
};

// ۳. معاونت خدمات شهری
export const servicesDept = {
  manager: 'مهندس کاظم شریفی',
  budget: 180,
  performance: 82,
  cleaning: [
    { id: 1, area: 'منطقه ۱', streets: 45, length: 120, workers: 80, status: 'انجام‌شده' },
    { id: 2, area: 'منطقه ۲', streets: 38, length: 95, workers: 65, status: 'در حال انجام' },
    { id: 3, area: 'منطقه ۳', streets: 52, length: 140, workers: 90, status: 'انجام‌شده' },
    { id: 4, area: 'منطقه ۴', streets: 30, length: 80, workers: 55, status: 'در انتظار' },
  ],
  wasteCollection: [
    { id: 1, region: 'منطقه ۱', daily: 85, recycled: 25, vehicles: 8, schedule: '۰۶:۰۰ - ۱۴:۰۰' },
    { id: 2, region: 'منطقه ۲', daily: 72, recycled: 20, vehicles: 7, schedule: '۰۶:۰۰ - ۱۴:۰۰' },
    { id: 3, region: 'منطقه ۳', daily: 95, recycled: 30, vehicles: 10, schedule: '۰۶:۰۰ - ۱۴:۰۰' },
    { id: 4, region: 'منطقه ۴', daily: 60, recycled: 18, vehicles: 6, schedule: '۰۷:۰۰ - ۱۵:۰۰' },
  ],
  greenSpaces: [
    { id: 1, name: 'پارک ملت', area: 200, trees: 5000, flowers: 15000, workers: 45 },
    { id: 2, name: 'پارک لاله', area: 150, trees: 3500, flowers: 12000, workers: 35 },
    { id: 3, name: 'پارک آب و آتش', area: 25, trees: 800, flowers: 5000, workers: 15 },
    { id: 4, name: 'بوستان گفتگو', area: 40, trees: 1200, flowers: 8000, workers: 20 },
  ],
  lighting: [
    { id: 1, area: 'منطقه ۱', total: 2500, working: 2450, led: 1800, energy: 35 },
    { id: 2, area: 'منطقه ۲', total: 1800, working: 1750, led: 1200, energy: 28 },
    { id: 3, area: 'منطقه ۳', total: 2200, working: 2100, led: 1500, energy: 32 },
    { id: 4, area: 'منطقه ۴', total: 1500, working: 1480, led: 900, energy: 22 },
  ],
};

// ۴. معاونت مالی و اقتصادی
export const financeDept = {
  manager: 'دکتر مریم حسینی',
  budget: 1200,
  performance: 90,
  income: [
    { id: 1, source: 'عوارض نوسازی', amount: 180, growth: 12, month: 'بهمن' },
    { id: 2, source: 'فروش تراکم', amount: 250, growth: 8, month: 'بهمن' },
    { id: 3, source: 'جرایم رانندگی', amount: 95, growth: -5, month: 'بهمن' },
    { id: 4, source: 'کمک دولتی', amount: 400, growth: 15, month: 'بهمن' },
    { id: 5, source: 'اجاره املاک', amount: 75, growth: 10, month: 'بهمن' },
    { id: 6, source: 'طرح ترافیک', amount: 200, growth: 20, month: 'بهمن' },
  ],
  expenses: [
    { id: 1, category: 'حقوق پرسنل', amount: 350, percentage: 29 },
    { id: 2, category: 'پروژه‌های عمرانی', amount: 280, percentage: 23 },
    { id: 3, category: 'خدمات شهری', amount: 150, percentage: 13 },
    { id: 4, category: 'حمل‌ونقل', amount: 120, percentage: 10 },
    { id: 5, category: 'فضای سبز', amount: 80, percentage: 7 },
    { id: 6, category: 'سایر', amount: 220, percentage: 18 },
  ],
  debts: [
    { id: 1, creditor: 'شرکت پارس سازه', amount: 45, dueDate: '1403/03/15', status: 'معوق' },
    { id: 2, creditor: 'بانک شهر', amount: 120, dueDate: '1403/06/30', status: 'جاری' },
    { id: 3, creditor: 'پیمانکاران خدمات', amount: 35, dueDate: '1403/01/20', status: 'معوق' },
  ],
  investments: [
    { id: 1, project: 'پارکینگ طبقاتی', amount: 200, expectedReturn: 15, period: '۵ سال' },
    { id: 2, project: 'سامانه هوشمند ترافیک', amount: 150, expectedReturn: 12, period: '۳ سال' },
    { id: 3, project: 'نیروگاه خورشیدی', amount: 80, expectedReturn: 18, period: '۷ سال' },
  ],
};

// ۵. معاونت برنامه‌ریزی و توسعه
export const planningDept = {
  manager: 'دکتر سارا عباسی',
  budget: 150,
  performance: 87,
  strategicPlans: [
    { id: 1, title: 'چشم‌انداز ۱۴۱۰', horizon: '۱۴۱۰', progress: 35, status: 'در حال اجرا' },
    { id: 2, title: 'توسعه حمل‌ونقل عمومی', horizon: '۱۴۰۵', progress: 60, status: 'در حال اجرا' },
    { id: 3, title: 'هوشمندسازی شهر', horizon: '۱۴۰۷', progress: 25, status: 'در حال اجرا' },
    { id: 4, title: 'توسعه فضای سبز', horizon: '۱۴۰۴', progress: 80, status: 'در حال اجرا' },
  ],
  feasibilityStudies: [
    { id: 1, project: 'مترو خط ۳', cost: 50, duration: '۶ ماه', result: 'موجه', date: '1402/10/15' },
    { id: 2, project: 'پل سوم رودخانه', cost: 30, duration: '۴ ماه', result: 'موجه', date: '1402/09/20' },
    { id: 3, project: 'توسعه فرودگاه', cost: 80, duration: '۱۲ ماه', result: 'در حال بررسی', date: '1402/11/01' },
  ],
  kpis: [
    { id: 1, indicator: 'رضایت شهروندان', target: 85, actual: 78, unit: '٪' },
    { id: 2, indicator: 'کاهش ترافیک', target: 20, actual: 15, unit: '٪' },
    { id: 3, indicator: 'سرانه فضای سبز', target: 15, actual: 12, unit: 'm²' },
    { id: 4, indicator: 'بازیافت زباله', target: 40, actual: 32, unit: '٪' },
    { id: 5, indicator: 'کاهش آلودگی', target: 25, actual: 18, unit: '٪' },
  ],
};

// ۶. معاونت اجتماعی و فرهنگی
export const socialDept = {
  manager: 'دکتر لیلا بهرامی',
  budget: 120,
  performance: 83,
  events: [
    { id: 1, name: 'جشنواره بهاره', date: '1403/01/15', location: 'پارک ملت', attendees: 50000, budget: 15, status: 'برنامه‌ریزی' },
    { id: 2, name: 'نمایشگاه هنرهای تجسمی', date: '1402/12/20', location: 'فرهنگسرای نیاوران', attendees: 8000, budget: 5, status: 'در حال اجرا' },
    { id: 3, name: 'همایش محیط زیست', date: '1402/11/25', location: 'سالن همایش‌ها', attendees: 2000, budget: 3, status: 'تکمیل' },
    { id: 4, name: 'جشنواره فیلم شهری', date: '1403/02/10', location: 'سینما شهر', attendees: 15000, budget: 8, status: 'برنامه‌ریزی' },
  ],
  culturalCenters: [
    { id: 1, name: 'فرهنگسرای نیاوران', capacity: 500, monthlyVisitors: 12000, programs: 25 },
    { id: 2, name: 'فرهنگسرای ارسباران', capacity: 300, monthlyVisitors: 8000, programs: 18 },
    { id: 3, name: 'فرهنگسرای خاوران', capacity: 400, monthlyVisitors: 10000, programs: 22 },
  ],
  socialServices: [
    { id: 1, service: 'مراکز مشاوره خانواده', beneficiaries: 5000, satisfaction: 85 },
    { id: 2, service: 'حمایت از سالمندان', beneficiaries: 3500, satisfaction: 88 },
    { id: 3, service: 'کودکان کار', beneficiaries: 2000, satisfaction: 82 },
    { id: 4, service: 'مددکاری اجتماعی', beneficiaries: 8000, satisfaction: 80 },
  ],
};

// ۷. معاونت محیط زیست
export const environmentDept = {
  manager: 'مهندس امیر صادقی',
  budget: 95,
  performance: 80,
  airQuality: [
    { id: 1, station: 'میدان تجریش', aqi: 85, pm25: 35, pm10: 65, status: 'سالم' },
    { id: 2, station: 'میدان آزادی', aqi: 120, pm25: 55, pm10: 95, status: 'ناسالم' },
    { id: 3, station: 'پارک ملت', aqi: 65, pm25: 25, pm10: 45, status: 'سالم' },
    { id: 4, station: 'منطقه صنعتی', aqi: 150, pm25: 75, pm10: 120, status: 'خطرناک' },
  ],
  recycling: [
    { id: 1, material: 'کاغذ', monthly: 250, revenue: 125, centers: 15 },
    { id: 2, material: 'پلاستیک', monthly: 180, revenue: 90, centers: 12 },
    { id: 3, material: 'شیشه', monthly: 80, revenue: 40, centers: 8 },
    { id: 4, material: 'فلزات', monthly: 120, revenue: 180, centers: 10 },
  ],
  treePlanting: [
    { id: 1, season: 'بهار ۱۴۰۲', trees: 15000, area: 50, survival: 92 },
    { id: 2, season: 'پاییز ۱۴۰۲', trees: 12000, area: 40, survival: 88 },
    { id: 3, season: 'بهار ۱۴۰۳', trees: 18000, area: 60, survival: 90 },
  ],
  waterManagement: [
    { id: 1, project: 'آبیاری قطره‌ای پارک‌ها', savings: 35, cost: 25, status: 'فعال' },
    { id: 2, project: 'جمع‌آوری آب باران', savings: 20, cost: 15, status: 'فعال' },
    { id: 3, project: 'تصفیه فاضلاب', savings: 45, cost: 80, status: 'در حال اجرا' },
  ],
};

// ۸. معاونت حقوقی
export const legalDept = {
  manager: 'دکتر علی رضایی',
  budget: 80,
  performance: 88,
  contracts: [
    { id: 1, title: 'قرارداد پل غیرهمسطح', party: 'شرکت پارس سازه', value: 120, startDate: '1402/06/01', endDate: '1403/12/29', status: 'فعال' },
    { id: 2, title: 'قرارداد نظافت معابر', party: 'شرکت خدمات شهری پاک', value: 45, startDate: '1402/01/01', endDate: '1402/12/29', status: 'فعال' },
    { id: 3, title: 'قرارداد سامانه ترافیک', party: 'شرکت هوشمند شهر', value: 80, startDate: '1402/05/01', endDate: '1403/11/30', status: 'فعال' },
    { id: 4, title: 'قرارداد فضای سبز', party: 'شرکت سبزگان', value: 30, startDate: '1402/01/01', endDate: '1402/12/29', status: 'پایان‌یافته' },
  ],
  cases: [
    { id: 1, title: 'دعوای پیمانکار پروژه پل', court: 'دادگاه عمومی', number: '۱۴۰۲/۱۲۳۴', status: 'در حال رسیدگی', lawyer: 'دکتر محمدی' },
    { id: 2, title: 'شکایت شهروند از سد معبر', court: 'شورای حل اختلاف', number: '۱۴۰۲/۵۶۷۸', status: 'مختومه', lawyer: 'دکتر احمدی' },
    { id: 3, title: 'تخلف ساختمانی منطقه ۳', court: 'کمیسیون ماده ۱۰۰', number: '۱۴۰۲/۹۰۱۲', status: 'در حال رسیدگی', lawyer: 'دکتر کریمی' },
  ],
  regulations: [
    { id: 1, title: 'آیین‌نامه ساختمان‌های سبز', date: '1402/08/15', status: 'تصویب‌شده' },
    { id: 2, title: 'مقررات حمل‌ونقل پاک', date: '1402/09/20', status: 'در حال بررسی' },
    { id: 3, title: 'آیین‌نامه تبلیغات شهری', date: '1402/10/10', status: 'تصویب‌شده' },
  ],
};

// ۹. معاونت اداری و منابع انسانی
export const adminDept = {
  manager: 'مهندس نرگس موسوی',
  budget: 200,
  performance: 86,
  employees: [
    { id: 1, name: 'علی محمدی', position: 'مهندس عمران', dept: 'عمران', type: 'رسمی', hireDate: '1385/03/15', salary: 25 },
    { id: 2, name: 'فاطمه احمدی', position: 'حسابدار', dept: 'مالی', type: 'رسمی', hireDate: '1388/06/20', salary: 22 },
    { id: 3, name: 'رضا کریمی', position: 'مدیر پروژه', dept: 'عمران', type: 'رسمی', hireDate: '1382/01/10', salary: 35 },
    { id: 4, name: 'مریم حسینی', position: 'کارشناس IT', dept: 'فناوری', type: 'پیمانی', hireDate: '1395/09/01', salary: 28 },
    { id: 5, name: 'حسن رضایی', position: 'سرپرست خدمات', dept: 'خدمات', type: 'رسمی', hireDate: '1380/04/15', salary: 30 },
  ],
  recruitment: [
    { id: 1, position: 'مهندس ترافیک', applicants: 45, interviewed: 12, hired: 2, status: 'تکمیل' },
    { id: 2, position: 'کارشناس محیط زیست', applicants: 38, interviewed: 8, hired: 1, status: 'در حال بررسی' },
    { id: 3, position: 'برنامه‌نویس', applicants: 65, interviewed: 20, hired: 3, status: 'تکمیل' },
  ],
  training: [
    { id: 1, course: 'مدیریت پروژه پیشرفته', participants: 25, duration: '۴۰ ساعت', satisfaction: 88 },
    { id: 2, course: 'ایمنی و بهداشت', participants: 50, duration: '۲۰ ساعت', satisfaction: 85 },
    { id: 3, course: 'فناوری‌های نوین شهری', participants: 30, duration: '۳۰ ساعت', satisfaction: 90 },
  ],
  performanceEvaluations: [
    { id: 1, employee: 'علی محمدی', score: 85, period: 'سه‌ماهه سوم', bonus: 5 },
    { id: 2, employee: 'فاطمه احمدی', score: 92, period: 'سه‌ماهه سوم', bonus: 8 },
    { id: 3, employee: 'مریم حسینی', score: 88, period: 'سه‌ماهه سوم', bonus: 6 },
  ],
};

// ۱۰. معاونت شهرسازی و معماری
export const urbanDept = {
  manager: 'مهندس مهدی طاهری',
  budget: 320,
  performance: 84,
  permits: [
    { id: 1, title: 'ساخت مسکونی ۵ طبقه', applicant: 'شرکت آبادگران', area: 500, floors: 5, usage: 'مسکونی', status: 'تأیید', fee: 150 },
    { id: 2, title: 'ساخت تجاری ۳ طبقه', applicant: 'هلدینگ پارسیان', area: 800, floors: 3, usage: 'تجاری', status: 'در انتظار', fee: 280 },
    { id: 3, title: 'تخریب و نوسازی', applicant: 'شرکت عمرانی نوین', area: 1200, floors: 8, usage: 'مسکونی', status: 'رد', fee: 0 },
    { id: 4, title: 'ساخت بیمارستان', applicant: 'دانشگاه علوم پزشکی', area: 3000, floors: 6, usage: 'بهداشتی', status: 'تأیید', fee: 500 },
  ],
  zoning: [
    { id: 1, zone: 'منطقه ۱', residential: 45, commercial: 25, green: 20, industrial: 10 },
    { id: 2, zone: 'منطقه ۲', residential: 50, commercial: 20, green: 25, industrial: 5 },
    { id: 3, zone: 'منطقه ۳', residential: 40, commercial: 30, green: 15, industrial: 15 },
  ],
  heritage: [
    { id: 1, name: 'باغ تاریخی فردوس', era: 'قاجار', status: 'مرمت‌شده', budget: 25 },
    { id: 2, name: 'خانه مشروطه', era: 'قاجار', status: 'در حال مرمت', budget: 18 },
    { id: 3, name: 'کاروانسرای قدیمی', era: 'صفوی', status: 'نیاز به مرمت', budget: 35 },
  ],
  developments: [
    { id: 1, name: 'شهرک اقامتی شمال', area: 500, units: 1200, progress: 60, status: 'در حال اجرا' },
    { id: 2, name: 'مرکز تجاری شرق', area: 80, units: 350, progress: 35, status: 'در حال اجرا' },
    { id: 3, name: 'مجتمع فرهنگی غرب', area: 120, units: 1, progress: 80, status: 'در حال اجرا' },
  ],
};

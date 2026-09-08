// =============================================
// داده‌های نمونه داشبورد مدیریت شهری - نسخه کامل
// =============================================

// پروژه‌های عمرانی
export interface Project {
  id: number;
  title: string;
  region: string;
  budget: number;
  spent: number;
  progress: number;
  startDate: string;
  endDate: string;
  status: string;
  manager: string;
  description: string;
  priority: string;
}

export const projects: Project[] = [
  { id: 1, title: 'پارک شرق', region: 'منطقه ۱', budget: 45, spent: 33, progress: 75, startDate: '1402/03/15', endDate: '1403/06/30', status: 'در حال اجرا', manager: 'علی محمدی', description: 'احداث پارک ۵ هکتاری با امکانات ورزشی', priority: 'بالا' },
  { id: 2, title: 'تقاطع غیرهمسطح شهید رجایی', region: 'منطقه ۲', budget: 120, spent: 48, progress: 40, startDate: '1402/06/01', endDate: '1403/12/29', status: 'در حال اجرا', manager: 'رضا کریمی', description: 'ساخت تقاطع غیرهمسطح ۴ طبقه', priority: 'بالا' },
  { id: 3, title: 'بهسازی خیابان ولیعصر', region: 'منطقه ۳', budget: 30, spent: 30, progress: 100, startDate: '1402/01/10', endDate: '1402/09/20', status: 'کامل', manager: 'حسین اکبری', description: 'بهسازی و زیباسازی خیابان ولیعصر', priority: 'متوسط' },
  { id: 4, title: 'پل عابر پیاده میدان آزادی', region: 'منطقه ۴', budget: 15, spent: 13.5, progress: 90, startDate: '1402/05/20', endDate: '1403/02/28', status: 'در حال اجرا', manager: 'محمد جعفری', description: 'نصب پل عابر پیاده مکانیزه', priority: 'متوسط' },
  { id: 5, title: 'توسعه فضای سبز بلوار امام', region: 'منطقه ۱', budget: 25, spent: 15, progress: 60, startDate: '1402/04/01', endDate: '1403/03/30', status: 'در حال اجرا', manager: 'امیر صادقی', description: 'توسعه فضای سبز و نصب آبیاری هوشمند', priority: 'پایین' },
  { id: 6, title: 'ساخت پارکینگ طبقاتی', region: 'منطقه ۵', budget: 200, spent: 40, progress: 20, startDate: '1402/08/15', endDate: '1404/06/30', status: 'در حال اجرا', manager: 'رضا کریمی', description: 'پارکینگ ۶ طبقه با ظرفیت ۵۰۰ خودرو', priority: 'بالا' },
  { id: 7, title: 'مرمت باغ تاریخی', region: 'منطقه ۲', budget: 35, spent: 35, progress: 100, startDate: '1401/10/01', endDate: '1402/08/30', status: 'کامل', manager: 'سارا عباسی', description: 'مرمت و بازسازی باغ تاریخی', priority: 'متوسط' },
  { id: 8, title: 'آسفالت معابر منطقه ۶', region: 'منطقه ۶', budget: 50, spent: 0, progress: 0, startDate: '1403/01/01', endDate: '1403/09/30', status: 'متوقف', manager: 'حسن رضایی', description: 'آسفالت‌ریزی ۲۰ کیلومتر معبر', priority: 'بالا' },
  { id: 9, title: 'ساخت کتابخانه عمومی', region: 'منطقه ۳', budget: 60, spent: 33, progress: 55, startDate: '1402/02/20', endDate: '1403/08/15', status: 'در حال اجرا', manager: 'مهدی طاهری', description: 'کتابخانه ۳ طبقه با سالن مطالعه', priority: 'متوسط' },
  { id: 10, title: 'نوسازی شبکه روشنایی', region: 'منطقه ۴', budget: 40, spent: 32, progress: 80, startDate: '1402/03/01', endDate: '1403/01/30', status: 'در حال اجرا', manager: 'یوسف رحیمی', description: 'تعویض ۲۰۰۰ لامپ LED', priority: 'پایین' },
  { id: 11, title: 'ایستگاه بازیافت زباله', region: 'منطقه ۵', budget: 80, spent: 28, progress: 35, startDate: '1402/07/10', endDate: '1403/10/20', status: 'در حال اجرا', manager: 'حسن رضایی', description: 'احداث ایستگاه بازیافت مدرن', priority: 'بالا' },
  { id: 12, title: 'میدان میوه و تره‌بار', region: 'منطقه ۶', budget: 90, spent: 9, progress: 10, startDate: '1402/11/01', endDate: '1404/05/30', status: 'در حال اجرا', manager: 'رضا کریمی', description: 'ساخت میدان میوه و تره‌بار مرکزی', priority: 'متوسط' },
  { id: 13, title: 'توسعه دوچرخه‌سواری', region: 'منطقه ۱', budget: 18, spent: 18, progress: 100, startDate: '1402/01/15', endDate: '1402/07/30', status: 'کامل', manager: 'سارا عباسی', description: 'احداث ۱۵ کیلومتر مسیر دوچرخه', priority: 'پایین' },
  { id: 14, title: 'سامانه هوشمند ترافیک', region: 'منطقه ۲', budget: 150, spent: 67.5, progress: 45, startDate: '1402/05/01', endDate: '1403/11/30', status: 'در حال اجرا', manager: 'محمد جعفری', description: 'نصب ۱۰۰ دوربین هوشمند', priority: 'بالا' },
  { id: 15, title: 'مرمت پل قدیمی رودخانه', region: 'منطقه ۳', budget: 70, spent: 0, progress: 0, startDate: '1403/02/01', endDate: '1404/02/28', status: 'متوقف', manager: 'علی محمدی', description: 'مرمت و مقاوم‌سازی پل تاریخی', priority: 'بالا' },
];

// شکایات شهروندان
export interface Complaint {
  id: number;
  title: string;
  type: string;
  region: string;
  priority: string;
  status: string;
  date: string;
  citizen: string;
  phone: string;
  description: string;
  responseTime: string;
}

const complaintTypes = ['نظافت معابر', 'خرابی آسفالت', 'مشکل روشنایی', 'سروصدا', 'جمع‌آوری زباله', 'مشکل فاضلاب', 'سد معبر', 'درخت‌کاری', 'حفره در خیابان', 'کمبود فضای سبز'];
const regions = ['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۵', 'منطقه ۶'];
const priorities = ['بالا', 'متوسط', 'پایین'] as const;
const statuses = ['در انتظار', 'در حال بررسی', 'حل‌شده'] as const;
const citizenNames = ['محمد رضایی', 'فاطمه احمدی', 'علی حسینی', 'زهرا کریمی', 'حسین موسوی', 'مریم صادقی', 'رضا نوری', 'سارا عباسی', 'امیر جعفری', 'نرگس قاسمی'];

function randomDate(monthsBack: number): string {
  const now = new Date();
  const past = new Date(now.getTime() - Math.random() * monthsBack * 30 * 24 * 60 * 60 * 1000);
  return past.toLocaleDateString('fa-IR');
}

export const complaints: Complaint[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `${complaintTypes[i % complaintTypes.length]} - ${regions[i % regions.length]}`,
  type: complaintTypes[i % complaintTypes.length],
  region: regions[i % regions.length],
  priority: priorities[i % 3],
  status: statuses[i % 3],
  date: randomDate(6),
  citizen: citizenNames[i % citizenNames.length],
  phone: `0912${String(1000000 + Math.floor(Math.random() * 9000000)).padStart(7, '0')}`,
  description: `گزارش مشکل ${complaintTypes[i % complaintTypes.length]} در ${regions[i % regions.length]}`,
  responseTime: `${Math.floor(Math.random() * 72) + 1} ساعت`,
}));

// پرسنل
export interface Person {
  id: number;
  name: string;
  role: string;
  dept: string;
  status: string;
  gender: string;
  phone: string;
  hireDate: string;
  performance: number;
  type: string;
}

export const personnel: Person[] = [
  { id: 1, name: 'علی محمدی', role: 'مهندس عمران', dept: 'عمران', status: 'حاضر', gender: 'مرد', phone: '09121234567', hireDate: '1395/03/15', performance: 92, type: 'رسمی' },
  { id: 2, name: 'فاطمه احمدی', role: 'حسابدار', dept: 'مالی', status: 'حاضر', gender: 'زن', phone: '09122345678', hireDate: '1396/06/20', performance: 88, type: 'رسمی' },
  { id: 3, name: 'رضا کریمی', role: 'مدیر پروژه', dept: 'عمران', status: 'مرخصی', gender: 'مرد', phone: '09123456789', hireDate: '1393/01/10', performance: 95, type: 'رسمی' },
  { id: 4, name: 'مریم حسینی', role: 'کارشناس IT', dept: 'فناوری', status: 'حاضر', gender: 'زن', phone: '09124567890', hireDate: '1398/09/05', performance: 90, type: 'پیمانی' },
  { id: 5, name: 'حسن رضایی', role: 'سرپرست خدمات', dept: 'خدمات', status: 'حاضر', gender: 'مرد', phone: '09125678901', hireDate: '1390/04/12', performance: 85, type: 'رسمی' },
  { id: 6, name: 'زهرا نوری', role: 'کارشناس حقوقی', dept: 'حقوقی', status: 'دورکاری', gender: 'زن', phone: '09126789012', hireDate: '1397/11/22', performance: 87, type: 'پیمانی' },
  { id: 7, name: 'محمد جعفری', role: 'مهندس ترافیک', dept: 'ترافیک', status: 'حاضر', gender: 'مرد', phone: '09127890123', hireDate: '1394/07/18', performance: 91, type: 'رسمی' },
  { id: 8, name: 'سارا عباسی', role: 'طراح شهری', dept: 'شهرسازی', status: 'حاضر', gender: 'زن', phone: '09128901234', hireDate: '1399/02/08', performance: 93, type: 'پیمانی' },
  { id: 9, name: 'امیر صادقی', role: 'مدیر فضای سبز', dept: 'فضای سبز', status: 'مرخصی', gender: 'مرد', phone: '09129012345', hireDate: '1392/05/30', performance: 86, type: 'رسمی' },
  { id: 10, name: 'نرگس موسوی', role: 'کارشناس محیط زیست', dept: 'محیط زیست', status: 'حاضر', gender: 'زن', phone: '09120123456', hireDate: '1400/08/14', performance: 89, type: 'شرکتی' },
  { id: 11, name: 'جواد تقوی', role: 'مسئول حراست', dept: 'حراست', status: 'حاضر', gender: 'مرد', phone: '09121122334', hireDate: '1388/12/01', performance: 82, type: 'رسمی' },
  { id: 12, name: 'لیلا بهرامی', role: 'منشی', dept: 'اداری', status: 'حاضر', gender: 'زن', phone: '09122233445', hireDate: '1401/01/20', performance: 78, type: 'شرکتی' },
  { id: 13, name: 'کاظم شریفی', role: 'راننده', dept: 'حمل‌ونقل', status: 'حاضر', gender: 'مرد', phone: '09123344556', hireDate: '1391/06/10', performance: 80, type: 'رسمی' },
  { id: 14, name: 'مینا غفاری', role: 'کارشناس بودجه', dept: 'مالی', status: 'دورکاری', gender: 'زن', phone: '09124455667', hireDate: '1398/03/25', performance: 94, type: 'پیمانی' },
  { id: 15, name: 'یوسف رحیمی', role: 'تکنسین برق', dept: 'خدمات', status: 'حاضر', gender: 'مرد', phone: '09125566778', hireDate: '1395/09/15', performance: 83, type: 'رسمی' },
  { id: 16, name: 'الهام قاسمی', role: 'کارشناس آموزش', dept: 'آموزش', status: 'حاضر', gender: 'زن', phone: '09126677889', hireDate: '1399/04/08', performance: 91, type: 'پیمانی' },
  { id: 17, name: 'مهدی طاهری', role: 'معمار', dept: 'شهرسازی', status: 'مرخصی', gender: 'مرد', phone: '09127788990', hireDate: '1396/11/12', performance: 88, type: 'رسمی' },
  { id: 18, name: 'سمیرا پورمحمد', role: 'کارشناس اجتماعی', dept: 'اجتماعی', status: 'حاضر', gender: 'زن', phone: '09128899001', hireDate: '1400/07/03', performance: 86, type: 'شرکتی' },
  { id: 19, name: 'حسین اکبری', role: 'سرپرست نظافت', dept: 'خدمات', status: 'حاضر', gender: 'مرد', phone: '09129900112', hireDate: '1389/02/20', performance: 79, type: 'رسمی' },
  { id: 20, name: 'آرش ملکی', role: 'برنامه‌نویس', dept: 'فناوری', status: 'دورکاری', gender: 'مرد', phone: '09120011223', hireDate: '1401/05/15', performance: 96, type: 'شرکتی' },
];

// بودجه سالانه (میلیارد تومان)
export const budgetData = {
  total: 1200,
  lastYear: 1050,
  sectors: [
    { name: 'آموزش', amount: 150, color: '#3b82f6', spent: 120 },
    { name: 'بهداشت', amount: 200, color: '#10b981', spent: 165 },
    { name: 'حمل‌ونقل', amount: 300, color: '#f59e0b', spent: 240 },
    { name: 'فضای سبز', amount: 120, color: '#22c55e', spent: 95 },
    { name: 'عمران', amount: 280, color: '#8b5cf6', spent: 210 },
    { name: 'فرهنگی', amount: 150, color: '#ec4899', spent: 130 },
  ],
  monthly: [
    { month: 'فروردین', income: 95, expense: 88 },
    { month: 'اردیبهشت', income: 102, expense: 95 },
    { month: 'خرداد', income: 110, expense: 105 },
    { month: 'تیر', income: 98, expense: 92 },
    { month: 'مرداد', income: 105, expense: 100 },
    { month: 'شهریور', income: 115, expense: 108 },
    { month: 'مهر', income: 108, expense: 102 },
    { month: 'آبان', income: 100, expense: 96 },
    { month: 'آذر', income: 112, expense: 107 },
    { month: 'دی', income: 95, expense: 90 },
    { month: 'بهمن', income: 103, expense: 98 },
    { month: 'اسفند', income: 120, expense: 115 },
  ],
  incomeSources: [
    { name: 'عوارض نوسازی', amount: 320 },
    { name: 'فروش تراکم', amount: 280 },
    { name: 'کمک دولتی', amount: 250 },
    { name: 'جرایم', amount: 150 },
    { name: 'اجاره املاک', amount: 120 },
    { name: 'سایر', amount: 80 },
  ],
};

// داده‌های ترافیک
export const trafficData = {
  avgSpeed: 35,
  accidents: 12,
  smartPercent: 68,
  totalCameras: 250,
  activeCameras: 238,
  congestionIndex: 72,
  hourly: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    volume: Math.round(i < 6 ? 200 + Math.random() * 100 :
            i < 9 ? 800 + Math.random() * 400 :
            i < 12 ? 500 + Math.random() * 200 :
            i < 14 ? 600 + Math.random() * 300 :
            i < 17 ? 500 + Math.random() * 200 :
            i < 20 ? 900 + Math.random() * 300 :
            300 + Math.random() * 200),
  })),
  hotspots: [
    { id: 1, location: 'میدان تجریش', status: 'سنگین', speed: 15, delay: 25 },
    { id: 2, location: 'بزرگراه همت', status: 'نیمه‌سنگین', speed: 40, delay: 10 },
    { id: 3, location: 'خیابان ولیعصر', status: 'سنگین', speed: 20, delay: 20 },
    { id: 4, location: 'پل صدر', status: 'روان', speed: 60, delay: 0 },
    { id: 5, location: 'میدان ونک', status: 'نیمه‌سنگین', speed: 35, delay: 12 },
    { id: 6, location: 'بزرگراه مدرس', status: 'روان', speed: 55, delay: 2 },
    { id: 7, location: 'تقاطع رسالت', status: 'سنگین', speed: 18, delay: 22 },
    { id: 8, location: 'میدان آزادی', status: 'نیمه‌سنگین', speed: 30, delay: 15 },
  ],
};

// داده‌های زباله
export const wasteData = {
  daily: regions.map((r, i) => ({
    region: r,
    amount: 50 + Math.floor(Math.random() * 80),
    recycled: 10 + Math.floor(Math.random() * 25),
    organic: 20 + Math.floor(Math.random() * 30),
    industrial: 5 + Math.floor(Math.random() * 15),
  })),
  totalDaily: 420,
  totalRecycled: 85,
  recycleRate: 20.2,
  vehicles: 45,
  schedule: [
    { id: 1, time: '۰۶:۰۰ - ۰۸:۰۰', route: 'منطقه ۱ و ۲', vehicle: '۵ دستگاه', status: 'تکمیل‌شده' },
    { id: 2, time: '۰۸:۰۰ - ۱۰:۰۰', route: 'منطقه ۳ و ۴', vehicle: '۴ دستگاه', status: 'در حال انجام' },
    { id: 3, time: '۱۰:۰۰ - ۱۲:۰۰', route: 'منطقه ۵', vehicle: '۳ دستگاه', status: 'در انتظار' },
    { id: 4, time: '۱۴:۰۰ - ۱۶:۰۰', route: 'منطقه ۶', vehicle: '۳ دستگاه', status: 'در انتظار' },
    { id: 5, time: '۱۸:۰۰ - ۲۰:۰۰', route: 'کل مناطق (جمع‌آوری دوم)', vehicle: '۸ دستگاه', status: 'در انتظار' },
  ],
};

// داده‌های آب و فاضلاب
export const waterData = {
  consumption: regions.map((r) => ({
    region: r,
    consumption: 1000 + Math.floor(Math.random() * 2000),
    target: 2500,
  })),
  networkStatus: {
    total: 450,
    repaired: 380,
    pending: 45,
    critical: 25,
  },
  dailyConsumption: 18500,
  avgPressure: 3.2,
  repairProjects: [
    { id: 1, title: 'تعویض لوله اصلی بلوار امام', status: 'در حال اجرا', progress: 60, budget: 12, region: 'منطقه ۱' },
    { id: 2, title: 'تعمیر ایستگاه پمپاژ منطقه ۳', status: 'در حال اجرا', progress: 80, budget: 8, region: 'منطقه ۳' },
    { id: 3, title: 'نوسازی شبکه فاضلاب خیابان فردوسی', status: 'برنامه‌ریزی', progress: 10, budget: 25, region: 'منطقه ۲' },
    { id: 4, title: 'احداث تصفیه‌خانه جدید', status: 'در حال اجرا', progress: 30, budget: 45, region: 'منطقه ۵' },
    { id: 5, title: 'تعمیر شکستگی لوله منطقه ۴', status: 'فوری', progress: 90, budget: 5, region: 'منطقه ۴' },
  ],
};

// مجوزهای ساختمانی
export interface Permit {
  id: number;
  title: string;
  applicant: string;
  region: string;
  status: string;
  date: string;
  area: number;
  floors: number;
  usage: string;
  fee: number;
}

export const permits: Permit[] = [
  { id: 1, title: 'ساخت مسکونی ۵ طبقه', applicant: 'شرکت آبادگران', region: 'منطقه ۱', status: 'تایید', date: '1402/10/15', area: 450, floors: 5, usage: 'مسکونی', fee: 850 },
  { id: 2, title: 'تعمیرات نمای ساختمان', applicant: 'محمد رضایی', region: 'منطقه ۲', status: 'تایید', date: '1402/10/18', area: 200, floors: 3, usage: 'مسکونی', fee: 120 },
  { id: 3, title: 'ساخت تجاری ۳ طبقه', applicant: 'هلدینگ پارسیان', region: 'منطقه ۳', status: 'در انتظار', date: '1402/10/20', area: 800, floors: 3, usage: 'تجاری', fee: 1200 },
  { id: 4, title: 'افزایش طبقات', applicant: 'علی احمدی', region: 'منطقه ۱', status: 'در انتظار', date: '1402/10/22', area: 300, floors: 2, usage: 'مسکونی', fee: 450 },
  { id: 5, title: 'تخریب و نوسازی', applicant: 'شرکت عمرانی نوین', region: 'منطقه ۴', status: 'رد', date: '1402/10/25', area: 600, floors: 4, usage: 'مسکونی', fee: 0 },
  { id: 6, title: 'ساخت ویلا', applicant: 'سارا کریمی', region: 'منطقه ۵', status: 'تایید', date: '1402/11/01', area: 350, floors: 2, usage: 'مسکونی', fee: 280 },
  { id: 7, title: 'ساخت پاساژ', applicant: 'گروه سرمایه‌گذاری آرمان', region: 'منطقه ۲', status: 'در انتظار', date: '1402/11/05', area: 1200, floors: 4, usage: 'تجاری', fee: 2500 },
  { id: 8, title: 'تغییر کاربری', applicant: 'حسین موسوی', region: 'منطقه ۶', status: 'رد', date: '1402/11/08', area: 150, floors: 1, usage: 'اداری', fee: 0 },
  { id: 9, title: 'ساخت بیمارستان', applicant: 'دانشگاه علوم پزشکی', region: 'منطقه ۳', status: 'تایید', date: '1402/11/10', area: 2000, floors: 6, usage: 'بهداشتی', fee: 3500 },
  { id: 10, title: 'ساخت مدرسه', applicant: 'اداره آموزش و پرورش', region: 'منطقه ۴', status: 'تایید', date: '1402/11/12', area: 1500, floors: 3, usage: 'آموزشی', fee: 1800 },
  { id: 11, title: 'ساخت مسجد', applicant: 'هیئت امنای محله', region: 'منطقه ۵', status: 'تایید', date: '1402/11/15', area: 500, floors: 2, usage: 'مذهبی', fee: 400 },
  { id: 12, title: 'ساخت هتل ۴ ستاره', applicant: 'گروه گردشگری سپهر', region: 'منطقه ۱', status: 'در انتظار', date: '1402/11/18', area: 3000, floors: 8, usage: 'اقامتی', fee: 5000 },
];

// خدمات شهری
export interface ServiceRequest {
  id: number;
  title: string;
  type: string;
  region: string;
  status: string;
  date: string;
  priority: string;
  assignee: string;
  estimatedTime: string;
}

export const serviceRequests: ServiceRequest[] = [
  { id: 1, title: 'نظافت خیابان اصلی', type: 'نظافت', region: 'منطقه ۱', status: 'انجام‌شده', date: '1402/11/10', priority: 'متوسط', assignee: 'تیم الف', estimatedTime: '۲ ساعت' },
  { id: 2, title: 'ترمیم آسفالت کوچه ۵', type: 'آسفالت', region: 'منطقه ۲', status: 'در حال انجام', date: '1402/11/11', priority: 'بالا', assignee: 'تیم ب', estimatedTime: '۴ ساعت' },
  { id: 3, title: 'تعویض لامپ معیوب', type: 'روشنایی', region: 'منطقه ۳', status: 'در انتظار', date: '1402/11/12', priority: 'پایین', assignee: '-', estimatedTime: '۱ ساعت' },
  { id: 4, title: 'هرس درختان بلوار', type: 'فضای سبز', region: 'منطقه ۴', status: 'انجام‌شده', date: '1402/11/09', priority: 'متوسط', assignee: 'تیم ج', estimatedTime: '۳ ساعت' },
  { id: 5, title: 'لایروبی جوی آب', type: 'فاضلاب', region: 'منطقه ۵', status: 'در حال انجام', date: '1402/11/13', priority: 'بالا', assignee: 'تیم د', estimatedTime: '۵ ساعت' },
  { id: 6, title: 'نصب نیمکت پارک', type: 'مبلمان شهری', region: 'منطقه ۱', status: 'در انتظار', date: '1402/11/14', priority: 'پایین', assignee: '-', estimatedTime: '۲ ساعت' },
  { id: 7, title: 'جمع‌آوری زباله حجیم', type: 'زباله', region: 'منطقه ۶', status: 'انجام‌شده', date: '1402/11/08', priority: 'متوسط', assignee: 'تیم ه', estimatedTime: '۳ ساعت' },
  { id: 8, title: 'تعمیر آب‌نمای میدان', type: 'مبلمان شهری', region: 'منطقه ۲', status: 'در حال انجام', date: '1402/11/15', priority: 'بالا', assignee: 'تیم و', estimatedTime: '۶ ساعت' },
  { id: 9, title: 'شستشوی مخازن زباله', type: 'نظافت', region: 'منطقه ۳', status: 'در انتظار', date: '1402/11/16', priority: 'متوسط', assignee: '-', estimatedTime: '۴ ساعت' },
  { id: 10, title: 'تعویض تابلو خیابان', type: 'علائم', region: 'منطقه ۴', status: 'انجام‌شده', date: '1402/11/07', priority: 'پایین', assignee: 'تیم ز', estimatedTime: '۱ ساعت' },
  { id: 11, title: 'رفع آب‌گرفتگی معبر', type: 'فاضلاب', region: 'منطقه ۵', status: 'در حال انجام', date: '1402/11/17', priority: 'بالا', assignee: 'تیم ح', estimatedTime: '۳ ساعت' },
  { id: 12, title: 'کاشت گل و گیاه', type: 'فضای سبز', region: 'منطقه ۶', status: 'در انتظار', date: '1402/11/18', priority: 'پایین', assignee: '-', estimatedTime: '۵ ساعت' },
];

// رویدادهای اخیر
export const recentEvents = [
  { id: 1, title: 'پروژه پارک شرق به ۷۵٪ پیشرفت رسید', type: 'پروژه', time: '۲ ساعت پیش', icon: 'fa-hard-hat' },
  { id: 2, title: 'شکایت جدید: مشکل فاضلاب منطقه ۴', type: 'شکایت', time: '۳ ساعت پیش', icon: 'fa-exclamation-triangle' },
  { id: 3, title: 'تخصیص بودجه ۵۰ میلیارد تومان برای آسفالت', type: 'بودجه', time: '۵ ساعت پیش', icon: 'fa-money-bill' },
  { id: 4, title: 'صدور مجوز ساخت بیمارستان جدید', type: 'مجوز', time: '۶ ساعت پیش', icon: 'fa-file-alt' },
  { id: 5, title: 'تکمیل پروژه نوسازی روشنایی منطقه ۴', type: 'پروژه', time: '۸ ساعت پیش', icon: 'fa-check-circle' },
  { id: 6, title: 'هشدار: ترافیک سنگین در بزرگراه شمال', type: 'هشدار', time: '۱۰ ساعت پیش', icon: 'fa-traffic-light' },
  { id: 7, title: 'ثبت‌نام دوره آموزشی کارکنان آغاز شد', type: 'اطلاعیه', time: '۱ روز پیش', icon: 'fa-bullhorn' },
  { id: 8, title: 'خرابی شبکه آب در منطقه ۲ گزارش شد', type: 'هشدار', time: '۱ روز پیش', icon: 'fa-water' },
];

// اعلان‌ها
export const notifications = [
  { id: 1, text: 'جلسه شورای شهر فردا ساعت ۱۰', read: false, type: 'جلسه' },
  { id: 2, text: 'گزارش ماهانه بودجه آماده است', read: false, type: 'گزارش' },
  { id: 3, text: '۳ شکایت جدید ثبت شد', read: false, type: 'شکایت' },
  { id: 4, text: 'پروژه پل عابر به مرحله نهایی رسید', read: true, type: 'پروژه' },
  { id: 5, text: 'تخصیص بودجه بخش آموزش تایید شد', read: true, type: 'بودجه' },
  { id: 6, text: 'هشدار ترافیک: بزرگراه همت', read: false, type: 'ترافیک' },
  { id: 7, text: 'پایان مهلت ارسال گزارش فصلی', read: true, type: 'یادآوری' },
];

// آمار کلی داشبورد
export const dashboardStats = {
  population: 2850000,
  populationGrowth: 2.5,
  budget: 1200,
  budgetGrowth: 14.3,
  activeProjects: 11,
  completedProjects: 3,
  stoppedProjects: 2,
  weeklyComplaintsResolved: 128,
  satisfactionRate: 87,
  totalPersonnel: 20,
  activePersonnel: 14,
};

// =============================================
// داده‌های نمونه داشبورد مدیریت شهری
// =============================================

// پروژه‌های عمرانی
export const projects = [
  { id: 1, title: 'پارک شرق', region: 'منطقه ۱', budget: 45, progress: 75, startDate: '1402/03/15', endDate: '1403/06/30', status: 'در حال اجرا' },
  { id: 2, title: 'تقاطع غیرهمسطح شهید رجایی', region: 'منطقه ۲', budget: 120, progress: 40, startDate: '1402/06/01', endDate: '1403/12/29', status: 'در حال اجرا' },
  { id: 3, title: 'بهسازی خیابان ولیعصر', region: 'منطقه ۳', budget: 30, progress: 100, startDate: '1402/01/10', endDate: '1402/09/20', status: 'کامل' },
  { id: 4, title: 'پل عابر پیاده میدان آزادی', region: 'منطقه ۴', budget: 15, progress: 90, startDate: '1402/05/20', endDate: '1403/02/28', status: 'در حال اجرا' },
  { id: 5, title: 'توسعه فضای سبز بلوار امام', region: 'منطقه ۱', budget: 25, progress: 60, startDate: '1402/04/01', endDate: '1403/03/30', status: 'در حال اجرا' },
  { id: 6, title: 'ساخت پارکینگ طبقاتی', region: 'منطقه ۵', budget: 200, progress: 20, startDate: '1402/08/15', endDate: '1404/06/30', status: 'در حال اجرا' },
  { id: 7, title: 'مرمت باغ تاریخی', region: 'منطقه ۲', budget: 35, progress: 100, startDate: '1401/10/01', endDate: '1402/08/30', status: 'کامل' },
  { id: 8, title: 'آسفالت معابر منطقه ۶', region: 'منطقه ۶', budget: 50, progress: 0, startDate: '1403/01/01', endDate: '1403/09/30', status: 'متوقف' },
  { id: 9, title: 'ساخت کتابخانه عمومی', region: 'منطقه ۳', budget: 60, progress: 55, startDate: '1402/02/20', endDate: '1403/08/15', status: 'در حال اجرا' },
  { id: 10, title: 'نوسازی شبکه روشنایی', region: 'منطقه ۴', budget: 40, progress: 80, startDate: '1402/03/01', endDate: '1403/01/30', status: 'در حال اجرا' },
  { id: 11, title: 'ایستگاه بازیافت زباله', region: 'منطقه ۵', budget: 80, progress: 35, startDate: '1402/07/10', endDate: '1403/10/20', status: 'در حال اجرا' },
  { id: 12, title: 'میدان میوه و تره‌بار', region: 'منطقه ۶', budget: 90, progress: 10, startDate: '1402/11/01', endDate: '1404/05/30', status: 'در حال اجرا' },
  { id: 13, title: 'توسعه دوچرخه‌سواری', region: 'منطقه ۱', budget: 18, progress: 100, startDate: '1402/01/15', endDate: '1402/07/30', status: 'کامل' },
  { id: 14, title: 'سامانه هوشمند ترافیک', region: 'منطقه ۲', budget: 150, progress: 45, startDate: '1402/05/01', endDate: '1403/11/30', status: 'در حال اجرا' },
  { id: 15, title: 'مرمت پل قدیمی رودخانه', region: 'منطقه ۳', budget: 70, progress: 0, startDate: '1403/02/01', endDate: '1404/02/28', status: 'متوقف' },
];

// شکایات شهروندان
const complaintTypes = ['نظافت معابر', 'خرابی آسفالت', 'مشکل روشنایی', 'سروصدا', 'جمع‌آوری زباله', 'مشکل فاضلاب', 'سد معبر', 'درخت‌کاری', 'حفره در خیابان', 'کمبود فضای سبز'];
const regions = ['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۵', 'منطقه ۶'];
const priorities = ['بالا', 'متوسط', 'پایین'] as const;
const statuses = ['در انتظار', 'در حال بررسی', 'حل‌شده'] as const;

function randomDate(monthsBack: number): string {
  const now = new Date();
  const past = new Date(now.getTime() - Math.random() * monthsBack * 30 * 24 * 60 * 60 * 1000);
  return past.toLocaleDateString('fa-IR');
}

export const complaints = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `${complaintTypes[i % complaintTypes.length]} - ${regions[i % regions.length]}`,
  type: complaintTypes[i % complaintTypes.length],
  region: regions[i % regions.length],
  priority: priorities[i % 3],
  status: statuses[i % 3],
  date: randomDate(6),
  citizen: `شهروند ${i + 1}`,
}));

// پرسنل
export const personnel = [
  { id: 1, name: 'علی محمدی', role: 'مهندس عمران', dept: 'عمران', status: 'حاضر', gender: 'مرد' },
  { id: 2, name: 'فاطمه احمدی', role: 'حسابدار', dept: 'مالی', status: 'حاضر', gender: 'زن' },
  { id: 3, name: 'رضا کریمی', role: 'مدیر پروژه', dept: 'عمران', status: 'مرخصی', gender: 'مرد' },
  { id: 4, name: 'مریم حسینی', role: 'کارشناس IT', dept: 'فناوری', status: 'حاضر', gender: 'زن' },
  { id: 5, name: 'حسن رضایی', role: 'سرپرست خدمات', dept: 'خدمات', status: 'حاضر', gender: 'مرد' },
  { id: 6, name: 'زهرا نوری', role: 'کارشناس حقوقی', dept: 'حقوقی', status: 'دورکاری', gender: 'زن' },
  { id: 7, name: 'محمد جعفری', role: 'مهندس ترافیک', dept: 'ترافیک', status: 'حاضر', gender: 'مرد' },
  { id: 8, name: 'سارا عباسی', role: 'طراح شهری', dept: 'شهرسازی', status: 'حاضر', gender: 'زن' },
  { id: 9, name: 'امیر صادقی', role: 'مدیر فضای سبز', dept: 'فضای سبز', status: 'مرخصی', gender: 'مرد' },
  { id: 10, name: 'نرگس موسوی', role: 'کارشناس محیط زیست', dept: 'محیط زیست', status: 'حاضر', gender: 'زن' },
  { id: 11, name: 'جواد تقوی', role: 'مسئول حراست', dept: 'حراست', status: 'حاضر', gender: 'مرد' },
  { id: 12, name: 'لیلا بهرامی', role: 'منشی', dept: 'اداری', status: 'حاضر', gender: 'زن' },
  { id: 13, name: 'کاظم شریفی', role: 'راننده', dept: 'حمل‌ونقل', status: 'حاضر', gender: 'مرد' },
  { id: 14, name: 'مینا غفاری', role: 'کارشناس بودجه', dept: 'مالی', status: 'دورکاری', gender: 'زن' },
  { id: 15, name: 'یوسف رحیمی', role: 'تکنسین برق', dept: 'خدمات', status: 'حاضر', gender: 'مرد' },
  { id: 16, name: 'الهام قاسمی', role: 'کارشناس آموزش', dept: 'آموزش', status: 'حاضر', gender: 'زن' },
  { id: 17, name: 'مهدی طاهری', role: 'معمار', dept: 'شهرسازی', status: 'مرخصی', gender: 'مرد' },
  { id: 18, name: 'سمیرا پورمحمد', role: 'کارشناس اجتماعی', dept: 'اجتماعی', status: 'حاضر', gender: 'زن' },
  { id: 19, name: 'حسین اکبری', role: 'سرپرست نظافت', dept: 'خدمات', status: 'حاضر', gender: 'مرد' },
  { id: 20, name: 'آرش ملکی', role: 'برنامه‌نویس', dept: 'فناوری', status: 'دورکاری', gender: 'مرد' },
];

// بودجه سالانه (میلیارد تومان)
export const budgetData = {
  total: 1200,
  lastYear: 1050,
  sectors: [
    { name: 'آموزش', amount: 150, color: '#3b82f6' },
    { name: 'بهداشت', amount: 200, color: '#10b981' },
    { name: 'حمل‌ونقل', amount: 300, color: '#f59e0b' },
    { name: 'فضای سبز', amount: 120, color: '#22c55e' },
    { name: 'عمران', amount: 280, color: '#8b5cf6' },
    { name: 'فرهنگی', amount: 150, color: '#ec4899' },
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
};

// داده‌های ترافیک
export const trafficData = {
  avgSpeed: 35,
  accidents: 12,
  smartPercent: 68,
  hourly: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    volume: i < 6 ? 200 + Math.random() * 100 :
            i < 9 ? 800 + Math.random() * 400 :
            i < 12 ? 500 + Math.random() * 200 :
            i < 14 ? 600 + Math.random() * 300 :
            i < 17 ? 500 + Math.random() * 200 :
            i < 20 ? 900 + Math.random() * 300 :
            300 + Math.random() * 200,
  })),
};

// داده‌های زباله
export const wasteData = {
  daily: regions.map((r, i) => ({
    region: r,
    amount: 50 + Math.floor(Math.random() * 80),
    recycled: 10 + Math.floor(Math.random() * 25),
  })),
  schedule: [
    { time: '۰۶:۰۰ - ۰۸:۰۰', route: 'منطقه ۱ و ۲', vehicle: '۵ دستگاه' },
    { time: '۰۸:۰۰ - ۱۰:۰۰', route: 'منطقه ۳ و ۴', vehicle: '۴ دستگاه' },
    { time: '۱۰:۰۰ - ۱۲:۰۰', route: 'منطقه ۵', vehicle: '۳ دستگاه' },
    { time: '۱۴:۰۰ - ۱۶:۰۰', route: 'منطقه ۶', vehicle: '۳ دستگاه' },
    { time: '۱۸:۰۰ - ۲۰:۰۰', route: 'کل مناطق (جمع‌آوری دوم)', vehicle: '۸ دستگاه' },
  ],
};

// داده‌های آب و فاضلاب
export const waterData = {
  consumption: regions.map((r) => ({
    region: r,
    consumption: 1000 + Math.floor(Math.random() * 2000),
  })),
  networkStatus: {
    total: 450,
    repaired: 380,
    pending: 45,
    critical: 25,
  },
  repairProjects: [
    { id: 1, title: 'تعویض لوله اصلی بلوار امام', status: 'در حال اجرا', progress: 60 },
    { id: 2, title: 'تعمیر ایستگاه پمپاژ منطقه ۳', status: 'در حال اجرا', progress: 80 },
    { id: 3, title: 'نوسازی شبکه فاضلاب خیابان فردوسی', status: 'برنامه‌ریزی', progress: 10 },
    { id: 4, title: 'احداث تصفیه‌خانه جدید', status: 'در حال اجرا', progress: 30 },
  ],
};

// مجوزهای ساختمانی
export const permits = [
  { id: 1, title: 'ساخت مسکونی ۵ طبقه', applicant: 'شرکت آبادگران', region: 'منطقه ۱', status: 'تایید', date: '1402/10/15' },
  { id: 2, title: 'تعمیرات نمای ساختمان', applicant: 'محمد رضایی', region: 'منطقه ۲', status: 'تایید', date: '1402/10/18' },
  { id: 3, title: 'ساخت تجاری ۳ طبقه', applicant: 'هلدینگ پارسیان', region: 'منطقه ۳', status: 'در انتظار', date: '1402/10/20' },
  { id: 4, title: 'افزایش طبقات', applicant: 'علی احمدی', region: 'منطقه ۱', status: 'در انتظار', date: '1402/10/22' },
  { id: 5, title: 'تخریب و نوسازی', applicant: 'شرکت عمرانی نوین', region: 'منطقه ۴', status: 'رد', date: '1402/10/25' },
  { id: 6, title: 'ساخت ویلا', applicant: 'سارا کریمی', region: 'منطقه ۵', status: 'تایید', date: '1402/11/01' },
  { id: 7, title: 'ساخت پاساژ', applicant: 'گروه سرمایه‌گذاری آرمان', region: 'منطقه ۲', status: 'در انتظار', date: '1402/11/05' },
  { id: 8, title: 'تغییر کاربری', applicant: 'حسین موسوی', region: 'منطقه ۶', status: 'رد', date: '1402/11/08' },
  { id: 9, title: 'ساخت بیمارستان', applicant: 'دانشگاه علوم پزشکی', region: 'منطقه ۳', status: 'تایید', date: '1402/11/10' },
  { id: 10, title: 'ساخت مدرسه', applicant: 'اداره آموزش و پرورش', region: 'منطقه ۴', status: 'تایید', date: '1402/11/12' },
];

// خدمات شهری
export const serviceRequests = [
  { id: 1, title: 'نظافت خیابان اصلی', type: 'نظافت', region: 'منطقه ۱', status: 'انجام‌شده', date: '1402/11/10' },
  { id: 2, title: 'ترمیم آسفالت کوچه ۵', type: 'آسفالت', region: 'منطقه ۲', status: 'در حال انجام', date: '1402/11/11' },
  { id: 3, title: 'تعویض لامپ معیوب', type: 'روشنایی', region: 'منطقه ۳', status: 'در انتظار', date: '1402/11/12' },
  { id: 4, title: 'هرس درختان بلوار', type: 'فضای سبز', region: 'منطقه ۴', status: 'انجام‌شده', date: '1402/11/09' },
  { id: 5, title: 'لایروبی جوی آب', type: 'فاضلاب', region: 'منطقه ۵', status: 'در حال انجام', date: '1402/11/13' },
  { id: 6, title: 'نصب نیمکت پارک', type: 'مبلمان شهری', region: 'منطقه ۱', status: 'در انتظار', date: '1402/11/14' },
  { id: 7, title: 'جمع‌آوری زباله حجیم', type: 'زباله', region: 'منطقه ۶', status: 'انجام‌شده', date: '1402/11/08' },
  { id: 8, title: 'تعمیر آب‌نمای میدان', type: 'مبلمان شهری', region: 'منطقه ۲', status: 'در حال انجام', date: '1402/11/15' },
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
  { id: 1, text: 'جلسه شورای شهر فردا ساعت ۱۰', read: false },
  { id: 2, text: 'گزارش ماهانه بودجه آماده است', read: false },
  { id: 3, text: '۳ شکایت جدید ثبت شد', read: false },
  { id: 4, text: 'پروژه پل عابر به مرحله نهایی رسید', read: true },
  { id: 5, text: 'تخصیص بودجه بخش آموزش تایید شد', read: true },
];

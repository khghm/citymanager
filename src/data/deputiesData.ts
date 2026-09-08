// =============================================
// داده‌های عملیاتی معاونت‌های شهرداری
// =============================================

export interface Deputy {
  id: number;
  name: string;
  title: string;
  icon: string;
  color: string;
  tasks: Task[];
  staff: DeputyStaff[];
  budget: number;
  performance: number;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'بحرانی' | 'بالا' | 'متوسط' | 'پایین';
  status: 'در انتظار' | 'در حال انجام' | 'تکمیل' | 'لغو';
  assignee: string;
  deadline: string;
  progress: number;
}

export interface DeputyStaff {
  id: number;
  name: string;
  role: string;
  status: 'حاضر' | 'غایب' | 'مرخصی';
  tasksCompleted: number;
  performance: number;
}

export const deputies: Deputy[] = [
  {
    id: 1,
    name: 'مهندس رضا کریمی',
    title: 'معاونت عمرانی و فنی',
    icon: 'fa-hard-hat',
    color: 'blue',
    budget: 450,
    performance: 85,
    tasks: [
      { id: 1, title: 'تکمیل پل شهید رجایی', description: 'نظارت بر تکمیل پروژه پل', priority: 'بحرانی', status: 'در حال انجام', assignee: 'علی محمدی', deadline: '1403/02/15', progress: 75 },
      { id: 2, title: 'بهسازی خیابان ولیعصر', description: 'ترمیم آسفالت و جدول‌کشی', priority: 'بالا', status: 'در حال انجام', assignee: 'حسن رضایی', deadline: '1403/03/01', progress: 45 },
      { id: 3, title: 'ساخت پارکینگ طبقاتی', description: 'نظارت بر ساخت پارکینگ', priority: 'متوسط', status: 'در انتظار', assignee: 'محمد جعفری', deadline: '1403/06/30', progress: 20 },
    ],
    staff: [
      { id: 1, name: 'علی محمدی', role: 'مهندس عمران', status: 'حاضر', tasksCompleted: 12, performance: 92 },
      { id: 2, name: 'حسن رضایی', role: 'سرپرست پروژه', status: 'حاضر', tasksCompleted: 8, performance: 88 },
      { id: 3, name: 'محمد جعفری', role: 'مهندس معماری', status: 'مرخصی', tasksCompleted: 15, performance: 95 },
    ],
  },
  {
    id: 2,
    name: 'دکتر فاطمه احمدی',
    title: 'معاونت حمل‌ونقل و ترافیک',
    icon: 'fa-traffic-light',
    color: 'amber',
    budget: 280,
    performance: 78,
    tasks: [
      { id: 4, title: 'نصب چراغ‌های هوشمند', description: 'نصب 50 چراغ هوشمند', priority: 'بالا', status: 'در حال انجام', assignee: 'رضا کریمی', deadline: '1403/02/20', progress: 60 },
      { id: 5, title: 'بهینه‌سازی مسیرهای اتوبوس', description: 'بازنگری مسیرهای حمل‌ونقل', priority: 'متوسط', status: 'در حال انجام', assignee: 'سارا عباسی', deadline: '1403/03/15', progress: 40 },
      { id: 6, title: 'سامانه پرداخت الکترونیک', description: 'راه‌اندازی سیستم پرداخت', priority: 'بحرانی', status: 'در انتظار', assignee: 'امیر صادقی', deadline: '1403/04/01', progress: 10 },
    ],
    staff: [
      { id: 4, name: 'رضا کریمی', role: 'مهندس ترافیک', status: 'حاضر', tasksCompleted: 10, performance: 90 },
      { id: 5, name: 'سارا عباسی', role: 'کارشناس حمل‌ونقل', status: 'حاضر', tasksCompleted: 7, performance: 85 },
      { id: 6, name: 'امیر صادقی', role: 'مدیر سیستم', status: 'حاضر', tasksCompleted: 14, performance: 93 },
    ],
  },
  {
    id: 3,
    name: 'مهندس کاظم شریفی',
    title: 'معاونت خدمات شهری',
    icon: 'fa-broom',
    color: 'green',
    budget: 180,
    performance: 82,
    tasks: [
      { id: 7, title: 'نظافت معابر اصلی', description: 'برنامه نظافت روزانه', priority: 'بالا', status: 'در حال انجام', assignee: 'یوسف رحیمی', deadline: '1403/01/30', progress: 85 },
      { id: 8, title: 'جمع‌آوری زباله حجیم', description: 'برنامه هفتگی جمع‌آوری', priority: 'متوسط', status: 'در حال انجام', assignee: 'حسین اکبری', deadline: '1403/02/10', progress: 70 },
      { id: 9, title: 'نگهداری فضای سبز', description: 'آبیاری و هرس درختان', priority: 'پایین', status: 'در حال انجام', assignee: 'مهدی طاهری', deadline: '1403/03/20', progress: 55 },
    ],
    staff: [
      { id: 7, name: 'یوسف رحیمی', role: 'سرپرست نظافت', status: 'حاضر', tasksCompleted: 20, performance: 88 },
      { id: 8, name: 'حسین اکبری', role: 'مسئول جمع‌آوری', status: 'حاضر', tasksCompleted: 18, performance: 85 },
      { id: 9, name: 'مهدی طاهری', role: 'سرپرست فضای سبز', status: 'مرخصی', tasksCompleted: 16, performance: 90 },
    ],
  },
  {
    id: 4,
    name: 'دکتر مریم حسینی',
    title: 'معاونت مالی و اقتصادی',
    icon: 'fa-coins',
    color: 'emerald',
    budget: 1200,
    performance: 90,
    tasks: [
      { id: 10, title: 'تهیه گزارش مالی فصلی', description: 'گزارش سه‌ماهه چهارم', priority: 'بحرانی', status: 'در حال انجام', assignee: 'فاطمه احمدی', deadline: '1403/01/15', progress: 90 },
      { id: 11, title: 'بررسی بودجه پروژه‌ها', description: 'تخصیص بودجه سال جدید', priority: 'بالا', status: 'در انتظار', assignee: 'مینا غفاری', deadline: '1403/02/01', progress: 30 },
      { id: 12, title: 'حسابرسی داخلی', description: 'بررسی تراکنش‌های مالی', priority: 'متوسط', status: 'در حال انجام', assignee: 'علی رضایی', deadline: '1403/03/10', progress: 65 },
    ],
    staff: [
      { id: 10, name: 'فاطمه احمدی', role: 'حسابدار ارشد', status: 'حاضر', tasksCompleted: 25, performance: 95 },
      { id: 11, name: 'مینا غفاری', role: 'کارشناس بودجه', status: 'حاضر', tasksCompleted: 18, performance: 88 },
      { id: 12, name: 'علی رضایی', role: 'حسابرس', status: 'حاضر', tasksCompleted: 22, performance: 92 },
    ],
  },
  {
    id: 5,
    name: 'دکتر سارا عباسی',
    title: 'معاونت برنامه‌ریزی و توسعه',
    icon: 'fa-chart-line',
    color: 'purple',
    budget: 150,
    performance: 87,
    tasks: [
      { id: 13, title: 'تدوین برنامه پنج‌ساله', description: 'برنامه توسعه شهری', priority: 'بحرانی', status: 'در حال انجام', assignee: 'نرگس موسوی', deadline: '1403/04/01', progress: 50 },
      { id: 14, title: 'تحلیل عملکرد سالانه', description: 'گزارش عملکرد معاونت‌ها', priority: 'بالا', status: 'در انتظار', assignee: 'الهام قاسمی', deadline: '1403/02/15', progress: 25 },
      { id: 15, title: 'امکان‌سنجی پروژه‌های جدید', description: 'بررسی پروژه‌های پیشنهادی', priority: 'متوسط', status: 'در حال انجام', assignee: 'سمیرا پورمحمد', deadline: '1403/03/30', progress: 40 },
    ],
    staff: [
      { id: 13, name: 'نرگس موسوی', role: 'کارشناس برنامه‌ریزی', status: 'حاضر', tasksCompleted: 14, performance: 90 },
      { id: 14, name: 'الهام قاسمی', role: 'تحلیلگر', status: 'حاضر', tasksCompleted: 12, performance: 87 },
      { id: 15, name: 'سمیرا پورمحمد', role: 'کارشناس توسعه', status: 'مرخصی', tasksCompleted: 16, performance: 92 },
    ],
  },
  {
    id: 6,
    name: 'دکتر لیلا بهرامی',
    title: 'معاونت اجتماعی و فرهنگی',
    icon: 'fa-users',
    color: 'pink',
    budget: 120,
    performance: 83,
    tasks: [
      { id: 16, title: 'برگزاری جشنواره فرهنگی', description: 'جشنواره بهاره', priority: 'بالا', status: 'در حال انجام', assignee: 'زهرا نوری', deadline: '1403/02/20', progress: 60 },
      { id: 17, title: 'برنامه‌های آموزشی شهروندی', description: 'دوره‌های آموزشی', priority: 'متوسط', status: 'در انتظار', assignee: 'فاطمه حسینی', deadline: '1403/03/15', progress: 35 },
      { id: 18, title: 'حمایت از خانواده', description: 'برنامه‌های حمایتی', priority: 'پایین', status: 'در حال انجام', assignee: 'مریم کریمی', deadline: '1403/04/10', progress: 50 },
    ],
    staff: [
      { id: 16, name: 'زهرا نوری', role: 'کارشناس فرهنگی', status: 'حاضر', tasksCompleted: 10, performance: 88 },
      { id: 17, name: 'فاطمه حسینی', role: 'مسئول آموزش', status: 'حاضر', tasksCompleted: 8, performance: 85 },
      { id: 18, name: 'مریم کریمی', role: 'کارشناس اجتماعی', status: 'حاضر', tasksCompleted: 12, performance: 90 },
    ],
  },
  {
    id: 7,
    name: 'مهندس امیر صادقی',
    title: 'معاونت محیط زیست',
    icon: 'fa-leaf',
    color: 'teal',
    budget: 95,
    performance: 80,
    tasks: [
      { id: 19, title: 'پایش کیفیت هوا', description: 'نصب سنسورهای جدید', priority: 'بحرانی', status: 'در حال انجام', assignee: 'کاظم شریفی', deadline: '1403/02/10', progress: 70 },
      { id: 20, title: 'برنامه بازیافت', description: 'توسعه سیستم بازیافت', priority: 'بالا', status: 'در حال انجام', assignee: 'یوسف رحیمی', deadline: '1403/03/01', progress: 55 },
      { id: 21, title: 'درختکاری بهاره', description: 'کاشت 10000 نهال', priority: 'متوسط', status: 'در انتظار', assignee: 'مهدی طاهری', deadline: '1403/04/15', progress: 20 },
    ],
    staff: [
      { id: 19, name: 'کاظم شریفی', role: 'کارشناس محیط زیست', status: 'حاضر', tasksCompleted: 11, performance: 86 },
      { id: 20, name: 'یوسف رحیمی', role: 'مسئول بازیافت', status: 'حاضر', tasksCompleted: 9, performance: 83 },
      { id: 21, name: 'مهدی طاهری', role: 'سرپرست فضای سبز', status: 'مرخصی', tasksCompleted: 14, performance: 89 },
    ],
  },
  {
    id: 8,
    name: 'دکتر علی رضایی',
    title: 'معاونت حقوقی',
    icon: 'fa-scale-balanced',
    color: 'indigo',
    budget: 80,
    performance: 88,
    tasks: [
      { id: 22, title: 'بررسی قراردادهای پیمانکاری', description: 'بررسی حقوقی قراردادها', priority: 'بحرانی', status: 'در حال انجام', assignee: 'زهرا نوری', deadline: '1403/01/25', progress: 80 },
      { id: 23, title: 'دفاع از پرونده‌های قضایی', description: 'پرونده‌های باز', priority: 'بالا', status: 'در حال انجام', assignee: 'فاطمه حسینی', deadline: '1403/02/28', progress: 65 },
      { id: 24, title: 'تدوین آیین‌نامه‌های جدید', description: 'آیین‌نامه‌های داخلی', priority: 'متوسط', status: 'در انتظار', assignee: 'مریم کریمی', deadline: '1403/03/20', progress: 30 },
    ],
    staff: [
      { id: 22, name: 'زهرا نوری', role: 'وکیل', status: 'حاضر', tasksCompleted: 15, performance: 92 },
      { id: 23, name: 'فاطمه حسینی', role: 'مشاور حقوقی', status: 'حاضر', tasksCompleted: 12, performance: 88 },
      { id: 24, name: 'مریم کریمی', role: 'کارشناس حقوقی', status: 'حاضر', tasksCompleted: 10, performance: 85 },
    ],
  },
  {
    id: 9,
    name: 'مهندس نرگس موسوی',
    title: 'معاونت اداری و منابع انسانی',
    icon: 'fa-user-tie',
    color: 'cyan',
    budget: 200,
    performance: 86,
    tasks: [
      { id: 25, title: 'استخدام کارکنان جدید', description: 'جذب 50 نیروی جدید', priority: 'بالا', status: 'در حال انجام', assignee: 'الهام قاسمی', deadline: '1403/03/01', progress: 45 },
      { id: 26, title: 'برگزاری دوره‌های آموزشی', description: 'آموزش کارکنان', priority: 'متوسط', status: 'در حال انجام', assignee: 'سمیرا پورمحمد', deadline: '1403/04/15', progress: 60 },
      { id: 27, title: 'ارزیابی عملکرد سالانه', description: 'ارزیابی کارکنان', priority: 'پایین', status: 'در انتظار', assignee: 'نیلوفر اسدی', deadline: '1403/05/01', progress: 15 },
    ],
    staff: [
      { id: 25, name: 'الهام قاسمی', role: 'کارشناس منابع انسانی', status: 'حاضر', tasksCompleted: 13, performance: 87 },
      { id: 26, name: 'سمیرا پورمحمد', role: 'مسئول آموزش', status: 'حاضر', tasksCompleted: 11, performance: 84 },
      { id: 27, name: 'نیلوفر اسدی', role: 'کارشناس اداری', status: 'مرخصی', tasksCompleted: 9, performance: 82 },
    ],
  },
  {
    id: 10,
    name: 'مهندس مهدی طاهری',
    title: 'معاونت شهرسازی و معماری',
    icon: 'fa-city',
    color: 'orange',
    budget: 320,
    performance: 84,
    tasks: [
      { id: 28, title: 'بررسی مجوزهای ساختمانی', description: 'بررسی 200 درخواست', priority: 'بحرانی', status: 'در حال انجام', assignee: 'حسین اکبری', deadline: '1403/02/01', progress: 75 },
      { id: 29, title: 'تدوین طرح تفصیلی', description: 'طرح تفصیلی شهر', priority: 'بالا', status: 'در حال انجام', assignee: 'کاظم شریفی', deadline: '1403/04/30', progress: 40 },
      { id: 30, title: 'بازنگری کاربری اراضی', description: 'تغییر کاربری مناطق', priority: 'متوسط', status: 'در انتظار', assignee: 'یوسف رحیمی', deadline: '1403/05/15', progress: 25 },
    ],
    staff: [
      { id: 28, name: 'حسین اکبری', role: 'کارشناس شهرسازی', status: 'حاضر', tasksCompleted: 16, performance: 89 },
      { id: 29, name: 'کاظم شریفی', role: 'معمار ارشد', status: 'حاضر', tasksCompleted: 14, performance: 91 },
      { id: 30, name: 'یوسف رحیمی', role: 'کارشناس کاربری', status: 'حاضر', tasksCompleted: 12, performance: 86 },
    ],
  },
];

// گزارش‌های عملکرد معاونت‌ها
export const deputyReports = {
  monthly: [
    { month: 'فروردین', completed: 45, pending: 12, delayed: 3 },
    { month: 'اردیبهشت', completed: 52, pending: 8, delayed: 2 },
    { month: 'خرداد', completed: 48, pending: 15, delayed: 5 },
    { month: 'تیر', completed: 55, pending: 10, delayed: 2 },
    { month: 'مرداد', completed: 60, pending: 7, delayed: 1 },
    { month: 'شهریور', completed: 58, pending: 9, delayed: 3 },
  ],
  performance: deputies.map(d => ({
    name: d.title.replace('معاونت ', ''),
    performance: d.performance,
    budget: d.budget,
  })),
};

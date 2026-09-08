import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { projects, complaints, budgetData, recentEvents, personnel } from '../data/mockData';

// محاسبه KPI ها
const population = 850000;
const populationGrowth = 2.3;
const budgetCurrent = budgetData.total;
const budgetLastYear = budgetData.lastYear;
const activeProjects = projects.filter(p => p.status === 'در حال اجرا').length;
const resolvedComplaints = complaints.filter(c => c.status === 'حل‌شده').length;
const satisfactionRate = 78;

// داده نمودار ترکیب پرسنل
const personnelComposition = [
  { name: 'رسمی', value: 35, color: '#3b82f6' },
  { name: 'پیمانی', value: 40, color: '#10b981' },
  { name: 'شرکتی', value: 25, color: '#f59e0b' },
];

// داده نمودار شکایات ۶ ماه گذشته
const complaintsTrend = [
  { month: 'تیر', count: 42 },
  { month: 'مرداد', count: 38 },
  { month: 'شهریور', count: 55 },
  { month: 'مهر', count: 47 },
  { month: 'آبان', count: 52 },
  { month: 'آذر', count: resolvedComplaints },
];

export default function Dashboard() {
  return (
    <div className="fade-in space-y-6">
      {/* کارت‌های KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          title="جمعیت شهر"
          value={population.toLocaleString('fa-IR')}
          subtitle={`رشد ${populationGrowth}% نسبت به سال قبل`}
          icon="fa-users"
          color="bg-blue-500"
        />
        <KPICard
          title="بودجه سال جاری"
          value={`${budgetCurrent} میلیارد`}
          subtitle={`مقایسه: ${budgetLastYear} میلیارد (سال قبل)`}
          icon="fa-coins"
          color="bg-emerald-500"
        />
        <KPICard
          title="پروژه‌های فعال"
          value={activeProjects.toLocaleString('fa-IR')}
          subtitle="پروژه در حال اجرا"
          icon="fa-hard-hat"
          color="bg-purple-500"
        />
        <KPICard
          title="شکایات حل‌شده"
          value={resolvedComplaints.toLocaleString('fa-IR')}
          subtitle="در هفته جاری"
          icon="fa-check-circle"
          color="bg-amber-500"
        />
        <KPICard
          title="رضایت شهروندان"
          value={`${satisfactionRate}%`}
          subtitle="نرخ رضایتمندی"
          icon="fa-smile"
          color="bg-rose-500"
        />
      </div>

      {/* نمودارها */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* نمودار میله‌ای بودجه */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm card-hover">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
            توزیع بودجه بخش‌ها
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={budgetData.sectors}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => [`${value} میلیارد تومان`, 'بودجه']} />
              <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                {budgetData.sectors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* نمودار خطی شکایات */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm card-hover">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-line ml-2 text-primary"></i>
            روند شکایات (۶ ماه گذشته)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={complaintsTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => [`${value} شکایت`, 'تعداد']} />
              <Line type="monotone" dataKey="count" stroke="#0e4d6e" strokeWidth={3} dot={{ fill: '#d4a843', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* نمودار دایره‌ای پرسنل */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm card-hover">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-pie ml-2 text-primary"></i>
            ترکیب نیروی انسانی
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={personnelComposition}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {personnelComposition.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}%`, 'درصد']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* جدول رویدادهای اخیر */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm card-hover">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-clock ml-2 text-primary"></i>
            رویدادهای اخیر
          </h3>
          <div className="space-y-3 max-h-[280px] overflow-y-auto scrollbar-thin">
            {recentEvents.map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  event.type === 'هشدار' ? 'bg-red-100 text-red-600' :
                  event.type === 'پروژه' ? 'bg-blue-100 text-blue-600' :
                  event.type === 'شکایت' ? 'bg-amber-100 text-amber-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  <i className={`fa-solid ${event.icon} text-sm`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{event.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{event.time}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  event.type === 'هشدار' ? 'bg-red-100 text-red-700' :
                  event.type === 'پروژه' ? 'bg-blue-100 text-blue-700' :
                  event.type === 'شکایت' ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                }`}>{event.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* خلاصه پرسنل */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-user-group ml-2 text-primary"></i>
          وضعیت پرسنل
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{personnel.filter(p => p.status === 'حاضر').length}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">حاضر</p>
          </div>
          <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <p className="text-2xl font-bold text-amber-600">{personnel.filter(p => p.status === 'مرخصی').length}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">مرخصی</p>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{personnel.filter(p => p.status === 'دورکاری').length}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">دورکاری</p>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">{personnel.length}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">کل پرسنل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// کامپوننت کارت KPI
function KPICard({ title, value, subtitle, icon, color }: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm card-hover border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          <i className={`fa-solid ${icon} text-white text-sm`}></i>
        </div>
      </div>
      <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-1">{title}</h4>
      <p className="text-xl font-bold text-slate-800 dark:text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}

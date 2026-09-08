import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { projects, complaints, budgetData, recentEvents, personnel, dashboardStats } from '../data/mockData';

// داده نمودار ترکیب پرسنل
const personnelComposition = [
  { name: 'رسمی', value: personnel.filter(p => p.type === 'رسمی').length, color: '#3b82f6' },
  { name: 'پیمانی', value: personnel.filter(p => p.type === 'پیمانی').length, color: '#10b981' },
  { name: 'شرکتی', value: personnel.filter(p => p.type === 'شرکتی').length, color: '#f59e0b' },
];

// داده نمودار شکایات ۶ ماه گذشته
const complaintsTrend = [
  { month: 'تیر', count: 42 },
  { month: 'مرداد', count: 38 },
  { month: 'شهریور', count: 55 },
  { month: 'مهر', count: 47 },
  { month: 'آبان', count: 52 },
  { month: 'آذر', count: complaints.filter(c => c.status === 'حل‌شده').length },
];

export default function Dashboard() {
  return (
    <div className="fade-in space-y-6">
      {/* کارت‌های KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          title="جمعیت شهر"
          value={dashboardStats.population.toLocaleString('fa-IR')}
          subtitle={`رشد ${dashboardStats.populationGrowth}% نسبت به سال قبل`}
          icon="fa-users"
          color="bg-blue-500"
        />
        <KPICard
          title="بودجه سال جاری"
          value={`${dashboardStats.budget} میلیارد`}
          subtitle={`رشد ${dashboardStats.budgetGrowth}% نسبت به سال قبل`}
          icon="fa-coins"
          color="bg-emerald-500"
        />
        <KPICard
          title="پروژه‌های فعال"
          value={String(dashboardStats.activeProjects)}
          subtitle={`${dashboardStats.completedProjects} تکمیل | ${dashboardStats.stoppedProjects} متوقف`}
          icon="fa-hard-hat"
          color="bg-purple-500"
        />
        <KPICard
          title="شکایات حل‌شده"
          value={String(dashboardStats.weeklyComplaintsResolved)}
          subtitle="در هفته جاری"
          icon="fa-check-circle"
          color="bg-amber-500"
        />
        <KPICard
          title="رضایت شهروندان"
          value={`${dashboardStats.satisfactionRate}%`}
          subtitle="بر اساس نظرسنجی"
          icon="fa-face-smile"
          color="bg-pink-500"
        />
      </div>

      {/* نمودارها */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* نمودار میله‌ای بودجه */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
            توزیع بودجه بخش‌ها
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={budgetData.sectors}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value: number) => [`${value} میلیارد تومان`]} />
              <Bar dataKey="amount" name="تخصیص" radius={[6, 6, 0, 0]}>
                {budgetData.sectors.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* نمودار خطی شکایات */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-line ml-2 text-primary"></i>
            روند شکایات ۶ ماه گذشته
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={complaintsTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value: number) => [`${value} شکایت`]} />
              <Line type="monotone" dataKey="count" name="شکایات" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* نمودار دایره‌ای و رویدادها */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* نمودار دایره‌ای پرسنل */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-pie ml-2 text-primary"></i>
            ترکیب نیروی انسانی
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={personnelComposition} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                {personnelComposition.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {personnelComposition.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* رویدادهای اخیر */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 lg:col-span-2">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
            <i className="fa-solid fa-clock ml-2 text-primary"></i>
            رویدادهای اخیر
          </h3>
          <div className="space-y-3 max-h-[280px] overflow-y-auto">
            {recentEvents.map(event => (
              <div key={event.id} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className={`fa-solid ${event.icon} text-primary text-xs`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 dark:text-slate-200 truncate">{event.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{event.type}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* خلاصه سریع */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <i className="fa-solid fa-users text-blue-600"></i>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800 dark:text-white">{dashboardStats.totalPersonnel}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">کل پرسنل</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <i className="fa-solid fa-user-check text-green-600"></i>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800 dark:text-white">{dashboardStats.activePersonnel}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">پرسنل فعال</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <i className="fa-solid fa-comments text-amber-600"></i>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800 dark:text-white">{complaints.length}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">کل شکایات</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <i className="fa-solid fa-list-check text-purple-600"></i>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-800 dark:text-white">{projects.length}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">کل پروژه‌ها</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, subtitle, icon, color }: { title: string; value: string; subtitle: string; icon: string; color: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{value}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          <i className={`fa-solid ${icon} text-white`}></i>
        </div>
      </div>
    </div>
  );
}

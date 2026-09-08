import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trafficData } from '../data/mockData';

export default function Traffic() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-traffic-light ml-2 text-primary"></i>
        مدیریت ترافیک
      </h2>

      {/* شاخص‌های ترافیکی */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 card-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <i className="fa-solid fa-gauge-high text-blue-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">میانگین سرعت</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.avgSpeed} <span className="text-sm">km/h</span></p>
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(trafficData.avgSpeed / 60) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 card-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <i className="fa-solid fa-car-burst text-red-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">تصادفات امروز</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.accidents}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <i className="fa-solid fa-arrow-down text-green-500 ml-1"></i>
            ۱۵٪ کاهش نسبت به هفته قبل
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 card-hover">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <i className="fa-solid fa-microchip text-green-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">هوشمندسازی</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.smartPercent}%</p>
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${trafficData.smartPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* نمودار حجم ترافیک */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-area ml-2 text-primary"></i>
          حجم ترافیک ۲۴ ساعته
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficData.hourly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="hour" tick={{ fontSize: 10 }} interval={2} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${Math.round(value)} خودرو`, 'حجم']} />
            <Area type="monotone" dataKey="volume" stroke="#0e4d6e" fill="#0e4d6e" fillOpacity={0.2} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* وضعیت معابر */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">وضعیت معابر اصلی</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'بزرگراه شمال', status: 'سنگین', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' },
            { name: 'بزرگراه شرق', status: 'نرمال', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
            { name: 'خیابان ولیعصر', status: 'نیمه‌سنگین', color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-900/20' },
            { name: 'بلوار امام', status: 'نرمال', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
            { name: 'خیابان فردوسی', status: 'سنگین', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' },
            { name: 'اتوبان شهید کلانتری', status: 'نرمال', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
          ].map((road, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-lg ${road.bg}`}>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-road text-slate-500"></i>
                <span className="font-medium text-slate-700 dark:text-slate-200">{road.name}</span>
              </div>
              <span className={`font-bold text-sm ${road.color}`}>{road.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trafficData } from '../data/mockData';

export default function Traffic() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'سنگین': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'نیمه‌سنگین': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'روان': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'سنگین': return 'bg-red-500';
      case 'نیمه‌سنگین': return 'bg-amber-500';
      case 'روان': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-car ml-2 text-primary"></i>
        مدیریت ترافیک
      </h2>

      {/* شاخص‌های کلیدی */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-gauge-high text-blue-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.avgSpeed}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میانگین سرعت (کم/س)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-car-burst text-red-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.accidents}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تصادفات (امروز)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-microchip text-green-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.smartPercent}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">هوشمندسازی</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-video text-purple-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.totalCameras}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">کل دوربین‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-circle-check text-emerald-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.activeCameras}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">دوربین فعال</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-traffic-light text-amber-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{trafficData.congestionIndex}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">شاخص ازدحام</p>
        </div>
      </div>

      {/* نمودار حجم ترافیک */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-area ml-2 text-primary"></i>
          حجم ترافیک ۲۴ ساعته
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={trafficData.hourly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="hour" tick={{ fontSize: 10 }} interval={2} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${Math.round(value)} خودرو`, 'حجم']} />
            <Area type="monotone" dataKey="volume" stroke="#3b82f6" fill="url(#trafficGradient)" strokeWidth={2} />
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* نقاط داغ ترافیکی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-location-dot ml-2 text-primary"></i>
          نقاط داغ ترافیکی
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {trafficData.hotspots.map(hotspot => (
            <div key={hotspot.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getStatusDot(hotspot.status)}`}></div>
                <div>
                  <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{hotspot.location}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">سرعت: {hotspot.speed} کم/س | تأخیر: {hotspot.delay} دقیقه</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(hotspot.status)}`}>{hotspot.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* جدول معابر */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-road ml-2 text-primary"></i>
          وضعیت معابر اصلی
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">معبر</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">سرعت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تأخیر</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نمودار</th>
              </tr>
            </thead>
            <tbody>
              {trafficData.hotspots.map(h => (
                <tr key={h.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{h.location}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(h.status)}`}>{h.status}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{h.speed} کم/س</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{h.delay} دقیقه</td>
                  <td className="py-3 px-4">
                    <div className="w-20 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div className={`h-2 rounded-full ${h.status === 'سنگین' ? 'bg-red-500' : h.status === 'نیمه‌سنگین' ? 'bg-amber-500' : 'bg-green-500'}`} style={{ width: `${Math.min(100, (h.speed / 80) * 100)}%` }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { wasteData } from '../data/mockData';

export default function Waste() {
  const chartData = wasteData.daily.map(d => ({
    region: d.region,
    collected: d.amount,
    recycled: d.recycled,
    organic: d.organic,
    industrial: d.industrial,
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تکمیل‌شده': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در حال انجام': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-trash ml-2 text-primary"></i>
        مدیریت زباله و پسماند
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-truck text-slate-600"></i>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{wasteData.totalDaily}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تن جمع‌آوری روزانه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-recycle text-green-600"></i>
          </div>
          <p className="text-2xl font-bold text-green-600">{wasteData.totalRecycled}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تن بازیافت روزانه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-chart-pie text-blue-600"></i>
          </div>
          <p className="text-2xl font-bold text-blue-600">{wasteData.recycleRate}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">نرخ بازیافت</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-2">
            <i className="fa-solid fa-truck-front text-amber-600"></i>
          </div>
          <p className="text-2xl font-bold text-amber-600">{wasteData.vehicles}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">خودرو فعال</p>
        </div>
      </div>

      {/* نمودار */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
          جمع‌آوری زباله به تفکیک مناطق (تن)
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="collected" name="جمع‌آوری" fill="#64748b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="recycled" name="بازیافت" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="organic" name="آلی" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* جدول مناطق */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">آمار مناطق</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">کل (تن)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">بازیافت (تن)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">آلی (تن)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">صنعتی (تن)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نرخ بازیافت</th>
              </tr>
            </thead>
            <tbody>
              {wasteData.daily.map((d, idx) => (
                <tr key={idx} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{d.region}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{d.amount}</td>
                  <td className="py-3 px-4 text-green-600 font-medium">{d.recycled}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{d.organic}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{d.industrial}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2 min-w-[60px]">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(d.recycled / d.amount) * 100}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-green-600">{Math.round((d.recycled / d.amount) * 100)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* برنامه‌ریزی مسیرها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-clock ml-2 text-primary"></i>
          برنامه‌ریزی مسیرهای حمل زباله
        </h3>
        <div className="space-y-3">
          {wasteData.schedule.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <i className="fa-solid fa-clock text-primary"></i>
                </div>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{s.time}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{s.route}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600 dark:text-slate-400">{s.vehicle}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(s.status)}`}>{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

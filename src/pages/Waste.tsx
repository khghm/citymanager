import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { wasteData } from '../data/mockData';

export default function Waste() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-trash ml-2 text-primary"></i>
        مدیریت زباله و پسماند
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-primary">{wasteData.daily.reduce((s, d) => s + d.amount, 0)}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">تن در روز</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{wasteData.daily.reduce((s, d) => s + d.recycled, 0)}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">تن بازیافت</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">۲۲</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">دستگاه فعال</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-blue-600">۱۸٪</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">نرخ بازیافت</p>
        </div>
      </div>

      {/* نمودار جمع‌آوری به تفکیک مناطق */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">جمع‌آوری زباله به تفکیک مناطق (تن)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={wasteData.daily}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="amount" name="جمع‌آوری" fill="#0e4d6e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="recycled" name="بازیافت" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* برنامه‌ریزی مسیرها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-route ml-2 text-primary"></i>
          برنامه‌ریزی مسیرهای حمل زباله
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">زمان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">مسیر</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">تعداد خودرو</th>
              </tr>
            </thead>
            <tbody>
              {wasteData.schedule.map((s, idx) => (
                <tr key={idx} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">
                    <i className="fa-solid fa-clock ml-1 text-primary"></i>{s.time}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{s.route}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{s.vehicle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

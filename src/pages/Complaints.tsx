import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { complaints } from '../data/mockData';

export default function Complaints() {
  const [filterStatus, setFilterStatus] = useState('همه');
  const [filterPriority, setFilterPriority] = useState('همه');

  const filtered = complaints.filter(c => {
    if (filterStatus !== 'همه' && c.status !== filterStatus) return false;
    if (filterPriority !== 'همه' && c.priority !== filterPriority) return false;
    return true;
  });

  // آمار به تفکیک منطقه
  const regionStats = [...new Set(complaints.map(c => c.region))].map(region => ({
    region,
    count: complaints.filter(c => c.region === region).length,
  }));

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بالا': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'متوسط': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'پایین': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'در حال بررسی': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'حل‌شده': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-comment-dots ml-2 text-primary"></i>
        مدیریت شکایات شهروندان
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-2xl font-bold text-primary">{complaints.length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">کل شکایات</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-2xl font-bold text-amber-600">{complaints.filter(c => c.status === 'در انتظار').length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">در انتظار</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-2xl font-bold text-blue-600">{complaints.filter(c => c.status === 'در حال بررسی').length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">در حال بررسی</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-2xl font-bold text-green-600">{complaints.filter(c => c.status === 'حل‌شده').length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">حل‌شده</p>
        </div>
      </div>

      {/* نمودار شکایات به تفکیک منطقه */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">شکایات به تفکیک منطقه</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={regionStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${value} شکایت`]} />
            <Bar dataKey="count" fill="#0e4d6e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* فیلترها */}
      <div className="flex flex-wrap gap-3">
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          <option value="همه">همه وضعیت‌ها</option>
          <option value="در انتظار">در انتظار</option>
          <option value="در حال بررسی">در حال بررسی</option>
          <option value="حل‌شده">حل‌شده</option>
        </select>
        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          <option value="همه">همه اولویت‌ها</option>
          <option value="بالا">بالا</option>
          <option value="متوسط">متوسط</option>
          <option value="پایین">پایین</option>
        </select>
      </div>

      {/* جدول شکایات */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">#</th>
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">عنوان</th>
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">منطقه</th>
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">اولویت</th>
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">وضعیت</th>
                <th className="text-right py-3 px-3 text-slate-600 dark:text-slate-400">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 20).map((c, idx) => (
                <tr key={c.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-3 text-slate-700 dark:text-slate-200 font-medium">{c.title}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-400">{c.region}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(c.priority)}`}>{c.priority}</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(c.status)}`}>{c.status}</span>
                  </td>
                  <td className="py-3 px-3 text-slate-500 dark:text-slate-400">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length > 20 && (
          <p className="text-center text-sm text-slate-500 mt-4">نمایش ۲۰ مورد از {filtered.length} شکایت</p>
        )}
      </div>
    </div>
  );
}

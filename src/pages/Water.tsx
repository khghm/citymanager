import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { waterData } from '../data/mockData';

export default function Water() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-droplet ml-2 text-primary"></i>
        آب و فاضلاب
      </h2>

      {/* وضعیت شبکه */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-primary">{waterData.networkStatus.total}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">کیلومتر شبکه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{waterData.networkStatus.repaired}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">سالم</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{waterData.networkStatus.pending}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">در انتظار تعمیر</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-red-600">{waterData.networkStatus.critical}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">بحرانی</p>
        </div>
      </div>

      {/* نمودار مصرف آب */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
          مصرف آب مناطق (هزار متر مکعب)
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={waterData.consumption}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${value} هزار m³`, 'مصرف']} />
            <Bar dataKey="consumption" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* پروژه‌های تعمیراتی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-wrench ml-2 text-primary"></i>
          پروژه‌های تعمیراتی شبکه
        </h3>
        <div className="space-y-4">
          {waterData.repairProjects.map(project => (
            <div key={project.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{project.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{project.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { waterData } from '../data/mockData';

export default function Water() {
  const chartData = waterData.consumption.map(c => ({
    region: c.region,
    consumption: c.consumption,
    target: c.target,
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در حال اجرا': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'برنامه‌ریزی': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'فوری': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const healthPercent = Math.round((waterData.networkStatus.repaired / waterData.networkStatus.total) * 100);

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-droplet ml-2 text-primary"></i>
        آب و فاضلاب
      </h2>

      {/* شاخص‌ها */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-primary">{waterData.networkStatus.total}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">کیلومتر شبکه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{healthPercent}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">سلامت شبکه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-blue-600">{waterData.dailyConsumption.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">مصرف روزانه (m³)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-cyan-600">{waterData.avgPressure}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">فشار (بار)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{waterData.networkStatus.pending}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">در انتظار تعمیر</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-red-600">{waterData.networkStatus.critical}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">بحرانی</p>
        </div>
      </div>

      {/* نمودار مصرف */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
          مصرف آب مناطق (هزار متر مکعب)
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${value} هزار m³`]} />
            <Bar dataKey="consumption" name="مصرف" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            <ReferenceLine y={2500} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'هدف', position: 'right', fill: '#ef4444' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* وضعیت شبکه */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">وضعیت سلامت شبکه</h3>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-green-600">سالم: {waterData.networkStatus.repaired} کیلومتر</span>
              <span className="text-amber-600">در انتظار: {waterData.networkStatus.pending}</span>
              <span className="text-red-600">بحرانی: {waterData.networkStatus.critical}</span>
            </div>
            <div className="flex h-4 rounded-full overflow-hidden">
              <div className="bg-green-500" style={{ width: `${(waterData.networkStatus.repaired / waterData.networkStatus.total) * 100}%` }}></div>
              <div className="bg-amber-500" style={{ width: `${(waterData.networkStatus.pending / waterData.networkStatus.total) * 100}%` }}></div>
              <div className="bg-red-500" style={{ width: `${(waterData.networkStatus.critical / waterData.networkStatus.total) * 100}%` }}></div>
            </div>
          </div>
          <div className="text-3xl font-bold text-primary">{healthPercent}%</div>
        </div>
      </div>

      {/* پروژه‌های تعمیراتی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-wrench ml-2 text-primary"></i>
          پروژه‌های تعمیراتی
        </h3>
        <div className="space-y-3">
          {waterData.repairProjects.map(project => (
            <div key={project.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{project.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{project.region} | بودجه: {project.budget} میلیارد</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>{project.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full transition-all ${project.status === 'فوری' ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${project.progress}%` }}></div>
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

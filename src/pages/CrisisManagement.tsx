import { crisisManagement } from '../data/advancedData';

export default function CrisisManagement() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'بحرانی': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-500';
      case 'خطر': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-500';
      case 'هشدار': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-500';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-triangle-exclamation ml-2 text-red-500"></i>
          مدیریت بحران هوشمند
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs text-red-700 dark:text-red-400 font-medium">
            {crisisManagement.currentAlerts.length} هشدار فعال
          </span>
        </div>
      </div>

      {/* هشدارهای فعال */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {crisisManagement.currentAlerts.map(alert => (
          <div key={alert.id} className={`p-5 rounded-xl border-2 ${getSeverityColor(alert.severity)} bg-white dark:bg-slate-800`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <i className={`fa-solid ${
                  alert.type === 'زلزله' ? 'fa-house-crack' :
                  alert.type === 'سیلاب' ? 'fa-water' :
                  'fa-fire'
                } text-2xl`}></i>
                <h3 className="font-bold text-lg">{alert.type}</h3>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${getSeverityColor(alert.severity)}`}>
                {alert.severity}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-slate-500"></i>
                <span>{alert.location}</span>
              </div>
              {alert.magnitude && (
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-wave-square text-slate-500"></i>
                  <span>شدت: {alert.magnitude} ریشتر</span>
                </div>
              )}
              {alert.rainfall && (
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-cloud-rain text-slate-500"></i>
                  <span>بارش: {alert.rainfall} میلی‌متر</span>
                </div>
              )}
              {alert.area && (
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-ruler-combined text-slate-500"></i>
                  <span>مساحت: {alert.area}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-slate-500"></i>
                <span>{alert.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-slate-500"></i>
                <span>{alert.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* منابع موجود */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-truck-medical ml-2 text-primary"></i>
          منابع امدادی
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {crisisManagement.resources.map(resource => (
            <div key={resource.type} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-center">
              <p className="font-medium text-sm text-slate-700 dark:text-slate-200 mb-2">{resource.type}</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">فعال:</span>
                  <span className="font-bold text-green-600">{resource.available}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">اعزامی:</span>
                  <span className="font-bold text-amber-600">{resource.deployed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">کل:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{resource.total}</span>
                </div>
              </div>
              <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(resource.available / resource.total) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مسیرهای تخلیه */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-route ml-2 text-primary"></i>
          مسیرهای تخلیه اضطراری
        </h3>
        <div className="space-y-3">
          {crisisManagement.evacuationRoutes.map(route => (
            <div key={route.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{route.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  route.status === 'باز' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>{route.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 dark:text-slate-400">ظرفیت: {route.capacity.toLocaleString('fa-IR')} نفر</span>
                    <span className="text-slate-500 dark:text-slate-400">فعلی: {route.current.toLocaleString('fa-IR')} نفر</span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      (route.current / route.capacity) > 0.8 ? 'bg-red-500' :
                      (route.current / route.capacity) > 0.5 ? 'bg-amber-500' :
                      'bg-green-500'
                    }`} style={{ width: `${(route.current / route.capacity) * 100}%` }}></div>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {Math.round((route.current / route.capacity) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* شبیه‌سازی‌های بحران */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-flask ml-2 text-primary"></i>
          شبیه‌سازی‌های بحران
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">سناریو</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تاریخ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تلفات احتمالی</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">خسارت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {crisisManagement.simulations.map(sim => (
                <tr key={sim.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{sim.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{sim.date}</td>
                  <td className="py-3 px-4 text-red-600 font-bold">{sim.casualties} نفر</td>
                  <td className="py-3 px-4 text-amber-600 font-bold">{sim.damage} تومان</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{sim.status}</span>
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

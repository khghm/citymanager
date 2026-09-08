import { smartTransport } from '../data/advancedData';

export default function SmartTransport() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-bus ml-2 text-primary"></i>
        حمل‌ونقل هوشمند
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-bus text-3xl text-blue-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{smartTransport.publicTransit.buses.active.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">اتوبوس فعال</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">{smartTransport.publicTransit.buses.electric} برقی</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-train-subway text-3xl text-purple-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{smartTransport.publicTransit.metro.lines}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">خط مترو</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">{smartTransport.publicTransit.metro.stations} ایستگاه</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-taxi text-3xl text-amber-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{smartTransport.publicTransit.taxis.online.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تاکسی آنلاین</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">از {smartTransport.publicTransit.taxis.total.toLocaleString('fa-IR')}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-bicycle text-3xl text-green-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{smartTransport.publicTransit.bikes.active.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">دوچرخه فعال</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{smartTransport.publicTransit.bikes.stations} ایستگاه</p>
        </div>
      </div>

      {/* وضعیت پارکینگ */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-square-parking ml-2 text-primary"></i>
          وضعیت پارکینگ‌های هوشمند
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-800 dark:text-white">{smartTransport.parking.totalSpaces.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کل فضاهای پارک</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">{smartTransport.parking.occupied.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">اشغال شده</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">{smartTransport.parking.available.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">خالی</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{smartTransport.parking.smartParking.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">پارکینگ هوشمند</p>
          </div>
        </div>
        <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 rounded-full" style={{ width: `${(smartTransport.parking.occupied / smartTransport.parking.totalSpaces) * 100}%` }}></div>
        </div>
        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
          {Math.round((smartTransport.parking.occupied / smartTransport.parking.totalSpaces) * 100)}% ظرفیت تکمیل
        </p>
      </div>

      {/* خطوط حمل‌ونقل */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-list-check ml-2 text-primary"></i>
          خطوط حمل‌ونقل عمومی
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">خط</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مسافران روزانه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وقت‌شناسی</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">رضایت</th>
              </tr>
            </thead>
            <tbody>
              {smartTransport.routes.map(route => (
                <tr key={route.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{route.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{route.passengers.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${route.onTime}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-green-600">{route.onTime}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-star text-amber-400 text-xs"></i>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{route.satisfaction}</span>
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

import { serviceRequests } from '../data/mockData';

export default function Services() {
  const regions = ['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۵', 'منطقه ۶'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'انجام‌شده': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در حال انجام': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-city ml-2 text-primary"></i>
        خدمات شهری
      </h2>

      {/* نقشه ساده مناطق */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-map-marked-alt ml-2 text-primary"></i>
          مناطق خدمات‌رسانی
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {regions.map((region, idx) => {
            const requestCount = serviceRequests.filter(r => r.region === region).length;
            const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-amber-500', 'bg-rose-500', 'bg-cyan-500'];
            return (
              <div key={region} className={`relative p-6 rounded-xl ${colors[idx]} bg-opacity-10 dark:bg-opacity-20 border-2 border-dashed border-current opacity-80 hover:opacity-100 transition-opacity`}
                style={{ borderColor: 'currentColor' }}>
                <div className="absolute top-2 right-2">
                  <i className="fa-solid fa-map-pin text-slate-400"></i>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white">{region}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{requestCount} درخواست فعال</p>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= requestCount ? colors[idx] : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* لیست درخواست‌های خدمات */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">درخواست‌های خدمات</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.map(req => (
                <tr key={req.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{req.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {req.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{req.region}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(req.status)}`}>{req.status}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{req.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* آمار خدمات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-broom text-2xl text-blue-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۱۲۵</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">نظافت معابر (روزانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-road text-2xl text-amber-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۴۵</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">ترمیم آسفالت (ماهانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-lightbulb text-2xl text-yellow-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۳۲۰</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تعویض لامپ (ماهانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-tree text-2xl text-green-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۸۰</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">نهال‌کاری (ماهانه)</p>
        </div>
      </div>
    </div>
  );
}

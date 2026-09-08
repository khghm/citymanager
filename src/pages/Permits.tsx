import { permits } from '../data/mockData';

export default function Permits() {
  const approved = permits.filter(p => p.status === 'تایید').length;
  const pending = permits.filter(p => p.status === 'در انتظار').length;
  const rejected = permits.filter(p => p.status === 'رد').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تایید': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'رد': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-file-signature ml-2 text-primary"></i>
        مجوزهای ساختمانی
      </h2>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-primary">{permits.length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">کل درخواست‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{approved}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">تایید شده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{pending}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">در انتظار</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-red-600">{rejected}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">رد شده</p>
        </div>
      </div>

      {/* جدول مجوزها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">لیست درخواست‌های مجوز</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">#</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">درخواست‌کننده</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {permits.map((p, idx) => (
                <tr key={p.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{p.title}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.applicant}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.region}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(p.status)}`}>{p.status}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* نمودار وضعیت */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">نمودار وضعیت مجوزها</h3>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-green-600">{approved}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">تایید</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-amber-600">{pending}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">در انتظار</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-red-600">{rejected}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">رد شده</p>
          </div>
        </div>
      </div>
    </div>
  );
}

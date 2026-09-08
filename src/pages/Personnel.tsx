import { personnel } from '../data/mockData';

export default function Personnel() {
  const maleCount = personnel.filter(p => p.gender === 'مرد').length;
  const femaleCount = personnel.filter(p => p.gender === 'زن').length;
  const presentCount = personnel.filter(p => p.status === 'حاضر').length;
  const leaveCount = personnel.filter(p => p.status === 'مرخصی').length;
  const remoteCount = personnel.filter(p => p.status === 'دورکاری').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'حاضر': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'مرخصی': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'دورکاری': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-users ml-2 text-primary"></i>
        مدیریت پرسنل
      </h2>

      {/* آمار پرسنل */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-3xl font-bold text-primary">{personnel.length}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">کل پرسنل</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-3xl font-bold text-green-600">{presentCount}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">حاضر</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-3xl font-bold text-amber-600">{leaveCount}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">مرخصی</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-3xl font-bold text-blue-600">{maleCount}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">مرد</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <p className="text-3xl font-bold text-pink-600">{femaleCount}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">زن</p>
        </div>
      </div>

      {/* جدول پرسنل */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">#</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">نام</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">سمت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">بخش</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">جنسیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {personnel.map((p, idx) => (
                <tr key={p.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <i className="fa-solid fa-user text-primary text-xs"></i>
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-200">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.role}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.dept}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.gender}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(p.status)}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* نمودار تفکیک بخش‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">تفکیک بر اساس بخش</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...new Set(personnel.map(p => p.dept))].map(dept => (
            <div key={dept} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-primary">{personnel.filter(p => p.dept === dept).length}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{dept}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

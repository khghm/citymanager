import { blockchainData } from '../data/advancedData';

export default function Blockchain() {
  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-link ml-2 text-primary"></i>
          سیستم بلاکچین و شفافیت
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">شبکه فعال</span>
        </div>
      </div>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-code-branch text-2xl text-blue-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{blockchainData.transactions.length * 1250}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">کل تراکنش‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-file-contract text-2xl text-purple-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{blockchainData.smartContracts.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">قرارداد هوشمند</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-check-double text-2xl text-green-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">100%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">شفافیت</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-shield-halved text-2xl text-amber-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">256-bit</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">رمزنگاری</p>
        </div>
      </div>

      {/* تراکنش‌های اخیر */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-arrows-left-right ml-2 text-primary"></i>
          تراکنش‌های اخیر
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">شناسه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مبلغ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">از</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">به</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">زمان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {blockchainData.transactions.map(tx => (
                <tr key={tx.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4">
                    <code className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-blue-600 dark:text-blue-400">{tx.id}</code>
                  </td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{tx.type}</td>
                  <td className="py-3 px-4 font-bold text-slate-800 dark:text-white">{tx.amount.toLocaleString('fa-IR')} ﷼</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 text-xs">{tx.from}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 text-xs">{tx.to}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400 text-xs">{tx.timestamp}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <i className="fa-solid fa-check ml-1"></i>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* قراردادهای هوشمند */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-file-contract ml-2 text-primary"></i>
          قراردادهای هوشمند
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blockchainData.smartContracts.map(contract => (
            <div key={contract.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm text-slate-700 dark:text-slate-200">{contract.name}</h4>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  contract.status === 'فعال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-slate-200 text-slate-600 dark:bg-slate-600 dark:text-slate-300'
                }`}>{contract.status}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">ارزش:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{(contract.value / 1000000000).toLocaleString('fa-IR')} میلیارد</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">طرفین:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{contract.parties} طرف</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">پیشرفت:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{contract.completion}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${contract.completion}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* رأی‌گیری */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-check-to-slot ml-2 text-primary"></i>
          رأی‌گیری شهروندی
        </h3>
        <div className="space-y-4">
          {blockchainData.voting.map(vote => (
            <div key={vote.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{vote.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  vote.status === 'فعال' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                }`}>{vote.status}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400 w-12">مخالف</span>
                  <div className="flex-1 h-6 bg-red-100 dark:bg-red-900/20 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(vote.no / vote.total) * 100}%` }}>
                      {vote.no.toLocaleString('fa-IR')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400 w-12">موافق</span>
                  <div className="flex-1 h-6 bg-green-100 dark:bg-green-900/20 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(vote.yes / vote.total) * 100}%` }}>
                      {vote.yes.toLocaleString('fa-IR')}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>کل آرا: {vote.total.toLocaleString('fa-IR')}</span>
                  <span>پایان: {vote.endDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

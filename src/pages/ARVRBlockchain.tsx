import { arVrFeatures, blockchainAdvanced } from '../data/innovativeFeatures';

export default function ARVRBlockchain() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-vr-cardboard ml-2 text-primary"></i>
        واقعیت افزوده/مجازی و بلاکچین
      </h2>

      {/* بخش AR/VR */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-cube ml-2 text-purple-600"></i>
          واقعیت افزوده و مجازی
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{arVrFeatures.arProjects.length}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">پروژه AR</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{arVrFeatures.vrTours.length}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">تور VR</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{arVrFeatures.holographicMeetings}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">جلسه هولوگرافیک</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">{arVrFeatures.crisisSimulations}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">شبیه‌سازی بحران</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پروژه‌های AR</h4>
            <div className="space-y-2">
              {arVrFeatures.arProjects.map(project => (
                <div key={project.id} className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{project.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{project.location}</p>
                  </div>
                  <span className="text-xs text-primary font-bold">{project.views.toLocaleString('fa-IR')} بازدید</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">بازی‌سازی شهری</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">کاربران فعال:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{arVrFeatures.gamification.activeUsers.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">کل امتیازات:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{arVrFeatures.gamification.totalPoints.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">بازیکنان برتر:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{arVrFeatures.gamification.topPlayers}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش بلاکچین */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-link ml-2 text-emerald-600"></i>
          بلاکچین و شفافیت
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-emerald-600">{(blockchainAdvanced.tokens.totalIssued / 1000000).toFixed(1)}M</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">توکن صادرشده</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{(blockchainAdvanced.landRegistry.totalRecords / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">سند ثبت‌شده</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{blockchainAdvanced.voting.participation}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">مشارکت رأی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">{blockchainAdvanced.supplyChain.qualityScore}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">امتیاز کیفیت</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-600">{blockchainAdvanced.smartContracts.active}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">قرارداد فعال</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">رأی‌گیری شهروندی</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">نظرسنجی‌های فعال:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{blockchainAdvanced.voting.activePolls}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">کل آرا:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{blockchainAdvanced.voting.totalVotes.toLocaleString('fa-IR')}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">زنجیره تأمین</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">اقلام ردیابی‌شده:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{blockchainAdvanced.supplyChain.trackedItems.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">تأمین‌کنندگان تأییدشده:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{blockchainAdvanced.supplyChain.verifiedSuppliers}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

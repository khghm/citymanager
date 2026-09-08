import { healthSystems } from '../data/innovativeFeatures';

export default function HealthSystems() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-heart-pulse ml-2 text-red-500"></i>
        سیستم‌های سلامت شهری
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* پیش‌بینی شیوع بیماری */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-virus ml-2 text-red-500"></i>
            پیش‌بینی شیوع بیماری
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{healthSystems.diseasePrediction.monitoredDiseases}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">بیماری پایش‌شده</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">{healthSystems.diseasePrediction.alerts}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">هشدار فعال</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{healthSystems.diseasePrediction.accuracy}%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">دقت پیش‌بینی</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-200">
              <i className="fa-solid fa-triangle-exclamation ml-2 text-red-500"></i>
              هشدارهای فعال
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                <span className="text-sm text-slate-700 dark:text-slate-200">آنفولانزا فصلی</span>
                <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">هشدار</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                <span className="text-sm text-slate-700 dark:text-slate-200">آلودگی هوا</span>
                <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">بحرانی</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                <span className="text-sm text-slate-700 dark:text-slate-200">بیماری‌های گوارشی</span>
                <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">هشدار</span>
              </div>
            </div>
          </div>
        </div>

        {/* سلامت روان */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-brain ml-2 text-purple-500"></i>
            سلامت روان شهروندان
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-600">{(healthSystems.mentalHealth.activeUsers / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">کاربر فعال</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{(healthSystems.mentalHealth.sessions / 1000).toFixed(1)}K</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">جلسه مشاوره</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{healthSystems.mentalHealth.satisfaction}%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">رضایت‌مندی</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">
              <i className="fa-solid fa-chart-line ml-2 text-purple-500"></i>
              خدمات ارائه‌شده
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">مشاوره آنلاین</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">گروه‌های حمایتی</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">تمرینات ذهن‌آگاهی</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">68%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-green-600"></i>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">خط بحران ۲۴ ساعته</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">021-12345678</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* آمار کلی سلامت */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-hospital ml-2 text-primary"></i>
          شاخص‌های سلامت شهری
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-heart text-3xl text-red-500 mb-2"></i>
            <p className="text-xl font-bold text-slate-800 dark:text-white">85%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">سلامت عمومی</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-hospital text-3xl text-blue-500 mb-2"></i>
            <p className="text-xl font-bold text-slate-800 dark:text-white">45</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">مرکز بهداشتی</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-user-doctor text-3xl text-green-500 mb-2"></i>
            <p className="text-xl font-bold text-slate-800 dark:text-white">1,250</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">پزشک فعال</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <i className="fa-solid fa-bed text-3xl text-amber-500 mb-2"></i>
            <p className="text-xl font-bold text-slate-800 dark:text-white">8,500</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">تخت بیمارستانی</p>
          </div>
        </div>
      </div>
    </div>
  );
}

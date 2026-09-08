import { advancedAnalytics, citizenApp } from '../data/innovativeFeatures';

export default function AnalyticsCitizen() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-chart-line ml-2 text-primary"></i>
        تحلیل داده پیشرفته و اپلیکیشن شهروندی
      </h2>

      {/* بخش تحلیل داده */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-blue-600"></i>
          تحلیل داده پیشرفته
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{advancedAnalytics.personalizedDashboards}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">داشبورد شخصی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{advancedAnalytics.dataStories}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">داستان داده</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{advancedAnalytics.budgetForecasts.confidence}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">اطمینان پیش‌بینی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">#{advancedAnalytics.benchmarking.rank}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">رتبه شهری</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-600">{advancedAnalytics.autoReports.generated}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش خودکار</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پیش‌بینی بودجه</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">سه‌ماهه فعلی:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{advancedAnalytics.budgetForecasts.currentQuarter} میلیارد</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">پیش‌بینی:</span>
                <span className="font-bold text-primary">{advancedAnalytics.budgetForecasts.predicted} میلیارد</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">اطمینان:</span>
                <span className="font-bold text-green-600">{advancedAnalytics.budgetForecasts.confidence}%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">بنچمارکینگ</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">شهرهای مقایسه‌شده:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{advancedAnalytics.benchmarking.comparedCities}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">رتبه ما:</span>
                <span className="font-bold text-primary">#{advancedAnalytics.benchmarking.rank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">بهبود نسبت به سال قبل:</span>
                <span className="font-bold text-green-600">+{advancedAnalytics.benchmarking.improvement}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش اپلیکیشن شهروندی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-mobile-screen ml-2 text-green-600"></i>
          اپلیکیشن شهروندی
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{(citizenApp.rewards.totalUsers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کاربر پاداش</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{(citizenApp.arCitizen.activeUsers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کاربر AR</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{(citizenApp.videoComplaints.total / 1000).toFixed(1)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">شکایت ویدئویی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">{citizenApp.localMarket.activeVendors.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">فروشنده محلی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-600">{citizenApp.carSharing.activeCars}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">خودرو اشتراکی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-cyan-600">{(citizenApp.healthApp.activeUsers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کاربر سلامت</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">سیستم پاداش</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">امتیاز توزیع‌شده:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{(citizenApp.rewards.pointsDistributed / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">امتیاز مصرف‌شده:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{(citizenApp.rewards.redeemed / 1000000).toFixed(1)}M</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">بازار محلی</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">تراکنش روزانه:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{citizenApp.localMarket.dailyTransactions.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">درآمد (میلیون):</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{citizenApp.localMarket.revenue}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">اشتراک خودرو</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">سفر روزانه:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{citizenApp.carSharing.dailyTrips.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">کاهش CO2 (kg):</span>
                <span className="font-bold text-green-600">{citizenApp.carSharing.co2Saved.toLocaleString('fa-IR')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { smartTransportAdvanced, greenInitiatives } from '../data/innovativeFeatures';

export default function TransportGreen() {
  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-bus ml-2 text-primary"></i>
        حمل‌ونقل هوشمند و محیط زیست
      </h2>

      {/* بخش حمل‌ونقل */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-bicycle ml-2 text-blue-600"></i>
          حمل‌ونقل هوشمند
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{smartTransportAdvanced.bikeRoutes.totalLength}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کیلومتر مسیر دوچرخه</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{(smartTransportAdvanced.sharedParking.totalSpaces / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">پارکینگ اشتراکی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{(smartTransportAdvanced.integratedPayment.totalCards / 1000).toFixed(0)}K</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">کارت یکپارچه</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">{smartTransportAdvanced.droneDelivery.activeDrones}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">پهپاد فعال</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-600">{smartTransportAdvanced.autonomousTaxis.totalFleet}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">تاکسی خودران</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">مسیرهای دوچرخه</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">کاربران روزانه:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{smartTransportAdvanced.bikeRoutes.dailyUsers.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">مسیرهای امن:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{smartTransportAdvanced.bikeRoutes.safeRoutes}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پهپاد تحویل</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">تحویل روزانه:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{smartTransportAdvanced.droneDelivery.dailyDeliveries}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">میانگین زمان:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{smartTransportAdvanced.droneDelivery.avgTime}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">تاکسی خودران</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">سفر روزانه:</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{smartTransportAdvanced.autonomousTaxis.dailyTrips}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">رکورد ایمنی:</span>
                <span className="font-bold text-green-600">{smartTransportAdvanced.autonomousTaxis.safetyRecord}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش محیط زیست */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-leaf ml-2 text-green-600"></i>
          ابتکارات سبز و محیط زیست
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{greenInitiatives.smartWaste.sortedPercentage}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">تفکیک زباله</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{greenInitiatives.microgrids.totalGrids}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">ریزشبکه برق</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-cyan-600">{greenInitiatives.rainwater.collectionPoints}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">نقطه جمع‌آوری آب</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600">{greenInitiatives.verticalFarming.totalFarms}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">مزرعه عمودی</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{greenInitiatives.lightPollution.monitoredAreas}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">منطقه پایش نور</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">مدیریت هوشمند پسماند</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">بازیافت روزانه (تن):</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{greenInitiatives.smartWaste.recycledTons}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">درآمد (میلیون):</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{greenInitiatives.smartWaste.revenue}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">کشاورزی عمودی</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">تولید روزانه (kg):</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{greenInitiatives.verticalFarming.dailyProduction.toLocaleString('fa-IR')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">صرفه‌جویی آب:</span>
                <span className="font-bold text-green-600">{greenInitiatives.verticalFarming.waterSaved}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

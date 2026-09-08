import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { trafficPredictions } from '../data/advancedData';

export default function TrafficPrediction() {
  const [selectedRoute, setSelectedRoute] = useState(0);

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-brain ml-2 text-primary"></i>
          پیش‌بینی هوشمند ترافیک
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-green-700 dark:text-green-400 font-medium">AI فعال</span>
        </div>
      </div>

      {/* شاخص‌های کلیدی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">ازدحام فعلی</span>
            <i className="fa-solid fa-gauge text-amber-500"></i>
          </div>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">{trafficPredictions.currentCongestion}%</p>
          <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${trafficPredictions.currentCongestion}%` }}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">پیش‌بینی ۳ ساعته</span>
            <i className="fa-solid fa-chart-line text-blue-500"></i>
          </div>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">{trafficPredictions.predictedCongestion}%</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
            <i className="fa-solid fa-arrow-up ml-1"></i>
            +{trafficPredictions.predictedCongestion - trafficPredictions.currentCongestion}% افزایش
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">ساعات اوج</span>
            <i className="fa-solid fa-clock text-red-500"></i>
          </div>
          <p className="text-sm font-bold text-slate-800 dark:text-white">{trafficPredictions.peakHours[0]}</p>
          <p className="text-sm font-bold text-slate-800 dark:text-white mt-1">{trafficPredictions.peakHours[1]}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">تصادفات پیش‌بینی</span>
            <i className="fa-solid fa-car-burst text-red-500"></i>
          </div>
          <p className="text-3xl font-bold text-red-600">{trafficPredictions.predictedAccidents}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">در ۲۴ ساعت آینده</p>
        </div>
      </div>

      {/* نمودار پیش‌بینی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-area ml-2 text-primary"></i>
          مقایسه واقعی و پیش‌بینی (۲۴ ساعته)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficPredictions.hourlyPrediction}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="hour" tick={{ fontSize: 10 }} interval={2} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="actual" name="واقعی" stroke="#3b82f6" fill="url(#actualGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="predicted" name="پیش‌بینی" stroke="#f59e0b" fill="url(#predictedGradient)" strokeWidth={2} strokeDasharray="5 5" />
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* مسیرهای پیشنهادی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-route ml-2 text-primary"></i>
          مسیرهای پیشنهادی هوشمند
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trafficPredictions.recommendedRoutes.map((route, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRoute(idx)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedRoute === idx
                  ? 'border-primary bg-primary/5 dark:bg-primary/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="fa-solid fa-route text-primary text-xs"></i>
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">مسیر {idx + 1}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-red-500 text-xs"></i>
                  <span className="text-slate-700 dark:text-slate-200">{route.from}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-flag-checkered text-green-500 text-xs"></i>
                  <span className="text-slate-700 dark:text-slate-200">{route.to}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400">مسیر جایگزین:</p>
                  <p className="font-medium text-primary">{route.alternative}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    <i className="fa-solid fa-clock ml-1"></i>
                    صرفه‌جویی: {route.timeSaved}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* دقت مدل */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl p-5 border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">
              <i className="fa-solid fa-robot ml-2 text-primary"></i>
              دقت مدل هوش مصنوعی
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">میانگین دقت پیش‌بینی در ۳۰ روز گذشته</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">{Math.round(trafficPredictions.hourlyPrediction.reduce((sum, h) => sum + h.confidence, 0) / trafficPredictions.hourlyPrediction.length)}%</p>
            <p className="text-xs text-green-600 dark:text-green-400">
              <i className="fa-solid fa-arrow-up ml-1"></i>
              +۲.۳٪ نسبت به ماه قبل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { digitalTwin } from '../data/advancedData';

export default function DigitalTwin() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [activeSimulation, setActiveSimulation] = useState<number | null>(null);

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-cube ml-2 text-primary"></i>
          دیجیتال توین شهر
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <i className="fa-solid fa-vr-cardboard text-purple-600 dark:text-purple-400 text-xs"></i>
          <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">VR آماده</span>
        </div>
      </div>

      {/* آمار مدل شهر */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-building text-2xl text-blue-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">{digitalTwin.cityModel.totalBuildings.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">ساختمان</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-road text-2xl text-amber-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">{digitalTwin.cityModel.totalRoads.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">کیلومتر جاده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-tree text-2xl text-green-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">{digitalTwin.cityModel.totalParks.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">پارک</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-bridge text-2xl text-purple-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">{digitalTwin.cityModel.totalBridges.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">پل</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-users text-2xl text-pink-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">{(digitalTwin.cityModel.population / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">جمعیت</p>
        </div>
      </div>

      {/* شبیه‌ساز */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-flask ml-2 text-primary"></i>
          شبیه‌سازی‌های فعال
        </h3>
        <div className="space-y-3">
          {digitalTwin.simulations.map((sim, idx) => (
            <div
              key={sim.id}
              onClick={() => setActiveSimulation(activeSimulation === idx ? null : idx)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                activeSimulation === idx
                  ? 'border-primary bg-primary/5 dark:bg-primary/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{sim.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  sim.status === 'تکمیل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  sim.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{sim.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all ${
                    sim.status === 'تکمیل' ? 'bg-green-500' :
                    sim.status === 'در حال اجرا' ? 'bg-blue-500 animate-pulse' :
                    'bg-amber-500'
                  }`} style={{ width: `${sim.progress}%` }}></div>
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{sim.progress}%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">زمان: {sim.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* سناریوها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-line ml-2 text-primary"></i>
          تحلیل سناریوها
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {digitalTwin.scenarios.map((scenario, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedScenario(idx)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedScenario === idx
                  ? 'border-primary bg-primary/5 dark:bg-primary/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
              }`}
            >
              <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-3">{scenario.name}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">ترافیک:</span>
                  <span className={`font-bold ${scenario.impact.traffic.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                    {scenario.impact.traffic}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">آلودگی:</span>
                  <span className={`font-bold ${scenario.impact.pollution.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                    {scenario.impact.pollution}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">خدمات:</span>
                  <span className={`font-bold ${scenario.impact.services.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {scenario.impact.services}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* واقعیت مجازی */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
              <i className="fa-solid fa-vr-cardboard ml-2 text-purple-600"></i>
              اتاق فرمان VR
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">مدیریت شهر از طریق محیط واقعیت مجازی</p>
          </div>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2">
            <i className="fa-solid fa-play"></i>
            ورود به VR
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { iotSensorsAdvanced } from '../data/innovativeFeatures';

export default function AdvancedIoT() {
  const [activeTab, setActiveTab] = useState<'vibration' | 'soil' | 'pedestrian' | 'gas' | 'groundwater' | 'noise' | 'smoke' | 'waste'>('vibration');

  const tabs = [
    { id: 'vibration' as const, label: 'لرزش‌نگار', icon: 'fa-wave-square' },
    { id: 'soil' as const, label: 'کیفیت خاک', icon: 'fa-seedling' },
    { id: 'pedestrian' as const, label: 'شمارش عابر', icon: 'fa-person-walking' },
    { id: 'gas' as const, label: 'نشت گاز', icon: 'fa-smog' },
    { id: 'groundwater' as const, label: 'آب زیرزمینی', icon: 'fa-droplet' },
    { id: 'noise' as const, label: 'نویز محیطی', icon: 'fa-volume-high' },
    { id: 'smoke' as const, label: 'تشخیص دود', icon: 'fa-fire' },
    { id: 'waste' as const, label: 'وزن زباله', icon: 'fa-weight-hanging' },
  ];

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-microchip ml-2 text-primary"></i>
        سنسورهای IoT پیشرفته
      </h2>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <i className={`fa-solid ${tab.icon}`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'vibration' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.vibration.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.bridge}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      sensor.status === 'سالم' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>{sensor.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">فرکانس:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200 mr-2">{sensor.frequency} Hz</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">دامنه:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200 mr-2">{sensor.amplitude} mm</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'soil' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.soilQuality.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-3">{sensor.park}</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{sensor.moisture}%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">رطوبت</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{sensor.ph}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">pH</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-amber-600">{sensor.nutrients}%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">مواد مغذی</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pedestrian' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.pedestrianCount.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.location}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">ساعت اوج: {sensor.peak}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-primary">{sensor.count.toLocaleString('fa-IR')}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">نفر/روز</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gas' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.gasLeak.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.location}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">سطح گاز: {sensor.level} ppm</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      sensor.status === 'سالم' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{sensor.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'groundwater' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.groundwater.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-3">{sensor.well}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{sensor.level} m</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">سطح آب</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{sensor.quality}%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">کیفیت</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'noise' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.noise.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.location}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">سطح: {sensor.level} dB</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      sensor.status === 'نرمال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{sensor.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'smoke' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.smoke.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.location}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">آخرین بررسی: {sensor.lastCheck}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      !sensor.detected ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{sensor.detected ? 'دود شناسایی شد' : 'سالم'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'waste' && (
            <div className="space-y-3">
              {iotSensorsAdvanced.wasteWeight.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sensor.station}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">روند: {sensor.trend}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-primary">{sensor.weight.toLocaleString('fa-IR')}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">کیلوگرم</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

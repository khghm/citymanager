import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { iotSensors } from '../data/advancedData';

export default function IoTDashboard() {
  const [activeTab, setActiveTab] = useState<'air' | 'waste' | 'water' | 'lights'>('air');

  const tabs = [
    { id: 'air' as const, label: 'کیفیت هوا', icon: 'fa-wind', count: iotSensors.airQuality.length },
    { id: 'waste' as const, label: 'سنسور زباله', icon: 'fa-trash', count: iotSensors.wasteSensors.length },
    { id: 'water' as const, label: 'شبکه آب', icon: 'fa-droplet', count: iotSensors.waterSensors.length },
    { id: 'lights' as const, label: 'روشنایی هوشمند', icon: 'fa-lightbulb', count: iotSensors.smartLights.length },
  ];

  const getAqiColor = (aqi: number) => {
    if (aqi <= 50) return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
    if (aqi <= 100) return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
    return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
  };

  const getFillLevelColor = (level: number) => {
    if (level < 50) return 'bg-green-500';
    if (level < 75) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'سالم': case 'فعال': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'هشدار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'بحرانی': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // داده نمودار کیفیت هوا
  const airChartData = iotSensors.airQuality.map(s => ({
    location: s.location,
    AQI: s.aqi,
    'PM2.5': s.pm25,
    'PM10': s.pm10,
    'NO2': s.no2,
  }));

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-microchip ml-2 text-primary"></i>
          داشبورد اینترنت اشیا (IoT)
        </h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-600 dark:text-slate-400">
              {iotSensors.airQuality.length + iotSensors.wasteSensors.length + iotSensors.waterSensors.length + iotSensors.smartLights.length} سنسور فعال
            </span>
          </div>
        </div>
      </div>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-wind text-2xl text-blue-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{iotSensors.airQuality.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">سنسور هوا</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-trash text-2xl text-amber-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{iotSensors.wasteSensors.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">سنسور زباله</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-droplet text-2xl text-cyan-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{iotSensors.waterSensors.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">سنسور آب</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-lightbulb text-2xl text-yellow-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{iotSensors.smartLights.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">چراغ هوشمند</p>
        </div>
      </div>

      {/* تب‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <i className={`fa-solid ${tab.icon}`}></i>
              {tab.label}
              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        <div className="p-5">
          {/* کیفیت هوا */}
          {activeTab === 'air' && (
            <div className="space-y-4">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={airChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="location" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="AQI" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="PM2.5" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="PM10" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {iotSensors.airQuality.map(sensor => (
                  <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{sensor.location}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getAqiColor(sensor.aqi)}`}>
                        AQI: {sensor.aqi}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <p className="text-slate-500 dark:text-slate-400">PM2.5</p>
                        <p className="font-bold text-slate-700 dark:text-slate-200">{sensor.pm25}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-slate-500 dark:text-slate-400">PM10</p>
                        <p className="font-bold text-slate-700 dark:text-slate-200">{sensor.pm10}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-slate-500 dark:text-slate-400">NO2</p>
                        <p className="font-bold text-slate-700 dark:text-slate-200">{sensor.no2}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* سنسور زباله */}
          {activeTab === 'waste' && (
            <div className="space-y-3">
              {iotSensors.wasteSensors.map(sensor => (
                <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{sensor.location}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">آخرین جمع‌آوری: {sensor.lastCollected}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">{sensor.fillLevel}%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">پر شده</p>
                    </div>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${getFillLevelColor(sensor.fillLevel)}`} style={{ width: `${sensor.fillLevel}%` }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>دما: {sensor.temperature}°C</span>
                    {sensor.fillLevel > 80 && <span className="text-red-600 font-medium">نیاز به جمع‌آوری فوری</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* شبکه آب */}
          {activeTab === 'water' && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-700/50">
                  <tr>
                    <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">موقعیت</th>
                    <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">فشار (بار)</th>
                    <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">دبی (L/min)</th>
                    <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">کیفیت (%)</th>
                    <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                  </tr>
                </thead>
                <tbody>
                  {iotSensors.waterSensors.map(sensor => (
                    <tr key={sensor.id} className="border-b border-slate-100 dark:border-slate-700/50">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{sensor.location}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{sensor.pressure}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{sensor.flow}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${sensor.quality}%` }}></div>
                          </div>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{sensor.quality}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(sensor.status)}`}>{sensor.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* روشنایی هوشمند */}
          {activeTab === 'lights' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {iotSensors.smartLights.map(light => (
                <div key={light.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{light.location}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(light.status)}`}>{light.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">شدت روشنایی</p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">{light.brightness}%</p>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 dark:text-slate-400">صرفه‌جویی انرژی</p>
                      <p className="text-lg font-bold text-green-600">{light.energySaved}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${light.brightness}%` }}></div>
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

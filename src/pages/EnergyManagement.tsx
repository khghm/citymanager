import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { energyManagement } from '../data/advancedData';

export default function EnergyManagement() {
  const consumptionData = [
    { name: 'ساختمان‌ها', value: energyManagement.consumption.buildings, color: '#3b82f6' },
    { name: 'روشنایی معابر', value: energyManagement.consumption.streetLights, color: '#f59e0b' },
    { name: 'سیستم‌های ترافیکی', value: energyManagement.consumption.trafficSystems, color: '#ef4444' },
    { name: 'سیستم‌های آب', value: energyManagement.consumption.waterSystems, color: '#06b6d4' },
  ];

  const renewablePercent = Math.round((energyManagement.consumption.renewable / energyManagement.consumption.total) * 100);

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-bolt ml-2 text-primary"></i>
        مدیریت انرژی هوشمند
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-bolt text-3xl text-amber-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.consumption.total.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">مصرف کل (MW)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-leaf text-3xl text-green-500 mb-2"></i>
          <p className="text-2xl font-bold text-green-600">{renewablePercent}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">انرژی تجدیدپذیر</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-solar-panel text-3xl text-yellow-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.solar.totalPanels.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">پنل خورشیدی</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-charging-station text-3xl text-blue-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.evCharging.stations}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">ایستگاه شارژ EV</p>
        </div>
      </div>

      {/* نمودار مصرف */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-chart-pie ml-2 text-primary"></i>
            توزیع مصرف انرژی
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={consumptionData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                {consumptionData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value} MW`]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* انرژی خورشیدی */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800">
          <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
            <i className="fa-solid fa-sun ml-2 text-yellow-500"></i>
            انرژی خورشیدی
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">ظرفیت کل:</span>
              <span className="text-lg font-bold text-slate-800 dark:text-white">{energyManagement.solar.totalCapacity} MW</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">تولید روزانه:</span>
              <span className="text-lg font-bold text-slate-800 dark:text-white">{energyManagement.solar.dailyGeneration} MWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">کاهش CO2:</span>
              <span className="text-lg font-bold text-green-600">{(energyManagement.solar.co2Saved / 1000).toLocaleString('fa-IR')} هزار تن/سال</span>
            </div>
          </div>
        </div>
      </div>

      {/* بهره‌وری ساختمان‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-building ml-2 text-primary"></i>
          بهره‌وری انرژی ساختمان‌ها
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">ساختمان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مصرف (kWh)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">صرفه‌جویی</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">رتبه</th>
              </tr>
            </thead>
            <tbody>
              {energyManagement.efficiency.map((building, idx) => (
                <tr key={idx} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{building.building}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{building.consumption.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-bold">{building.saved}%</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      building.rating === 'A+' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      building.rating === 'A' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>{building.rating}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* شارژ خودروهای برقی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-charging-station ml-2 text-primary"></i>
          ایستگاه‌های شارژ خودروهای برقی
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.evCharging.stations}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">ایستگاه</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.evCharging.chargers}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">شارژر</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{energyManagement.evCharging.dailyUsage.toLocaleString('fa-IR')}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">استفاده روزانه</p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <p className="text-sm font-bold text-slate-800 dark:text-white">{energyManagement.evCharging.peakHours[0]}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">ساعت اوج</p>
          </div>
        </div>
      </div>
    </div>
  );
}

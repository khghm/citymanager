import { useState } from 'react';
import {
  faceRecognitionLogs, FaceLog,
  sentimentData,
  iotSensors, SensorData,
  arProjects, ARProject,
  blockchainTransactions, BlockchainTransaction,
  crisisAlerts, CrisisAlert,
  transportRoutes, TransportRoute,
  greenInitiatives, GreenInitiative,
  healthAlerts, HealthAlert,
  digitalTwinSimulations, DigitalTwinSimulation,
  addNewItem, updateItem, deleteItem
} from '../data/operationalData';

export default function OperationalFeatures() {
  const [activeTab, setActiveTab] = useState<'ai' | 'iot' | 'arvr' | 'blockchain' | 'crisis' | 'transport' | 'green' | 'health' | 'twin'>('ai');

  // State های عملیاتی
  const [faceLogs, setFaceLogs] = useState<FaceLog[]>(faceRecognitionLogs);
  const [sensors, setSensors] = useState<SensorData[]>(iotSensors);
  const [arProjectsList, setArProjectsList] = useState<ARProject[]>(arProjects);
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>(blockchainTransactions);
  const [alerts, setAlerts] = useState<CrisisAlert[]>(crisisAlerts);
  const [routes, setRoutes] = useState<TransportRoute[]>(transportRoutes);
  const [initiatives, setInitiatives] = useState<GreenInitiative[]>(greenInitiatives);
  const [healthAlertsList, setHealthAlertsList] = useState<HealthAlert[]>(healthAlerts);
  const [simulations, setSimulations] = useState<DigitalTwinSimulation[]>(digitalTwinSimulations);

  // فرم‌های افزودن
  const [showAddFaceLog, setShowAddFaceLog] = useState(false);
  const [newFaceLog, setNewFaceLog] = useState({ name: '', location: '', status: 'مجاز' as const });

  const [showAddSensor, setShowAddSensor] = useState(false);
  const [newSensor, setNewSensor] = useState({ type: '', location: '', value: 0, unit: '', status: 'سالم' as const });

  const [showAddAR, setShowAddAR] = useState(false);
  const [newAR, setNewAR] = useState({ name: '', location: '', completion: 0, arViews: 0, status: 'فعال' as const });

  const [showAddCrisis, setShowAddCrisis] = useState(false);
  const [newCrisis, setNewCrisis] = useState({ type: '', severity: 'هشدار' as const, location: '', time: '', status: 'فعال' as const, resources: 0 });

  // توابع CRUD
  const handleAddFaceLog = () => {
    if (!newFaceLog.name || !newFaceLog.location) return;
    const log = addNewItem(faceLogs, { ...newFaceLog, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) });
    setFaceLogs(log);
    setShowAddFaceLog(false);
    setNewFaceLog({ name: '', location: '', status: 'مجاز' });
  };

  const handleAddSensor = () => {
    if (!newSensor.type || !newSensor.location) return;
    const sensor = addNewItem(sensors, { ...newSensor, lastUpdate: 'الان' });
    setSensors(sensor);
    setShowAddSensor(false);
    setNewSensor({ type: '', location: '', value: 0, unit: '', status: 'سالم' });
  };

  const handleAddAR = () => {
    if (!newAR.name || !newAR.location) return;
    const project = addNewItem(arProjectsList, newAR);
    setArProjectsList(project);
    setShowAddAR(false);
    setNewAR({ name: '', location: '', completion: 0, arViews: 0, status: 'فعال' });
  };

  const handleAddCrisis = () => {
    if (!newCrisis.type || !newCrisis.location) return;
    const alert = addNewItem(alerts, { ...newCrisis, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) });
    setAlerts(alert);
    setShowAddCrisis(false);
    setNewCrisis({ type: '', severity: 'هشدار', location: '', time: '', status: 'فعال', resources: 0 });
  };

  const handleDeleteFaceLog = (id: number) => {
    setFaceLogs(deleteItem(faceLogs, id));
  };

  const handleDeleteSensor = (id: number) => {
    setSensors(deleteItem(sensors, id));
  };

  const handleUpdateSensorStatus = (id: number, status: 'سالم' | 'هشدار' | 'بحرانی') => {
    setSensors(updateItem(sensors, id, { status }));
  };

  const handleUpdateCrisisStatus = (id: number, status: 'فعال' | 'تحت کنترل' | 'پایان یافته') => {
    setAlerts(updateItem(alerts, id, { status }));
  };

  const tabs = [
    { id: 'ai' as const, label: 'هوش مصنوعی', icon: 'fa-brain', count: faceLogs.length },
    { id: 'iot' as const, label: 'IoT', icon: 'fa-microchip', count: sensors.length },
    { id: 'arvr' as const, label: 'AR/VR', icon: 'fa-vr-cardboard', count: arProjectsList.length },
    { id: 'blockchain' as const, label: 'بلاکچین', icon: 'fa-link', count: transactions.length },
    { id: 'crisis' as const, label: 'بحران', icon: 'fa-triangle-exclamation', count: alerts.length },
    { id: 'transport' as const, label: 'حمل‌ونقل', icon: 'fa-bus', count: routes.length },
    { id: 'green' as const, label: 'محیط زیست', icon: 'fa-leaf', count: initiatives.length },
    { id: 'health' as const, label: 'سلامت', icon: 'fa-heart-pulse', count: healthAlertsList.length },
    { id: 'twin' as const, label: 'دیجیتال توین', icon: 'fa-cube', count: simulations.length },
  ];

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-rocket ml-2 text-primary"></i>
          سیستم‌های عملیاتی پیشرفته
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-green-700 dark:text-green-400 font-medium">همه سیستم‌ها فعال</span>
        </div>
      </div>

      {/* تب‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-700">
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
          {/* هوش مصنوعی */}
          {activeTab === 'ai' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  <i className="fa-solid fa-brain ml-2 text-primary"></i>
                  سیستم‌های هوش مصنوعی
                </h3>
                <button onClick={() => setShowAddFaceLog(true)} className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  ثبت ورود جدید
                </button>
              </div>

              {/* آمار */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{faceLogs.length}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">اسکن امروز</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{sentimentData[0].positive}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">احساسات مثبت</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">94%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">دقت دستیار صوتی</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">87%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">پیش‌بینی تقاضا</p>
                </div>
              </div>

              {/* جدول لاگ‌ها */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-700/50">
                    <tr>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نام</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">موقعیت</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">زمان</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faceLogs.map(log => (
                      <tr key={log.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{log.name}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{log.location}</td>
                        <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{log.time}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            log.status === 'مجاز' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            log.status === 'غیرمجاز' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>{log.status}</span>
                        </td>
                        <td className="py-3 px-4">
                          <button onClick={() => handleDeleteFaceLog(log.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors">
                            <i className="fa-solid fa-trash text-xs"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* مودال افزودن */}
              {showAddFaceLog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddFaceLog(false)}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
                    <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">ثبت ورود جدید</h3>
                    <div className="space-y-3">
                      <input type="text" placeholder="نام *" value={newFaceLog.name} onChange={(e) => setNewFaceLog({...newFaceLog, name: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="text" placeholder="موقعیت *" value={newFaceLog.location} onChange={(e) => setNewFaceLog({...newFaceLog, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <select value={newFaceLog.status} onChange={(e) => setNewFaceLog({...newFaceLog, status: e.target.value as any})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        <option value="مجاز">مجاز</option>
                        <option value="غیرمجاز">غیرمجاز</option>
                        <option value="هشدار">هشدار</option>
                      </select>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button onClick={handleAddFaceLog} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">ثبت</button>
                      <button onClick={() => setShowAddFaceLog(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* IoT */}
          {activeTab === 'iot' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  <i className="fa-solid fa-microchip ml-2 text-primary"></i>
                  سنسورهای اینترنت اشیا
                </h3>
                <button onClick={() => setShowAddSensor(true)} className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  افزودن سنسور
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sensors.map(sensor => (
                  <div key={sensor.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-200">{sensor.type}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{sensor.location}</p>
                      </div>
                      <select value={sensor.status} onChange={(e) => handleUpdateSensorStatus(sensor.id, e.target.value as any)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${
                        sensor.status === 'سالم' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        sensor.status === 'هشدار' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        <option value="سالم">سالم</option>
                        <option value="هشدار">هشدار</option>
                        <option value="بحرانی">بحرانی</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-slate-800 dark:text-white">{sensor.value} <span className="text-sm text-slate-500">{sensor.unit}</span></p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{sensor.lastUpdate}</p>
                      </div>
                      <button onClick={() => handleDeleteSensor(sensor.id)} className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-500 hover:text-red-600 transition-colors">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* مودال افزودن سنسور */}
              {showAddSensor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddSensor(false)}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
                    <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">افزودن سنسور جدید</h3>
                    <div className="space-y-3">
                      <input type="text" placeholder="نوع سنسور *" value={newSensor.type} onChange={(e) => setNewSensor({...newSensor, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="text" placeholder="موقعیت *" value={newSensor.location} onChange={(e) => setNewSensor({...newSensor, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="number" placeholder="مقدار" value={newSensor.value} onChange={(e) => setNewSensor({...newSensor, value: Number(e.target.value)})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="text" placeholder="واحد" value={newSensor.unit} onChange={(e) => setNewSensor({...newSensor, unit: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button onClick={handleAddSensor} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">افزودن</button>
                      <button onClick={() => setShowAddSensor(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* سایر تب‌ها - خلاصه */}
          {activeTab === 'arvr' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  <i className="fa-solid fa-vr-cardboard ml-2 text-primary"></i>
                  پروژه‌های AR/VR
                </h3>
                <button onClick={() => setShowAddAR(true)} className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  پروژه جدید
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {arProjectsList.map(project => (
                  <div key={project.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{project.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{project.location}</p>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${project.completion}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{project.completion}%</span>
                      <span className="text-slate-600 dark:text-slate-400">{project.arViews} بازدید AR</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* مودال افزودن AR */}
              {showAddAR && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddAR(false)}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
                    <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">پروژه AR/VR جدید</h3>
                    <div className="space-y-3">
                      <input type="text" placeholder="نام پروژه *" value={newAR.name} onChange={(e) => setNewAR({...newAR, name: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="text" placeholder="موقعیت *" value={newAR.location} onChange={(e) => setNewAR({...newAR, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button onClick={handleAddAR} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">ایجاد</button>
                      <button onClick={() => setShowAddAR(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'blockchain' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <i className="fa-solid fa-link ml-2 text-primary"></i>
                تراکنش‌های بلاکچین
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-700/50">
                    <tr>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">شناسه</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مبلغ</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">بلاک</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(tx => (
                      <tr key={tx.id} className="border-b border-slate-100 dark:border-slate-700/50">
                        <td className="py-3 px-4"><code className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{tx.id}</code></td>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{tx.type}</td>
                        <td className="py-3 px-4 font-bold text-slate-800 dark:text-white">{tx.amount.toLocaleString('fa-IR')} ﷼</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{tx.status}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400">#{tx.blockNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'crisis' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  <i className="fa-solid fa-triangle-exclamation ml-2 text-red-500"></i>
                  مدیریت بحران
                </h3>
                <button onClick={() => setShowAddCrisis(true)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-plus"></i>
                  ثبت بحران
                </button>
              </div>
              <div className="space-y-3">
                {alerts.map(alert => (
                  <div key={alert.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-slate-700 dark:text-slate-200">{alert.type}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{alert.location} | {alert.time}</p>
                      </div>
                      <select value={alert.status} onChange={(e) => handleUpdateCrisisStatus(alert.id, e.target.value as any)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${
                        alert.status === 'فعال' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        alert.status === 'تحت کنترل' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                        <option value="فعال">فعال</option>
                        <option value="تحت کنترل">تحت کنترل</option>
                        <option value="پایان یافته">پایان یافته</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        alert.severity === 'بحرانی' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        alert.severity === 'خطر' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>{alert.severity}</span>
                      <span className="text-slate-600 dark:text-slate-400">{alert.resources} منبع اختصاص‌یافته</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* مودال افزودن بحران */}
              {showAddCrisis && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddCrisis(false)}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
                    <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">ثبت بحران جدید</h3>
                    <div className="space-y-3">
                      <input type="text" placeholder="نوع بحران *" value={newCrisis.type} onChange={(e) => setNewCrisis({...newCrisis, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <input type="text" placeholder="موقعیت *" value={newCrisis.location} onChange={(e) => setNewCrisis({...newCrisis, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                      <select value={newCrisis.severity} onChange={(e) => setNewCrisis({...newCrisis, severity: e.target.value as any})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        <option value="هشدار">هشدار</option>
                        <option value="خطر">خطر</option>
                        <option value="بحرانی">بحرانی</option>
                      </select>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button onClick={handleAddCrisis} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg transition-colors">ثبت</button>
                      <button onClick={() => setShowAddCrisis(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'transport' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <i className="fa-solid fa-bus ml-2 text-primary"></i>
                مسیرهای حمل‌ونقل
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {routes.map(route => (
                  <div key={route.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{route.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{route.type} | {route.length} کیلومتر</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">{route.users.toLocaleString('fa-IR')} کاربر</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        route.status === 'فعال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>{route.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'green' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <i className="fa-solid fa-leaf ml-2 text-green-600"></i>
                ابتکارات محیط زیست
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {initiatives.map(init => (
                  <div key={init.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">{init.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{init.unit}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">{init.name}</p>
                    <p className={`text-xs mt-1 ${init.trend === 'up' ? 'text-green-600' : init.trend === 'down' ? 'text-red-600' : 'text-slate-500'}`}>
                      {init.trend === 'up' ? '↑' : init.trend === 'down' ? '↓' : '→'} روند {init.trend === 'up' ? 'صعودی' : init.trend === 'down' ? 'نزولی' : 'ثابت'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'health' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <i className="fa-solid fa-heart-pulse ml-2 text-red-500"></i>
                هشدارهای سلامت
              </h3>
              <div className="space-y-3">
                {healthAlertsList.map(alert => (
                  <div key={alert.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{alert.disease}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.severity === 'بحرانی' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        alert.severity === 'هشدار' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>{alert.severity}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                      <span>{alert.affectedAreas} منطقه تحت تأثیر</span>
                      <span>پیش‌بینی گسترش: {alert.predictedSpread} منطقه</span>
                      <span className={`px-2 py-1 rounded-full ${
                        alert.status === 'فعال' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>{alert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'twin' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <i className="fa-solid fa-cube ml-2 text-primary"></i>
                شبیه‌سازی‌های دیجیتال توین
              </h3>
              <div className="space-y-3">
                {simulations.map(sim => (
                  <div key={sim.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">{sim.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        sim.status === 'تکمیل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        sim.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>{sim.status}</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mb-2">
                      <div className={`h-full rounded-full ${
                        sim.status === 'تکمیل' ? 'bg-green-500' :
                        sim.status === 'در حال اجرا' ? 'bg-blue-500 animate-pulse' :
                        'bg-amber-500'
                      }`} style={{ width: `${sim.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{sim.type}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{sim.progress}%</span>
                    </div>
                    {sim.result && <p className="text-xs text-green-600 dark:text-green-400 mt-2">نتیجه: {sim.result}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

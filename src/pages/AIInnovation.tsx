import { useState } from 'react';
import { faceRecognition, socialSentiment, voiceAssistant, demandPrediction, videoAnalytics, recommendationEngine, energyAnomaly, lifespanPrediction } from '../data/innovativeFeatures';

export default function AIInnovation() {
  const [activeTab, setActiveTab] = useState<'face' | 'social' | 'voice' | 'demand' | 'video' | 'recommend' | 'energy' | 'lifespan'>('face');

  const tabs = [
    { id: 'face' as const, label: 'تشخیص چهره', icon: 'fa-face-smile', data: faceRecognition },
    { id: 'social' as const, label: 'تحلیل اجتماعی', icon: 'fa-share-nodes', data: socialSentiment },
    { id: 'voice' as const, label: 'دستیار صوتی', icon: 'fa-microphone', data: voiceAssistant },
    { id: 'demand' as const, label: 'پیش‌بینی تقاضا', icon: 'fa-chart-line', data: demandPrediction },
    { id: 'video' as const, label: 'تحلیل ویدئو', icon: 'fa-video', data: videoAnalytics },
    { id: 'recommend' as const, label: 'توصیه‌گر', icon: 'fa-lightbulb', data: recommendationEngine },
    { id: 'energy' as const, label: 'ناهنجاری انرژی', icon: 'fa-bolt', data: energyAnomaly },
    { id: 'lifespan' as const, label: 'عمر مفید', icon: 'fa-hourglass', data: lifespanPrediction },
  ];

  return (
    <div className="fade-in space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-brain ml-2 text-primary"></i>
          هوش مصنوعی و یادگیری ماشین
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">۸ سیستم فعال</span>
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
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* تشخیص چهره */}
          {activeTab === 'face' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{faceRecognition.totalScans.toLocaleString('fa-IR')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">کل اسکن‌ها</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{faceRecognition.todayScans}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">امروز</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">{faceRecognition.authorizedPersonnel}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">پرسنل مجاز</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">{faceRecognition.visitors}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">بازدیدکنندگان</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">لاگ‌های اخیر</h4>
                <div className="space-y-2">
                  {faceRecognition.recentLogs.map(log => (
                    <div key={log.id} className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <i className="fa-solid fa-user text-primary text-xs"></i>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{log.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{log.location} - {log.time}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        log.status === 'مجاز' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>{log.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* تحلیل احساسات */}
          {activeTab === 'social' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-600">{socialSentiment.positive}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">مثبت</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-slate-600 dark:text-slate-400">{socialSentiment.neutral}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">خنثی</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-red-600">{socialSentiment.negative}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">منفی</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پلتفرم‌ها</h4>
                <div className="space-y-2">
                  {socialSentiment.platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                      <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{platform.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 dark:text-slate-400">{platform.mentions.toLocaleString('fa-IR')} ذکر</span>
                        <span className="text-sm font-bold text-primary">{platform.sentiment}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">موضوعات داغ</h4>
                <div className="space-y-2">
                  {socialSentiment.trendingTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                      <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{topic.topic}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 dark:text-slate-400">{topic.count} ذکر</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          topic.sentiment === 'مثبت' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          topic.sentiment === 'منفی' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-300'
                        }`}>{topic.sentiment}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* دستیار صوتی */}
          {activeTab === 'voice' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{voiceAssistant.totalCommands.toLocaleString('fa-IR')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">کل دستورات</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{voiceAssistant.todayCommands}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">امروز</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">{voiceAssistant.successRate}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">نرخ موفقیت</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">زبان‌های پشتیبانی شده</h4>
                <div className="flex gap-2">
                  {voiceAssistant.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">دستورات اخیر</h4>
                <div className="space-y-2">
                  {voiceAssistant.recentCommands.map((cmd, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{cmd.command}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{cmd.time}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{cmd.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* پیش‌بینی تقاضا */}
          {activeTab === 'demand' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پیش‌بینی خدمات</h4>
                <div className="space-y-3">
                  {demandPrediction.services.map((service, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{service.name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">اطمینان: {service.confidence}%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 dark:text-slate-400">فعلی: {service.current}</span>
                            <span className="text-primary font-bold">پیش‌بینی: {service.predicted}</span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(service.predicted / 200) * 100}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-200">روزهای اوج</h4>
                  <div className="flex gap-2">
                    {demandPrediction.peakDays.map((day, idx) => (
                      <span key={idx} className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded text-xs">{day}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-bold text-sm mb-2 text-slate-700 dark:text-slate-200">روند فصلی</h4>
                  <p className="text-sm text-green-600 font-bold">{demandPrediction.seasonalTrend}</p>
                </div>
              </div>
            </div>
          )}

          {/* تحلیل ویدئو */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{videoAnalytics.totalCameras}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">کل دوربین‌ها</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{videoAnalytics.activeCameras}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">فعال</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">{videoAnalytics.detectedIncidents}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">حوادث شناسایی‌شده</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-600">{videoAnalytics.todayAlerts}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">هشدار امروز</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">انواع حوادث</h4>
                <div className="space-y-2">
                  {videoAnalytics.incidentTypes.map((incident, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded">
                      <span className="text-sm text-slate-700 dark:text-slate-200">{incident.type}</span>
                      <span className="text-sm font-bold text-red-600">{incident.count} مورد</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* سیستم توصیه‌گر */}
          {activeTab === 'recommend' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{recommendationEngine.implementedSuggestions}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">پیشنهادات اجراشده</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">{recommendationEngine.successRate}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">نرخ موفقیت</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پیشنهادات فعال</h4>
                <div className="space-y-3">
                  {recommendationEngine.suggestions.map(suggestion => (
                    <div key={suggestion.id} className="p-3 bg-white dark:bg-slate-800 rounded">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <i className="fa-solid fa-lightbulb text-primary text-xs"></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{suggestion.suggestion}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">دسته: {suggestion.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          suggestion.impact === 'بالا' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>تأثیر: {suggestion.impact}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">اطمینان: {suggestion.confidence}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ناهنجاری انرژی */}
          {activeTab === 'energy' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{energyAnomaly.monitoredPoints.toLocaleString('fa-IR')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">نقاط پایش</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">{energyAnomaly.anomalies}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">ناهنجاری</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-600">{energyAnomaly.critical}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">بحرانی</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">ناهنجاری‌های اخیر</h4>
                <div className="space-y-2">
                  {energyAnomaly.recentAnomalies.map(anomaly => (
                    <div key={anomaly.id} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded">
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{anomaly.location}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">انحراف: {anomaly.deviation}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        anomaly.severity === 'بحرانی' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>{anomaly.severity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* عمر مفید */}
          {activeTab === 'lifespan' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{lifespanPrediction.maintenanceSchedule}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">برنامه نگهداری</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-600">{lifespanPrediction.urgentRepairs}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">تعمیرات فوری</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-3 text-slate-700 dark:text-slate-200">پیش‌بینی عمر مفید زیرساخت‌ها</h4>
                <div className="space-y-3">
                  {lifespanPrediction.infrastructure.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{item.name}</span>
                        <span className={`text-xs font-bold ${
                          item.health >= 85 ? 'text-green-600' : item.health >= 70 ? 'text-amber-600' : 'text-red-600'
                        }`}>سلامت: {item.health}%</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <span>سن فعلی: {item.currentAge} سال</span>
                        <span>عمر پیش‌بینی: {item.predictedLife} سال</span>
                      </div>
                      <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${
                          item.health >= 85 ? 'bg-green-500' : item.health >= 70 ? 'bg-amber-500' : 'bg-red-500'
                        }`} style={{ width: `${item.health}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

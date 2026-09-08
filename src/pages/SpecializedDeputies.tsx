import { useState } from 'react';
import { civilDept, transportDept, servicesDept, financeDept, planningDept, socialDept, environmentDept, legalDept, adminDept, urbanDept } from '../data/deputiesSpecialized';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

type DeputyType = 'civil' | 'transport' | 'services' | 'finance' | 'planning' | 'social' | 'environment' | 'legal' | 'admin' | 'urban';

export default function SpecializedDeputies() {
  const [selectedDeputy, setSelectedDeputy] = useState<DeputyType>('civil');
  const [activeSection, setActiveSection] = useState<string>('');

  const deputyData = {
    civil: { data: civilDept, title: 'معاونت عمرانی و فنی', icon: 'fa-hard-hat', color: 'blue' },
    transport: { data: transportDept, title: 'معاونت حمل‌ونقل و ترافیک', icon: 'fa-traffic-light', color: 'amber' },
    services: { data: servicesDept, title: 'معاونت خدمات شهری', icon: 'fa-broom', color: 'green' },
    finance: { data: financeDept, title: 'معاونت مالی و اقتصادی', icon: 'fa-coins', color: 'emerald' },
    planning: { data: planningDept, title: 'معاونت برنامه‌ریزی و توسعه', icon: 'fa-chart-line', color: 'purple' },
    social: { data: socialDept, title: 'معاونت اجتماعی و فرهنگی', icon: 'fa-users', color: 'pink' },
    environment: { data: environmentDept, title: 'معاونت محیط زیست', icon: 'fa-leaf', color: 'teal' },
    legal: { data: legalDept, title: 'معاونت حقوقی', icon: 'fa-scale-balanced', color: 'indigo' },
    admin: { data: adminDept, title: 'معاونت اداری و منابع انسانی', icon: 'fa-user-tie', color: 'cyan' },
    urban: { data: urbanDept, title: 'معاونت شهرسازی و معماری', icon: 'fa-city', color: 'orange' },
  };

  const current = deputyData[selectedDeputy] as { data: any; title: string; icon: string; color: string };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-sitemap ml-2 text-primary"></i>
        مدیریت تخصصی معاونت‌ها
      </h2>

      {/* انتخاب معاونت */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(deputyData).map(([key, value]) => (
          <button
            key={key}
            onClick={() => { setSelectedDeputy(key as DeputyType); setActiveSection(''); }}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedDeputy === key
                ? `border-${value.color}-500 bg-${value.color}-50 dark:bg-${value.color}-900/20`
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <i className={`fa-solid ${value.icon} text-${value.color}-600 text-xl mb-2`}></i>
            <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{value.title.replace('معاونت ', '')}</p>
          </button>
        ))}
      </div>

      {/* هدر معاونت انتخاب‌شده */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl bg-${current.color}-100 dark:bg-${current.color}-900/30 flex items-center justify-center`}>
              <i className={`fa-solid ${current.icon} text-${current.color}-600 text-3xl`}></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{current.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">مدیر: {current.data.manager}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-primary">{current.data.performance || current.data.overallPerformance}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">عملکرد</p>
          </div>
        </div>

        {/* آمار کلیدی */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-primary">{current.data.budget}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">بودجه (میلیارد)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-600">
              {selectedDeputy === 'civil' ? current.data.projects.length :
               selectedDeputy === 'transport' ? current.data.routes.length :
               selectedDeputy === 'services' ? current.data.cleaning.length :
               selectedDeputy === 'finance' ? current.data.income.length :
               selectedDeputy === 'planning' ? current.data.strategicPlans.length :
               selectedDeputy === 'social' ? current.data.events.length :
               selectedDeputy === 'environment' ? current.data.airQuality.length :
               selectedDeputy === 'legal' ? current.data.contracts.length :
               selectedDeputy === 'admin' ? current.data.employees.length :
               current.data.permits.length}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedDeputy === 'civil' ? 'پروژه' :
               selectedDeputy === 'transport' ? 'مسیر' :
               selectedDeputy === 'services' ? 'منطقه' :
               selectedDeputy === 'finance' ? 'منبع درآمد' :
               selectedDeputy === 'planning' ? 'طرح' :
               selectedDeputy === 'social' ? 'رویداد' :
               selectedDeputy === 'environment' ? 'ایستگاه' :
               selectedDeputy === 'legal' ? 'قرارداد' :
               selectedDeputy === 'admin' ? 'کارمند' :
               'مجوز'}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">
              {selectedDeputy === 'civil' ? current.data.equipment.length :
               selectedDeputy === 'transport' ? current.data.trafficLights.length :
               selectedDeputy === 'services' ? current.data.wasteCollection.length :
               selectedDeputy === 'finance' ? current.data.expenses.length :
               selectedDeputy === 'planning' ? current.data.kpis.length :
               selectedDeputy === 'social' ? current.data.culturalCenters.length :
               selectedDeputy === 'environment' ? current.data.recycling.length :
               selectedDeputy === 'legal' ? current.data.cases.length :
               selectedDeputy === 'admin' ? current.data.recruitment.length :
               current.data.zoning.length}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedDeputy === 'civil' ? 'تجهیزات' :
               selectedDeputy === 'transport' ? 'چراغ ترافیک' :
               selectedDeputy === 'services' ? 'ایستگاه زباله' :
               selectedDeputy === 'finance' ? 'دسته هزینه' :
               selectedDeputy === 'planning' ? 'شاخص' :
               selectedDeputy === 'social' ? 'فرهنگسرا' :
               selectedDeputy === 'environment' ? 'نوع بازیافت' :
               selectedDeputy === 'legal' ? 'پرونده' :
               selectedDeputy === 'admin' ? 'آگهی استخدام' :
               'منطقه'}
            </p>
          </div>
        </div>
      </div>

      {/* محتوای تخصصی هر معاونت */}
      {selectedDeputy === 'civil' && <CivilContent data={civilDept} />}
      {selectedDeputy === 'transport' && <TransportContent data={transportDept} />}
      {selectedDeputy === 'services' && <ServicesContent data={servicesDept} />}
      {selectedDeputy === 'finance' && <FinanceContent data={financeDept} />}
      {selectedDeputy === 'planning' && <PlanningContent data={planningDept} />}
      {selectedDeputy === 'social' && <SocialContent data={socialDept} />}
      {selectedDeputy === 'environment' && <EnvironmentContent data={environmentDept} />}
      {selectedDeputy === 'legal' && <LegalContent data={legalDept} />}
      {selectedDeputy === 'admin' && <AdminContent data={adminDept} />}
      {selectedDeputy === 'urban' && <UrbanContent data={urbanDept} />}
    </div>
  );
}

// محتوای تخصصی معاونت عمرانی
function CivilContent({ data }: { data: typeof civilDept }) {
  return (
    <div className="space-y-6">
      {/* پروژه‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-hard-hat ml-2 text-blue-600"></i>
          پروژه‌های عمرانی
        </h3>
        <div className="space-y-3">
          {data.projects.map(project => (
            <div key={project.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{project.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{project.type} | {project.area}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  project.status === 'کامل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>{project.status}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">بودجه:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{project.budget} میلیارد</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">پیمانکار:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{project.contractor}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">شروع:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{project.startDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">پایان:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{project.endDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <span className="text-sm font-bold text-blue-600">{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* تجهیزات */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-truck ml-2 text-amber-600"></i>
          تجهیزات و ماشین‌آلات
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نام تجهیز</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تعداد</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">آخرین سرویس</th>
              </tr>
            </thead>
            <tbody>
              {data.equipment.map(eq => (
                <tr key={eq.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{eq.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{eq.count} دستگاه</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      eq.status === 'فعال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>{eq.status}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{eq.lastService}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* بازرسی‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-clipboard-check ml-2 text-green-600"></i>
          گزارش‌های بازرسی
        </h3>
        <div className="space-y-3">
          {data.inspections.map(inspection => (
            <div key={inspection.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{inspection.project}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  inspection.result === 'تأیید' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{inspection.result}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">بازرس:</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200 mr-1">{inspection.inspector}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">تاریخ:</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200 mr-1">{inspection.date}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{inspection.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// محتوای تخصصی معاونت حمل‌ونقل
function TransportContent({ data }: { data: typeof transportDept }) {
  return (
    <div className="space-y-6">
      {/* مسیرها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-bus ml-2 text-amber-600"></i>
          مسیرهای حمل‌ونقل
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نام مسیر</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">طول (کیلومتر)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تعداد ایستگاه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مسافر روزانه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">رضایت</th>
              </tr>
            </thead>
            <tbody>
              {data.routes.map(route => (
                <tr key={route.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{route.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{route.type}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{route.length}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{route.stations}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{route.dailyPassengers.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${route.satisfaction}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-green-600">{route.satisfaction}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* چراغ‌های ترافیک */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-traffic-light ml-2 text-red-600"></i>
          چراغ‌های ترافیک
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.trafficLights.map(light => (
            <div key={light.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{light.location}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  light.status === 'فعال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{light.status}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">نوع: {light.type}</span>
                <span className="text-slate-500 dark:text-slate-400">آخرین به‌روزرسانی: {light.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* پارکینگ‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-square-parking ml-2 text-blue-600"></i>
          پارکینگ‌های عمومی
        </h3>
        <div className="space-y-3">
          {data.parkingLots.map(parking => (
            <div key={parking.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{parking.name}</h4>
                <span className="text-sm font-bold text-primary">{((parking.occupied / parking.capacity) * 100).toFixed(0)}% پر</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">ظرفیت:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{parking.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">اشغال:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{parking.occupied}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">درآمد روزانه:</span>
                  <span className="font-bold text-green-600 mr-1">{parking.revenue.toLocaleString('fa-IR')} تومان</span>
                </div>
              </div>
              <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(parking.occupied / parking.capacity) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* تخلفات */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-triangle-exclamation ml-2 text-red-600"></i>
          آمار تخلفات رانندگی
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.violations}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="type" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" name="تعداد" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// سایر محتوای تخصصی - خلاصه
function ServicesContent({ data }: { data: typeof servicesDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-broom ml-2 text-green-600"></i>
          نظافت معابر
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تعداد خیابان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">طول (کیلومتر)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نیروی انسانی</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {data.cleaning.map(item => (
                <tr key={item.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{item.area}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.streets}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.length}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.workers} نفر</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'انجام‌شده' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      item.status === 'در حال انجام' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-trash ml-2 text-amber-600"></i>
            جمع‌آوری زباله
          </h3>
          <div className="space-y-3">
            {data.wasteCollection.map(item => (
              <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{item.region}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.schedule}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">روزانه:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.daily} تن</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">بازیافت:</span>
                    <span className="font-bold text-green-600 mr-1">{item.recycled} تن</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">خودرو:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.vehicles}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-tree ml-2 text-green-600"></i>
            فضای سبز
          </h3>
          <div className="space-y-3">
            {data.greenSpaces.map(space => (
              <div key={space.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{space.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مساحت:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{space.area} هکتار</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">درخت:</span>
                    <span className="font-bold text-green-600 mr-1">{space.trees.toLocaleString('fa-IR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">گل:</span>
                    <span className="font-bold text-pink-600 mr-1">{space.flowers.toLocaleString('fa-IR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">نیرو:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{space.workers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-lightbulb ml-2 text-yellow-600"></i>
          روشنایی معابر
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">کل چراغ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">سالم</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">LED</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">صرفه‌جویی انرژی</th>
              </tr>
            </thead>
            <tbody>
              {data.lighting.map(item => (
                <tr key={item.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{item.area}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.total.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.working.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{item.led.toLocaleString('fa-IR')}</td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-green-600">{item.energy}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FinanceContent({ data }: { data: typeof financeDept }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-arrow-down ml-2 text-green-600"></i>
            منابع درآمد
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.income}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="source" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="amount" name="مبلغ (میلیارد)" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-arrow-up ml-2 text-red-600"></i>
            دسته‌بندی هزینه‌ها
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data.expenses} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="amount" label={({ category, percentage }) => `${category}: ${percentage}%`}>
                {data.expenses.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'][index % 6]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-hand-holding-dollar ml-2 text-amber-600"></i>
          بدهی‌ها و تعهدات
        </h3>
        <div className="space-y-3">
          {data.debts.map(debt => (
            <div key={debt.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{debt.creditor}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  debt.status === 'جاری' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>{debt.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مبلغ:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{debt.amount} میلیارد</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">سررسید:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{debt.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-chart-line ml-2 text-blue-600"></i>
          سرمایه‌گذاری‌ها
        </h3>
        <div className="space-y-3">
          {data.investments.map(inv => (
            <div key={inv.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{inv.project}</h4>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مبلغ:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{inv.amount} میلیارد</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">بازده مورد انتظار:</span>
                  <span className="font-bold text-green-600 mr-1">{inv.expectedReturn}%</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مدت:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{inv.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanningContent({ data }: { data: typeof planningDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-bullseye ml-2 text-purple-600"></i>
          طرح‌های استراتژیک
        </h3>
        <div className="space-y-3">
          {data.strategicPlans.map(plan => (
            <div key={plan.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{plan.title}</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">چشم‌انداز: {plan.horizon}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${plan.progress}%` }}></div>
                </div>
                <span className="text-sm font-bold text-purple-600">{plan.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-chart-bar ml-2 text-blue-600"></i>
          شاخص‌های کلیدی عملکرد (KPIs)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.kpis} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis dataKey="indicator" type="category" tick={{ fontSize: 11 }} width={120} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" name="هدف" fill="#3b82f6" radius={[0, 8, 8, 0]} />
            <Bar dataKey="actual" name="واقعی" fill="#10b981" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-magnifying-glass ml-2 text-amber-600"></i>
          مطالعات امکان‌سنجی
        </h3>
        <div className="space-y-3">
          {data.feasibilityStudies.map(study => (
            <div key={study.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{study.project}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  study.result === 'موجه' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{study.result}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">هزینه:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{study.cost} میلیارد</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مدت:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{study.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">تاریخ:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{study.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialContent({ data }: { data: typeof socialDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-calendar-days ml-2 text-pink-600"></i>
          رویدادها و جشنواره‌ها
        </h3>
        <div className="space-y-3">
          {data.events.map(event => (
            <div key={event.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{event.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  event.status === 'تکمیل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  event.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{event.status}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">تاریخ:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{event.date}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مکان:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{event.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">شرکت‌کنندگان:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{event.attendees.toLocaleString('fa-IR')}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">بودجه:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{event.budget} میلیارد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-building ml-2 text-purple-600"></i>
            فرهنگسراها
          </h3>
          <div className="space-y-3">
            {data.culturalCenters.map(center => (
              <div key={center.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{center.name}</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">ظرفیت:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{center.capacity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">بازدید ماهانه:</span>
                    <span className="font-bold text-blue-600 mr-1">{center.monthlyVisitors.toLocaleString('fa-IR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">برنامه:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{center.programs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-hands-helping ml-2 text-green-600"></i>
            خدمات اجتماعی
          </h3>
          <div className="space-y-3">
            {data.socialServices.map(service => (
              <div key={service.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{service.service}</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مستفیدان:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{service.beneficiaries.toLocaleString('fa-IR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">رضایت:</span>
                    <span className="font-bold text-green-600 mr-1">{service.satisfaction}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EnvironmentContent({ data }: { data: typeof environmentDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-wind ml-2 text-blue-600"></i>
          کیفیت هوا
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">ایستگاه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">AQI</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">PM2.5</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">PM10</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {data.airQuality.map(station => (
                <tr key={station.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{station.station}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{station.aqi}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{station.pm25}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{station.pm10}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      station.status === 'سالم' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      station.status === 'ناسالم' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{station.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-recycle ml-2 text-green-600"></i>
            بازیافت
          </h3>
          <div className="space-y-3">
            {data.recycling.map(item => (
              <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{item.material}</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">ماهانه:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.monthly} تن</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">درآمد:</span>
                    <span className="font-bold text-green-600 mr-1">{item.revenue} میلیون</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مراکز:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.centers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-tree ml-2 text-green-600"></i>
            درختکاری
          </h3>
          <div className="space-y-3">
            {data.treePlanting.map(item => (
              <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{item.season}</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">تعداد:</span>
                    <span className="font-bold text-green-600 mr-1">{item.trees.toLocaleString('fa-IR')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مساحت:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.area} هکتار</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">بقا:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.survival}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalContent({ data }: { data: typeof legalDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-file-contract ml-2 text-indigo-600"></i>
          قراردادها
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">طرف قرارداد</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مبلغ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">شروع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">پایان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {data.contracts.map(contract => (
                <tr key={contract.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{contract.title}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{contract.party}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{contract.value} میلیارد</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{contract.startDate}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{contract.endDate}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contract.status === 'فعال' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-300'
                    }`}>{contract.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-gavel ml-2 text-red-600"></i>
            پرونده‌های قضایی
          </h3>
          <div className="space-y-3">
            {data.cases.map(caseItem => (
              <div key={caseItem.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{caseItem.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    caseItem.status === 'مختومه' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>{caseItem.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">شماره:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{caseItem.number}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">وکیل:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{caseItem.lawyer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-book ml-2 text-blue-600"></i>
            آیین‌نامه‌ها و مقررات
          </h3>
          <div className="space-y-3">
            {data.regulations.map(reg => (
              <div key={reg.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{reg.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    reg.status === 'تصویب‌شده' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>{reg.status}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">تاریخ: {reg.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminContent({ data }: { data: typeof adminDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-users ml-2 text-cyan-600"></i>
          کارکنان
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نام</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">سمت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">بخش</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع قرارداد</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تاریخ استخدام</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">حقوق (میلیون)</th>
              </tr>
            </thead>
            <tbody>
              {data.employees.map(emp => (
                <tr key={emp.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{emp.name}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{emp.position}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{emp.dept}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      emp.type === 'رسمی' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>{emp.type}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{emp.hireDate}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-briefcase ml-2 text-purple-600"></i>
            استخدام
          </h3>
          <div className="space-y-3">
            {data.recruitment.map(rec => (
              <div key={rec.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{rec.position}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    rec.status === 'تکمیل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>{rec.status}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">متقاضی:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{rec.applicants}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مصاحبه:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{rec.interviewed}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">استخدام:</span>
                    <span className="font-bold text-green-600 mr-1">{rec.hired}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-graduation-cap ml-2 text-blue-600"></i>
            آموزش
          </h3>
          <div className="space-y-3">
            {data.training.map(course => (
              <div key={course.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{course.course}</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">شرکت‌کننده:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{course.participants}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مدت:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">رضایت:</span>
                    <span className="font-bold text-green-600 mr-1">{course.satisfaction}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UrbanContent({ data }: { data: typeof urbanDept }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-file-signature ml-2 text-orange-600"></i>
          مجوزهای ساختمانی
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">درخواست‌کننده</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مساحت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">طبقات</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">کاربری</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عوارض</th>
              </tr>
            </thead>
            <tbody>
              {data.permits.map(permit => (
                <tr key={permit.id} className="border-b border-slate-100 dark:border-slate-700/50">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{permit.title}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{permit.applicant}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{permit.area} m²</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{permit.floors}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{permit.usage}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      permit.status === 'تأیید' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      permit.status === 'در انتظار' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{permit.status}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{permit.fee} میلیون</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-map ml-2 text-blue-600"></i>
            کاربری اراضی
          </h3>
          <div className="space-y-3">
            {data.zoning.map(zone => (
              <div key={zone.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">{zone.zone}</h4>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">مسکونی:</span>
                    <span className="font-bold text-blue-600 mr-1">{zone.residential}%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">تجاری:</span>
                    <span className="font-bold text-amber-600 mr-1">{zone.commercial}%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">فضای سبز:</span>
                    <span className="font-bold text-green-600 mr-1">{zone.green}%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">صنعتی:</span>
                    <span className="font-bold text-red-600 mr-1">{zone.industrial}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
            <i className="fa-solid fa-landmark ml-2 text-purple-600"></i>
            بناهای تاریخی
          </h3>
          <div className="space-y-3">
            {data.heritage.map(item => (
              <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-700 dark:text-slate-200">{item.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'مرمت‌شده' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    item.status === 'در حال مرمت' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>{item.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">دوره:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.era}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">بودجه:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{item.budget} میلیارد</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
          <i className="fa-solid fa-city ml-2 text-orange-600"></i>
          پروژه‌های توسعه شهری
        </h3>
        <div className="space-y-3">
          {data.developments.map(dev => (
            <div key={dev.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700 dark:text-slate-200">{dev.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  dev.status === 'در حال اجرا' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>{dev.status}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm mb-3">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">مساحت:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{dev.area} هکتار</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">واحدها:</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">{dev.units.toLocaleString('fa-IR')}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">پیشرفت:</span>
                  <span className="font-bold text-primary mr-1">{dev.progress}%</span>
                </div>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${dev.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

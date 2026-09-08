import { useState } from 'react';
import { civilDept, transportDept, servicesDept, financeDept, planningDept, socialDept, environmentDept, legalDept, adminDept, urbanDept } from '../data/deputiesSpecialized';
import DeputySection from '../components/DeputySection';

type DeputyType = 'civil' | 'transport' | 'services' | 'finance' | 'planning' | 'social' | 'environment' | 'legal' | 'admin' | 'urban';

export default function SpecializedDeputies() {
  const [selectedDeputy, setSelectedDeputy] = useState<DeputyType>('civil');

  // State برای هر معاونت
  const [civilData, setCivilData] = useState(civilDept);
  const [transportData, setTransportData] = useState(transportDept);
  const [servicesData, setServicesData] = useState(servicesDept);
  const [financeData, setFinanceData] = useState(financeDept);
  const [planningData, setPlanningData] = useState(planningDept);
  const [socialData, setSocialData] = useState(socialDept);
  const [environmentData, setEnvironmentData] = useState(environmentDept);
  const [legalData, setLegalData] = useState(legalDept);
  const [adminData, setAdminData] = useState(adminDept);
  const [urbanData, setUrbanData] = useState(urbanDept);

  const getCurrentData = () => {
    switch (selectedDeputy) {
      case 'civil': return civilData;
      case 'transport': return transportData;
      case 'services': return servicesData;
      case 'finance': return financeData;
      case 'planning': return planningData;
      case 'social': return socialData;
      case 'environment': return environmentData;
      case 'legal': return legalData;
      case 'admin': return adminData;
      case 'urban': return urbanData;
    }
  };

  const setCurrentData = (data: any) => {
    switch (selectedDeputy) {
      case 'civil': setCivilData(data); break;
      case 'transport': setTransportData(data); break;
      case 'services': setServicesData(data); break;
      case 'finance': setFinanceData(data); break;
      case 'planning': setPlanningData(data); break;
      case 'social': setSocialData(data); break;
      case 'environment': setEnvironmentData(data); break;
      case 'legal': setLegalData(data); break;
      case 'admin': setAdminData(data); break;
      case 'urban': setUrbanData(data); break;
    }
  };

  const deputyConfig = {
    civil: { title: 'معاونت عمرانی و فنی', icon: 'fa-hard-hat', color: 'blue', manager: civilDept.manager },
    transport: { title: 'معاونت حمل‌ونقل و ترافیک', icon: 'fa-traffic-light', color: 'amber', manager: transportDept.manager },
    services: { title: 'معاونت خدمات شهری', icon: 'fa-broom', color: 'green', manager: servicesDept.manager },
    finance: { title: 'معاونت مالی و اقتصادی', icon: 'fa-coins', color: 'emerald', manager: financeDept.manager },
    planning: { title: 'معاونت برنامه‌ریزی و توسعه', icon: 'fa-chart-line', color: 'purple', manager: planningDept.manager },
    social: { title: 'معاونت اجتماعی و فرهنگی', icon: 'fa-users', color: 'pink', manager: socialDept.manager },
    environment: { title: 'معاونت محیط زیست', icon: 'fa-leaf', color: 'teal', manager: environmentDept.manager },
    legal: { title: 'معاونت حقوقی', icon: 'fa-scale-balanced', color: 'indigo', manager: legalDept.manager },
    admin: { title: 'معاونت اداری و منابع انسانی', icon: 'fa-user-tie', color: 'cyan', manager: adminDept.manager },
    urban: { title: 'معاونت شهرسازی و معماری', icon: 'fa-city', color: 'orange', manager: urbanDept.manager },
  };

  const current = deputyConfig[selectedDeputy];
  const data = getCurrentData() as any;

  const handleDelete = (arrayName: string, id: number) => {
    if (!confirm('آیا از حذف این مورد مطمئن هستید؟')) return;
    const newData = { ...data };
    newData[arrayName] = newData[arrayName].filter((item: any) => item.id !== id);
    setCurrentData(newData);
  };

  const handleStatusChange = (arrayName: string, id: number, newStatus: string) => {
    const newData = { ...data };
    newData[arrayName] = newData[arrayName].map((item: any) => 
      item.id === id ? { ...item, status: newStatus } : item
    );
    setCurrentData(newData);
  };

  const handleAdd = (arrayName: string, newItem: any) => {
    const newData = { ...data };
    const maxId = Math.max(...newData[arrayName].map((item: any) => item.id), 0);
    newData[arrayName] = [...newData[arrayName], { ...newItem, id: maxId + 1 }];
    setCurrentData(newData);
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-sitemap ml-2 text-primary"></i>
        مدیریت تخصصی معاونت‌ها
      </h2>

      {/* انتخاب معاونت */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(deputyConfig).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setSelectedDeputy(key as DeputyType)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedDeputy === key
                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <i className={`fa-solid ${config.icon} text-${config.color}-600 text-xl mb-2`}></i>
            <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{config.title.replace('معاونت ', '')}</p>
          </button>
        ))}
      </div>

      {/* هدر معاونت */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl bg-${current.color}-100 dark:bg-${current.color}-900/30 flex items-center justify-center`}>
              <i className={`fa-solid ${current.icon} text-${current.color}-600 text-3xl`}></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{current.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">مدیر: {current.manager}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold text-primary">{data.performance}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">عملکرد</p>
          </div>
        </div>
      </div>

      {/* محتوای تخصصی هر معاونت */}
      {selectedDeputy === 'civil' && (
        <div className="space-y-6">
          <DeputySection
            title="پروژه‌های عمرانی"
            icon="fa-hard-hat"
            color="blue-600"
            items={data.projects}
            arrayName="projects"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'type', label: 'نوع *' },
              { key: 'area', label: 'مساحت *' },
              { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' },
              { key: 'contractor', label: 'پیمانکار' },
              { key: 'startDate', label: 'تاریخ شروع' },
              { key: 'endDate', label: 'تاریخ پایان' },
              { key: 'progress', label: 'پیشرفت', type: 'progress' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['در حال اجرا', 'کامل', 'متوقف'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="تجهیزات و ماشین‌آلات"
            icon="fa-truck"
            color="amber-600"
            items={data.equipment}
            arrayName="equipment"
            columns={[
              { key: 'name', label: 'نام تجهیز *' },
              { key: 'count', label: 'تعداد', type: 'number' },
              { key: 'lastService', label: 'آخرین سرویس' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'تعمیر'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="گزارش‌های بازرسی"
            icon="fa-clipboard-check"
            color="green-600"
            items={data.inspections}
            arrayName="inspections"
            columns={[
              { key: 'project', label: 'پروژه *' },
              { key: 'inspector', label: 'بازرس *' },
              { key: 'date', label: 'تاریخ' },
              { key: 'notes', label: 'یادداشت' },
              { key: 'result', label: 'نتیجه', type: 'status', options: ['تأیید', 'نیاز به اصلاح'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'transport' && (
        <div className="space-y-6">
          <DeputySection
            title="مسیرهای حمل‌ونقل"
            icon="fa-bus"
            color="amber-600"
            items={data.routes}
            arrayName="routes"
            columns={[
              { key: 'name', label: 'نام مسیر *' },
              { key: 'type', label: 'نوع *', type: 'select', options: ['اتوبوس', 'مترو', 'تاکسی', 'دوچرخه'] },
              { key: 'length', label: 'طول (کیلومتر)', type: 'number' },
              { key: 'stations', label: 'تعداد ایستگاه', type: 'number' },
              { key: 'dailyPassengers', label: 'مسافر روزانه', type: 'number' },
              { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="چراغ‌های ترافیک"
            icon="fa-traffic-light"
            color="red-600"
            items={data.trafficLights}
            arrayName="trafficLights"
            columns={[
              { key: 'location', label: 'موقعیت *' },
              { key: 'type', label: 'نوع', type: 'select', options: ['هوشمند', 'معمولی', 'چرخه‌ای'] },
              { key: 'lastUpdate', label: 'آخرین به‌روزرسانی' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'تعمیر'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="پارکینگ‌های عمومی"
            icon="fa-square-parking"
            color="blue-600"
            items={data.parkingLots}
            arrayName="parkingLots"
            columns={[
              { key: 'name', label: 'نام پارکینگ *' },
              { key: 'capacity', label: 'ظرفیت', type: 'number' },
              { key: 'occupied', label: 'اشغال', type: 'number' },
              { key: 'revenue', label: 'درآمد روزانه (تومان)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="تخلفات رانندگی"
            icon="fa-triangle-exclamation"
            color="red-600"
            items={data.violations}
            arrayName="violations"
            columns={[
              { key: 'type', label: 'نوع تخلف *' },
              { key: 'count', label: 'تعداد', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'services' && (
        <div className="space-y-6">
          <DeputySection
            title="نظافت معابر"
            icon="fa-broom"
            color="green-600"
            items={data.cleaning}
            arrayName="cleaning"
            columns={[
              { key: 'area', label: 'منطقه *' },
              { key: 'streets', label: 'تعداد خیابان', type: 'number' },
              { key: 'length', label: 'طول (کیلومتر)', type: 'number' },
              { key: 'workers', label: 'نیروی انسانی', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['انجام‌شده', 'در حال انجام', 'در انتظار'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="جمع‌آوری زباله"
            icon="fa-trash"
            color="amber-600"
            items={data.wasteCollection}
            arrayName="wasteCollection"
            columns={[
              { key: 'region', label: 'منطقه *' },
              { key: 'schedule', label: 'برنامه زمانی' },
              { key: 'daily', label: 'روزانه (تن)', type: 'number' },
              { key: 'recycled', label: 'بازیافت (تن)', type: 'number' },
              { key: 'vehicles', label: 'خودرو', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="فضای سبز"
            icon="fa-tree"
            color="green-600"
            items={data.greenSpaces}
            arrayName="greenSpaces"
            columns={[
              { key: 'name', label: 'نام *' },
              { key: 'area', label: 'مساحت (هکتار)', type: 'number' },
              { key: 'trees', label: 'تعداد درخت', type: 'number' },
              { key: 'flowers', label: 'تعداد گل', type: 'number' },
              { key: 'workers', label: 'نیرو', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="روشنایی معابر"
            icon="fa-lightbulb"
            color="yellow-600"
            items={data.lighting}
            arrayName="lighting"
            columns={[
              { key: 'area', label: 'منطقه *' },
              { key: 'total', label: 'کل چراغ', type: 'number' },
              { key: 'working', label: 'سالم', type: 'number' },
              { key: 'led', label: 'LED', type: 'number' },
              { key: 'energy', label: 'صرفه‌جویی (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'finance' && (
        <div className="space-y-6">
          <DeputySection
            title="منابع درآمد"
            icon="fa-arrow-down"
            color="green-600"
            items={data.income}
            arrayName="income"
            columns={[
              { key: 'source', label: 'منبع *' },
              { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
              { key: 'percentage', label: 'درصد (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="دسته‌بندی هزینه‌ها"
            icon="fa-arrow-up"
            color="red-600"
            items={data.expenses}
            arrayName="expenses"
            columns={[
              { key: 'category', label: 'دسته *' },
              { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
              { key: 'percentage', label: 'درصد (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="بدهی‌ها و تعهدات"
            icon="fa-hand-holding-dollar"
            color="amber-600"
            items={data.debts}
            arrayName="debts"
            columns={[
              { key: 'creditor', label: 'طلبکار *' },
              { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
              { key: 'dueDate', label: 'سررسید' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['جاری', 'معوق'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="سرمایه‌گذاری‌ها"
            icon="fa-chart-line"
            color="blue-600"
            items={data.investments}
            arrayName="investments"
            columns={[
              { key: 'project', label: 'پروژه *' },
              { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
              { key: 'expectedReturn', label: 'بازده مورد انتظار (%)', type: 'number' },
              { key: 'period', label: 'مدت' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'planning' && (
        <div className="space-y-6">
          <DeputySection
            title="طرح‌های استراتژیک"
            icon="fa-bullseye"
            color="purple-600"
            items={data.strategicPlans}
            arrayName="strategicPlans"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'horizon', label: 'چشم‌انداز' },
              { key: 'progress', label: 'پیشرفت', type: 'progress' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="شاخص‌های کلیدی عملکرد (KPIs)"
            icon="fa-chart-bar"
            color="blue-600"
            items={data.kpis}
            arrayName="kpis"
            columns={[
              { key: 'indicator', label: 'شاخص *' },
              { key: 'target', label: 'هدف', type: 'number' },
              { key: 'actual', label: 'واقعی', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="مطالعات امکان‌سنجی"
            icon="fa-magnifying-glass"
            color="amber-600"
            items={data.feasibilityStudies}
            arrayName="feasibilityStudies"
            columns={[
              { key: 'project', label: 'پروژه *' },
              { key: 'cost', label: 'هزینه (میلیارد)', type: 'number' },
              { key: 'duration', label: 'مدت' },
              { key: 'date', label: 'تاریخ' },
              { key: 'result', label: 'نتیجه', type: 'status', options: ['موجه', 'ناموجه'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'social' && (
        <div className="space-y-6">
          <DeputySection
            title="رویدادها و جشنواره‌ها"
            icon="fa-calendar-days"
            color="pink-600"
            items={data.events}
            arrayName="events"
            columns={[
              { key: 'name', label: 'نام رویداد *' },
              { key: 'date', label: 'تاریخ' },
              { key: 'location', label: 'مکان' },
              { key: 'attendees', label: 'شرکت‌کنندگان', type: 'number' },
              { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['تکمیل', 'در حال اجرا', 'برنامه‌ریزی'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="فرهنگسراها"
            icon="fa-building"
            color="purple-600"
            items={data.culturalCenters}
            arrayName="culturalCenters"
            columns={[
              { key: 'name', label: 'نام *' },
              { key: 'capacity', label: 'ظرفیت', type: 'number' },
              { key: 'monthlyVisitors', label: 'بازدید ماهانه', type: 'number' },
              { key: 'programs', label: 'برنامه‌ها', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="خدمات اجتماعی"
            icon="fa-hands-helping"
            color="green-600"
            items={data.socialServices}
            arrayName="socialServices"
            columns={[
              { key: 'service', label: 'خدمت *' },
              { key: 'beneficiaries', label: 'مستفیدان', type: 'number' },
              { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'environment' && (
        <div className="space-y-6">
          <DeputySection
            title="کیفیت هوا"
            icon="fa-wind"
            color="blue-600"
            items={data.airQuality}
            arrayName="airQuality"
            columns={[
              { key: 'station', label: 'ایستگاه *' },
              { key: 'aqi', label: 'AQI', type: 'number' },
              { key: 'pm25', label: 'PM2.5', type: 'number' },
              { key: 'pm10', label: 'PM10', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['سالم', 'ناسالم', 'بحرانی'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="بازیافت"
            icon="fa-recycle"
            color="green-600"
            items={data.recycling}
            arrayName="recycling"
            columns={[
              { key: 'material', label: 'ماده *' },
              { key: 'monthly', label: 'ماهانه (تن)', type: 'number' },
              { key: 'revenue', label: 'درآمد (میلیون)', type: 'number' },
              { key: 'centers', label: 'مراکز', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="درختکاری"
            icon="fa-tree"
            color="green-600"
            items={data.treePlanting}
            arrayName="treePlanting"
            columns={[
              { key: 'season', label: 'فصل *' },
              { key: 'trees', label: 'تعداد درخت', type: 'number' },
              { key: 'area', label: 'مساحت (هکتار)', type: 'number' },
              { key: 'survival', label: 'بقا (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'legal' && (
        <div className="space-y-6">
          <DeputySection
            title="قراردادها"
            icon="fa-file-contract"
            color="indigo-600"
            items={data.contracts}
            arrayName="contracts"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'party', label: 'طرف قرارداد' },
              { key: 'value', label: 'مبلغ (میلیارد)', type: 'number' },
              { key: 'startDate', label: 'شروع' },
              { key: 'endDate', label: 'پایان' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'پایان‌یافته'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="پرونده‌های قضایی"
            icon="fa-gavel"
            color="red-600"
            items={data.cases}
            arrayName="cases"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'number', label: 'شماره' },
              { key: 'lawyer', label: 'وکیل' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['مختومه', 'در جریان'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="آیین‌نامه‌ها و مقررات"
            icon="fa-book"
            color="blue-600"
            items={data.regulations}
            arrayName="regulations"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'date', label: 'تاریخ' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['تصویب‌شده', 'در حال بررسی'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'admin' && (
        <div className="space-y-6">
          <DeputySection
            title="کارکنان"
            icon="fa-users"
            color="cyan-600"
            items={data.employees}
            arrayName="employees"
            columns={[
              { key: 'name', label: 'نام *' },
              { key: 'position', label: 'سمت *' },
              { key: 'dept', label: 'بخش' },
              { key: 'type', label: 'نوع قرارداد', type: 'select', options: ['رسمی', 'پیمانی', 'شرکتی'] },
              { key: 'hireDate', label: 'تاریخ استخدام' },
              { key: 'salary', label: 'حقوق (میلیون)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="استخدام"
            icon="fa-briefcase"
            color="purple-600"
            items={data.recruitment}
            arrayName="recruitment"
            columns={[
              { key: 'position', label: 'سمت *' },
              { key: 'applicants', label: 'متقاضی', type: 'number' },
              { key: 'interviewed', label: 'مصاحبه', type: 'number' },
              { key: 'hired', label: 'استخدام', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['تکمیل', 'در حال بررسی'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="آموزش"
            icon="fa-graduation-cap"
            color="blue-600"
            items={data.training}
            arrayName="training"
            columns={[
              { key: 'course', label: 'دوره *' },
              { key: 'participants', label: 'شرکت‌کننده', type: 'number' },
              { key: 'duration', label: 'مدت' },
              { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="ارزیابی عملکرد"
            icon="fa-chart-line"
            color="green-600"
            items={data.performanceEvaluations}
            arrayName="performanceEvaluations"
            columns={[
              { key: 'employee', label: 'کارمند *' },
              { key: 'score', label: 'امتیاز', type: 'number' },
              { key: 'period', label: 'دوره' },
              { key: 'bonus', label: 'پاداش (میلیون)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}

      {selectedDeputy === 'urban' && (
        <div className="space-y-6">
          <DeputySection
            title="مجوزهای ساختمانی"
            icon="fa-file-signature"
            color="orange-600"
            items={data.permits}
            arrayName="permits"
            columns={[
              { key: 'title', label: 'عنوان *' },
              { key: 'applicant', label: 'درخواست‌کننده' },
              { key: 'area', label: 'مساحت (m²)', type: 'number' },
              { key: 'floors', label: 'طبقات', type: 'number' },
              { key: 'usage', label: 'کاربری', type: 'select', options: ['مسکونی', 'تجاری', 'اداری', 'بهداشتی', 'آموزشی'] },
              { key: 'fee', label: 'عوارض (میلیون)', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['تأیید', 'در انتظار', 'رد'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="کاربری اراضی"
            icon="fa-map"
            color="blue-600"
            items={data.zoning}
            arrayName="zoning"
            columns={[
              { key: 'zone', label: 'منطقه *' },
              { key: 'residential', label: 'مسکونی (%)', type: 'number' },
              { key: 'commercial', label: 'تجاری (%)', type: 'number' },
              { key: 'green', label: 'فضای سبز (%)', type: 'number' },
              { key: 'industrial', label: 'صنعتی (%)', type: 'number' },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="بناهای تاریخی"
            icon="fa-landmark"
            color="purple-600"
            items={data.heritage}
            arrayName="heritage"
            columns={[
              { key: 'name', label: 'نام *' },
              { key: 'era', label: 'دوره' },
              { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['مرمت‌شده', 'در حال مرمت', 'نیاز به مرمت'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
          <DeputySection
            title="پروژه‌های توسعه شهری"
            icon="fa-city"
            color="orange-600"
            items={data.developments}
            arrayName="developments"
            columns={[
              { key: 'name', label: 'نام *' },
              { key: 'area', label: 'مساحت (هکتار)', type: 'number' },
              { key: 'units', label: 'واحدها', type: 'number' },
              { key: 'progress', label: 'پیشرفت', type: 'progress' },
              { key: 'status', label: 'وضعیت', type: 'status', options: ['در حال اجرا', 'برنامه‌ریزی'] },
            ]}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onAdd={handleAdd}
          />
        </div>
      )}
    </div>
  );
}

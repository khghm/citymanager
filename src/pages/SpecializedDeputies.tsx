import { useState } from 'react';
import { civilDept, transportDept, servicesDept, financeDept, planningDept, socialDept, environmentDept, legalDept, adminDept, urbanDept } from '../data/deputiesSpecialized';
import DeputySection from '../components/DeputySection';

type DeputyType = 'civil' | 'transport' | 'services' | 'finance' | 'planning' | 'social' | 'environment' | 'legal' | 'admin' | 'urban';

export default function SpecializedDeputies() {
  const [selectedDeputy, setSelectedDeputy] = useState<DeputyType>('civil');

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

  const handleEdit = (arrayName: string, updatedItem: any) => {
    const newData = { ...data };
    newData[arrayName] = newData[arrayName].map((item: any) => 
      item.id === updatedItem.id ? updatedItem : item
    );
    setCurrentData(newData);
  };

  const sectionProps = (title: string, icon: string, color: string, items: any[], arrayName: string, columns: any[]) => ({
    title, icon, color, items, arrayName, columns,
    onDelete: handleDelete,
    onStatusChange: handleStatusChange,
    onAdd: handleAdd,
    onEdit: handleEdit,
  });

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-sitemap ml-2 text-primary"></i>
        مدیریت تخصصی معاونت‌ها
      </h2>

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

      {selectedDeputy === 'civil' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("پروژه‌های عمرانی", "fa-hard-hat", "blue-600", data.projects, "projects", [
            { key: 'title', label: 'عنوان *' }, { key: 'type', label: 'نوع *' }, { key: 'area', label: 'مساحت *' },
            { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' }, { key: 'contractor', label: 'پیمانکار' },
            { key: 'startDate', label: 'تاریخ شروع' }, { key: 'endDate', label: 'تاریخ پایان' },
            { key: 'progress', label: 'پیشرفت', type: 'progress' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['در حال اجرا', 'کامل', 'متوقف'] },
          ])} />
          <DeputySection {...sectionProps("تجهیزات و ماشین‌آلات", "fa-truck", "amber-600", data.equipment, "equipment", [
            { key: 'name', label: 'نام تجهیز *' }, { key: 'count', label: 'تعداد', type: 'number' },
            { key: 'lastService', label: 'آخرین سرویس' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'تعمیر'] },
          ])} />
          <DeputySection {...sectionProps("گزارش‌های بازرسی", "fa-clipboard-check", "green-600", data.inspections, "inspections", [
            { key: 'project', label: 'پروژه *' }, { key: 'inspector', label: 'بازرس *' },
            { key: 'date', label: 'تاریخ' }, { key: 'notes', label: 'یادداشت' },
            { key: 'result', label: 'نتیجه', type: 'status', options: ['تأیید', 'نیاز به اصلاح'] },
          ])} />
        </div>
      )}

      {selectedDeputy === 'transport' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("مسیرهای حمل‌ونقل", "fa-bus", "amber-600", data.routes, "routes", [
            { key: 'name', label: 'نام مسیر *' }, { key: 'type', label: 'نوع *', type: 'select', options: ['اتوبوس', 'مترو', 'تاکسی', 'دوچرخه'] },
            { key: 'length', label: 'طول (کیلومتر)', type: 'number' }, { key: 'stations', label: 'تعداد ایستگاه', type: 'number' },
            { key: 'dailyPassengers', label: 'مسافر روزانه', type: 'number' }, { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("چراغ‌های ترافیک", "fa-traffic-light", "red-600", data.trafficLights, "trafficLights", [
            { key: 'location', label: 'موقعیت *' }, { key: 'type', label: 'نوع', type: 'select', options: ['هوشمند', 'معمولی', 'چرخه‌ای'] },
            { key: 'lastUpdate', label: 'آخرین به‌روزرسانی' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'تعمیر'] },
          ])} />
          <DeputySection {...sectionProps("پارکینگ‌های عمومی", "fa-square-parking", "blue-600", data.parkingLots, "parkingLots", [
            { key: 'name', label: 'نام پارکینگ *' }, { key: 'capacity', label: 'ظرفیت', type: 'number' },
            { key: 'occupied', label: 'اشغال', type: 'number' }, { key: 'revenue', label: 'درآمد روزانه (تومان)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("تخلفات رانندگی", "fa-triangle-exclamation", "red-600", data.violations, "violations", [
            { key: 'type', label: 'نوع تخلف *' }, { key: 'count', label: 'تعداد', type: 'number' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'services' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("نظافت معابر", "fa-broom", "green-600", data.cleaning, "cleaning", [
            { key: 'area', label: 'منطقه *' }, { key: 'streets', label: 'تعداد خیابان', type: 'number' },
            { key: 'length', label: 'طول (کیلومتر)', type: 'number' }, { key: 'workers', label: 'نیروی انسانی', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['انجام‌شده', 'در حال انجام', 'در انتظار'] },
          ])} />
          <DeputySection {...sectionProps("جمع‌آوری زباله", "fa-trash", "amber-600", data.wasteCollection, "wasteCollection", [
            { key: 'region', label: 'منطقه *' }, { key: 'schedule', label: 'برنامه زمانی' },
            { key: 'daily', label: 'روزانه (تن)', type: 'number' }, { key: 'recycled', label: 'بازیافت (تن)', type: 'number' },
            { key: 'vehicles', label: 'خودرو', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("فضای سبز", "fa-tree", "green-600", data.greenSpaces, "greenSpaces", [
            { key: 'name', label: 'نام *' }, { key: 'area', label: 'مساحت (هکتار)', type: 'number' },
            { key: 'trees', label: 'تعداد درخت', type: 'number' }, { key: 'flowers', label: 'تعداد گل', type: 'number' },
            { key: 'workers', label: 'نیرو', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("روشنایی معابر", "fa-lightbulb", "yellow-600", data.lighting, "lighting", [
            { key: 'area', label: 'منطقه *' }, { key: 'total', label: 'کل چراغ', type: 'number' },
            { key: 'working', label: 'سالم', type: 'number' }, { key: 'led', label: 'LED', type: 'number' },
            { key: 'energy', label: 'صرفه‌جویی (%)', type: 'number' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'finance' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("منابع درآمد", "fa-arrow-down", "green-600", data.income, "income", [
            { key: 'source', label: 'منبع *' }, { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
            { key: 'percentage', label: 'درصد (%)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("دسته‌بندی هزینه‌ها", "fa-arrow-up", "red-600", data.expenses, "expenses", [
            { key: 'category', label: 'دسته *' }, { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
            { key: 'percentage', label: 'درصد (%)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("بدهی‌ها و تعهدات", "fa-hand-holding-dollar", "amber-600", data.debts, "debts", [
            { key: 'creditor', label: 'طلبکار *' }, { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
            { key: 'dueDate', label: 'سررسید' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['جاری', 'معوق'] },
          ])} />
          <DeputySection {...sectionProps("سرمایه‌گذاری‌ها", "fa-chart-line", "blue-600", data.investments, "investments", [
            { key: 'project', label: 'پروژه *' }, { key: 'amount', label: 'مبلغ (میلیارد)', type: 'number' },
            { key: 'expectedReturn', label: 'بازده مورد انتظار (%)', type: 'number' }, { key: 'period', label: 'مدت' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'planning' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("طرح‌های استراتژیک", "fa-bullseye", "purple-600", data.strategicPlans, "strategicPlans", [
            { key: 'title', label: 'عنوان *' }, { key: 'horizon', label: 'چشم‌انداز' },
            { key: 'progress', label: 'پیشرفت', type: 'progress' },
          ])} />
          <DeputySection {...sectionProps("شاخص‌های کلیدی عملکرد (KPIs)", "fa-chart-bar", "blue-600", data.kpis, "kpis", [
            { key: 'indicator', label: 'شاخص *' }, { key: 'target', label: 'هدف', type: 'number' },
            { key: 'actual', label: 'واقعی', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("مطالعات امکان‌سنجی", "fa-magnifying-glass", "amber-600", data.feasibilityStudies, "feasibilityStudies", [
            { key: 'project', label: 'پروژه *' }, { key: 'cost', label: 'هزینه (میلیارد)', type: 'number' },
            { key: 'duration', label: 'مدت' }, { key: 'date', label: 'تاریخ' },
            { key: 'result', label: 'نتیجه', type: 'status', options: ['موجه', 'ناموجه'] },
          ])} />
        </div>
      )}

      {selectedDeputy === 'social' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("رویدادها و جشنواره‌ها", "fa-calendar-days", "pink-600", data.events, "events", [
            { key: 'name', label: 'نام رویداد *' }, { key: 'date', label: 'تاریخ' }, { key: 'location', label: 'مکان' },
            { key: 'attendees', label: 'شرکت‌کنندگان', type: 'number' }, { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['تکمیل', 'در حال اجرا', 'برنامه‌ریزی'] },
          ])} />
          <DeputySection {...sectionProps("فرهنگسراها", "fa-building", "purple-600", data.culturalCenters, "culturalCenters", [
            { key: 'name', label: 'نام *' }, { key: 'capacity', label: 'ظرفیت', type: 'number' },
            { key: 'monthlyVisitors', label: 'بازدید ماهانه', type: 'number' }, { key: 'programs', label: 'برنامه‌ها', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("خدمات اجتماعی", "fa-hands-helping", "green-600", data.socialServices, "socialServices", [
            { key: 'service', label: 'خدمت *' }, { key: 'beneficiaries', label: 'مستفیدان', type: 'number' },
            { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'environment' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("کیفیت هوا", "fa-wind", "blue-600", data.airQuality, "airQuality", [
            { key: 'station', label: 'ایستگاه *' }, { key: 'aqi', label: 'AQI', type: 'number' },
            { key: 'pm25', label: 'PM2.5', type: 'number' }, { key: 'pm10', label: 'PM10', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['سالم', 'ناسالم', 'بحرانی'] },
          ])} />
          <DeputySection {...sectionProps("بازیافت", "fa-recycle", "green-600", data.recycling, "recycling", [
            { key: 'material', label: 'ماده *' }, { key: 'monthly', label: 'ماهانه (تن)', type: 'number' },
            { key: 'revenue', label: 'درآمد (میلیون)', type: 'number' }, { key: 'centers', label: 'مراکز', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("درختکاری", "fa-tree", "green-600", data.treePlanting, "treePlanting", [
            { key: 'season', label: 'فصل *' }, { key: 'trees', label: 'تعداد درخت', type: 'number' },
            { key: 'area', label: 'مساحت (هکتار)', type: 'number' }, { key: 'survival', label: 'بقا (%)', type: 'number' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'legal' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("قراردادها", "fa-file-contract", "indigo-600", data.contracts, "contracts", [
            { key: 'title', label: 'عنوان *' }, { key: 'party', label: 'طرف قرارداد' },
            { key: 'value', label: 'مبلغ (میلیارد)', type: 'number' }, { key: 'startDate', label: 'شروع' },
            { key: 'endDate', label: 'پایان' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['فعال', 'پایان‌یافته'] },
          ])} />
          <DeputySection {...sectionProps("پرونده‌های قضایی", "fa-gavel", "red-600", data.cases, "cases", [
            { key: 'title', label: 'عنوان *' }, { key: 'number', label: 'شماره' }, { key: 'lawyer', label: 'وکیل' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['مختومه', 'در جریان'] },
          ])} />
          <DeputySection {...sectionProps("آیین‌نامه‌ها و مقررات", "fa-book", "blue-600", data.regulations, "regulations", [
            { key: 'title', label: 'عنوان *' }, { key: 'date', label: 'تاریخ' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['تصویب‌شده', 'در حال بررسی'] },
          ])} />
        </div>
      )}

      {selectedDeputy === 'admin' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("کارکنان", "fa-users", "cyan-600", data.employees, "employees", [
            { key: 'name', label: 'نام *' }, { key: 'position', label: 'سمت *' }, { key: 'dept', label: 'بخش' },
            { key: 'type', label: 'نوع قرارداد', type: 'select', options: ['رسمی', 'پیمانی', 'شرکتی'] },
            { key: 'hireDate', label: 'تاریخ استخدام' }, { key: 'salary', label: 'حقوق (میلیون)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("استخدام", "fa-briefcase", "purple-600", data.recruitment, "recruitment", [
            { key: 'position', label: 'سمت *' }, { key: 'applicants', label: 'متقاضی', type: 'number' },
            { key: 'interviewed', label: 'مصاحبه', type: 'number' }, { key: 'hired', label: 'استخدام', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['تکمیل', 'در حال بررسی'] },
          ])} />
          <DeputySection {...sectionProps("آموزش", "fa-graduation-cap", "blue-600", data.training, "training", [
            { key: 'course', label: 'دوره *' }, { key: 'participants', label: 'شرکت‌کننده', type: 'number' },
            { key: 'duration', label: 'مدت' }, { key: 'satisfaction', label: 'رضایت (%)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("ارزیابی عملکرد", "fa-chart-line", "green-600", data.performanceEvaluations, "performanceEvaluations", [
            { key: 'employee', label: 'کارمند *' }, { key: 'score', label: 'امتیاز', type: 'number' },
            { key: 'period', label: 'دوره' }, { key: 'bonus', label: 'پاداش (میلیون)', type: 'number' },
          ])} />
        </div>
      )}

      {selectedDeputy === 'urban' && (
        <div className="space-y-6">
          <DeputySection {...sectionProps("مجوزهای ساختمانی", "fa-file-signature", "orange-600", data.permits, "permits", [
            { key: 'title', label: 'عنوان *' }, { key: 'applicant', label: 'درخواست‌کننده' },
            { key: 'area', label: 'مساحت (m²)', type: 'number' }, { key: 'floors', label: 'طبقات', type: 'number' },
            { key: 'usage', label: 'کاربری', type: 'select', options: ['مسکونی', 'تجاری', 'اداری', 'بهداشتی', 'آموزشی'] },
            { key: 'fee', label: 'عوارض (میلیون)', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['تأیید', 'در انتظار', 'رد'] },
          ])} />
          <DeputySection {...sectionProps("کاربری اراضی", "fa-map", "blue-600", data.zoning, "zoning", [
            { key: 'zone', label: 'منطقه *' }, { key: 'residential', label: 'مسکونی (%)', type: 'number' },
            { key: 'commercial', label: 'تجاری (%)', type: 'number' }, { key: 'green', label: 'فضای سبز (%)', type: 'number' },
            { key: 'industrial', label: 'صنعتی (%)', type: 'number' },
          ])} />
          <DeputySection {...sectionProps("بناهای تاریخی", "fa-landmark", "purple-600", data.heritage, "heritage", [
            { key: 'name', label: 'نام *' }, { key: 'era', label: 'دوره' },
            { key: 'budget', label: 'بودجه (میلیارد)', type: 'number' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['مرمت‌شده', 'در حال مرمت', 'نیاز به مرمت'] },
          ])} />
          <DeputySection {...sectionProps("پروژه‌های توسعه شهری", "fa-city", "orange-600", data.developments, "developments", [
            { key: 'name', label: 'نام *' }, { key: 'area', label: 'مساحت (هکتار)', type: 'number' },
            { key: 'units', label: 'واحدها', type: 'number' }, { key: 'progress', label: 'پیشرفت', type: 'progress' },
            { key: 'status', label: 'وضعیت', type: 'status', options: ['در حال اجرا', 'برنامه‌ریزی'] },
          ])} />
        </div>
      )}
    </div>
  );
}

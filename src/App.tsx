import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Budget from './pages/Budget';
import Personnel from './pages/Personnel';
import Services from './pages/Services';
import Complaints from './pages/Complaints';
import Traffic from './pages/Traffic';
import Waste from './pages/Waste';
import Water from './pages/Water';
import Permits from './pages/Permits';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import TrafficPrediction from './pages/TrafficPrediction';
import IoTDashboard from './pages/IoTDashboard';
import AIAssistant from './pages/AIAssistant';
import DigitalTwin from './pages/DigitalTwin';
import Blockchain from './pages/Blockchain';
import CrisisManagement from './pages/CrisisManagement';
import SmartTransport from './pages/SmartTransport';
import EnergyManagement from './pages/EnergyManagement';
import AIInnovation from './pages/AIInnovation';
import AdvancedIoT from './pages/AdvancedIoT';
import ARVRBlockchain from './pages/ARVRBlockchain';
import AnalyticsCitizen from './pages/AnalyticsCitizen';
import TransportGreen from './pages/TransportGreen';
import HealthSystems from './pages/HealthSystems';
import OperationalFeatures from './pages/OperationalFeatures';
import DeputiesManagement from './pages/DeputiesManagement';
import { notifications } from './data/mockData';

// آیتم‌های منوی کناری
const menuItems = [
  { id: 'dashboard', label: 'پیشخوان', icon: 'fa-gauge-high', section: 'اصلی' },
  { id: 'projects', label: 'پروژه‌ها', icon: 'fa-hard-hat', section: 'اصلی' },
  { id: 'budget', label: 'بودجه', icon: 'fa-coins', section: 'اصلی' },
  { id: 'personnel', label: 'پرسنل', icon: 'fa-users', section: 'اصلی' },
  { id: 'services', label: 'خدمات شهری', icon: 'fa-city', section: 'اصلی' },
  { id: 'complaints', label: 'شکایات', icon: 'fa-comment-dots', section: 'اصلی' },
  { id: 'traffic', label: 'ترافیک', icon: 'fa-traffic-light', section: 'اصلی' },
  { id: 'waste', label: 'زباله', icon: 'fa-trash', section: 'اصلی' },
  { id: 'water', label: 'آب و فاضلاب', icon: 'fa-droplet', section: 'اصلی' },
  { id: 'permits', label: 'مجوزها', icon: 'fa-file-signature', section: 'اصلی' },
  { id: 'reports', label: 'گزارش‌ها', icon: 'fa-file-lines', section: 'اصلی' },
  { id: 'settings', label: 'تنظیمات', icon: 'fa-gear', section: 'اصلی' },
  { id: 'deputies', label: 'مدیریت معاونت‌ها', icon: 'fa-users-gear', section: 'اصلی' },
  { id: 'traffic-prediction', label: 'پیش‌بینی ترافیک', icon: 'fa-brain', section: 'فاز ۱' },
  { id: 'iot', label: 'داشبورد IoT', icon: 'fa-microchip', section: 'فاز ۱' },
  { id: 'ai-assistant', label: 'دستیار هوشمند', icon: 'fa-robot', section: 'فاز ۲' },
  { id: 'digital-twin', label: 'دیجیتال توین', icon: 'fa-cube', section: 'فاز ۳' },
  { id: 'blockchain', label: 'بلاکچین', icon: 'fa-link', section: 'فاز ۴' },
  { id: 'crisis', label: 'مدیریت بحران', icon: 'fa-triangle-exclamation', section: 'فاز ۴' },
  { id: 'smart-transport', label: 'حمل‌ونقل هوشمند', icon: 'fa-bus', section: 'فاز ۴' },
  { id: 'energy', label: 'مدیریت انرژی', icon: 'fa-bolt', section: 'فاز ۴' },
  { id: 'ai-innovation', label: 'هوش مصنوعی پیشرفته', icon: 'fa-brain', section: 'نوآوری' },
  { id: 'advanced-iot', label: 'سنسورهای IoT', icon: 'fa-microchip', section: 'نوآوری' },
  { id: 'arvr-blockchain', label: 'AR/VR و بلاکچین', icon: 'fa-vr-cardboard', section: 'نوآوری' },
  { id: 'analytics-citizen', label: 'تحلیل و شهروندی', icon: 'fa-chart-line', section: 'نوآوری' },
  { id: 'transport-green', label: 'حمل‌ونقل و محیط زیست', icon: 'fa-leaf', section: 'نوآوری' },
  { id: 'health', label: 'سلامت شهری', icon: 'fa-heart-pulse', section: 'نوآوری' },
  { id: 'operational', label: 'سیستم‌های عملیاتی', icon: 'fa-rocket', section: 'نوآوری' },
];

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  // به‌روزرسانی ساعت
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(now);
      const dateStr = new Intl.DateTimeFormat('fa-IR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(now);
      setCurrentTime(timeStr);
      setCurrentDate(dateStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // اعمال حالت تاریک
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects />;
      case 'budget': return <Budget />;
      case 'personnel': return <Personnel />;
      case 'services': return <Services />;
      case 'complaints': return <Complaints />;
      case 'traffic': return <Traffic />;
      case 'waste': return <Waste />;
      case 'water': return <Water />;
      case 'permits': return <Permits />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'traffic-prediction': return <TrafficPrediction />;
      case 'iot': return <IoTDashboard />;
      case 'ai-assistant': return <AIAssistant />;
      case 'digital-twin': return <DigitalTwin />;
      case 'blockchain': return <Blockchain />;
      case 'crisis': return <CrisisManagement />;
      case 'smart-transport': return <SmartTransport />;
      case 'energy': return <EnergyManagement />;
      case 'ai-innovation': return <AIInnovation />;
      case 'advanced-iot': return <AdvancedIoT />;
      case 'arvr-blockchain': return <ARVRBlockchain />;
      case 'analytics-citizen': return <AnalyticsCitizen />;
      case 'transport-green': return <TransportGreen />;
      case 'health': return <HealthSystems />;
      case 'operational': return <OperationalFeatures />;
      case 'deputies': return <DeputiesManagement />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : 'bg-slate-50'} transition-colors duration-300`}>
      {/* Overlay برای موبایل */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* منوی کناری */}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-primary-dark to-primary text-white z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}>
        {/* لوگو */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-building-columns text-primary-dark text-lg"></i>
            </div>
            <div>
              <h1 className="font-bold text-sm">شهرداری</h1>
              <p className="text-xs text-white/60">سامانه مدیریت شهری</p>
            </div>
          </div>
        </div>

        {/* آیتم‌های منو */}
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100%-140px)] scrollbar-thin">
          {/* بخش اصلی */}
          <p className="text-xs text-white/40 px-4 py-2 font-bold">بخش اصلی</p>
          {menuItems.filter(i => i.section === 'اصلی').map(item => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); setSidebarOpen(false); }}
              className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-right ${
                activePage === item.id ? 'sidebar-active' : 'text-white/80 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5 text-center ${activePage === item.id ? 'text-gold' : ''}`}></i>
              <span>{item.label}</span>
            </button>
          ))}

          {/* فازهای پیشرفته */}
          <p className="text-xs text-white/40 px-4 py-2 font-bold mt-4">فازهای پیشرفته</p>
          {menuItems.filter(i => i.section !== 'اصلی').map(item => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); setSidebarOpen(false); }}
              className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-right ${
                activePage === item.id ? 'sidebar-active' : 'text-white/80 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5 text-center ${activePage === item.id ? 'text-gold' : ''}`}></i>
              <span>{item.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/60 mr-auto">{item.section}</span>
            </button>
          ))}
        </nav>

        {/* پایین منو */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-user text-xs"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">محمد احمدی</p>
              <p className="text-xs text-white/50">شهردار</p>
            </div>
          </div>
        </div>
      </aside>

      {/* محتوای اصلی */}
      <div className="lg:mr-64 min-h-screen">
        {/* هدر */}
        <header className="sticky top-0 z-30 bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between px-4 py-3">
            {/* سمت راست */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-800 dark:text-white">{currentDate}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{currentTime}</p>
              </div>
            </div>

            {/* سمت چپ */}
            <div className="flex items-center gap-2">
              {/* اعلان‌ها */}
              <div className="relative">
                <button
                  onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
                  className="relative w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <i className="fa-solid fa-bell"></i>
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute left-0 top-12 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                    <div className="p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                      <h4 className="font-bold text-sm text-slate-800 dark:text-white">اعلان‌ها</h4>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{unreadCount} جدید</span>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map(n => (
                        <div key={n.id} className={`p-3 border-b border-slate-100 dark:border-slate-700/50 ${!n.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                          <p className="text-sm text-slate-700 dark:text-slate-200">{n.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* پروفایل */}
              <div className="relative">
                <button
                  onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <i className="fa-solid fa-user text-xs"></i>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-200">شهردار</span>
                  <i className="fa-solid fa-chevron-down text-xs text-slate-400 hidden sm:block"></i>
                </button>
                {showProfile && (
                  <div className="absolute left-0 top-12 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                    <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                      <p className="font-medium text-sm text-slate-800 dark:text-white">محمد احمدی</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">mayor@city.ir</p>
                    </div>
                    <button
                      onClick={() => { setActivePage('settings'); setShowProfile(false); }}
                      className="w-full text-right px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <i className="fa-solid fa-gear ml-2"></i>تنظیمات
                    </button>
                    <button className="w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                      <i className="fa-solid fa-right-from-bracket ml-2"></i>خروج
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* محتوای صفحه */}
        <main className="p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

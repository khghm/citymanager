import { useState } from 'react';

interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Settings({ darkMode, setDarkMode }: SettingsProps) {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSms, setNotifSms] = useState(false);
  const [notifComplaint, setNotifComplaint] = useState(true);
  const [notifProject, setNotifProject] = useState(true);
  const [notifBudget, setNotifBudget] = useState(false);
  const [notifTraffic, setNotifTraffic] = useState(true);
  const [language, setLanguage] = useState('fa');
  const [autoBackup, setAutoBackup] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-gear ml-2 text-primary"></i>
        تنظیمات
      </h2>

      {saved && (
        <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-center gap-2">
          <i className="fa-solid fa-check-circle"></i>
          تنظیمات با موفقیت ذخیره شد
        </div>
      )}

      {/* تنظیمات ظاهری */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-palette ml-2 text-primary"></i>
          تنظیمات ظاهری
        </h3>
        <div className="space-y-4">
          <ToggleItem label="حالت تاریک" description="تغییر تم بین روشن و تاریک" checked={darkMode} onChange={setDarkMode} />
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">زبان</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">انتخاب زبان رابط کاربری</p>
            </div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <option value="fa">فارسی</option>
              <option value="en">English</option>
              <option value="ar">العربیة</option>
            </select>
          </div>
        </div>
      </div>

      {/* تنظیمات اعلان‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-bell ml-2 text-primary"></i>
          تنظیمات اعلان‌ها
        </h3>
        <div className="space-y-3">
          <ToggleItem label="اعلان‌های ایمیلی" description="دریافت اعلان‌ها از طریق ایمیل" checked={notifEmail} onChange={setNotifEmail} />
          <ToggleItem label="اعلان‌های پیامکی" description="دریافت اعلان‌ها از طریق پیامک" checked={notifSms} onChange={setNotifSms} />
          <ToggleItem label="شکایات جدید" description="اعلان هنگام ثبت شکایت جدید" checked={notifComplaint} onChange={setNotifComplaint} />
          <ToggleItem label="به‌روزرسانی پروژه‌ها" description="اعلان تغییر وضعیت پروژه‌ها" checked={notifProject} onChange={setNotifProject} />
          <ToggleItem label="هشدارهای بودجه" description="اعلان هنگام تجاوز از سقف بودجه" checked={notifBudget} onChange={setNotifBudget} />
          <ToggleItem label="گزارش ترافیک" description="اعلان وضعیت ترافیک بحرانی" checked={notifTraffic} onChange={setNotifTraffic} />
        </div>
      </div>

      {/* اطلاعات حساب */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-user-circle ml-2 text-primary"></i>
          اطلاعات حساب کاربری
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">نام و نام خانوادگی</label>
            <input type="text" defaultValue="محمد احمدی" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">ایمیل</label>
            <input type="email" defaultValue="mayor@city.ir" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">شماره تماس</label>
            <input type="text" defaultValue="09121234567" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">سمت</label>
            <input type="text" defaultValue="شهردار" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" readOnly />
          </div>
        </div>
      </div>

      {/* تنظیمات سیستم */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-server ml-2 text-primary"></i>
          تنظیمات سیستم
        </h3>
        <div className="space-y-4">
          <ToggleItem label="پشتیبان‌گیری خودکار" description="پشتیبان‌گیری روزانه از اطلاعات" checked={autoBackup} onChange={setAutoBackup} />
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">نسخه سیستم</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">نسخه فعلی نرم‌افزار</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">v2.5.0</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">آخرین به‌روزرسانی</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">تاریخ آخرین بروزرسانی</p>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">1402/11/15</span>
          </div>
        </div>
      </div>

      {/* دکمه ذخیره */}
      <div className="flex gap-3">
        <button onClick={handleSave} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-floppy-disk"></i>
          ذخیره تنظیمات
        </button>
        <button className="px-6 py-3 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
          بازنشانی پیش‌فرض
        </button>
      </div>
    </div>
  );
}

function ToggleItem({ label, description, checked, onChange }: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
      <div>
        <p className="font-medium text-slate-700 dark:text-slate-200">{label}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-14 h-7 rounded-full transition-colors ${checked ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
      >
        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all ${checked ? 'right-0.5' : 'right-7'}`}></div>
      </button>
    </div>
  );
}

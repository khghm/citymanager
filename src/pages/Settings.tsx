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
  const [language, setLanguage] = useState('fa');

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-gear ml-2 text-primary"></i>
        تنظیمات
      </h2>

      {/* تنظیمات ظاهری */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-palette ml-2 text-primary"></i>
          تنظیمات ظاهری
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">حالت تاریک</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">تغییر تم بین روشن و تاریک</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-primary' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all ${darkMode ? 'right-0.5' : 'right-7'}`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-200">زبان</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">انتخاب زبان رابط کاربری</p>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
              <option value="ar">العربیة</option>
            </select>
          </div>
        </div>
      </div>

      {/* تنظیمات اعلان‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-bell ml-2 text-primary"></i>
          تنظیمات اعلان‌ها
        </h3>
        <div className="space-y-4">
          <ToggleItem label="اعلان‌های ایمیلی" description="دریافت اعلان‌ها از طریق ایمیل" checked={notifEmail} onChange={setNotifEmail} />
          <ToggleItem label="اعلان‌های پیامکی" description="دریافت اعلان‌ها از طریق پیامک" checked={notifSms} onChange={setNotifSms} />
          <ToggleItem label="شکایات جدید" description="اعلان هنگام ثبت شکایت جدید" checked={notifComplaint} onChange={setNotifComplaint} />
          <ToggleItem label="به‌روزرسانی پروژه‌ها" description="اعلان تغییر وضعیت پروژه‌ها" checked={notifProject} onChange={setNotifProject} />
          <ToggleItem label="هشدارهای بودجه" description="اعلان هنگام تجاوز از سقف بودجه" checked={notifBudget} onChange={setNotifBudget} />
        </div>
      </div>

      {/* اطلاعات حساب */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
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
        <button className="mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
          ذخیره تغییرات
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

import { useState } from 'react';

export default function Reports() {
  const [reportType, setReportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!reportType || !startDate || !endDate) return;
    setGenerated(true);
    setTimeout(() => setGenerated(false), 3000);
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-file-lines ml-2 text-primary"></i>
        گزارش‌گیری
      </h2>

      {/* فرم گزارش */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">ایجاد گزارش جدید</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">نوع گزارش</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            >
              <option value="">انتخاب کنید</option>
              <option value="budget">گزارش بودجه</option>
              <option value="projects">گزارش پروژه‌ها</option>
              <option value="complaints">گزارش شکایات</option>
              <option value="personnel">گزارش پرسنل</option>
              <option value="traffic">گزارش ترافیک</option>
              <option value="services">گزارش خدمات شهری</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">از تاریخ</label>
            <input
              type="text"
              placeholder="1402/01/01"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">تا تاریخ</label>
            <input
              type="text"
              placeholder="1402/12/29"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleGenerate}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <i className="fa-solid fa-file-pdf"></i>
            تولید PDF
          </button>
          <button
            onClick={handleGenerate}
            className="bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <i className="fa-solid fa-print"></i>
            چاپ
          </button>
        </div>
        {generated && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm">
            <i className="fa-solid fa-check-circle ml-1"></i>
            گزارش با موفقیت تولید شد (شبیه‌سازی)
          </div>
        )}
      </div>

      {/* گزارش‌های قبلی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">گزارش‌های اخیر</h3>
        <div className="space-y-3">
          {[
            { title: 'گزارش ماهانه بودجه - آبان', date: '1402/09/01', type: 'بودجه' },
            { title: 'گزارش عملکرد پروژه‌ها - فصل پاییز', date: '1402/09/15', type: 'پروژه' },
            { title: 'گزارش شکایات شهروندان - آذر', date: '1402/10/01', type: 'شکایات' },
            { title: 'گزارش ترافیک شهری - نیمه دوم سال', date: '1402/10/10', type: 'ترافیک' },
            { title: 'گزارش عملکرد خدمات شهری - ماهانه', date: '1402/11/01', type: 'خدمات' },
          ].map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <i className="fa-solid fa-file-lines text-primary"></i>
                </div>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-200 text-sm">{report.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{report.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300">{report.type}</span>
                <button className="text-primary hover:text-primary-dark">
                  <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

interface Report {
  id: number;
  title: string;
  date: string;
  type: string;
  size: string;
  period: string;
}

const reportsData: Report[] = [
  { id: 1, title: 'گزارش مالی ماهانه', date: '1402/11/15', type: 'مالی', size: '2.4 MB', period: 'بهمن ۱۴۰۲' },
  { id: 2, title: 'گزارش پروژه‌های فعال', date: '1402/11/14', type: 'پروژه', size: '1.8 MB', period: 'فصل زمستان' },
  { id: 3, title: 'گزارش شکایات شهروندان', date: '1402/11/10', type: 'شکایات', size: '3.2 MB', period: 'آذر-بهمن' },
  { id: 4, title: 'گزارش عملکرد پرسنل', date: '1402/11/08', type: 'پرسنل', size: '1.5 MB', period: 'سه‌ماهه سوم' },
  { id: 5, title: 'گزارش ترافیک شهری', date: '1402/11/05', type: 'ترافیک', size: '4.1 MB', period: 'نیمه دوم سال' },
  { id: 6, title: 'گزارش خدمات شهری', date: '1402/11/01', type: 'خدمات', size: '2.8 MB', period: 'ماهانه' },
  { id: 7, title: 'گزارش بودجه و هزینه‌ها', date: '1402/10/28', type: 'بودجه', size: '3.5 MB', period: 'سالانه' },
  { id: 8, title: 'گزارش آب و فاضلاب', date: '1402/10/25', type: 'آب', size: '2.1 MB', period: 'فصلی' },
];

export default function Reports() {
  const [reportType, setReportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [format, setFormat] = useState('pdf');
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    if (!reportType || !startDate || !endDate) {
      alert('لطفاً تمام فیلدها را پر کنید');
      return;
    }
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
      setTimeout(() => setGenerated(false), 4000);
    }, 2000);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'مالی': case 'بودجه': return 'fa-coins';
      case 'پروژه': return 'fa-hard-hat';
      case 'شکایات': return 'fa-comments';
      case 'پرسنل': return 'fa-users';
      case 'ترافیک': return 'fa-car';
      case 'خدمات': return 'fa-hands-helping';
      case 'آب': return 'fa-droplet';
      default: return 'fa-file-lines';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-file-lines ml-2 text-primary"></i>
        گزارش‌گیری
      </h2>

      {/* فرم تولید گزارش */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-plus-circle ml-2 text-primary"></i>
          ایجاد گزارش جدید
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">نوع گزارش *</label>
            <select value={reportType} onChange={(e) => setReportType(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <option value="">انتخاب کنید</option>
              <option value="budget">گزارش بودجه</option>
              <option value="projects">گزارش پروژه‌ها</option>
              <option value="complaints">گزارش شکایات</option>
              <option value="personnel">گزارش پرسنل</option>
              <option value="traffic">گزارش ترافیک</option>
              <option value="services">گزارش خدمات شهری</option>
              <option value="water">گزارش آب و فاضلاب</option>
              <option value="waste">گزارش زباله و پسماند</option>
              <option value="permits">گزارش مجوزها</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">از تاریخ *</label>
            <input type="text" placeholder="1402/01/01" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">تا تاریخ *</label>
            <input type="text" placeholder="1402/12/29" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">فرمت خروجی</label>
            <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="print">چاپ مستقیم</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {generating ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                در حال تولید...
              </>
            ) : (
              <>
                <i className={`fa-solid ${format === 'pdf' ? 'fa-file-pdf' : format === 'excel' ? 'fa-file-excel' : 'fa-print'}`}></i>
                تولید {format === 'pdf' ? 'PDF' : format === 'excel' ? 'Excel' : 'چاپ'}
              </>
            )}
          </button>
        </div>
        {generated && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-center gap-2">
            <i className="fa-solid fa-check-circle"></i>
            گزارش با موفقیت تولید و آماده دانلود است (شبیه‌سازی)
          </div>
        )}
      </div>

      {/* گزارش‌های قبلی */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-clock-rotate-left ml-2 text-primary"></i>
          گزارش‌های اخیر
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">بازه زمانی</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تاریخ تهیه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">حجم</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {reportsData.map(report => (
                <tr key={report.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <i className={`fa-solid ${getTypeIcon(report.type)} text-primary text-xs`}></i>
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-200">{report.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{report.type}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{report.period}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{report.date}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{report.size}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-primary transition-colors" title="دانلود">
                        <i className="fa-solid fa-download text-xs"></i>
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-primary transition-colors" title="مشاهده">
                        <i className="fa-solid fa-eye text-xs"></i>
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors" title="حذف">
                        <i className="fa-solid fa-trash text-xs"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* گزارش‌های زمان‌بندی شده */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-calendar-days ml-2 text-primary"></i>
          گزارش‌های زمان‌بندی‌شده
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-calendar-week text-primary"></i>
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">هفتگی</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش عملکرد خدمات شهری</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش شکایات هفتگی</p>
            <p className="text-xs text-primary mt-2">ارسال: هر شنبه</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-calendar text-primary"></i>
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">ماهانه</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش مالی ماهانه</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش پروژه‌ها</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش ترافیک</p>
            <p className="text-xs text-primary mt-2">ارسال: اول هر ماه</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-calendar-check text-primary"></i>
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">فصلی</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش جامع عملکرد</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">گزارش بودجه فصلی</p>
            <p className="text-xs text-primary mt-2">ارسال: پایان هر فصل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

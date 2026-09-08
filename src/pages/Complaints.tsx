import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { complaints as initialComplaints, Complaint } from '../data/mockData';

export default function Complaints() {
  const [complaintsList, setComplaintsList] = useState<Complaint[]>(initialComplaints);
  const [statusFilter, setStatusFilter] = useState('همه');
  const [priorityFilter, setPriorityFilter] = useState('همه');
  const [regionFilter, setRegionFilter] = useState('همه');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newComplaint, setNewComplaint] = useState({ title: '', type: '', region: '', priority: 'متوسط', citizen: '', phone: '', description: '' });

  const regions = ['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۵', 'منطقه ۶'];
  const types = ['نظافت معابر', 'خرابی آسفالت', 'مشکل روشنایی', 'سروصدا', 'جمع‌آوری زباله', 'مشکل فاضلاب', 'سد معبر', 'درخت‌کاری', 'حفره در خیابان', 'کمبود فضای سبز'];

  const filtered = complaintsList.filter(c => {
    if (statusFilter !== 'همه' && c.status !== statusFilter) return false;
    if (priorityFilter !== 'همه' && c.priority !== priorityFilter) return false;
    if (regionFilter !== 'همه' && c.region !== regionFilter) return false;
    if (searchTerm && !c.title.includes(searchTerm) && !c.citizen.includes(searchTerm)) return false;
    return true;
  });

  const pendingCount = complaintsList.filter(c => c.status === 'در انتظار').length;
  const reviewingCount = complaintsList.filter(c => c.status === 'در حال بررسی').length;
  const resolvedCount = complaintsList.filter(c => c.status === 'حل‌شده').length;
  const highPriority = complaintsList.filter(c => c.priority === 'بالا' && c.status !== 'حل‌شده').length;

  const regionData = regions.map(r => ({
    region: r,
    count: complaintsList.filter(c => c.region === r).length,
    resolved: complaintsList.filter(c => c.region === r && c.status === 'حل‌شده').length,
  }));

  const handleAdd = () => {
    if (!newComplaint.title || !newComplaint.type || !newComplaint.region) return;
    const complaint: Complaint = {
      id: complaintsList.length + 1,
      title: newComplaint.title,
      type: newComplaint.type,
      region: newComplaint.region,
      priority: newComplaint.priority,
      status: 'در انتظار',
      date: new Date().toLocaleDateString('fa-IR'),
      citizen: newComplaint.citizen || 'ناشناس',
      phone: newComplaint.phone || '-',
      description: newComplaint.description || '',
      responseTime: '-',
    };
    setComplaintsList([complaint, ...complaintsList]);
    setShowModal(false);
    setNewComplaint({ title: '', type: '', region: '', priority: 'متوسط', citizen: '', phone: '', description: '' });
  };

  const handleStatusChange = (id: number, status: string) => {
    setComplaintsList(complaintsList.map(c => c.id === id ? { ...c, status } : c));
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف این شکایت مطمئن هستید؟')) {
      setComplaintsList(complaintsList.filter(c => c.id !== id));
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بالا': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'متوسط': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'پایین': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'در حال بررسی': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'حل‌شده': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      {/* هدر */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-comments ml-2 text-primary"></i>
          مدیریت شکایات
        </h2>
        <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-plus"></i>
          ثبت شکایت
        </button>
      </div>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{complaintsList.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">کل شکایات</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">در انتظار</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{resolvedCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">حل‌شده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-red-600">{highPriority}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">اولویت بالا (فعال)</p>
        </div>
      </div>

      {/* نمودار منطقه‌ای */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">شکایات به تفکیک منطقه</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" name="کل" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="resolved" name="حل‌شده" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* فیلترها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="relative">
            <i className="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input type="text" placeholder="جستجو..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pr-10 pl-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه وضعیت‌ها</option>
            <option value="در انتظار">در انتظار</option>
            <option value="در حال بررسی">در حال بررسی</option>
            <option value="حل‌شده">حل‌شده</option>
          </select>
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه اولویت‌ها</option>
            <option value="بالا">بالا</option>
            <option value="متوسط">متوسط</option>
            <option value="پایین">پایین</option>
          </select>
          <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه مناطق</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* جدول */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">#</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">شهروند</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">اولویت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تاریخ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, idx) => (
                <tr key={c.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-slate-700 dark:text-slate-200">{c.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{c.type}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-slate-700 dark:text-slate-200">{c.citizen}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{c.phone}</p>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{c.region}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(c.priority)}`}>{c.priority}</span>
                  </td>
                  <td className="py-3 px-4">
                    <select value={c.status} onChange={(e) => handleStatusChange(c.id, e.target.value)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${getStatusColor(c.status)}`}>
                      <option value="در انتظار">در انتظار</option>
                      <option value="در حال بررسی">در حال بررسی</option>
                      <option value="حل‌شده">حل‌شده</option>
                    </select>
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400 text-xs">{c.date}</td>
                  <td className="py-3 px-4">
                    <button onClick={() => handleDelete(c.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors">
                      <i className="fa-solid fa-trash text-xs"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-10 text-slate-500 dark:text-slate-400">
            <i className="fa-solid fa-inbox text-3xl mb-2"></i>
            <p>شکایتی یافت نشد</p>
          </div>
        )}
      </div>

      {/* مودال ثبت شکایت */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              <i className="fa-solid fa-plus ml-2 text-primary"></i>
              ثبت شکایت جدید
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">عنوان *</label>
                <input type="text" value={newComplaint.title} onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">نوع *</label>
                  <select value={newComplaint.type} onChange={(e) => setNewComplaint({...newComplaint, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="">انتخاب</option>
                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">منطقه *</label>
                  <select value={newComplaint.region} onChange={(e) => setNewComplaint({...newComplaint, region: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="">انتخاب</option>
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">نام شهروند</label>
                  <input type="text" value={newComplaint.citizen} onChange={(e) => setNewComplaint({...newComplaint, citizen: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">شماره تماس</label>
                  <input type="text" value={newComplaint.phone} onChange={(e) => setNewComplaint({...newComplaint, phone: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">اولویت</label>
                <select value={newComplaint.priority} onChange={(e) => setNewComplaint({...newComplaint, priority: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  <option value="بالا">بالا</option>
                  <option value="متوسط">متوسط</option>
                  <option value="پایین">پایین</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">توضیحات</label>
                <textarea value={newComplaint.description} onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" rows={3} />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">ثبت شکایت</button>
              <button onClick={() => setShowModal(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

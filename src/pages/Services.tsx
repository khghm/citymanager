import { useState } from 'react';
import { serviceRequests as initialServices, ServiceRequest } from '../data/mockData';

export default function Services() {
  const [services, setServices] = useState<ServiceRequest[]>(initialServices);
  const [typeFilter, setTypeFilter] = useState('همه');
  const [statusFilter, setStatusFilter] = useState('همه');
  const [showModal, setShowModal] = useState(false);
  const [newService, setNewService] = useState({ title: '', type: '', region: '', priority: 'متوسط', assignee: '' });

  const types = [...new Set(services.map(s => s.type))];
  const filtered = services.filter(s => {
    if (typeFilter !== 'همه' && s.type !== typeFilter) return false;
    if (statusFilter !== 'همه' && s.status !== statusFilter) return false;
    return true;
  });

  const doneCount = services.filter(s => s.status === 'انجام‌شده').length;
  const inProgressCount = services.filter(s => s.status === 'در حال انجام').length;
  const pendingCount = services.filter(s => s.status === 'در انتظار').length;

  const handleAdd = () => {
    if (!newService.title || !newService.type || !newService.region) return;
    const service: ServiceRequest = {
      id: services.length + 1,
      title: newService.title,
      type: newService.type,
      region: newService.region,
      status: 'در انتظار',
      date: new Date().toLocaleDateString('fa-IR'),
      priority: newService.priority,
      assignee: newService.assignee || '-',
      estimatedTime: '-',
    };
    setServices([service, ...services]);
    setShowModal(false);
    setNewService({ title: '', type: '', region: '', priority: 'متوسط', assignee: '' });
  };

  const handleStatusChange = (id: number, status: string) => {
    setServices(services.map(s => s.id === id ? { ...s, status } : s));
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف مطمئن هستید؟')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'انجام‌شده': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در حال انجام': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بالا': return 'text-red-600';
      case 'متوسط': return 'text-amber-600';
      case 'پایین': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'نظافت': return 'fa-broom';
      case 'آسفالت': return 'fa-road';
      case 'روشنایی': return 'fa-lightbulb';
      case 'فضای سبز': return 'fa-tree';
      case 'فاضلاب': return 'fa-droplet';
      case 'مبلمان شهری': return 'fa-couch';
      case 'زباله': return 'fa-trash';
      case 'علائم': return 'fa-signs-post';
      default: return 'fa-wrench';
    }
  };

  return (
    <div className="fade-in space-y-6">
      {/* هدر */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-hands-helping ml-2 text-primary"></i>
          خدمات شهری
        </h2>
        <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-plus"></i>
          درخواست جدید
        </button>
      </div>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{services.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">کل درخواست‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{doneCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">انجام‌شده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-blue-600">{inProgressCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">در حال انجام</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">در انتظار</p>
        </div>
      </div>

      {/* نقشه مناطق خدمات */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
          <i className="fa-solid fa-map-location-dot ml-2 text-primary"></i>
          مناطق خدمات‌رسانی
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۵', 'منطقه ۶'].map(region => {
            const count = services.filter(s => s.region === region).length;
            const done = services.filter(s => s.region === region && s.status === 'انجام‌شده').length;
            return (
              <div key={region} className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-lg p-3 text-center border border-primary/20">
                <i className="fa-solid fa-map-pin text-primary text-lg mb-1"></i>
                <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{region}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{count} درخواست</p>
                <p className="text-xs text-green-600 dark:text-green-400">{done} انجام‌شده</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه انواع خدمات</option>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه وضعیت‌ها</option>
            <option value="در انتظار">در انتظار</option>
            <option value="در حال انجام">در حال انجام</option>
            <option value="انجام‌شده">انجام‌شده</option>
          </select>
        </div>
      </div>

      {/* لیست درخواست‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مجری</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">اولویت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4">
                    <p className="font-medium text-slate-700 dark:text-slate-200">{s.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{s.date} | زمان: {s.estimatedTime}</p>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <i className={`fa-solid ${getTypeIcon(s.type)} text-primary text-xs`}></i>
                      <span className="text-slate-600 dark:text-slate-400">{s.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{s.region}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{s.assignee}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium ${getPriorityColor(s.priority)}`}>{s.priority}</span>
                  </td>
                  <td className="py-3 px-4">
                    <select value={s.status} onChange={(e) => handleStatusChange(s.id, e.target.value)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${getStatusColor(s.status)}`}>
                      <option value="در انتظار">در انتظار</option>
                      <option value="در حال انجام">در حال انجام</option>
                      <option value="انجام‌شده">انجام‌شده</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => handleDelete(s.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors">
                      <i className="fa-solid fa-trash text-xs"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* آمار خدمات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-broom text-2xl text-blue-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۱۲۵</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">نظافت معابر (روزانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-road text-2xl text-amber-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۴۵</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">ترمیم آسفالت (ماهانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-lightbulb text-2xl text-yellow-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۳۲۰</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تعویض لامپ (ماهانه)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center border border-slate-100 dark:border-slate-700">
          <i className="fa-solid fa-tree text-2xl text-green-500 mb-2"></i>
          <p className="text-xl font-bold text-slate-800 dark:text-white">۸۰</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">نهال‌کاری (ماهانه)</p>
        </div>
      </div>

      {/* مودال */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              <i className="fa-solid fa-plus ml-2 text-primary"></i>
              ثبت درخواست خدمات
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">عنوان *</label>
                <input type="text" value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">نوع خدمت *</label>
                  <select value={newService.type} onChange={(e) => setNewService({...newService, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="">انتخاب</option>
                    {['نظافت','آسفالت','روشنایی','فضای سبز','فاضلاب','مبلمان شهری','زباله','علائم'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">منطقه *</label>
                  <select value={newService.region} onChange={(e) => setNewService({...newService, region: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="">انتخاب</option>
                    {['منطقه ۱','منطقه ۲','منطقه ۳','منطقه ۴','منطقه ۵','منطقه ۶'].map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">اولویت</label>
                  <select value={newService.priority} onChange={(e) => setNewService({...newService, priority: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="بالا">بالا</option>
                    <option value="متوسط">متوسط</option>
                    <option value="پایین">پایین</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">مجری</label>
                  <input type="text" value={newService.assignee} onChange={(e) => setNewService({...newService, assignee: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="نام تیم/مجری" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">ثبت درخواست</button>
              <button onClick={() => setShowModal(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

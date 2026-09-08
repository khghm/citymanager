import { useState } from 'react';
import { permits as initialPermits, Permit } from '../data/mockData';

export default function Permits() {
  const [permitsList, setPermitsList] = useState<Permit[]>(initialPermits);
  const [statusFilter, setStatusFilter] = useState('همه');
  const [regionFilter, setRegionFilter] = useState('همه');
  const [showModal, setShowModal] = useState(false);
  const [newPermit, setNewPermit] = useState({ title: '', applicant: '', region: '', area: '', floors: '', usage: 'مسکونی' });

  const filtered = permitsList.filter(p => {
    if (statusFilter !== 'همه' && p.status !== statusFilter) return false;
    if (regionFilter !== 'همه' && p.region !== regionFilter) return false;
    return true;
  });

  const approved = permitsList.filter(p => p.status === 'تایید').length;
  const pending = permitsList.filter(p => p.status === 'در انتظار').length;
  const rejected = permitsList.filter(p => p.status === 'رد').length;
  const totalFees = permitsList.filter(p => p.status === 'تایید').reduce((sum, p) => sum + p.fee, 0);

  const handleAdd = () => {
    if (!newPermit.title || !newPermit.applicant || !newPermit.region) return;
    const permit: Permit = {
      id: permitsList.length + 1,
      title: newPermit.title,
      applicant: newPermit.applicant,
      region: newPermit.region,
      status: 'در انتظار',
      date: new Date().toLocaleDateString('fa-IR'),
      area: Number(newPermit.area) || 0,
      floors: Number(newPermit.floors) || 1,
      usage: newPermit.usage,
      fee: 0,
    };
    setPermitsList([permit, ...permitsList]);
    setShowModal(false);
    setNewPermit({ title: '', applicant: '', region: '', area: '', floors: '', usage: 'مسکونی' });
  };

  const handleStatusChange = (id: number, status: string) => {
    setPermitsList(permitsList.map(p => p.id === id ? { ...p, status } : p));
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف مطمئن هستید؟')) {
      setPermitsList(permitsList.filter(p => p.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تایید': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'رد': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-file-signature ml-2 text-primary"></i>
          مجوزهای ساختمانی
        </h2>
        <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-plus"></i>
          درخواست جدید
        </button>
      </div>

      {/* آمار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{permitsList.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">کل درخواست‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-green-600">{approved}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">تایید شده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-amber-600">{pending}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">در انتظار</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <p className="text-2xl font-bold text-blue-600">{totalFees.toLocaleString('fa-IR')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">درآمد (میلیون تومان)</p>
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه وضعیت‌ها</option>
            <option value="تایید">تایید</option>
            <option value="در انتظار">در انتظار</option>
            <option value="رد">رد</option>
          </select>
          <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه مناطق</option>
            {['منطقه ۱','منطقه ۲','منطقه ۳','منطقه ۴','منطقه ۵','منطقه ۶'].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* جدول */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">درخواست‌کننده</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">کاربری</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مساحت/طبقات</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4">
                    <p className="font-medium text-slate-700 dark:text-slate-200">{p.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{p.date}</p>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.applicant}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.region}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.usage}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.area}m² / {p.floors} طبقه</td>
                  <td className="py-3 px-4">
                    <select value={p.status} onChange={(e) => handleStatusChange(p.id, e.target.value)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${getStatusColor(p.status)}`}>
                      <option value="تایید">تایید</option>
                      <option value="در انتظار">در انتظار</option>
                      <option value="رد">رد</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors">
                      <i className="fa-solid fa-trash text-xs"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* مودال */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              <i className="fa-solid fa-plus ml-2 text-primary"></i>
              ثبت درخواست مجوز
            </h3>
            <div className="space-y-3">
              <input type="text" placeholder="عنوان *" value={newPermit.title} onChange={(e) => setNewPermit({...newPermit, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="درخواست‌کننده *" value={newPermit.applicant} onChange={(e) => setNewPermit({...newPermit, applicant: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                <select value={newPermit.region} onChange={(e) => setNewPermit({...newPermit, region: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  <option value="">منطقه *</option>
                  {['منطقه ۱','منطقه ۲','منطقه ۳','منطقه ۴','منطقه ۵','منطقه ۶'].map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <input type="number" placeholder="مساحت (m²)" value={newPermit.area} onChange={(e) => setNewPermit({...newPermit, area: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                <input type="number" placeholder="تعداد طبقات" value={newPermit.floors} onChange={(e) => setNewPermit({...newPermit, floors: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                <select value={newPermit.usage} onChange={(e) => setNewPermit({...newPermit, usage: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  <option value="مسکونی">مسکونی</option>
                  <option value="تجاری">تجاری</option>
                  <option value="اداری">اداری</option>
                  <option value="بهداشتی">بهداشتی</option>
                  <option value="آموزشی">آموزشی</option>
                </select>
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

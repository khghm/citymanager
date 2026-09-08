import { useState } from 'react';
import { projects as initialProjects, Project } from '../data/mockData';

export default function Projects() {
  const [projectsList, setProjectsList] = useState<Project[]>(initialProjects);
  const [filter, setFilter] = useState('همه');
  const [regionFilter, setRegionFilter] = useState('همه');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewProject, setViewProject] = useState<Project | null>(null);
  const [sortBy, setSortBy] = useState<'title' | 'progress' | 'budget'>('title');
  const [newProject, setNewProject] = useState({
    title: '', region: '', budget: '', startDate: '', endDate: '',
    manager: '', description: '', priority: 'متوسط'
  });

  const filteredProjects = projectsList.filter(p => {
    if (filter !== 'همه' && p.status !== filter) return false;
    if (regionFilter !== 'همه' && p.region !== regionFilter) return false;
    if (searchTerm && !p.title.includes(searchTerm) && !p.manager.includes(searchTerm)) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'progress') return b.progress - a.progress;
    if (sortBy === 'budget') return b.budget - a.budget;
    return a.title.localeCompare(b.title);
  });

  const regions = [...new Set(projectsList.map(p => p.region))];
  const activeCount = projectsList.filter(p => p.status === 'در حال اجرا').length;
  const completedCount = projectsList.filter(p => p.status === 'کامل').length;
  const stoppedCount = projectsList.filter(p => p.status === 'متوقف').length;
  const totalBudget = projectsList.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projectsList.reduce((sum, p) => sum + p.spent, 0);
  const avgProgress = Math.round(projectsList.reduce((sum, p) => sum + p.progress, 0) / projectsList.length);

  const handleAdd = () => {
    if (!newProject.title || !newProject.region || !newProject.budget) return;
    const project: Project = {
      id: projectsList.length + 1,
      title: newProject.title,
      region: newProject.region,
      budget: Number(newProject.budget),
      spent: 0,
      progress: 0,
      startDate: newProject.startDate || '1403/01/01',
      endDate: newProject.endDate || '1403/12/29',
      status: 'در حال اجرا',
      manager: newProject.manager || 'تعیین نشده',
      description: newProject.description || '',
      priority: newProject.priority,
    };
    setProjectsList([...projectsList, project]);
    setShowModal(false);
    setNewProject({ title: '', region: '', budget: '', startDate: '', endDate: '', manager: '', description: '', priority: 'متوسط' });
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setNewProject({
      title: project.title,
      region: project.region,
      budget: String(project.budget),
      startDate: project.startDate,
      endDate: project.endDate,
      manager: project.manager,
      description: project.description,
      priority: project.priority,
    });
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    if (!editingProject || !newProject.title) return;
    setProjectsList(projectsList.map(p =>
      p.id === editingProject.id ? {
        ...p,
        title: newProject.title,
        region: newProject.region,
        budget: Number(newProject.budget),
        startDate: newProject.startDate,
        endDate: newProject.endDate,
        manager: newProject.manager,
        description: newProject.description,
        priority: newProject.priority,
      } : p
    ));
    setShowModal(false);
    setEditingProject(null);
    setNewProject({ title: '', region: '', budget: '', startDate: '', endDate: '', manager: '', description: '', priority: 'متوسط' });
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف این پروژه مطمئن هستید؟')) {
      setProjectsList(projectsList.filter(p => p.id !== id));
    }
  };

  const handleStatusChange = (id: number, status: string) => {
    setProjectsList(projectsList.map(p => p.id === id ? { ...p, status } : p));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در حال اجرا': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'کامل': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'متوقف': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
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

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 20) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="fade-in space-y-6">
      {/* هدر */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-hard-hat ml-2 text-primary"></i>
          مدیریت پروژه‌ها
        </h2>
        <button
          onClick={() => { setEditingProject(null); setShowModal(true); }}
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          <i className="fa-solid fa-plus"></i>
          پروژه جدید
        </button>
      </div>

      {/* کارت‌های آماری */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <i className="fa-solid fa-list-check text-blue-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{projectsList.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">کل پروژه‌ها</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <i className="fa-solid fa-play text-green-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{activeCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">در حال اجرا</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <i className="fa-solid fa-check text-emerald-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{completedCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">تکمیل‌شده</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <i className="fa-solid fa-stop text-red-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{stoppedCount}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">متوقف</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <i className="fa-solid fa-money-bill text-purple-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{totalBudget}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">بودجه کل (میلیارد)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <i className="fa-solid fa-chart-pie text-amber-600 text-sm"></i>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{avgProgress}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میانگین پیشرفت</p>
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="relative">
            <i className="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm"
            />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه وضعیت‌ها</option>
            <option value="در حال اجرا">در حال اجرا</option>
            <option value="کامل">کامل</option>
            <option value="متوقف">متوقف</option>
          </select>
          <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه مناطق</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'title' | 'progress' | 'budget')} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="title">مرتب‌سازی: عنوان</option>
            <option value="progress">مرتب‌سازی: پیشرفت</option>
            <option value="budget">مرتب‌سازی: بودجه</option>
          </select>
          <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
            <i className="fa-solid fa-filter ml-1"></i>
            {filteredProjects.length} نتیجه
          </div>
        </div>
      </div>

      {/* جدول پروژه‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">منطقه</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مدیر</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">بودجه/مصرف</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">پیشرفت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">اولویت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map(p => (
                <tr key={p.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4">
                    <button onClick={() => setViewProject(p)} className="font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors text-right">
                      {p.title}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.region}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{p.manager}</td>
                  <td className="py-3 px-4">
                    <div className="text-slate-700 dark:text-slate-200 font-medium">{p.budget} میلیارد</div>
                    <div className="text-xs text-slate-500">مصرف: {p.spent} میلیارد</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2 min-w-[60px]">
                        <div className={`${getProgressColor(p.progress)} h-2 rounded-full transition-all`} style={{ width: `${p.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 min-w-[35px]">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(p.priority)}`}>{p.priority}</span>
                  </td>
                  <td className="py-3 px-4">
                    <select
                      value={p.status}
                      onChange={(e) => handleStatusChange(p.id, e.target.value)}
                      className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${getStatusColor(p.status)}`}
                    >
                      <option value="در حال اجرا">در حال اجرا</option>
                      <option value="کامل">کامل</option>
                      <option value="متوقف">متوقف</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setViewProject(p)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-primary transition-colors" title="مشاهده">
                        <i className="fa-solid fa-eye text-xs"></i>
                      </button>
                      <button onClick={() => handleEdit(p)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-amber-600 transition-colors" title="ویرایش">
                        <i className="fa-solid fa-pen text-xs"></i>
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors" title="حذف">
                        <i className="fa-solid fa-trash text-xs"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-slate-500 dark:text-slate-400">
            <i className="fa-solid fa-folder-open text-3xl mb-2"></i>
            <p>پروژه‌ای یافت نشد</p>
          </div>
        )}
      </div>

      {/* مودال افزودن/ویرایش */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              <i className={`fa-solid ${editingProject ? 'fa-pen' : 'fa-plus'} ml-2 text-primary`}></i>
              {editingProject ? 'ویرایش پروژه' : 'افزودن پروژه جدید'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">عنوان پروژه *</label>
                <input type="text" value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="عنوان پروژه" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">منطقه *</label>
                  <select value={newProject.region} onChange={(e) => setNewProject({...newProject, region: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="">انتخاب</option>
                    {['منطقه ۱','منطقه ۲','منطقه ۳','منطقه ۴','منطقه ۵','منطقه ۶'].map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">بودجه (میلیارد) *</label>
                  <input type="number" value={newProject.budget} onChange={(e) => setNewProject({...newProject, budget: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">تاریخ شروع</label>
                  <input type="text" value={newProject.startDate} onChange={(e) => setNewProject({...newProject, startDate: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="1403/01/01" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">تاریخ پایان</label>
                  <input type="text" value={newProject.endDate} onChange={(e) => setNewProject({...newProject, endDate: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="1403/12/29" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">مدیر پروژه</label>
                  <input type="text" value={newProject.manager} onChange={(e) => setNewProject({...newProject, manager: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" placeholder="نام مدیر" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">اولویت</label>
                  <select value={newProject.priority} onChange={(e) => setNewProject({...newProject, priority: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    <option value="بالا">بالا</option>
                    <option value="متوسط">متوسط</option>
                    <option value="پایین">پایین</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">توضیحات</label>
                <textarea value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" rows={3} placeholder="توضیحات پروژه..." />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={editingProject ? handleSaveEdit : handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">
                {editingProject ? 'ذخیره تغییرات' : 'افزودن پروژه'}
              </button>
              <button onClick={() => { setShowModal(false); setEditingProject(null); }} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مودال مشاهده جزئیات */}
      {viewProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setViewProject(null)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">{viewProject.title}</h3>
              <button onClick={() => setViewProject(null)} className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">منطقه</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.region}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">مدیر پروژه</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.manager}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">بودجه</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.budget} میلیارد</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">مصرف‌شده</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.spent} میلیارد</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">تاریخ شروع</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.startDate}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">تاریخ پایان</p>
                  <p className="font-medium text-slate-700 dark:text-slate-200">{viewProject.endDate}</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">توضیحات</p>
                <p className="text-sm text-slate-700 dark:text-slate-200">{viewProject.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(viewProject.status)}`}>{viewProject.status}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(viewProject.priority)}`}>اولویت: {viewProject.priority}</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-400">پیشرفت پروژه</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{viewProject.progress}%</span>
                </div>
                <div className="bg-slate-200 dark:bg-slate-600 rounded-full h-3">
                  <div className={`${getProgressColor(viewProject.progress)} h-3 rounded-full transition-all`} style={{ width: `${viewProject.progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

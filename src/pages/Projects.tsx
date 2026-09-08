import { useState } from 'react';
import { projects as initialProjects } from '../data/mockData';

export default function Projects() {
  const [projectsList, setProjectsList] = useState(initialProjects);
  const [filter, setFilter] = useState('همه');
  const [regionFilter, setRegionFilter] = useState('همه');
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', region: '', budget: '', startDate: '', endDate: '' });

  const filteredProjects = projectsList.filter(p => {
    if (filter !== 'همه' && p.status !== filter) return false;
    if (regionFilter !== 'همه' && p.region !== regionFilter) return false;
    return true;
  });

  const regions = [...new Set(projectsList.map(p => p.region))];

  const handleAdd = () => {
    if (!newProject.title || !newProject.region || !newProject.budget) return;
    const project = {
      id: projectsList.length + 1,
      title: newProject.title,
      region: newProject.region,
      budget: Number(newProject.budget),
      progress: 0,
      startDate: newProject.startDate || '1403/01/01',
      endDate: newProject.endDate || '1403/12/29',
      status: 'در حال اجرا',
    };
    setProjectsList([...projectsList, project]);
    setShowModal(false);
    setNewProject({ title: '', region: '', budget: '', startDate: '', endDate: '' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در حال اجرا': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'کامل': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'متوقف': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-hard-hat ml-2 text-primary"></i>
          مدیریت پروژه‌ها
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          پروژه جدید
        </button>
      </div>

      {/* فیلترها */}
      <div className="flex flex-wrap gap-3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
        >
          <option value="همه">همه وضعیت‌ها</option>
          <option value="در حال اجرا">در حال اجرا</option>
          <option value="کامل">کامل</option>
          <option value="متوقف">متوقف</option>
        </select>
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
        >
          <option value="همه">همه مناطق</option>
          {regions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
          {filteredProjects.length} پروژه
        </span>
      </div>

      {/* لیست پروژه‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm card-hover border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-slate-800 dark:text-white text-sm">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <p><i className="fa-solid fa-map-marker-alt ml-1 text-primary"></i>{project.region}</p>
              <p><i className="fa-solid fa-money-bill ml-1 text-emerald-500"></i>{project.budget} میلیارد تومان</p>
              <p><i className="fa-solid fa-calendar ml-1 text-amber-500"></i>{project.startDate} تا {project.endDate}</p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500 dark:text-slate-400">پیشرفت</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${getProgressColor(project.progress)}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* مودال افزودن پروژه */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 modal-overlay p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">افزودن پروژه جدید</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="عنوان پروژه"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <select
                value={newProject.region}
                onChange={(e) => setNewProject({ ...newProject, region: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              >
                <option value="">انتخاب منطقه</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <input
                type="number"
                placeholder="بودجه (میلیارد تومان)"
                value={newProject.budget}
                onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <input
                type="text"
                placeholder="تاریخ شروع (مثال: 1403/01/01)"
                value={newProject.startDate}
                onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <input
                type="text"
                placeholder="تاریخ پایان (مثال: 1403/12/29)"
                value={newProject.endDate}
                onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAdd}
                className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors"
              >
                ثبت پروژه
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 py-2 rounded-lg transition-colors"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

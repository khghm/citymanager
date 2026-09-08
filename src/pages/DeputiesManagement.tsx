import { useState } from 'react';
import { deputies, Deputy, Task, DeputyStaff } from '../data/deputiesData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DeputiesManagement() {
  const [selectedDeputy, setSelectedDeputy] = useState<Deputy | null>(null);
  const [activeTab, setActiveTab] = useState<'tasks' | 'staff' | 'reports'>('tasks');
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [deputiesList, setDeputiesList] = useState(deputies);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'متوسط' as Task['priority'],
    assignee: '',
    deadline: '',
  });
  const [newStaff, setNewStaff] = useState({
    name: '',
    role: '',
    status: 'حاضر' as DeputyStaff['status'],
  });

  const totalBudget = deputiesList.reduce((sum, d) => sum + d.budget, 0);
  const avgPerformance = Math.round(deputiesList.reduce((sum, d) => sum + d.performance, 0) / deputiesList.length);
  const totalTasks = deputiesList.reduce((sum, d) => sum + d.tasks.length, 0);
  const completedTasks = deputiesList.reduce((sum, d) => sum + d.tasks.filter(t => t.status === 'تکمیل').length, 0);

  const handleAddTask = () => {
    if (!selectedDeputy || !newTask.title || !newTask.assignee || !newTask.deadline) return;
    
    const task: Task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      status: 'در انتظار',
      assignee: newTask.assignee,
      deadline: newTask.deadline,
      progress: 0,
    };

    const updatedDeputies = deputiesList.map(d => 
      d.id === selectedDeputy.id 
        ? { ...d, tasks: [...d.tasks, task] }
        : d
    );
    
    setDeputiesList(updatedDeputies);
    setSelectedDeputy({ ...selectedDeputy, tasks: [...selectedDeputy.tasks, task] });
    setShowAddTask(false);
    setNewTask({ title: '', description: '', priority: 'متوسط', assignee: '', deadline: '' });
  };

  const handleAddStaff = () => {
    if (!selectedDeputy || !newStaff.name || !newStaff.role) return;
    
    const staff: DeputyStaff = {
      id: Date.now(),
      name: newStaff.name,
      role: newStaff.role,
      status: newStaff.status,
      tasksCompleted: 0,
      performance: 0,
    };

    const updatedDeputies = deputiesList.map(d => 
      d.id === selectedDeputy.id 
        ? { ...d, staff: [...d.staff, staff] }
        : d
    );
    
    setDeputiesList(updatedDeputies);
    setSelectedDeputy({ ...selectedDeputy, staff: [...selectedDeputy.staff, staff] });
    setShowAddStaff(false);
    setNewStaff({ name: '', role: '', status: 'حاضر' });
  };

  const handleUpdateTaskStatus = (taskId: number, status: Task['status']) => {
    if (!selectedDeputy) return;
    
    const updatedTasks = selectedDeputy.tasks.map(t => 
      t.id === taskId ? { ...t, status, progress: status === 'تکمیل' ? 100 : t.progress } : t
    );
    
    const updatedDeputies = deputiesList.map(d => 
      d.id === selectedDeputy.id ? { ...d, tasks: updatedTasks } : d
    );
    
    setDeputiesList(updatedDeputies);
    setSelectedDeputy({ ...selectedDeputy, tasks: updatedTasks });
  };

  const handleDeleteTask = (taskId: number) => {
    if (!selectedDeputy) return;
    
    const updatedTasks = selectedDeputy.tasks.filter(t => t.id !== taskId);
    const updatedDeputies = deputiesList.map(d => 
      d.id === selectedDeputy.id ? { ...d, tasks: updatedTasks } : d
    );
    
    setDeputiesList(updatedDeputies);
    setSelectedDeputy({ ...selectedDeputy, tasks: updatedTasks });
  };

  const handleDeleteStaff = (staffId: number) => {
    if (!selectedDeputy) return;
    
    const updatedStaff = selectedDeputy.staff.filter(s => s.id !== staffId);
    const updatedDeputies = deputiesList.map(d => 
      d.id === selectedDeputy.id ? { ...d, staff: updatedStaff } : d
    );
    
    setDeputiesList(updatedDeputies);
    setSelectedDeputy({ ...selectedDeputy, staff: updatedStaff });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بحرانی': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'بالا': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'متوسط': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'پایین': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'در انتظار': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'در حال انجام': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'تکمیل': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'لغو': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
        <i className="fa-solid fa-users-gear ml-2 text-primary"></i>
        مدیریت معاونت‌ها
      </h2>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-building text-3xl text-primary mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{deputiesList.length}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">معاونت فعال</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-coins text-3xl text-emerald-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{totalBudget}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">بودجه کل (میلیارد)</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-chart-line text-3xl text-blue-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{avgPerformance}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میانگین عملکرد</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <i className="fa-solid fa-tasks text-3xl text-purple-500 mb-2"></i>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">{completedTasks}/{totalTasks}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">وظایف تکمیل‌شده</p>
        </div>
      </div>

      {/* انتخاب معاونت */}
      {!selectedDeputy ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deputiesList.map(deputy => (
            <div
              key={deputy.id}
              onClick={() => setSelectedDeputy(deputy)}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-primary transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-${deputy.color}-100 dark:bg-${deputy.color}-900/30 flex items-center justify-center`}>
                    <i className={`fa-solid ${deputy.icon} text-${deputy.color}-600 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{deputy.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{deputy.name}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">بودجه:</span>
                  <span className="font-bold text-slate-800 dark:text-white">{deputy.budget} میلیارد</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">وظایف:</span>
                  <span className="font-bold text-slate-800 dark:text-white">{deputy.tasks.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">پرسنل:</span>
                  <span className="font-bold text-slate-800 dark:text-white">{deputy.staff.length} نفر</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-400">عملکرد:</span>
                    <span className="font-bold text-primary">{deputy.performance}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${deputy.performance}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* هدر معاونت انتخاب‌شده */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedDeputy(null)}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <i className="fa-solid fa-arrow-right text-slate-600 dark:text-slate-400"></i>
                </button>
                <div className={`w-14 h-14 rounded-lg bg-${selectedDeputy.color}-100 dark:bg-${selectedDeputy.color}-900/30 flex items-center justify-center`}>
                  <i className={`fa-solid ${selectedDeputy.icon} text-${selectedDeputy.color}-600 text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{selectedDeputy.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{selectedDeputy.name}</p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-primary">{selectedDeputy.performance}%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">عملکرد</p>
              </div>
            </div>

            {/* تب‌ها */}
            <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('tasks')}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === 'tasks'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <i className="fa-solid fa-tasks ml-2"></i>
                وظایف ({selectedDeputy.tasks.length})
              </button>
              <button
                onClick={() => setActiveTab('staff')}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === 'staff'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <i className="fa-solid fa-users ml-2"></i>
                پرسنل ({selectedDeputy.staff.length})
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === 'reports'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <i className="fa-solid fa-chart-bar ml-2"></i>
                گزارش‌ها
              </button>
            </div>
          </div>

          {/* محتوای تب‌ها */}
          {activeTab === 'tasks' && (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">وظایف معاونت</h3>
                <button
                  onClick={() => setShowAddTask(true)}
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-plus"></i>
                  افزودن وظیفه
                </button>
              </div>

              <div className="space-y-3">
                {selectedDeputy.tasks.map(task => (
                  <div key={task.id} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 dark:text-white mb-1">{task.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{task.description}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 transition-colors"
                      >
                        <i className="fa-solid fa-trash text-sm"></i>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">اولویت</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">وضعیت</p>
                        <select
                          value={task.status}
                          onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value as Task['status'])}
                          className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${getStatusColor(task.status)}`}
                        >
                          <option value="در انتظار">در انتظار</option>
                          <option value="در حال انجام">در حال انجام</option>
                          <option value="تکمیل">تکمیل</option>
                          <option value="لغو">لغو</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">مسئول</p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{task.assignee}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">مهلت</p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{task.deadline}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600 dark:text-slate-400">پیشرفت</span>
                        <span className="font-bold text-primary">{task.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${task.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">پرسنل معاونت</h3>
                <button
                  onClick={() => setShowAddStaff(true)}
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-plus"></i>
                  افزودن پرسنل
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-700/50">
                    <tr>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نام</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">سمت</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وضعیت</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">وظایف تکمیل‌شده</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملکرد</th>
                      <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDeputy.staff.map(staff => (
                      <tr key={staff.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{staff.name}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{staff.role}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            staff.status === 'حاضر' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            staff.status === 'غایب' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {staff.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{staff.tasksCompleted}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${staff.performance}%` }}></div>
                            </div>
                            <span className="text-xs font-bold text-primary">{staff.performance}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 transition-colors"
                          >
                            <i className="fa-solid fa-trash text-sm"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">گزارش عملکرد معاونت</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">{selectedDeputy.budget}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">بودجه (میلیارد)</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-600">{selectedDeputy.tasks.filter(t => t.status === 'تکمیل').length}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">وظایف تکمیل‌شده</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">{selectedDeputy.staff.length}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">تعداد پرسنل</p>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'بحرانی', count: selectedDeputy.tasks.filter(t => t.priority === 'بحرانی').length },
                    { name: 'بالا', count: selectedDeputy.tasks.filter(t => t.priority === 'بالا').length },
                    { name: 'متوسط', count: selectedDeputy.tasks.filter(t => t.priority === 'متوسط').length },
                    { name: 'پایین', count: selectedDeputy.tasks.filter(t => t.priority === 'پایین').length },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="تعداد وظایف" fill="#0e4d6e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      )}

      {/* مودال افزودن وظیفه */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddTask(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">افزودن وظیفه جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">عنوان وظیفه *</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">توضیحات</label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">اولویت</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as Task['priority']})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    <option value="بحرانی">بحرانی</option>
                    <option value="بالا">بالا</option>
                    <option value="متوسط">متوسط</option>
                    <option value="پایین">پایین</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">مسئول *</label>
                  <select
                    value={newTask.assignee}
                    onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    <option value="">انتخاب کنید</option>
                    {selectedDeputy?.staff.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">مهلت انجام *</label>
                <input
                  type="text"
                  value={newTask.deadline}
                  onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                  placeholder="1403/02/15"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAddTask} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">
                افزودن وظیفه
              </button>
              <button onClick={() => setShowAddTask(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مودال افزودن پرسنل */}
      {showAddStaff && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddStaff(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">افزودن پرسنل جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  value={newStaff.name}
                  onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">سمت *</label>
                <input
                  type="text"
                  value={newStaff.role}
                  onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">وضعیت</label>
                <select
                  value={newStaff.status}
                  onChange={(e) => setNewStaff({...newStaff, status: e.target.value as DeputyStaff['status']})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                >
                  <option value="حاضر">حاضر</option>
                  <option value="غایب">غایب</option>
                  <option value="مرخصی">مرخصی</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAddStaff} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">
                افزودن پرسنل
              </button>
              <button onClick={() => setShowAddStaff(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

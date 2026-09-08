import { useState } from 'react';

interface DeputySectionProps {
  title: string;
  icon: string;
  color: string;
  items: any[];
  arrayName: string;
  columns: { key: string; label: string; type?: 'text' | 'number' | 'select' | 'progress' | 'status'; options?: string[] }[];
  onDelete: (arrayName: string, id: number) => void;
  onStatusChange: (arrayName: string, id: number, newStatus: string) => void;
  onAdd: (arrayName: string, newItem: any) => void;
  statusField?: string;
}

export default function DeputySection({ title, icon, color, items, arrayName, columns, onDelete, onStatusChange, onAdd, statusField = 'status' }: DeputySectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState<any>({});

  const handleAdd = () => {
    // اعتبارسنجی فیلدهای ضروری
    const requiredFields = columns.filter(col => col.label.includes('*'));
    const missingFields = requiredFields.filter(col => !newItem[col.key]);
    
    if (missingFields.length > 0) {
      alert(`لطفاً فیلدهای ضروری را پر کنید: ${missingFields.map(f => f.label.replace(' *', '')).join(', ')}`);
      return;
    }

    onAdd(arrayName, newItem);
    setNewItem({});
    setShowModal(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-bold text-${color}-600`}>
          <i className={`fa-solid ${icon} ml-2`}></i>
          {title} ({items.length})
        </h3>
        <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          افزودن
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">{col.label.replace(' *', '')}</th>
              ))}
              <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any) => (
              <tr key={item.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                {columns.map((col, idx) => (
                  <td key={idx} className="py-3 px-4 text-slate-700 dark:text-slate-200">
                    {col.type === 'status' ? (
                      <select value={item[col.key]} onChange={(e) => onStatusChange(arrayName, item.id, e.target.value)} className={`px-2 py-1 rounded-full text-xs border-0 cursor-pointer ${
                        item[col.key] === 'فعال' || item[col.key] === 'تأیید' || item[col.key] === 'کامل' || item[col.key] === 'تکمیل' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        item[col.key] === 'در حال اجرا' || item[col.key] === 'در حال بررسی' || item[col.key] === 'در انتظار' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        item[col.key] === 'رد' || item[col.key] === 'متوقف' || item[col.key] === 'بحرانی' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {col.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : col.type === 'progress' ? (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2 min-w-[60px]">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${item[col.key]}%` }}></div>
                        </div>
                        <span className="text-xs font-bold text-primary">{item[col.key]}%</span>
                      </div>
                    ) : (
                      <span>{item[col.key]}</span>
                    )}
                  </td>
                ))}
                <td className="py-3 px-4">
                  <button onClick={() => onDelete(arrayName, item.id)} className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-slate-500 hover:text-red-600 transition-colors">
                    <i className="fa-solid fa-trash text-xs"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* مودال افزودن */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">افزودن مورد جدید</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {columns.map((col, idx) => (
                <div key={idx}>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">{col.label}</label>
                  {col.type === 'select' ? (
                    <select value={newItem[col.key] || ''} onChange={(e) => setNewItem({...newItem, [col.key]: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      <option value="">انتخاب کنید</option>
                      {col.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input type={col.type === 'number' ? 'number' : 'text'} value={newItem[col.key] || ''} onChange={(e) => setNewItem({...newItem, [col.key]: col.type === 'number' ? Number(e.target.value) : e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">افزودن</button>
              <button onClick={() => { setShowModal(false); setNewItem({}); }} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

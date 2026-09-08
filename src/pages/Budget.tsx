import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { budgetData } from '../data/mockData';

interface Transaction {
  id: number;
  title: string;
  type: 'درآمد' | 'هزینه';
  amount: number;
  category: string;
  date: string;
}

const initialTransactions: Transaction[] = [
  { id: 1, title: 'عوارض نوسازی', type: 'درآمد', amount: 45, category: 'عوارض', date: '1402/11/01' },
  { id: 2, title: 'حقوق کارکنان', type: 'هزینه', amount: 80, category: 'پرسنل', date: '1402/11/01' },
  { id: 3, title: 'فروش تراکم', type: 'درآمد', amount: 120, category: 'شهرسازی', date: '1402/11/05' },
  { id: 4, title: 'تعمیرات معابر', type: 'هزینه', amount: 35, category: 'عمران', date: '1402/11/08' },
  { id: 5, title: 'جرایم رانندگی', type: 'درآمد', amount: 25, category: 'ترافیک', date: '1402/11/10' },
  { id: 6, title: 'نگهداری فضای سبز', type: 'هزینه', amount: 18, category: 'فضای سبز', date: '1402/11/12' },
  { id: 7, title: 'کمک دولتی', type: 'درآمد', amount: 200, category: 'دولتی', date: '1402/11/15' },
  { id: 8, title: 'حمل‌ونقل عمومی', type: 'هزینه', amount: 55, category: 'حمل‌ونقل', date: '1402/11/18' },
  { id: 9, title: 'اجاره املاک', type: 'درآمد', amount: 38, category: 'املاک', date: '1402/11/20' },
  { id: 10, title: 'آموزش کارکنان', type: 'هزینه', amount: 12, category: 'آموزش', date: '1402/11/22' },
];

export default function Budget() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showModal, setShowModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState('همه');
  const [newTransaction, setNewTransaction] = useState({ title: '', type: 'درآمد' as 'درآمد' | 'هزینه', amount: '', category: '', date: '' });

  const filteredTransactions = transactions.filter(t => {
    if (typeFilter !== 'همه' && t.type !== typeFilter) return false;
    return true;
  });

  const totalIncome = transactions.filter(t => t.type === 'درآمد').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'هزینه').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;
  const totalSpent = budgetData.sectors.reduce((sum, s) => sum + s.spent, 0);

  const categoryData = budgetData.sectors.map(s => ({
    name: s.name,
    allocated: s.amount,
    spent: s.spent,
    remaining: s.amount - s.spent,
    color: s.color,
  }));

  const handleAdd = () => {
    if (!newTransaction.title || !newTransaction.amount || !newTransaction.category) return;
    const t: Transaction = {
      id: transactions.length + 1,
      title: newTransaction.title,
      type: newTransaction.type,
      amount: Number(newTransaction.amount),
      category: newTransaction.category,
      date: newTransaction.date || '1402/11/20',
    };
    setTransactions([...transactions, t]);
    setShowModal(false);
    setNewTransaction({ title: '', type: 'درآمد', amount: '', category: '', date: '' });
  };

  const handleDelete = (id: number) => {
    if (confirm('آیا از حذف این تراکنش مطمئن هستید؟')) {
      setTransactions(transactions.filter(t => t.id !== id));
    }
  };

  return (
    <div className="fade-in space-y-6">
      {/* هدر */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-coins ml-2 text-primary"></i>
          مدیریت بودجه
        </h2>
        <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <i className="fa-solid fa-plus"></i>
          ثبت تراکنش
        </button>
      </div>

      {/* خلاصه بودجه */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-wallet text-primary text-sm"></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">بودجه کل سال</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{budgetData.total}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میلیارد تومان</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <i className="fa-solid fa-arrow-down text-green-600 text-sm"></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">درآمد ماهانه</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{totalIncome}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میلیارد تومان</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <i className="fa-solid fa-arrow-up text-red-600 text-sm"></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">هزینه ماهانه</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{totalExpense}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میلیارد تومان</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 rounded-lg ${balance >= 0 ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-red-100 dark:bg-red-900/30'} flex items-center justify-center`}>
              <i className={`fa-solid fa-scale-balanced ${balance >= 0 ? 'text-emerald-600' : 'text-red-600'} text-sm`}></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">تراز</p>
          <p className={`text-2xl font-bold mt-1 ${balance >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{balance}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">میلیارد تومان</p>
        </div>
      </div>

      {/* نمودار ماهانه */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
          درآمد و هزینه ماهانه
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={budgetData.monthly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${value} میلیارد تومان`]} />
            <Legend />
            <Bar dataKey="income" name="درآمد" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" name="هزینه" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* نمودار تخصیص بودجه */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">تخصیص بودجه به بخش‌ها</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={budgetData.sectors} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="amount" label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                {budgetData.sectors.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value} میلیارد`]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">مصرف بودجه بخش‌ها</h3>
          <div className="space-y-3">
            {categoryData.map((cat, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 dark:text-slate-400">{cat.name}</span>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{cat.spent}/{cat.allocated} میلیارد</span>
                </div>
                <div className="flex gap-1">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 overflow-hidden">
                    <div className="h-2.5 rounded-full transition-all" style={{ width: `${(cat.spent / cat.allocated) * 100}%`, backgroundColor: cat.color }}></div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 min-w-[40px] text-left">{Math.round((cat.spent / cat.allocated) * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* منابع درآمد */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-bold mb-3 text-slate-800 dark:text-white">منابع درآمد</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {budgetData.incomeSources.map((source, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-primary">{source.amount}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{source.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* فیلتر و جدول تراکنش‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white">تراکنش‌های اخیر</h3>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm">
            <option value="همه">همه</option>
            <option value="درآمد">درآمد</option>
            <option value="هزینه">هزینه</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">مبلغ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">دسته</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">تاریخ</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(t => (
                <tr key={t.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{t.title}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${t.type === 'درآمد' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>{t.type}</span>
                  </td>
                  <td className={`py-3 px-4 font-medium ${t.type === 'درآمد' ? 'text-green-600' : 'text-red-600'}`}>{t.amount} میلیارد</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{t.category}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400 text-xs">{t.date}</td>
                  <td className="py-3 px-4">
                    <button onClick={() => handleDelete(t.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-600 transition-colors">
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
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              <i className="fa-solid fa-plus ml-2 text-primary"></i>
              ثبت تراکنش جدید
            </h3>
            <div className="space-y-3">
              <input type="text" placeholder="عنوان تراکنش" value={newTransaction.title} onChange={(e) => setNewTransaction({...newTransaction, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              <select value={newTransaction.type} onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value as 'درآمد' | 'هزینه'})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                <option value="درآمد">درآمد</option>
                <option value="هزینه">هزینه</option>
              </select>
              <input type="number" placeholder="مبلغ (میلیارد تومان)" value={newTransaction.amount} onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              <input type="text" placeholder="دسته‌بندی" value={newTransaction.category} onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
              <input type="text" placeholder="تاریخ" value={newTransaction.date} onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200" />
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors">ثبت</button>
              <button onClick={() => setShowModal(false)} className="px-6 py-2.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

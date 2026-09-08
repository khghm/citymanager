import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
];

export default function Budget() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showModal, setShowModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({ title: '', type: 'درآمد' as 'درآمد' | 'هزینه', amount: '', category: '', date: '' });

  const totalIncome = transactions.filter(t => t.type === 'درآمد').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'هزینه').reduce((sum, t) => sum + t.amount, 0);

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

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-coins ml-2 text-primary"></i>
          مدیریت بودجه
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          ثبت تراکنش
        </button>
      </div>

      {/* خلاصه بودجه */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">بودجه کل سال</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{budgetData.total} <span className="text-sm">میلیارد</span></p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">درآمد ماهانه</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{totalIncome} <span className="text-sm">میلیارد</span></p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">هزینه ماهانه</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{totalExpense} <span className="text-sm">میلیارد</span></p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">تراز</p>
          <p className={`text-2xl font-bold mt-1 ${totalIncome - totalExpense >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {totalIncome - totalExpense} <span className="text-sm">میلیارد</span>
          </p>
        </div>
      </div>

      {/* نمودار ماهانه */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          <i className="fa-solid fa-chart-bar ml-2 text-primary"></i>
          درآمد و هزینه ماهانه
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={budgetData.monthly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: number) => [`${value} میلیارد تومان`]} />
            <Legend />
            <Bar dataKey="income" name="درآمد" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" name="هزینه" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* جدول تراکنش‌ها */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">تراکنش‌های اخیر</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">عنوان</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">نوع</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">مبلغ (میلیارد)</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">دسته</th>
                <th className="text-right py-3 px-4 text-slate-600 dark:text-slate-400">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200">{t.title}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${t.type === 'درآمد' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {t.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-200 font-medium">{t.amount}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{t.category}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* مودال ثبت تراکنش */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 modal-overlay p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">ثبت تراکنش جدید</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="عنوان تراکنش"
                value={newTransaction.title}
                onChange={(e) => setNewTransaction({ ...newTransaction, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <select
                value={newTransaction.type}
                onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value as 'درآمد' | 'هزینه' })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              >
                <option value="درآمد">درآمد</option>
                <option value="هزینه">هزینه</option>
              </select>
              <input
                type="number"
                placeholder="مبلغ (میلیارد تومان)"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <input
                type="text"
                placeholder="دسته‌بندی"
                value={newTransaction.category}
                onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <input
                type="text"
                placeholder="تاریخ"
                value={newTransaction.date}
                onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleAdd} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors">ثبت</button>
              <button onClick={() => setShowModal(false)} className="flex-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 py-2 rounded-lg transition-colors">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

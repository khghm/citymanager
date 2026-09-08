import { useState } from 'react';
import { aiAssistant } from '../data/advancedData';

export default function AIAssistant() {
  const [messages, setMessages] = useState(aiAssistant.chatHistory);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', message: input, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, userMsg]);
    setInput('');
    setIsTyping(true);

    // شبیه‌سازی پاسخ AI
    setTimeout(() => {
      const responses = [
        'بر اساس تحلیل داده‌ها، پیشنهاد می‌کنم تمرکز بر بهبود حمل‌ونقل عمومی در مناطق ۱ و ۲ باشد. این کار می‌تواند ۲۵٪ ترافیک را کاهش دهد.',
        'تحلیل نشان می‌دهد که شکایات مربوط به آسفالت ۴۵٪ افزایش یافته. پیشنهاد تخصیص بودجه اضافی ۱۵ میلیارد تومان برای ترمیم فوری.',
        'پیش‌بینی می‌شود مصرف آب در هفته آینده ۱۸٪ افزایش یابد. توصیه می‌کنم کمپین صرفه‌جویی را فعال کنید.',
        'بر اساس الگوهای تاریخی، بهترین زمان برای اجرای پروژه‌های عمرانی در مناطق شلوغ، ساعات ۱۰ شب تا ۵ صبح است.',
      ];
      const aiMsg = {
        role: 'ai',
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'بالا': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'متوسط': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'پایین': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ترافیک': return 'fa-car';
      case 'بودجه': return 'fa-coins';
      case 'شکایات': return 'fa-comments';
      case 'زباله': return 'fa-trash';
      case 'آب': return 'fa-droplet';
      default: return 'fa-lightbulb';
    }
  };

  return (
    <div className="fade-in space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          <i className="fa-solid fa-robot ml-2 text-primary"></i>
          دستیار هوشمند شهردار
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-xs text-blue-700 dark:text-blue-400 font-medium">GPT-4 فعال</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* چت باکس */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-[600px]">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-comments text-primary"></i>
              گفتگو با دستیار هوشمند
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-2' : ''}`}>
                  <div className={`p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <p className={`text-xs text-slate-500 dark:text-slate-400 mt-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="سوال خود را بپرسید..."
                className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              />
              <button
                onClick={handleSend}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* پیشنهادات هوشمند */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-5">
          <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-lightbulb text-amber-500"></i>
            پیشنهادات هوشمند
          </h3>
          <div className="space-y-3">
            {aiAssistant.suggestions.map(suggestion => (
              <div key={suggestion.id} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${getTypeIcon(suggestion.type)} text-primary text-xs`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{suggestion.message}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(suggestion.priority)}`}>
                    {suggestion.priority}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    اطمینان: {suggestion.confidence}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
      <div className="max-w-xl w-full text-center bg-white dark:bg-slate-800 p-10 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-xl">
        <p className="text-brand-gold font-black tracking-[0.25em] text-xs mb-3">ERROR 404</p>
        <h1 className="text-4xl font-black text-brand-blue dark:text-white mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 font-medium mb-8">The page you are looking for may have moved or the URL may be incorrect.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors">Go to Home</Link>
          <Link to="/contact" className="px-6 py-3 rounded-xl border border-brand-blue text-brand-blue dark:text-white dark:border-slate-500 font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors">Contact Support</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

import React from 'react';
import { ArrowRight } from 'lucide-react';



export function NewsCard({ title, excerpt, date, image }) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-indigo-400 text-sm">{date}</span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-white/70 mt-2">{excerpt}</p>
        <button className="flex items-center gap-2 text-indigo-400 mt-4 hover:text-indigo-300 transition-colors">
          Read More <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
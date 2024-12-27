import React from 'react';
import { NewsCard } from './NewsCard';

const latestNews = [
  {
    title: "New Season Announcements",
    excerpt: "Exciting new anime seasons coming this spring...",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800"
  },
  {
    title: "Anime Awards 2024",
    excerpt: "See which series took home the top prizes...",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1615653051904-56f04809a8c7?w=800"
  }
];

export function NewsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
}
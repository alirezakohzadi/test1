import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { categoryService } from '../services/categoryService';
import { DjangoCategory } from '../types';

interface CircleCategorySliderProps {
  onSelectCategory?: (title: string) => void;
}

export const CircleCategorySlider: React.FC<CircleCategorySliderProps> = ({
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<DjangoCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    categoryService
      .getCategories()
      .then((cats) => {
        setCategories(cats);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading || categories.length === 0) return null;

  return (
    <section className="w-full py-4 mb-8 bg-white border-y border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#0D7366] hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex-1 flex justify-around items-center gap-4 overflow-x-auto scrollbar-hide py-1"
          >
            {categories.map((cat) => (
              <div
                key={cat.id || cat.slug}
                onClick={() => onSelectCategory?.(cat.name)}
                className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[60px] sm:min-w-[76px] group cursor-pointer"
              >
                <div
                  className="w-[60px] h-[60px] sm:w-[76px] sm:h-[76px] rounded-full bg-emerald-50/80 flex items-center justify-center p-1 sm:p-1.5 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-slate-100 overflow-hidden"
                >
                  <img
                    src={cat.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200'}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold text-slate-700 group-hover:text-[#0D7366] transition-colors text-center line-clamp-1">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#0D7366] hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

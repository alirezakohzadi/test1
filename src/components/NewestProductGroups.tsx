import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { categoryService } from '../services/categoryService';
import { DjangoCategory } from '../types';

interface NewestProductGroupsProps {
  onSelectCategory?: (title: string) => void;
}

export const NewestProductGroups: React.FC<NewestProductGroupsProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<DjangoCategory[]>([]);

  useEffect(() => {
    categoryService.getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  const groups = categories.slice(0, 6).map((category) => ({
    id: category.id,
    title: category.name,
    products: (category.children && category.children.length > 0 ? category.children : [category]).slice(0, 6),
  }));

  if (groups.length === 0) return null;

  return (
    <section className="w-full py-6 mb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 border-b border-slate-200/80 pb-3">
          <h2 className="text-base sm:text-lg font-black text-[#0D7366]">
            جدیدترین گروه‌های محصولات
          </h2>
          <a
            href="#all"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory?.('همه');
            }}
            className="text-xs font-bold text-[#0D7366] hover:text-[#0A584E] transition-colors flex items-center gap-1"
          >
            <span>مشاهده همه دسته‌ها</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2x3 Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#0D7366]/20 transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 text-center mb-4 group-hover:text-[#0D7366] transition-colors">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                {group.products.map((item) => (
                  <div
                    key={item.id || item.slug}
                    onClick={() => onSelectCategory?.(item.name)}
                    className="flex flex-col items-center gap-1.5 cursor-pointer group/item"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-slate-200 p-0.5 overflow-hidden shadow-sm group-hover/item:border-[#0D7366] group-hover/item:scale-105 transition-all">
                      <img
                        src={item.image || ''}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="text-[10px] text-slate-600 text-center line-clamp-1 font-medium group-hover/item:text-[#0D7366] transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

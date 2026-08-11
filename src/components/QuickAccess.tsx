import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { categoryService } from '../services/categoryService';
import { bannerService } from '../services/bannerService';
import { DjangoBanner, DjangoCategory } from '../types';

interface QuickAccessProps {
  onCategoryClick: (title: string) => void;
  onNavigateCategory?: (categorySlug: string) => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onCategoryClick, onNavigateCategory }) => {
  const [categories, setCategories] = useState<DjangoCategory[]>([]);
  const [promoBanners, setPromoBanners] = useState<DjangoBanner[]>([]);

  const loadData = useCallback(async () => {
    const [cats, banners] = await Promise.all([
      categoryService.getCategories(),
      bannerService.getBanners('quick_access'),
    ]);
    setCategories(cats);
    setPromoBanners(banners);
  }, []);

  useEffect(() => {
    loadData().catch(() => {
      setCategories([]);
      setPromoBanners([]);
    });
  }, [loadData]);

  return (
    <section className="w-full py-4 mb-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {/* Category Icons Row */}
        <div className="flex items-center sm:justify-center gap-5 sm:gap-8 overflow-x-auto scrollbar-hide py-2">
          {categories.map((item, idx) => (
            <motion.a
              key={item.id || item.slug}
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick(item.name);
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="flex flex-col items-center gap-2 sm:gap-2.5 group cursor-pointer flex-shrink-0 min-w-[76px] sm:min-w-[96px]"
            >
              <div className="relative">
                {/* Glow ring behind icon */}
                <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0D7366]/20 scale-105" />

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md shadow-slate-200/70 border border-slate-100 flex items-center justify-center relative z-10 group-hover:scale-105 group-hover:border-[#0D7366]/40 transition-all duration-300 overflow-hidden p-2">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center bg-emerald-50`}
                    >
                      <span
                        className={`material-symbols-outlined text-3xl sm:text-4xl text-[#0D7366]`}
                      >
                        category
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0D7366] transition-colors text-center whitespace-nowrap">
                {item.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* 4 Promotional Banners Directly Under Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 pb-2 sm:pt-5 sm:pb-3">
          {promoBanners.map((banner, index) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              onClick={() => {
                if (onNavigateCategory) {
                  onNavigateCategory(banner.link_url || 'shop');
                } else {
                  onCategoryClick(banner.link_url || 'shop');
                }
              }}
              className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={banner.mobile_image_url || banner.image_url}
                alt={banner.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-auto block object-contain rounded-xl sm:rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


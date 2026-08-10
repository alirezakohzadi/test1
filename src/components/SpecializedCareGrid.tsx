import React from 'react';
import { motion } from 'motion/react';

import fulicaBanner from '../assets/images/banners/specialized-care-01.jpg';
import sunsafeBanner from '../assets/images/banners/specialized-care-02.jpg';
import facedouxBanner from '../assets/images/banners/specialized-care-03.jpg';
import ardeneBanner from '../assets/images/banners/specialized-care-04.jpg';
import primeBanner from '../assets/images/banners/specialized-care-05.jpg';
import sebyctaBanner from '../assets/images/banners/specialized-care-06.jpg';

interface SpecializedCareGridProps {
  onExploreCategory?: (category: string) => void;
}

export const SpecializedCareGrid: React.FC<SpecializedCareGridProps> = ({
  onExploreCategory,
}) => {
  const rowTwoBanners = [
    {
      id: 1,
      title: 'فیس دوکس - کرم ضد آفتاب تخصصی',
      category: 'ضد آفتاب',
      image: facedouxBanner,
    },
    {
      id: 2,
      title: 'آردن سبوما - مراقبت تخصصی پوست آکنه‌ای',
      category: 'مراقبت پوست',
      image: ardeneBanner,
    },
    {
      id: 3,
      title: 'پرایم ماتکس - جوانسازی و ضد چروک',
      category: 'مراقبت پوست',
      image: primeBanner,
    },
    {
      id: 4,
      title: 'سبیکتا هیدرا - آبرسانی عمیق پوست',
      category: 'مراقبت پوست',
      image: sebyctaBanner,
    },
  ];

  return (
    <section className="w-full py-6 mb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col gap-4">
        {/* Row 1: 2 Main Wide Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => onExploreCategory?.('مراقبت مو')}
          >
            <img
              src={fulicaBanner}
              alt="مراقبت تخصصی مو فولیکا - کراتین E"
              referrerPolicy="no-referrer"
              className="w-full h-auto block object-contain rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => onExploreCategory?.('ضد آفتاب')}
          >
            <img
              src={sunsafeBanner}
              alt="محافظت آفتاب سان سیف MAQUISUN"
              referrerPolicy="no-referrer"
              className="w-full h-auto block object-contain rounded-xl sm:rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Row 2: 4 Banner Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {rowTwoBanners.map((banner, index) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              onClick={() => onExploreCategory?.(banner.category)}
              className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={banner.image}
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

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { bannerService } from '../services/bannerService';
import { DjangoBanner } from '../types';

import ardeneBanner from '../assets/images/banners/bottom-banner-01.jpg';
import primeBanner from '../assets/images/banners/bottom-banner-02.jpg';
import sebyctaBanner from '../assets/images/banners/bottom-banner-03.jpg';
import hydrodermBanner from '../assets/images/banners/bottom-banner-04.jpg';

interface BottomBannersProps {
  onBannerClick?: (title: string) => void;
}

export const BottomBannersSection: React.FC<BottomBannersProps> = ({ onBannerClick }) => {
  const [banners, setBanners] = useState<Array<{ id: string | number; title: string; slug: string; image: string }>>([
    {
      id: 1,
      title: 'آردن سبوما - مراقبت تخصصی پوست آکنه‌ای',
      slug: 'ardene-sebuma',
      image: ardeneBanner,
    },
    {
      id: 2,
      title: 'پرایم ماتکس - جوانسازی و ضد چروک',
      slug: 'prime-matex',
      image: primeBanner,
    },
    {
      id: 3,
      title: 'سبیکتا هیدرا - آبرسانی عمیق پوست',
      slug: 'sebycta-skin-hydra',
      image: sebyctaBanner,
    },
    {
      id: 4,
      title: 'بادی اسپلش هیدرودرم - رایحه‌های ماندگار',
      slug: 'hydroderm-body-splash',
      image: hydrodermBanner,
    },
  ]);

  useEffect(() => {
    bannerService
      .getBanners('bottom')
      .then((data: DjangoBanner[]) => {
        if (data && data.length > 0) {
          setBanners(
            data.map((b) => ({
              id: b.id,
              title: b.title,
              slug: b.link_url || 'shop',
              image: b.image_url,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="w-full py-4 mb-6 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {banners.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onBannerClick?.(item.slug)}
              className="relative aspect-[16/8] sm:aspect-[16/7] rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-xs hover:shadow-md transition-all border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

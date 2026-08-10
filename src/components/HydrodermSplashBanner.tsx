import React from 'react';
import { motion } from 'motion/react';
import hydrodermWideBanner from '../assets/images/hydroderm_bodysplash_wide_1785871408635.jpg';

interface HydrodermSplashBannerProps {
  onBannerClick?: () => void;
}

export const HydrodermSplashBanner: React.FC<HydrodermSplashBannerProps> = ({ onBannerClick }) => {
  return (
    <section className="w-full py-4 mb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onClick={onBannerClick}
          className="relative w-full aspect-[21/9] sm:aspect-[4/1] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
        >
          <img
            src={hydrodermWideBanner}
            alt="کلکسیون بادی اسپلش هیدرودرم - طراوت و جذابیت ماندگار"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

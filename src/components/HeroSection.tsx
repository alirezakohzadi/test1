import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import facedouxBanner from '../assets/images/banners/hero-banner-01.jpg';
import ardeneBanner from '../assets/images/banners/hero-banner-02.jpg';
import primeBanner from '../assets/images/banners/hero-banner-03.jpg';
import sebyctaBanner from '../assets/images/banners/hero-banner-04.jpg';
import hydrodermBanner from '../assets/images/banners/hero-banner-05.jpg';
import { bannerService } from '../services/bannerService';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onNavigateCategory?: (categorySlug: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProducts, onNavigateCategory }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([
    { id: '1', title: 'آردن سبوما', slug: 'ardene-sebuma', bgImage: ardeneBanner },
    { id: '2', title: 'پرایم ماتکس', slug: 'prime-matex', bgImage: primeBanner },
    { id: '3', title: 'سبیکتا هیدرا', slug: 'sebycta-skin-hydra', bgImage: sebyctaBanner },
    { id: '4', title: 'هیدرودرم بادی اسپلش', slug: 'hydroderm-body-splash', bgImage: hydrodermBanner },
  ]);

  useEffect(() => {
    bannerService.getBanners('hero').then((banners) => {
      if (banners && banners.length > 0) {
        setSlides(
          banners.map((b) => ({
            id: String(b.id),
            title: b.title,
            slug: b.link_url ? b.link_url.replace('/categories/', '').replace('/brands/', '') : 'shop',
            bgImage: b.image_url,
          }))
        );
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full mb-8 pt-2 sm:pt-3">
      {/* Primary Accessible SEO H1 for Home Page */}
      <h1 className="sr-only">
        داروخانه آنلاین و مرجع تخصصی سلامت، زیبایی و مکمل‌های دارویی نوژاشاپ
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Left Vertical Banner (Face Doux Sun Protection) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => onNavigateCategory ? onNavigateCategory('facedoux') : onExploreProducts()}
            className="w-full sm:w-[30%] lg:w-[28%] h-[150px] sm:h-[270px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src={facedouxBanner}
              alt="فیس دوکس ضد آفتاب"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Right Main Banner (Horizontal Banners Slider) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-[70%] lg:w-[72%] h-[165px] sm:h-[270px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden relative group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => onNavigateCategory ? onNavigateCategory(slides[activeSlide].slug) : onExploreProducts()}
                className="absolute inset-0 cursor-pointer"
              >
                <img
                  src={slides[activeSlide].bgImage}
                  alt={slides[activeSlide].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Slide Navigation Controls */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
              {/* Dots */}
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                  }
                  className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                  className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { BRANDS } from '../data/mockData';
import { Brand } from '../types';
import { brandService } from '../services/brandService';

interface BrandsCarouselProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandsCarousel: React.FC<BrandsCarouselProps> = ({ onSelectBrand }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [brandsList, setBrandsList] = useState<Brand[]>(BRANDS);

  useEffect(() => {
    brandService.getBrands().then((res) => {
      if (res && res.length > 0) {
        setBrandsList(res);
      }
    });
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-6 mb-8 bg-[#F8FFF9] border-y border-emerald-100/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <span className="text-[10px] sm:text-xs font-bold text-[#0D7366] uppercase tracking-widest block mb-1">
            OFFICIAL DISTRIBUTOR
          </span>
          <h2 className="text-sm sm:text-lg font-extrabold text-slate-800">
            برندهای برجسته و دارای مجوز رسمی در نوژاشاپ
          </h2>
        </div>

        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <button
            onClick={scrollRight}
            className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-[#0D7366] hover:bg-emerald-50 transition-colors shrink-0 cursor-pointer"
            title="قبلی"
            aria-label="قبلی"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto py-3 px-2 scrollbar-hide scroll-smooth"
          >
            {brandsList.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              onClick={() => onSelectBrand?.(brand.persianName)}
              className="flex flex-col items-center gap-2 min-w-[100px] sm:min-w-[120px] flex-shrink-0 group cursor-pointer"
            >
              <div className="w-24 sm:w-32 h-auto flex items-center justify-center group-hover:scale-108 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.persianName}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-sm hover:drop-shadow-md transition-all"
                />
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-700 text-center group-hover:text-[#0D7366] transition-colors whitespace-nowrap">
                {brand.persianName}
              </span>
            </motion.div>
          ))}
          </div>

          <button
            onClick={scrollLeft}
            className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-[#0D7366] hover:bg-emerald-50 transition-colors shrink-0 cursor-pointer"
            title="بعدی"
            aria-label="بعدی"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

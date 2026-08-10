import React from 'react';
import eurhoMagnesiumImg from '../assets/images/eurho_magnesium_banner_1786392310577.jpg';
import vitallyToneImg from '../assets/images/vitally_tone_banner_1786392324989.jpg';
import cartigenMaxImg from '../assets/images/cartigen_max_banner_1786392337898.jpg';
import cartigenJointImg from '../assets/images/cartigen_joint_banner_1786392350871.jpg';

interface SupplementBannersRowProps {
  onBannerClick?: (categorySlug: string) => void;
}

export const SupplementBannersRow: React.FC<SupplementBannersRowProps> = ({ onBannerClick }) => {
  const banners = [
    { id: 1, image: eurhoMagnesiumImg, title: 'روزی پر انرژی - یورو ویتال', slug: 'supplements' },
    { id: 2, image: vitallyToneImg, title: 'مولتی ویتامین و مینرال - ویتالی تون', slug: 'supplements' },
    { id: 3, image: cartigenMaxImg, title: 'کارتیژن مکس - درمان پوکی استخوان', slug: 'supplements' },
    { id: 4, image: cartigenJointImg, title: 'کارتیژن - سلامت مفاصل و غضروف', slug: 'supplements' },
  ];

  return (
    <section className="w-full py-2 my-2 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              onClick={() => onBannerClick?.(banner.slug)}
              className="cursor-pointer"
            >
              <img
                src={banner.image}
                alt={banner.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

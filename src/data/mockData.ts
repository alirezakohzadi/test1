import { Product, QuickAccessCategory, Brand, ProductGroupCategory, Article } from '../types';

import antiSpotSerumImage from '../assets/images/products/anti-spot-serum.jpg';
import babyCreamImage from '../assets/images/products/baby-cream.jpg';
import bodyLotionImage from '../assets/images/products/body-lotion.jpg';
import bodyMoisturizerImage from '../assets/images/products/body-moisturizer.jpg';
import cleanserFoamImage from '../assets/images/products/cleanser-foam.jpg';
import dailyMultivitaminImage from '../assets/images/products/daily-multivitamin.jpg';
import deodorantStickImage from '../assets/images/products/deodorant-stick.jpg';
import hairMaskImage from '../assets/images/products/hair-mask.jpg';
import hairTonicImage from '../assets/images/products/hair-tonic.jpg';
import hyaluronicSerumImage from '../assets/images/products/hyaluronic-serum.jpg';
import luxurySkincareImage from '../assets/images/products/luxury-skincare.jpg';
import sunscreenCareImage from '../assets/images/products/sunscreen-care.jpg';
import vitaminCSerumImage from '../assets/images/products/vitamin-c-serum.jpg';
import vitaminSupplementImage from '../assets/images/products/vitamin-supplement.jpg';

import bioSkinLogo from '../assets/images/brands/bioskin.svg';
import evidermLogo from '../assets/images/brands/eviderm.svg';
import ardeneSebumaLogo from '../assets/images/brands/ardene-sebuma.svg';
import fulicaLogo from '../assets/images/brands/fulica.svg';
import vitalayerLogo from '../assets/images/brands/vitalayer.svg';
import genobioticLogo from '../assets/images/brands/genobiotic.svg';
import ceritaLogo from '../assets/images/brands/cerita.svg';
import seagullLogo from '../assets/images/brands/seagull.svg';
import primeLogo from '../assets/images/brands/prime.svg';
import lafarrerrLogo from '../assets/images/brands/lafarrerr.svg';
import myLogo from '../assets/images/brands/my.svg';

export const QUICK_ACCESS_ITEMS: QuickAccessCategory[] = [
  {
    id: 'express',
    title: 'دارو اکسپرس',
    iconName: 'local_shipping',
    bgColor: 'bg-[#0D7366]/10 border border-[#0D7366]/20',
    textColor: 'text-[#0D7366]',
  },
  {
    id: 'installment',
    title: 'پرداخت اقساطی',
    iconName: 'credit_card',
    bgColor: 'bg-[#43664D]/10 border border-[#43664D]/20',
    textColor: 'text-[#43664D]',
  },
  {
    id: 'dietary',
    title: 'مکمل رژیمی غذایی',
    iconName: 'medication',
    bgColor: 'bg-[#D4AF37]/15 border border-[#D4AF37]/30',
    textColor: 'text-[#8A6D0B]',
  },
  {
    id: 'bodybuilding',
    title: 'مکمل بدنسازی',
    iconName: 'fitness_center',
    bgColor: 'bg-[#0D7366]/15 border border-[#0D7366]/25',
    textColor: 'text-[#0D7366]',
  },
  {
    id: 'women',
    title: 'محصولات بانوان',
    iconName: 'spa',
    bgColor: 'bg-rose-50 border border-rose-200/60',
    textColor: 'text-rose-700',
  },
  {
    id: 'sunscreen',
    title: 'ضدآفتاب',
    iconName: 'light_mode',
    bgColor: 'bg-amber-50 border border-amber-200/60',
    textColor: 'text-amber-700',
  },
  {
    id: 'anti-spot',
    title: 'ضد لک',
    iconName: 'face_retouching_natural',
    bgColor: 'bg-teal-50 border border-teal-200/60',
    textColor: 'text-[#0D7366]',
  }
];

export const HIGHLIGHT_PRODUCTS: Product[] = [
  {
    id: 'hl-1',
    name: 'کرم ضد لک تخصصی درما کلیر',
    brand: 'درما کلیر',
    category: 'مراقبت پوست',
    image: antiSpotSerumImage,
    price: 1350000,
    originalPrice: 1550000,
    discountPercentage: 13,
    rating: 4.8,
    bgGlowColor: 'rgba(67, 102, 77, 0.25)',
    description: 'کرم ضد لک پیشرفته با ترکیبات موثر برای روشن‌سازی تیرگی‌های پوست و یکدست کردن رنگ چهره.',
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'hl-2',
    name: 'ضد آفتاب تخصصی اوریا SPF50',
    brand: 'اوریا',
    category: 'ضد آفتاب',
    image: sunscreenCareImage,
    price: 890000,
    originalPrice: 1050000,
    discountPercentage: 15,
    rating: 4.9,
    bgGlowColor: 'rgba(212, 175, 55, 0.25)',
    description: 'محافظت کامل در برابر اشعه‌های UVA و UVB با بافت بسیار سبک و جذب سریع بدون ایجاد چربی.',
    volumeOrSize: '۴۰ میلی‌لیتر'
  },
  {
    id: 'hl-3',
    name: 'کپسول مولتی ویتامین اورا پریمیوم',
    brand: 'اورا',
    category: 'مکمل غذایی',
    image: vitaminSupplementImage,
    price: 720000,
    rating: 4.7,
    bgGlowColor: 'rgba(13, 115, 102, 0.25)',
    description: 'مکمل جامع حاوی تمامی املاح معدنی، ویتامین‌های گروه B و آنتی‌اکسیدان‌های قوی برای افزایش انرژی.',
    volumeOrSize: '۶۰ عدد کپسول'
  },
  {
    id: 'hl-4',
    name: 'سرم آبرسان عمیق ویتالیا هیالورونیک',
    brand: 'ویتالیا',
    category: 'سرم پوستی',
    image: hyaluronicSerumImage,
    price: 1120000,
    originalPrice: 1280000,
    discountPercentage: 12,
    rating: 4.9,
    bgGlowColor: 'rgba(239, 68, 68, 0.2)',
    description: 'سرم فوق آبرسان با سه مولکول هیالورونیک اسید جهت رفع خشکی و خطوط دهیدراته پوست.',
    volumeOrSize: '۳۰ میلی‌لیتر'
  }
];

export const VITAPLEX_OFFER_PRODUCTS: Product[] = [
  {
    id: 'vp-1',
    name: 'تونیک تقویت کننده مو ویتاپلکس',
    brand: 'ویتاپلکس',
    category: 'ضد ریزش و تقویتی',
    image: bodyLotionImage,
    price: 1225000,
    rating: 4.8,
    description: 'تونیک پیشرفته ضد ریزش با قابلیت تحریک رشد مجدد فولیکول‌های خفته.'
  },
  {
    id: 'vp-2',
    name: 'ماسک تقویت کننده مو ویتاپلکس',
    brand: 'ویتاپلکس',
    category: 'ضد ریزش و تقویتی',
    image: hairMaskImage,
    price: 744000,
    rating: 4.6,
    description: 'ماسک مغذی موهای آسیب‌دیده حاوی کراتین مایع و پروویتامین B5.'
  },
  {
    id: 'vp-3',
    name: 'شامپو ضد ریزش تخصصی ویتاپلکس',
    brand: 'ویتاپلکس',
    category: 'ضد ریزش و تقویتی',
    image: cleanserFoamImage,
    price: 520000,
    rating: 4.7,
    description: 'شامپو کنترل‌کننده ریزش مو و غنی‌شده با کافئین و بیوتین.'
  },
  {
    id: 'vp-4',
    name: 'فوم شستشو صورت ویتاپلکس',
    brand: 'ویتاپلکس',
    category: 'سرم پوستی',
    image: hairTonicImage,
    price: 880000,
    rating: 4.9,
    description: 'فوم پاک‌کننده ملایم منافذ پوست با آبرسانی عمیق و عدم ایجاد التهاب.'
  },
  {
    id: 'vp-5',
    name: 'سرم ویتامین C روشن‌کننده هیالورونیک',
    brand: 'درما کر',
    category: 'سرم پوستی',
    image: vitaminCSerumImage,
    price: 650000,
    rating: 4.8,
    description: 'سرم ضد لک و روشن‌کننده با غلظت بالای ویتامین سی و هیالورونیک اسید.'
  },
  {
    id: 'vp-6',
    name: 'استیک دئودورانت و ضد تعریق ۴۸ ساعته',
    brand: 'هیدرودرم',
    category: 'دئودورانت',
    image: deodorantStickImage,
    price: 240000,
    rating: 4.5,
    description: 'دئودورانت بدون آلومینیوم با رایحه ملایم و ماندگاری ۴۸ ساعته.'
  },
  {
    id: 'vp-7',
    name: 'کرم ضد آفتاب بی‌رنگ SPF50 باریج',
    brand: 'بایو مارین',
    category: 'ضد آفتاب و آبرسان',
    image: dailyMultivitaminImage,
    price: 490000,
    rating: 4.9,
    description: 'ضدآفتاب ضد لک، با بافت بسیار سبک فلوئیدی و بدون چربی اضافی.'
  },
  {
    id: 'vp-8',
    name: 'قرص مولتی‌ویتامین و مینرال روزانه کامپلیت',
    brand: 'ویتال لایف',
    category: 'مکمل‌های دارویی',
    image: bodyMoisturizerImage,
    price: 320000,
    rating: 4.7,
    description: 'مکمل تغذیه‌ای شامل ۲۴ نوع ویتامین و ماده معدنی ضروری برای تقویت ایمنی.'
  },
  {
    id: 'vp-9',
    name: 'لوسیون مرطوب کننده و ترمیم‌کننده بدن',
    brand: 'پیور اسکین',
    category: 'مراقبت از بدن',
    image: babyCreamImage,
    price: 290000,
    rating: 4.6,
    description: 'لوسیون بدن حاوی شی باتر و روغن آرگان جهت رفع خشکی و خارش پوست.'
  },
  {
    id: 'vp-10',
    name: 'کرم سوختگی و محافظ پوست کودک و نوزاد',
    brand: 'درما کر',
    category: 'مراقبت از کودک',
    image: luxurySkincareImage,
    price: 185000,
    rating: 4.9,
    description: 'کرم محافظتی حاوی اکسید روی و عصاره بابونه برای ادرارسوزی نوزاد.'
  }
];

export const BRANDS: Brand[] = [
  { id: 'b1', name: 'Bio Skin', persianName: 'بایو اسکین', logo: bioSkinLogo },
  { id: 'b2', name: 'Eviderm', persianName: 'ایودرم', logo: evidermLogo },
  { id: 'b3', name: 'Ardene Sebuma', persianName: 'آردنه سبوما', logo: ardeneSebumaLogo },
  { id: 'b4', name: 'Fulica', persianName: 'فولیکا', logo: fulicaLogo },
  { id: 'b5', name: 'Vitalayer', persianName: 'ویتالیر', logo: vitalayerLogo },
  { id: 'b6', name: 'Genobiotic', persianName: 'ژنوبایوتیک', logo: genobioticLogo },
  { id: 'b7', name: 'Cerita', persianName: 'سریتا', logo: ceritaLogo },
  { id: 'b8', name: 'Seagull', persianName: 'سی گل', logo: seagullLogo },
  { id: 'b9', name: 'Prime', persianName: 'پریم', logo: primeLogo },
  { id: 'b10', name: 'La Farrerr', persianName: 'لافارر', logo: lafarrerrLogo },
  { id: 'b11', name: 'MY', persianName: 'مای', logo: myLogo }
];

export const NEWEST_PRODUCT_GROUPS: ProductGroupCategory[] = [
  {
    id: 'grp-1',
    title: 'ضد ریزش و تقویتی',
    products: [
      { id: 'gp1', name: 'لوسیون مو ۵ درصد', image: hairTonicImage },
      { id: 'gp2', name: 'لوسیون مو ۲ درصد', image: vitaminCSerumImage },
      { id: 'gp3', name: 'شامپو ضد ریزش', image: deodorantStickImage },
      { id: 'gp4', name: 'شامپو کافئین', image: dailyMultivitaminImage },
      { id: 'gp5', name: 'شامپو محرک رشد', image: bodyMoisturizerImage },
      { id: 'gp6', name: 'شامپو ۲۵0 میلی', image: babyCreamImage }
    ]
  },
  {
    id: 'grp-2',
    title: 'کبد و صفرا',
    products: [
      { id: 'gp7', name: 'رهاسیل', image: luxurySkincareImage },
      { id: 'gp8', name: 'لیواشور', image: antiSpotSerumImage },
      { id: 'gp9', name: 'تی ام جی', image: sunscreenCareImage },
      { id: 'gp10', name: 'دسموویت', image: vitaminSupplementImage },
      { id: 'gp11', name: 'لیوا هلت', image: hyaluronicSerumImage },
      { id: 'gp12', name: 'دتوکس ۳۰ عدد', image: bodyLotionImage }
    ]
  },
  {
    id: 'grp-3',
    title: 'نیکوتین آمید و طول عمر',
    products: [
      { id: 'gp13', name: 'ان ام ان', image: hairMaskImage },
      { id: 'gp14', name: 'اکتیوایج', image: cleanserFoamImage },
      { id: 'gp15', name: 'نیکوتین آمید ریبوزاید', image: hairTonicImage },
      { id: 'gp16', name: 'نیکوتین آمید پلاس', image: vitaminCSerumImage },
      { id: 'gp17', name: 'ان ای دی پلاس', image: deodorantStickImage },
      { id: 'gp18', name: 'نیکوتین آمید مونو', image: dailyMultivitaminImage }
    ]
  },
  {
    id: 'grp-4',
    title: 'سرم ضد چروک',
    products: [
      { id: 'gp19', name: 'رتینول پلاس', image: bodyMoisturizerImage },
      { id: 'gp20', name: 'هیالورونیک اکتیو', image: babyCreamImage },
      { id: 'gp21', name: 'سرم ویتامین سی', image: luxurySkincareImage },
      { id: 'gp22', name: 'لیفتینگ اکسپرت', image: antiSpotSerumImage },
      { id: 'gp23', name: 'ضد چروک شب', image: sunscreenCareImage },
      { id: 'gp24', name: 'سرم پپتاید', image: vitaminSupplementImage }
    ]
  },
  {
    id: 'grp-5',
    title: 'تقویت بانوان و آقایان',
    products: [
      { id: 'gp25', name: 'مولتی ویتامین بانوان', image: hyaluronicSerumImage },
      { id: 'gp26', name: 'مولتی ویتامین آقایان', image: bodyLotionImage },
      { id: 'gp27', name: 'امگا ۳ پلاس', image: hairMaskImage },
      { id: 'gp28', name: 'کپسول زینک', image: cleanserFoamImage },
      { id: 'gp29', name: 'ویتامین دی ۳', image: hairTonicImage },
      { id: 'gp30', name: 'کلسیم دی', image: vitaminCSerumImage }
    ]
  },
  {
    id: 'grp-6',
    title: 'محصولات کودک',
    products: [
      { id: 'gp31', name: 'شربت مولتی ویتامین', image: deodorantStickImage },
      { id: 'gp32', name: 'قطره آهن نوزاد', image: dailyMultivitaminImage },
      { id: 'gp33', name: 'شامپو بچه ملایم', image: bodyMoisturizerImage },
      { id: 'gp34', name: 'لوسیون بدن کودک', image: babyCreamImage },
      { id: 'gp35', name: 'کرم ضد سوختگی', image: luxurySkincareImage },
      { id: 'gp36', name: 'پودر بچه معطر', image: antiSpotSerumImage }
    ]
  }
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: 'na-1',
    name: 'سرم جوانساز لوکس آکوا',
    brand: 'لوکس',
    category: 'مراقبت پوست',
    image: sunscreenCareImage,
    price: 980000,
    rating: 4.8,
    isNew: true,
    volumeOrSize: '۳۰ میلی‌لیتر'
  },
  {
    id: 'na-2',
    name: 'کرم شب مغذی و بازسازی‌کننده',
    brand: 'ویتال پلاس',
    category: 'مراقبت پوست',
    image: vitaminSupplementImage,
    price: 1450000,
    rating: 4.9,
    isNew: true,
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'na-3',
    name: 'کپسول مولتی ویتامین پلاس',
    brand: 'هلثی لایف',
    category: 'مکمل غذایی',
    image: hyaluronicSerumImage,
    price: 620000,
    rating: 4.7,
    isNew: true,
    volumeOrSize: '۳۰ عدد'
  },
  {
    id: 'na-4',
    name: 'لوسیون بدن گیاهی نیچر پیور',
    brand: 'نیچر پیور',
    category: 'مراقبت بدن',
    image: bodyLotionImage,
    price: 380000,
    rating: 4.6,
    isNew: true,
    volumeOrSize: '۲۵۰ میلی‌لیتر'
  }
];

export const BEST_SELLER_PRODUCTS: Product[] = [
  {
    id: 'bs-1',
    name: 'کرم ضد آفتاب فاقد چربی بی رنگ SPF50',
    brand: 'بایو مارین',
    category: 'بایومارین',
    image: hairMaskImage,
    price: 756000,
    originalPrice: 945000,
    discountPercentage: 20,
    rating: 3.5,
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'bs-2',
    name: 'پک مسافرتی رطوبت رسان و لوسیون بدن',
    brand: 'بایو مارین',
    category: 'بایومارین',
    image: cleanserFoamImage,
    price: 157600,
    originalPrice: 197000,
    discountPercentage: 20,
    rating: 5.0,
    volumeOrSize: 'ست ۳ تایی'
  },
  {
    id: 'bs-3',
    name: 'کرم دور چشم عصاره جلبک های دریایی',
    brand: 'بایو مارین',
    category: 'بایومارین',
    image: hairTonicImage,
    price: 1428000,
    originalPrice: 1785000,
    discountPercentage: 20,
    rating: 4.0,
    volumeOrSize: '۱۵ میلی‌لیتر'
  },
  {
    id: 'bs-4',
    name: 'لوسیون شوینده و مرطوب کننده صورت',
    brand: 'بایو مارین',
    category: 'بایومارین',
    image: vitaminCSerumImage,
    price: 548000,
    originalPrice: 685000,
    discountPercentage: 20,
    rating: 4.0,
    volumeOrSize: '۲۰۰ میلی‌لیتر'
  }
];

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 'pop-1',
    name: 'سرم ضد لک قوی کلینیکال',
    brand: 'برند پریمیوم',
    category: 'مراقبت پوست',
    image: deodorantStickImage,
    price: 1850000,
    rating: 4.9,
    badge: 'محبوب‌ترین',
    isPopular: true,
    volumeOrSize: '۳۰ میلی‌لیتر'
  },
  {
    id: 'pop-2',
    name: 'کرم آبرسان عمقی و ترمیم کننده',
    brand: 'کلینیکال',
    category: 'مراقبت پوست',
    image: dailyMultivitaminImage,
    price: 920000,
    rating: 4.8,
    isPopular: true,
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'pop-3',
    name: 'ژل شستشوی صورت آنتی باکتریال',
    brand: 'درما پلاس',
    category: 'پاک‌کننده',
    image: bodyMoisturizerImage,
    price: 640000,
    rating: 4.7,
    isPopular: true,
    volumeOrSize: '۲۰۰ میلی‌لیتر'
  },
  {
    id: 'pop-4',
    name: 'سرم ویتامین سی روشن کننده',
    brand: 'ویتال لایف',
    category: 'سرم پوستی',
    image: babyCreamImage,
    price: 1280000,
    rating: 4.9,
    isPopular: true,
    volumeOrSize: '۳۰ میلی‌لیتر'
  },
  {
    id: 'pop-5',
    name: 'ضد آفتاب آنتی اسپات روشن کننده',
    brand: 'کلینیکال درماتولوژی',
    category: 'ضد آفتاب',
    image: luxurySkincareImage,
    price: 1100000,
    rating: 4.8,
    isPopular: true,
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'pop-6',
    name: 'ضد آفتاب هیدراتاسیون ۲۴ ساعته',
    brand: 'کلینیکال درماتولوژی',
    category: 'ضد آفتاب',
    image: antiSpotSerumImage,
    price: 1100000,
    rating: 4.8,
    isPopular: true,
    volumeOrSize: '۵۰ میلی‌لیتر'
  },
  {
    id: 'pop-7',
    name: 'لوسیون ترمیم‌کننده و نرم‌کننده',
    brand: 'پیور اسکین',
    category: 'مراقبت بدن',
    image: sunscreenCareImage,
    price: 780000,
    rating: 4.7,
    isPopular: true,
    volumeOrSize: '۲۵۰ میلی‌لیتر'
  },
  {
    id: 'pop-8',
    name: 'سرم جوانساز هیالورونیک اکتیو',
    brand: 'اکسپرت ایج',
    category: 'سرم پوستی',
    image: vitaminSupplementImage,
    price: 1450000,
    rating: 4.9,
    badge: 'پیشنهاد پرفروش',
    isPopular: true,
    volumeOrSize: '۴۰ میلی‌لیتر'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'روتین پوستی شبانه برای درخشش بیشتر و بازسازی سلولی',
    category: 'سلامت پوست',
    summary: 'چگونه با چند گام ساده در شب، پوستی شاداب، لطیف و با طراوت در صبح داشته باشیم...',
    content: 'شب‌ها زمان طلایی ترمیم و بازسازی سلول‌های پوست است. در طول خواب، جریان خون مویرگی افزایش یافته و جذب مواد مغذی توسط لایه‌های درم و اپیدرم به حداکثر می‌رسد. برای داشتن یک روتین شبانه موثر: ۱) شستشوی دو مرحله‌ای، ۲) استفاده از تونر آبرسان، ۳) سرم‌های حاوی هیالورونیک اسید یا رتینول، ۴) کرم مرطوب‌کننده غنی.',
    image: hyaluronicSerumImage,
    date: '۱۵ مهر ۱۴۰۴',
    readTime: '۵ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  },
  {
    id: 'art-2',
    title: 'بهترین زمان مصرف ویتامین‌ها و مکمل‌ها چه وقتی است؟',
    category: 'مکمل‌ها',
    summary: 'تداخلات دارویی و زمان طلایی جذب مکمل‌های غذایی و املاح معدنی را در این مقاله بخوانید...',
    content: 'ویتامین‌های محلول در چربی (A, D, E, K) بهتر است همراه با وعده‌های غذایی حاوی چربی‌های مفید مصرف شوند. در مقابل، ویتامین C و گروه B محلول در آب بوده و صبح‌ها با لیوان بزرگ آب بهترین جذب را دارند. کلسیم و منیزیم را برای بهبود کیفیت خواب بهتر است شب‌ها میل کنید.',
    image: dailyMultivitaminImage,
    date: '۱۲ مهر ۱۴۰۴',
    readTime: '۸ دقیقه',
    authorName: 'دکتر علی علوی',
    authorRole: 'دکترای داروسازی'
  },
  {
    id: 'art-3',
    title: 'نقش آنتی‌اکسیدان‌ها در پیشگیری از پیری زودرس و سلامت قلب',
    category: 'تغذیه',
    summary: 'چگونه با رژیم غذایی صحیح و مکمل‌های طبیعی از سلامت قلبی عروقی محافظت کنیم...',
    content: 'رادیکال‌های آزاد ناشی از آلودگی هوایی، استرس و اشعه ماوراء بنفش موجب اکسیداسیون سلولی می‌شوند. آنتی‌اکسیدان‌های قوی مانند کوآنزیم Q10، ویتامین E و رزوراترول رادیکال‌ها را خنثی کرده و شریان‌ها را انعطاف‌پذیر نگه می‌دارند.',
    image: vitaminSupplementImage,
    date: '۱۰ مهر ۱۴۰۴',
    readTime: '۶ دقیقه',
    authorName: 'دکتر سارا رضایی',
    authorRole: 'مشاور تغذیه'
  },
  {
    id: 'art-4',
    title: 'تاثیر خواب کافی و ریتم شبانه‌روزی بر سیستم ایمنی بدن',
    category: 'سبک زندگی',
    summary: 'خواب با کیفیت چگونه به بدن در مبارزه با ویروس‌ها و التهابات مزمن کمک می‌کند...',
    content: 'در طول مرحله خواب عمیق، سیستم ایمنی پروتئین‌هایی به نام سیتوکین آزاد می‌کند که برای مبارزه با عفونت‌ها و التهاب ضروری هستند. کمبود خواب مداوم پاسخ ایمنی ترشحی را تضعیف می‌کند.',
    image: bodyMoisturizerImage,
    date: '۰۸ مهر ۱۴۰۴',
    readTime: '۴ دقیقه',
    authorName: 'دکتر کامران نوری',
    authorRole: 'پزشک عمومی'
  },
  {
    id: 'art-5',
    title: 'درمان‌های تخصصی و راهکارهای طبیعی برای ریزش موی فصلی',
    category: 'مراقبت مو',
    summary: 'راهکارهای طبیعی و موثر برای تقویت ریشه مو و کنترل ریزش در فصل پاییز...',
    content: 'تغییرات هورمونی و دمایی در پاییز باعث وارد شدن درصد بیشتری از فولیکول‌ها به فاز تلوژن (استراحت) می‌شود. استفاده از عصاره‌های محرک گردش خون مانند کافئین، رزماری و ماینوکسیدیل به کنترل این فاز کمک شایانی می‌کند.',
    image: hairTonicImage,
    date: '۰۵ مهر ۱۴۰۴',
    readTime: '۷ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  },
  {
    id: 'art-6',
    title: 'اهمیت حرکات کششی و ریکاوری بعد از تمرینات قدرتی',
    category: 'ورزشی',
    summary: 'چرا نباید حرکات کششی و مکمل‌های آمینواسید را از برنامه ورزشی خود حذف کنید...',
    content: 'کشش عضلانی به دفع اسید لاکتیک تجمع‌یافته کمک کرده و از گرفتگی شدید عضلانی جلوگیری می‌کند. مصرف BCAA و گلوتامین بلافاصله پس از تمرین، سرعت ترمیم فیبرهای عضلانی را دوبرابر می‌کند.',
    image: bodyLotionImage,
    date: '۰۳ مهر ۱۴۰۴',
    readTime: '۵ دقیقه',
    authorName: 'کپتن آرش حبیبی',
    authorRole: 'مربی رسمی فیتنس'
  },
  {
    id: 'art-7',
    title: 'مدیریت استرس در محیط کار با تکنیک‌های تنفسی و گیاهی',
    category: 'سلامت روان',
    summary: 'تکنیک‌های تنفسی، میندفولنس و گیاهان آرامشبخش مانند اشواگاندا برای روزهای پرمشغله...',
    content: 'هورمون کورتیزول در شرایط استرس شغلی بالا می‌رود. تمرینات تنفسی ۴-۷-۸ و عصاره گیاهانی همچون گل‌ساعت، سنبل‌الطيب و اشواگاندا خنثی‌کننده طبیعی استرس‌های روزمره هستند.',
    image: antiSpotSerumImage,
    date: '۰۱ مهر ۱۴۰۴',
    readTime: '۱۰ دقیقه',
    authorName: 'دکتر الناز تهرانی',
    authorRole: 'روانشناس بالینی'
  },
  {
    id: 'art-8',
    title: 'باورهای غلط درباره کرم‌های ضدآفتاب و ضریب SPF',
    category: 'محافظت آفتاب',
    summary: 'آیا در روزهای ابری و پشت پنجره هم نیاز به ضدآفتاب داریم؟ پاسخ علمی را اینجا بیابید...',
    content: 'اشعه UVA که عامل اصلی پیری پوست و لک‌های عمیق است، از ابرها و شیشه پنجره عبور می‌کند. بنابراین مصرف ضدآفتاب در تمامی ۳۶۵ روز سال حتی در فضای سرپوشیده با نور طبیعی الزامی است.',
    image: sunscreenCareImage,
    date: '۲۸ شهریور ۱۴۰۴',
    readTime: '۶ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  },
  {
    id: 'art-9',
    title: 'نقش آنتی‌اکسیدان‌ها در کند کردن روند پیری زودرس پوست',
    category: 'سلامت پوست',
    summary: 'چگونه ویتامین C و نیاسینامید با رادیکال‌های آزاد مقابله می‌کنند...',
    content: 'رادیکال‌های آزاد ناشی از آلودگی هوا و نور خورشید کلاژن پوست را تخریب می‌کنند. استفاده روزانه از سرم‌های ویتامین C و نیاسینامید سد دفاعی پوست را تحکیم می‌کند.',
    image: vitaminCSerumImage,
    date: '۲۵ شهریور ۱۴۰۴',
    readTime: '۵ دقیقه',
    authorName: 'دکتر کامران رضایی',
    authorRole: 'دکترای داروسازی'
  },
  {
    id: 'art-10',
    title: 'راهنمای کامل انتخاب بهترین مکمل کلاژن‌ساز',
    category: 'مکمل‌ها',
    summary: 'تفاوت کلاژن هیدرولیز شده نوع ۱ و ۳ و تاثیر آن بر مفاصل و شادابی پوست...',
    content: 'کلاژن پپتید هیدرولیز شده دارای وزن مولکولی پایین بوده و جذب روده‌ای بسیار بالایی دارد. ترکیب آن با ویتامین C سنتز کلاژن طبیعی را تا ۳ برابر افزایش می‌دهد.',
    image: luxurySkincareImage,
    date: '۲۲ شهریور ۱۴۰۴',
    readTime: '۸ دقیقه',
    authorName: 'دکتر سارا نوری',
    authorRole: 'مشاور تغذیه'
  },
  {
    id: 'art-11',
    title: 'تاثیر رژیم غذایی پربیوتیک بر سلامت گوارش و شفافیت پوست',
    category: 'تغذیه',
    summary: 'ارتباط مستقیم محور روده و پوست (Gut-Skin Axis) و نقش غذاهای تخمیری...',
    content: 'باکتری‌های مفید روده با تولید اسیدهای چرب کوتاه زنجیره التهابات سیستمیک را کاهش داده و آکنه و اگزما را التیام می‌بخشند.',
    image: cleanserFoamImage,
    date: '۲۰ شهریور ۱۴۰۴',
    readTime: '۴ دقیقه',
    authorName: 'دکتر سارا نوری',
    authorRole: 'مشاور تغذیه'
  },
  {
    id: 'art-12',
    title: 'علل اصلی شوره سر و نحوه درمان قطعی آن با شامپوهای درمانی',
    category: 'مراقبت مو',
    summary: 'شناخت قارچ مالاسزیا و نحوه عملکرد ترکیبات کتوکونازول و زینک پریتیون...',
    content: 'شوره سر ناشی از تکثیر بیش از حد قارچ طبیعی پوست سر است. استفاده از شامپوهای حاوی کتوکونازول هفته‌ای ۲ بار کنترل کامل را ایجاد می‌کند.',
    image: hairMaskImage,
    date: '۱۸ شهریور ۱۴۰۴',
    readTime: '۶ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  },
  {
    id: 'art-13',
    title: 'تکنیک‌های بهداشت خواب و کنترل بی‌خوابی بدون نیاز به دارو',
    category: 'سلامت روان',
    summary: 'چگونه محیط خواب و هورمون ملاتونین را تنظیم کنیم...',
    content: 'کاهش نور آبی گوشی دو ساعت قبل از خواب و تنظیم دمای اتاق روی ۱۸ تا ۲۰ درجه سانتی‌گراد ترشح طبیعی ملاتونین را دو برابر می‌کند.',
    image: deodorantStickImage,
    date: '۱۵ شهریور ۱۴۰۴',
    readTime: '۵ دقیقه',
    authorName: 'دکتر الناز تهرانی',
    authorRole: 'روانشناس بالینی'
  },
  {
    id: 'art-14',
    title: 'تفاوت ترکیبات آبرسان (Hydrator) و مرطوب‌کننده (Moisturizer)',
    category: 'سلامت پوست',
    summary: 'چرا پوست شما همزمان به هیالورونیک اسید و سرامید نیاز دارد...',
    content: 'آبرسان‌ها آب را به سلول‌های پوست جذب می‌کنند اما مرطوب‌کننده‌ها با ایجاد لایه محافظ از تبخیر آب جلوگیری می‌نمایند.',
    image: hyaluronicSerumImage,
    date: '۱۲ شهریور ۱۴۰۴',
    readTime: '۴ دقیقه',
    authorName: 'دکتر کامران رضایی',
    authorRole: 'دکترای داروسازی'
  },
  {
    id: 'art-15',
    title: 'بهترین زمان مصرف مکمل‌های کلسیم، زینک و آهن',
    category: 'مکمل‌ها',
    summary: 'تداخلات معدنی و راهنمای زمان‌بندی طلایی برای حداکثر جذب مکمل‌ها...',
    content: 'کلسیم و آهن نباید همزمان مصرف شوند چون برای جذب در روده با یکدیگر رقابت می‌کنند. زینک بهتر است همراه با وعده غذایی سنگین‌تر مصرف شود.',
    image: dailyMultivitaminImage,
    date: '۱۰ شهریور ۱۴۰۴',
    readTime: '۷ دقیقه',
    authorName: 'دکتر کامران رضایی',
    authorRole: 'دکترای داروسازی'
  },
  {
    id: 'art-16',
    title: 'خواص بی‌نظیر چای سبز و لیمو برای پاکسازی کبد و کاهش وزن',
    category: 'سبک زندگی',
    summary: 'آنتی‌اکسیدان EGCG موجود در چای سبز چگونه چربی‌سوزی را فعال می‌کند...',
    content: 'کاتچین‌های موجود در چای سبز با افزایش متابولیسم پایه بدن و ترکیب با ویتامین C لیمو ترش ترشح آنزیم‌های کبد را بهبود می‌بخشند.',
    image: babyCreamImage,
    date: '۰۸ شهریور ۱۴۰۴',
    readTime: '۵ دقیقه',
    authorName: 'دکتر سارا نوری',
    authorRole: 'مشاور تغذیه'
  },
  {
    id: 'art-17',
    title: 'روش‌های نوین درمان تیرگی دور چشم و گودی زیر چشم',
    category: 'سلامت پوست',
    summary: 'از سرم‌های کافئین تا تزریق فیلر؛ چه روشی مناسب شماست؟',
    content: 'تیرگی زیر چشم می‌تواند ژنتیکی، ناشی از خستگی یا غلظت پیگمنت‌ها باشد. سرم‌های حاوی کافئین و پپتید به انقباض مویرگ‌های سطحی کمک می‌کنند.',
    image: antiSpotSerumImage,
    date: '۰۵ شهریور ۱۴۰۴',
    readTime: '۶ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  },
  {
    id: 'art-18',
    title: 'نقش رتینول و مشتقات ویتامین A در جوان‌سازی و درمان آکنه',
    category: 'سلامت پوست',
    summary: 'چگونه رتینول را بدون ایجاد سوزش و قرمزی وارد روتین شبانه کنیم...',
    content: 'رتینول با تسریع تکثیر سلول‌های اپیدرم و تحریک تولید کلاژن، چروک‌های سطحی را محو کرده و منافذ مسدود را باز می‌کند.',
    image: vitaminCSerumImage,
    date: '۰۲ شهریور ۱۴۰۴',
    readTime: '۸ دقیقه',
    authorName: 'دکتر مریم سجادی',
    authorRole: 'متخصص پوست و مو'
  }
];

export const CIRCLE_SLIDER_ITEMS = [
  { id: 'cs-1', title: 'تونر', bgColor: 'bg-[#EFF2F1]', image: cleanserFoamImage },
  { id: 'cs-2', title: 'ضد آفتاب', bgColor: 'bg-[#F3E5F5]', image: sunscreenCareImage },
  { id: 'cs-3', title: 'میسلار واتر', bgColor: 'bg-[#E8F5E9]', image: antiSpotSerumImage },
  { id: 'cs-4', title: 'ملاتونین', bgColor: 'bg-[#FDEEF4]', image: dailyMultivitaminImage },
  { id: 'cs-5', title: 'داروهای گیاهی', bgColor: 'bg-[#FFF4E5]', image: vitaminSupplementImage },
  { id: 'cs-6', title: 'نستله', bgColor: 'bg-[#F0F4F8]', image: babyCreamImage }
];

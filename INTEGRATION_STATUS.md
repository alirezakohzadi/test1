# Django REST API Integration Status

## Completed
- Centralized API access through `src/services/apiClient.ts` using `VITE_DJANGO_API_URL`; default is `http://127.0.0.1:8000/api/v1` only when the env var is absent.
- Added shared media URL resolver in `src/utils/media.ts`; it derives the backend origin from `VITE_DJANGO_API_URL` and preserves absolute `http/https`, `data:`, and `blob:` URLs.
- Connected product services for list, detail, related, featured, new arrivals, and best sellers endpoints with server-side pagination/filter parameters.
- Connected category services for category tree and category detail; removed the category mock fallback from runtime service behavior.
- Connected brand services for brand list/detail and supports paginated or list API responses.
- Connected banner service for position-based banners and media URL normalization.
- Connected blog article list/detail services.
- Connected search and search suggestions to Django endpoints; UI search is debounced and no local product fallback is used on errors.
- Updated route-level product and article detail loading in `App.tsx` so detail pages fetch from Django instead of resolving from bundled mock products/articles.
- Updated shop filters/sorting/pagination to use server-side API parameters and debounced search.
- Updated SEO sitemap fetch to use the backend origin `/api/sitemap/` endpoint.

## Changed Files
- `src/services/apiClient.ts`
- `src/services/bannerService.ts`
- `src/services/blogService.ts`
- `src/services/brandService.ts`
- `src/services/categoryService.ts`
- `src/services/dataMappers.ts`
- `src/services/productService.ts`
- `src/services/searchService.ts`
- `src/services/sitemapService.ts`
- `src/types.ts`
- `src/utils/media.ts`
- `src/App.tsx`
- `src/components/HeroSection.tsx`
- `src/components/QuickAccess.tsx`
- `src/components/BrandsCarousel.tsx`
- `src/components/CircleCategorySlider.tsx`
- `src/components/MagazinePage.tsx`
- `src/components/NewestProductGroups.tsx`
- `src/components/SearchModal.tsx`
- `src/components/ShopPage.tsx`

## Remaining Issues / Follow-up
- Some marketing sections still include static imported image assets as layout placeholders or section-specific artwork (`DetailedOffers`, `NewArrivalsSection`, `BestSellersSection`, `SpecializedCareGrid`, `HydrodermSplashBanner`, `BottomBannersSection`, `SupplementBannersRow`). They should be migrated to `bannerService.getBanners(position)` when the exact backend position/content mapping is confirmed.
- `ProductDetailPage` still has local hardcoded review/Q&A sample UI content; it is not Product/Category/Brand/Banner/Article catalog data but should be replaced if backend endpoints exist.
- `MagazinePage` retains static doctors/FAQ/quiz content because no API endpoints were specified for those content blocks.
- `src/data/mockData.ts` and `src/services/mockDjangoCategories.ts` still exist for historical reference/assets and were not deleted per instruction.
- Local asset files still exist under `src/assets/images`; they were not deleted.

## Mock/Fallback Status
- Runtime API services no longer catch API failures and return mock catalog data.
- Search modal no longer falls back to local product filtering after API errors.
- Empty API responses render empty states rather than mock data.

## Next Agent Starting Point
1. Confirm Django banner records for positions `row`, `specialized`, `splash`, `bottom`, and `sidebar` and replace remaining static banner image imports with those API responses.
2. Add backend endpoints/types for review/Q&A/doctors/FAQ if those also need to be dynamic.
3. Validate live API response shapes against current TypeScript interfaces and adjust optional field names if backend differs.

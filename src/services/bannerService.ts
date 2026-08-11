import { apiClient } from './apiClient';
import { DjangoBanner } from '../types';
import { resolveMediaUrl } from '../utils/media';

export const bannerService = {
  /**
   * Fetch banners for a specific position or all active promotional banners
   */
  async getBanners(position?: DjangoBanner['position']): Promise<DjangoBanner[]> {
    const params = position ? { position } : undefined;
    const response = await apiClient.get<DjangoBanner[] | { results: DjangoBanner[] }>('/banners/', params);
    const banners = Array.isArray(response) ? response : response.results || [];
    return banners.map((banner) => ({
      ...banner,
      image_url: resolveMediaUrl(banner.image_url),
      mobile_image_url: resolveMediaUrl(banner.mobile_image_url),
    }));
  },
};

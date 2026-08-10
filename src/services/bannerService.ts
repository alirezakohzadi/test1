import { apiClient } from './apiClient';
import { DjangoBanner } from '../types';

export const bannerService = {
  /**
   * Fetch banners for a specific position or all active promotional banners
   */
  async getBanners(position?: DjangoBanner['position']): Promise<DjangoBanner[]> {
    const params = position ? { position } : undefined;
    return await apiClient.get<DjangoBanner[]>('/v1/banners/', params);
  },
};

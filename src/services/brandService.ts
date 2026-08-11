import { apiClient } from './apiClient';
import { Brand, DjangoBrand } from '../types';
import { mapDjangoBrandToUI } from './dataMappers';

function normalizeList(response: DjangoBrand[] | { results?: DjangoBrand[] }): DjangoBrand[] {
  return Array.isArray(response) ? response : response.results || [];
}

export const brandService = {
  async getBrands(): Promise<Brand[]> {
    const response = await apiClient.get<DjangoBrand[] | { results?: DjangoBrand[] }>('/brands/');
    return normalizeList(response).map(mapDjangoBrandToUI);
  },

  async getBrandBySlug(slug: string): Promise<Brand | null> {
    try {
      const response = await apiClient.get<DjangoBrand>(`/brands/${slug}/`);
      return mapDjangoBrandToUI(response);
    } catch (err: any) {
      if (err?.status === 404) return null;
      throw err;
    }
  },
};

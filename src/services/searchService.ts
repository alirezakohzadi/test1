import { apiClient } from './apiClient';
import { DjangoSearchResponse, Product } from '../types';
import { mapDjangoProductToUI } from './dataMappers';

export const searchService = {
  async globalSearch(query: string): Promise<{ products: Product[]; totalResults: number }> {
    if (!query.trim()) return { products: [], totalResults: 0 };
    const response = await apiClient.get<DjangoSearchResponse>('/search/', { search: query });
    return {
      products: (response.products || []).map(mapDjangoProductToUI),
      totalResults: response.total_results || 0,
    };
  },

  async getSearchSuggestions(query: string): Promise<string[]> {
    if (!query.trim()) return [];
    const response = await apiClient.get<{ suggestions: string[] | { text: string }[] }>('/search/suggestions/', { search: query });
    return (response.suggestions || []).map((item) => (typeof item === 'string' ? item : item.text));
  },
};

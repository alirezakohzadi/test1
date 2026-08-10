import { apiClient } from './apiClient';
import {
  Product,
  DjangoProduct,
  DjangoPaginatedResponse,
  ProductFilterParams,
} from '../types';
import { mapDjangoProductToUI } from './dataMappers';

export const productService = {
  /**
   * Fetch paginated products list with filtering, searching, and sorting from Django REST API
   * Designed for 14,000+ catalog items with server-side pagination
   */
  async getProducts(params?: ProductFilterParams): Promise<DjangoPaginatedResponse<Product>> {
    const response = await apiClient.get<DjangoPaginatedResponse<DjangoProduct>>('/v1/products/', params);
    return {
      ...response,
      results: response.results.map(mapDjangoProductToUI),
    };
  },

  /**
   * Fetch single product details by slug or ID
   */
  async getProductBySlug(slugOrId: string): Promise<Product | null> {
    try {
      const response = await apiClient.get<DjangoProduct>(`/v1/products/${slugOrId}/`);
      return mapDjangoProductToUI(response);
    } catch (err: any) {
      if (err?.status === 404) {
        return null;
      }
      throw err;
    }
  },

  /**
   * Fetch related products for a product
   */
  async getRelatedProducts(slugOrId: string): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[]>(`/v1/products/${slugOrId}/related/`);
    return response.map(mapDjangoProductToUI);
  },

  /**
   * Fetch highlight / golden offer products
   */
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[]>('/v1/products/featured/');
    return response.map(mapDjangoProductToUI);
  },

  /**
   * Fetch new arrivals
   */
  async getNewArrivals(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[]>('/v1/products/new-arrivals/');
    return response.map(mapDjangoProductToUI);
  },

  /**
   * Fetch best seller / popular products
   */
  async getBestSellers(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[]>('/v1/products/best-sellers/');
    return response.map(mapDjangoProductToUI);
  },
};

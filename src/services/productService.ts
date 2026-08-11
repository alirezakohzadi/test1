import { apiClient } from './apiClient';
import {
  Product,
  DjangoProduct,
  DjangoPaginatedResponse,
  ProductFilterParams,
} from '../types';
import { mapDjangoProductToUI } from './dataMappers';

function normalizeProductList(response: DjangoProduct[] | DjangoPaginatedResponse<DjangoProduct>): DjangoProduct[] {
  return Array.isArray(response) ? response : response.results || [];
}

export const productService = {
  /**
   * Fetch paginated products list with filtering, searching, and sorting from Django REST API
   * Designed for 14,000+ catalog items with server-side pagination
   */
  async getProducts(params?: ProductFilterParams): Promise<DjangoPaginatedResponse<Product>> {
    const response = await apiClient.get<DjangoPaginatedResponse<DjangoProduct>>('/products/', params);
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
      const response = await apiClient.get<DjangoProduct>(`/products/${slugOrId}/`);
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
    const response = await apiClient.get<DjangoProduct[] | DjangoPaginatedResponse<DjangoProduct>>(`/products/${slugOrId}/related/`);
    return normalizeProductList(response).map(mapDjangoProductToUI);
  },

  /**
   * Fetch highlight / golden offer products
   */
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[] | DjangoPaginatedResponse<DjangoProduct>>('/products/featured/');
    return normalizeProductList(response).map(mapDjangoProductToUI);
  },

  /**
   * Fetch new arrivals
   */
  async getNewArrivals(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[] | DjangoPaginatedResponse<DjangoProduct>>('/products/new-arrivals/');
    return normalizeProductList(response).map(mapDjangoProductToUI);
  },

  /**
   * Fetch best seller / popular products
   */
  async getBestSellers(): Promise<Product[]> {
    const response = await apiClient.get<DjangoProduct[] | DjangoPaginatedResponse<DjangoProduct>>('/products/best-sellers/');
    return normalizeProductList(response).map(mapDjangoProductToUI);
  },
};

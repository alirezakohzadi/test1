import { DjangoCategory, DjangoCategoryListResponse } from '../types';
import { apiClient } from './apiClient';
import { resolveMediaUrl } from '../utils/media';

const CATEGORY_CACHE_KEY = 'nozha_categories_cache_v1';
const CATEGORY_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

interface CacheEnvelope {
  timestamp: number;
  data: DjangoCategory[];
}

let inMemoryCache: CacheEnvelope | null = null;
let flattenedCategoryMap: Map<string | number, DjangoCategory> | null = null;

/**
 * Normalizes raw response from Django REST Framework endpoint.
 */
function normalizeCategory(cat: DjangoCategory): DjangoCategory {
  return {
    ...cat,
    image: resolveMediaUrl(cat.image),
    og_image: resolveMediaUrl(cat.og_image),
    children: cat.children?.map(normalizeCategory),
  };
}

function normalizeDjangoResponse(data: unknown): DjangoCategory[] {
  if (Array.isArray(data)) {
    return (data as DjangoCategory[]).map(normalizeCategory);
  }
  if (data && typeof data === 'object' && 'results' in data && Array.isArray((data as DjangoCategoryListResponse).results)) {
    return ((data as DjangoCategoryListResponse).results || []).map(normalizeCategory);
  }
  return [];
}

/**
 * Builds a flat map of all categories for fast O(1) lookups
 */
function buildCategoryMap(categories: DjangoCategory[], map = new Map<string | number, DjangoCategory>()): Map<string | number, DjangoCategory> {
  for (const cat of categories) {
    map.set(cat.id, cat);
    if (cat.slug) map.set(cat.slug, cat);
    if (cat.children && cat.children.length > 0) {
      buildCategoryMap(cat.children, map);
    }
  }
  return map;
}

/**
 * Fetches category tree from Django REST API with caching; no mock fallback is used
 */
export async function fetchCategoriesFromApi(_customUrl?: string): Promise<DjangoCategory[]> {
  const now = Date.now();

  // 1. Check in-memory cache first
  if (inMemoryCache && now - inMemoryCache.timestamp < CATEGORY_CACHE_TTL) {
    return inMemoryCache.data;
  }

  // 2. Check localStorage cache
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(CATEGORY_CACHE_KEY);
      if (stored) {
        const envelope: CacheEnvelope = JSON.parse(stored);
        if (now - envelope.timestamp < CATEGORY_CACHE_TTL && Array.isArray(envelope.data) && envelope.data.length > 0) {
          inMemoryCache = envelope;
          flattenedCategoryMap = buildCategoryMap(envelope.data);
          return envelope.data;
        }
      }
    } catch {
      // Ignore
    }
  }

  // 3. Request API
  const rawJson = await apiClient.get<unknown>('/categories/');
  const categories = normalizeDjangoResponse(rawJson);

  if (categories.length > 0) {
    const envelope: CacheEnvelope = { timestamp: now, data: categories };
    inMemoryCache = envelope;
    flattenedCategoryMap = buildCategoryMap(categories);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CATEGORY_CACHE_KEY, JSON.stringify(envelope));
      } catch {
        // Ignore storage errors
      }
    }
    return categories;
  }

  return [];
}

/**
 * Gets cached categories synchronously if available
 */
export function getCachedCategoriesSync(): DjangoCategory[] | null {
  if (inMemoryCache) {
    return inMemoryCache.data;
  }
  return null;
}

/**
 * Clears category cache
 */
export function clearCategoryCache(): void {
  inMemoryCache = null;
  flattenedCategoryMap = null;
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(CATEGORY_CACHE_KEY);
    } catch {
      // Ignore
    }
  }
}

/**
 * Synchronous flat search in categories tree
 */
export function searchCategories(categories: DjangoCategory[], query: string): DjangoCategory[] {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results: DjangoCategory[] = [];

  function traverse(list: DjangoCategory[]) {
    for (const item of list) {
      if (item.name.toLowerCase().includes(q) || (item.description && item.description.toLowerCase().includes(q))) {
        results.push(item);
      }
      if (item.children && item.children.length > 0) {
        traverse(item.children);
      }
    }
  }

  traverse(categories);
  return results;
}

export const categoryService = {
  getCategories: fetchCategoriesFromApi,
  getCategoryBySlug: async (slug: string): Promise<DjangoCategory | null> => {
    try {
      const category = await apiClient.get<DjangoCategory>(`/categories/${slug}/`);
      return normalizeCategory(category);
    } catch (err: any) {
      if (err?.status === 404) {
        return null;
      }
      throw err;
    }
  },
  searchCategories,
  clearCache: clearCategoryCache,
};

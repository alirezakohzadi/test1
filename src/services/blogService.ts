import { apiClient } from './apiClient';
import { Article, DjangoArticle, DjangoPaginatedResponse } from '../types';
import { mapDjangoArticleToUI } from './dataMappers';

export const blogService = {
  /**
   * Fetch paginated articles from Django REST API
   */
  async getArticles(categorySlug?: string, page = 1): Promise<DjangoPaginatedResponse<Article>> {
    const response = await apiClient.get<DjangoPaginatedResponse<DjangoArticle>>('/v1/blog/articles/', {
      category_slug: categorySlug,
      page,
    });

    return {
      ...response,
      results: response.results.map(mapDjangoArticleToUI),
    };
  },

  /**
   * Fetch single article by slug or ID
   */
  async getArticleBySlug(slugOrId: string): Promise<Article | null> {
    try {
      const response = await apiClient.get<DjangoArticle>(`/v1/blog/articles/${slugOrId}/`);
      return mapDjangoArticleToUI(response);
    } catch (err: any) {
      if (err?.status === 404) {
        return null;
      }
      throw err;
    }
  },
};

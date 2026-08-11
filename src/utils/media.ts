import { API_BASE_URL } from '../services/apiClient';

export function getApiOrigin(): string {
  try {
    return new URL(API_BASE_URL).origin;
  } catch {
    if (typeof window !== 'undefined') return window.location.origin;
    return '';
  }
}

export function resolveMediaUrl(url?: string | null): string {
  if (!url) return '';
  if (/^https?:\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) return url;
  if (url.startsWith('//')) return `${typeof window !== 'undefined' ? window.location.protocol : 'http:'}${url}`;
  const origin = getApiOrigin();
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${origin}${path}`;
}

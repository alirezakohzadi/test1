# CODEX PROGRESS

## Current Status
- Backend scaffold and first production-ready implementation are present under `backend/`.
- Phases 1-10 have code coverage at repository level, but dependency installation and Django runtime tests are blocked by package-index access (403). Therefore phases are not claimed as fully runtime-complete.

## Completed Work
- Audited frontend/API contract before backend coding.
- Created modular Django project in `backend/` with apps: products, categories, brands, banners, blog, accounts, cart, orders, payments, shipping, seo, search, importer, common.
- Implemented environment-driven settings, CORS, DRF, JWT, django-filter, drf-spectacular config, media/static settings, and `/api/v1/` routing.
- Implemented catalog models with indexes, SEO metadata, WordPress import identifiers, product images with original URL and WebP fields.
- Implemented category tree, brand, banner, article, SEO page meta, OTP auth, backend-controlled cart, order snapshot, abstract payment/shipping services, and WordPress import skeleton.
- Implemented Django admin registrations for core business entities.
- Added backend README, `.env.example`, pytest config, and tests for product API, search, OTP auth, and order snapshots.

## In Progress
- Runtime verification is pending until Python dependencies can be installed.

## Remaining Work
- Run `pip install -r backend/requirements.txt`, `python manage.py makemigrations`, `python manage.py migrate`, `python manage.py check`, and `pytest` in an environment with package access.
- Add concrete SMS/payment/shipping providers when credentials/providers are selected.
- Add real PostgreSQL full-text/trigram search migrations once PostgreSQL extensions are confirmed.
- Perform frontend integration verification against live backend and real seed/imported data.

## Files Created or Changed
- `CODEX_PROGRESS.md`, `HANDOFF.md`
- `backend/manage.py`, `backend/config/*`, `backend/requirements.txt`, `backend/.env.example`, `backend/pytest.ini`, `backend/README.md`
- `backend/apps/**` models, serializers, views, urls, admin, services, and tests.

## APIs Implemented
- `GET /api/v1/products/`
- `GET /api/v1/products/{slug}/`
- `GET /api/v1/products/{slug}/related/`
- `GET /api/v1/products/featured/`
- `GET /api/v1/products/new-arrivals/`
- `GET /api/v1/products/best-sellers/`
- `GET /api/v1/categories/`
- `GET /api/v1/categories/{slug}/`
- `GET /api/v1/brands/`
- `GET /api/v1/brands/{slug}/`
- `GET /api/v1/banners/`
- `GET /api/v1/blog/articles/`
- `GET /api/v1/blog/articles/{slug}/`
- `GET /api/v1/search/`
- `GET /api/v1/search/suggestions/`
- `GET /api/v1/seo/meta/`
- `GET /api/sitemap/`
- `POST /api/v1/auth/otp/send/`
- `POST /api/v1/auth/otp/verify/`
- `GET/POST /api/v1/cart/`
- `POST /api/v1/orders/`

## APIs Remaining
- No frontend-consumed endpoint is intentionally omitted. Provider-specific payment verify/callback endpoints should be added after payment provider selection.

## Models Created
- User, OTPCode, Category, Brand, Product, ProductImage, Banner, BlogCategory, Article, Cart, CartItem, Order, OrderItem, PageMeta.

## Migrations Run
- None. `makemigrations` could not be run because Django dependencies were unavailable in this environment.

## Successful Tests
- `python -m compileall backend` passed.

## Current Errors
- `python -m pip install -r backend/requirements.txt` failed due package-index network/proxy 403, so Django check/pytest/migrations could not run.

## Architecture Decisions
- Backend is modular and isolated in `backend/`.
- `/api/v1/` is the API base expected by frontend services; `/api/sitemap/` is also served for the existing sitemap service.
- Backend is source of truth for price/stock/cart/order totals; order items snapshot product name, SKU, unit price, and line total.
- WordPress import is designed to be idempotent using `wordpress_id`, `sku`, and unique slugs; no fake data is generated.
- Product media preserves imported original URLs and separates future WebP conversions.

## NEXT ACTION
In an environment with Python package access, install `backend/requirements.txt`, run Django migrations/checks/tests, fix any runtime issues, then perform frontend integration verification against `/api/v1/`.

# HANDOFF

## Start Here
Read `CODEX_PROGRESS.md`, then run `git status --short` and inspect `backend/` before making changes. Do not recreate the backend from scratch.

## Frontend Audit Findings
- API base is `VITE_DJANGO_API_URL`, defaulting to `http://localhost:8000/api`.
- Actual frontend service calls are:
  - `/v1/products/`, `/v1/products/{slug}/`, `/v1/products/{slug}/related/`, `/v1/products/featured/`, `/v1/products/new-arrivals/`, `/v1/products/best-sellers/`
  - `/v1/categories/`, `/v1/categories/{slug}/`
  - `/v1/brands/`, `/v1/brands/{slug}/`
  - `/v1/banners/`
  - `/v1/blog/articles/`, `/v1/blog/articles/{slug}/`
  - `/v1/search/`, `/v1/search/suggestions/`
  - `/v1/seo/meta/`
  - direct `/api/sitemap/`
- `API_REQUIREMENTS.md` also specifies OTP auth, cart, and order endpoints; current React AuthModal/CartDrawer still use local/demo state, but backend endpoints have been implemented for production.

## Current Backend State
- Modular Django code exists under `backend/`.
- Package installation was blocked by a 403 from the package index in this session; only Python compilation was verified.
- No migrations were generated/run yet.

## Resume Steps
1. `cd backend`
2. `python -m venv .venv && . .venv/bin/activate`
3. `pip install -r requirements.txt`
4. `python manage.py makemigrations`
5. `python manage.py migrate`
6. `python manage.py check`
7. `pytest`
8. Fix runtime issues and update `CODEX_PROGRESS.md` before continuing.

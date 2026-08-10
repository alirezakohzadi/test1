# HANDOFF

## Start Here
1. Read this file and `CODEX_PROGRESS.md`.
2. Run `git status --short`.
3. Do not recreate the backend from scratch; continue from the existing `backend/` implementation.

## What Was Fixed In This Pass
- `backend/apps/blog/admin.py`: `ArticleAdmin.autocomplete_fields` was preserved, and `BlogCategoryAdmin` was added with `search_fields` so Django admin autocomplete checks have a searchable target.
- `backend/apps/categories/serializers.py`: replaced a dynamic `__import__` Count hack with a normal import.
- `backend/apps/banners/views.py`: rewrote active banner filtering with explicit `Q` conditions.
- `backend/config/settings.py` and `backend/.env.example`: local database now defaults to PostgreSQL, not SQLite; local CORS includes `3000` and `5173` origins.
- `backend/README.md`: added Windows local setup and PostgreSQL guidance.

## Frontend/API Contract Recap
- Frontend base API URL: `VITE_DJANGO_API_URL`; for local Windows development set it to `http://127.0.0.1:8000/api`.
- Frontend calls these backend paths: products list/detail/related/featured/new-arrivals/best-sellers, categories list/detail, brands list/detail, banners list, blog article list/detail, search/suggestions, SEO meta, and `/api/sitemap/`.
- Current React auth/cart UI still uses local state, but backend OTP/cart/order endpoints exist for production integration.

## Current Blocker
- This Linux container cannot install Python packages because the package-index/proxy returns `403 Forbidden` for Django.
- Therefore `manage.py check`, migrations, server run, pytest, and live API smoke tests could not be completed here.

## Windows Local Resume Steps
```powershell
cd backend
py --version
python --version
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
copy .env.example .env
# Edit .env with your local PostgreSQL DATABASE_URL.
py manage.py check
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```

## API Smoke Tests After Server Starts
- `GET http://127.0.0.1:8000/api/v1/products/`
- `GET http://127.0.0.1:8000/api/v1/categories/`
- `GET http://127.0.0.1:8000/api/v1/brands/`
- `GET http://127.0.0.1:8000/api/v1/banners/`
- `GET http://127.0.0.1:8000/api/v1/blog/articles/`

Empty database responses are acceptable. Do not create fake products just to make the API non-empty.

## NEXT ACTION
Run the Windows local setup steps above in an environment with package access and PostgreSQL, then fix any real Django system-check/migration/runtime errors that appear.

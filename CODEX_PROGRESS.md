# CODEX PROGRESS

## Current Status
- Local-readiness pass completed for the existing `backend/` without rewriting it from scratch.
- The known Django admin autocomplete issue was fixed in code: `ArticleAdmin.autocomplete_fields = ('author', 'category')` is preserved, and the destination `BlogCategoryAdmin` now defines `search_fields`.
- Runtime verification is still blocked in this execution environment because Python packages cannot be downloaded through the configured proxy/package index, so Django is not installed here.

## Completed Work
- Re-read backend structure: `manage.py`, `config/settings.py`, `config/urls.py`, `config/api_urls.py`, app models/serializers/views/urls/admin files, requirements, env example, database/CORS/media/static/auth/API configuration.
- Re-checked frontend API contract through `API_REQUIREMENTS.md` and actual frontend service calls under `src/services/*`.
- Fixed Django Admin autocomplete configuration properly instead of removing autocomplete.
- Replaced the previous automatic SQLite fallback with an explicit local PostgreSQL `DATABASE_URL` default so PostgreSQL problems are not hidden.
- Added local Vite origins for both the project dev port (`3000`) and Vite default (`5173`) to development CORS defaults.
- Cleaned up category serializer implementation and active banner query logic.
- Updated backend README with Windows local setup commands and PostgreSQL-first local database guidance.

## In Progress
- Dependency installation / Django system check / migrations / server run are waiting for an environment with package-index access and PostgreSQL availability.

## Remaining Work
- On the Windows laptop: create/activate `.venv`, install requirements, verify installed Python version compatibility, configure `.env`, ensure PostgreSQL is installed/running, then run Django commands.
- Run `py manage.py check`, `py manage.py makemigrations`, `py manage.py migrate`, `py manage.py runserver`, and endpoint smoke tests.
- If PostgreSQL is unavailable on the laptop, install/start PostgreSQL or explicitly decide on a temporary development database approach; do not silently switch to SQLite.

## Files Created or Changed
- `backend/apps/blog/admin.py` — added `BlogCategoryAdmin.search_fields` and kept `ArticleAdmin.autocomplete_fields`.
- `backend/apps/categories/serializers.py` — replaced dynamic import hack with normal `Count` import and clearer tree serialization.
- `backend/apps/banners/views.py` — made active-date filtering explicit with `Q` objects.
- `backend/config/settings.py` — PostgreSQL default database URL and expanded local CORS origins.
- `backend/.env.example` — PostgreSQL localhost URL and local Vite CORS origins.
- `backend/README.md` — Windows local setup and PostgreSQL-first local database instructions.
- `CODEX_PROGRESS.md`, `HANDOFF.md` — updated status and next steps.

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
- No currently known frontend service endpoint is intentionally omitted.
- Provider-specific payment callback/verify and shipping/SMS provider integrations remain future work after provider selection.

## Models Created
- User, OTPCode, Category, Brand, Product, ProductImage, Banner, BlogCategory, Article, Cart, CartItem, Order, OrderItem, PageMeta.

## Migrations Run
- None in this environment. Django is unavailable because dependency installation fails before `manage.py` can run.

## Successful Tests / Checks
- `npm run lint` passed.
- `python -m compileall backend` passed after code changes.
- Static admin review confirms every current `autocomplete_fields` target has a registered admin with `search_fields`: User, Category, Brand, and BlogCategory.

## Current Errors
- `py --version` fails here because the Linux container does not have the Windows `py` launcher.
- `python -m pip install -r backend/requirements.txt` and `.venv/bin/python -m pip install -r requirements.txt` fail due proxy/package-index `403 Forbidden` for Django.
- `python manage.py check` / `.venv/bin/python manage.py check` fail with `ModuleNotFoundError: No module named 'django'` because dependencies could not be installed.
- Migrations, local server, and live API smoke tests could not be executed in this environment for the same dependency blocker.

## Database Status
- Current configured local default is PostgreSQL: `postgresql://nozha:change-me@127.0.0.1:5432/nozha`.
- No real credentials are committed. Copy `.env.example` to `.env` and set the real local PostgreSQL user/password/db.
- SQLite is no longer used as an automatic fallback.

## Local Server Status
- Not started in this environment because Django is not installed.
- Expected Windows command after dependencies and PostgreSQL are ready: `py manage.py runserver` from `backend/`.

## Architecture Decisions
- Keep `ArticleAdmin.autocomplete_fields`; fix destination admins with `search_fields` as required by Django system checks.
- Keep PostgreSQL as local and production target to avoid hiding database setup issues.
- Keep CORS explicit for local dev origins only; no wildcard.

## NEXT ACTION
On the Windows laptop, run `py --version` and `python --version`, create/activate `backend/.venv`, install `backend/requirements.txt`, configure `.env` for local PostgreSQL, then run `py manage.py check`, `py manage.py makemigrations`, `py manage.py migrate`, `py manage.py runserver`, and smoke-test the main `/api/v1/` endpoints.

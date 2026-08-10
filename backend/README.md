# NozhaShop Django Backend

Production-oriented Django REST Framework backend for the existing Persian/RTL Vite React storefront.

## Installation

### Windows local development
```powershell
cd backend
py --version
python --version
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

### macOS/Linux
```bash
cd backend
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

## Environment
Copy `.env.example` to `.env` and configure `SECRET_KEY`, `DATABASE_URL`, Redis, CORS origins, media paths, SMS, payment, and shipping provider variables. No real credentials are stored in the repository.

## Database
PostgreSQL is the configured database for local and production use. Create the database/user referenced by `DATABASE_URL` before running migrations; do not silently switch to SQLite when PostgreSQL is missing.
```bash
py manage.py makemigrations
py manage.py migrate
py manage.py createsuperuser
```

## Run
```bash
py manage.py runserver
```
Frontend should use `VITE_DJANGO_API_URL=http://localhost:8000/api`.

## API
Canonical prefix: `/api/v1/`.
Implemented resources: products, categories, brands, banners, blog articles, search, SEO meta, OTP auth, cart, orders, and JSON sitemap at `/api/sitemap/`.
Swagger/OpenAPI: `/api/docs/`, schema: `/api/schema/`.

## Testing
```bash
py manage.py check
py manage.py makemigrations --check
py manage.py migrate
pytest
```

## Media and WebP
Product images keep `original_url` and optional uploaded originals. `webp_image` is separated so later Celery conversion will not break WordPress-imported original URLs.

## Production Notes
Use PostgreSQL, Redis cache, fixed CORS origins, object storage/CDN for media, real SMS provider, concrete payment gateway implementation, and background workers for image conversion/import jobs.

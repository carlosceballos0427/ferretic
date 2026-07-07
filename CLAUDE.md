# Ferretic — Sistema para ferretería

Aplicación full-stack para la gestión de una ferretería: backend API REST con Django
y frontend con Angular. Existe una guía de despliegue en `GUIA_DESPLIEGUE.md` — leerla
antes de tocar temas de deploy.

## Stack

- **Backend**: Django 6 + Django REST Framework + django-cors-headers
  - Proyecto Django: `Ferreteria_Ferretic/` (settings, urls, wsgi/asgi)
  - App principal: `ferretic/` (models, serializer, views)
  - Base de datos: SQLite (`db.sqlite3`)
- **Frontend**: Angular (en `frontend/`), con `db.json` y `server.js` (json-server para mocks)

## Comandos (en WSL/Ubuntu)

```bash
# Backend (desde la raíz del proyecto)
source .venv/bin/activate
python manage.py runserver          # API en puerto 8000
python manage.py migrate            # aplicar migraciones
python manage.py test               # pruebas del backend

# Frontend (desde frontend/)
npm start                           # ng serve, puerto 4200
```

El preview de Claude usa `.claude/launch.json` (backend y frontend como configuraciones separadas).

## Reglas de estilo de código (OBLIGATORIAS)

Todo el código debe quedar documentado en español:

- **Cada función/método** → docstring (Python) o comentario JSDoc (TypeScript) con qué hace, parámetros y retorno.
- **Cada bucle** → comentario de una línea: qué recorre y para qué.
- **Cada línea/expresión compleja** (querysets, serializers, RxJS, cálculos) → comentario explicativo.
- **Bloques de HTML/CSS** → comentario de sección describiendo su propósito.

## Contexto adicional

- Idioma del proyecto: español (respuestas, comentarios y documentación en español).

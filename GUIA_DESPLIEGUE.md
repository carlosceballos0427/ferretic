# 🛠️ Guía de Despliegue - Ferretic (2026)

Esta guía detalla los pasos para poner tu sistema de gestión de ferretería en producción usando servicios gratuitos.

---

## 🏛️ Arquitectura del Despliegue
Dividiremos la aplicación en dos partes (islas) que se comunican entre sí:
1.  **Frontend (Angular):** Estático, rápido, se despliega en **Netlify**.
2.  **Backend (Django API):** Procesamiento lógico, se despliega en **Render**.
3.  **Base de Datos:** Relacional, se recomienda **Supabase** (PostgreSQL) para persistencia gratuita eterna.

---

## 1. 🐍 Backend (Django) en Render.com
Render es ideal para correr aplicaciones Python.

### Pasos:
1.  **Subir a GitHub:** Asegúrate de que el archivo `requirements.txt` esté en la raíz.
2.  **Crear Web Service:** En Render, selecciona "New + Web Service" y conecta tu repositorio.
3.  **Configuración:**
    *   **Runtime:** `Python 3`
    *   **Build Command:** `pip install -r requirements.txt`
    *   **Start Command:** `gunicorn Ferreteria_Ferretic.wsgi:application` *(necesitarás instalar gunicorn)*.
4.  **Variables de Entorno:** Configura `DEBUG=False` y `DATABASE_URL` (la que te dé Supabase).

---

## 2. 🎨 Frontend (Angular) en Netlify
Netlify es el mejor servidor para archivos de Angular.

### Pasos:
1.  **Preparar el Código:** Cambia la URL en `api.service.ts` para que apunte a tu nueva URL de Render (ej: `https://ferretic-api.onrender.com`).
2.  **Crear Site:** En Netlify, selecciona "Add new site" -> "Import an existing project".
3.  **Configuración de Build:**
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist/frontend` (o el nombre de tu carpeta de compilación).
4.  **Redirecciones:** Crea un archivo llamado `_redirects` en `src/` con el contenido `/* /index.html 200` para que las rutas de Angular funcionen al refrescar.

---

## 💾 3. Base de Datos Gratuita (Supabase)
Para no perder tus datos cada vez que Render se reinicie, no uses SQLite en producción.

### Pasos:
1.  Crea un proyecto en [Supabase.com](https://supabase.com).
2.  Ve a **Settings -> Database** y copia el "Connection String".
3.  En tu `settings.py` de Django, configura el diccionario `DATABASES` para usar `dj-database-url` con ese string.

---

## 💡 Recomendaciones para tu Portafolio
*   **README visual:** Agrega capturas de pantalla de tu Dashboard moderno.
*   **Acceso Demo:** Deja el usuario `admin` y contraseña `admin123` escritos en el README para que los reclutadores puedan entrar sin registrarse.
*   **Link en vivo:** Pon los links de Netlify en la descripción de tu perfil de GitHub.

---
*Documento generado por Antigravity (IA) para la recuperación del proyecto Ferretic.*

# CV Ronald Niño — Cloud & DevOps Engineer

Portfolio/CV personal construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**, con deploy automático en **GitHub Pages** vía GitHub Actions.

---

## 🚀 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router, Static Export) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Fuentes | Space Mono + Sora (Google Fonts) |
| Deploy | GitHub Actions → GitHub Pages |
| CI/CD | `.github/workflows/deploy.yml` |

---

## ⚙️ Desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/cv-ronald-nino.git
cd cv-ronald-nino

# 2. Instalar dependencias
npm install

# 3. Arrancar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
open http://localhost:3000
```

---

## 🏗️ Build & Export estático

```bash
# Genera el sitio estático en /out
npm run build

# Previsualizar el export localmente
npx serve out
```

---

## 🌐 Deploy en GitHub Pages

### Configuración única (primer deploy)

1. **Habilitar GitHub Pages** en el repositorio:
   - `Settings` → `Pages` → `Source` → **GitHub Actions**

2. **Si el repo NO es `username.github.io`** (ej: `cv-ronald-nino`), descomentar la línea `basePath` en `next.config.mjs`:
   ```js
   basePath: '/cv-ronald-nino',
   ```

3. **Push a `main`** → el workflow se dispara automáticamente:
   ```bash
   git add .
   git commit -m "feat: initial deploy"
   git push origin main
   ```

4. En 2–3 minutos el sitio estará disponible en:
   ```
   https://TU_USUARIO.github.io/cv-ronald-nino/
   ```

### Deploy manual

Desde la pestaña **Actions** del repositorio → seleccionar el workflow **"Deploy CV to GitHub Pages"** → **"Run workflow"**.

---

## 📁 Estructura del proyecto

```
cv-ronald-nino/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata SEO
│   │   ├── page.tsx            # Página principal (orquestador)
│   │   └── globals.css         # Estilos globales + Tailwind
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación sticky con active link
│   │   ├── Hero.tsx            # Hero + terminal animada
│   │   ├── Skills.tsx          # Grid de habilidades técnicas
│   │   ├── Experience.tsx      # Timeline de experiencia
│   │   ├── Education.tsx       # Formación académica
│   │   ├── Certifications.tsx  # Certificaciones AWS + IBM
│   │   ├── Contact.tsx         # Sección de contacto
│   │   ├── Footer.tsx          # Pie de página
│   │   └── SectionHeader.tsx   # Componente reutilizable
│   └── data/
│       └── cv.ts               # ← FUENTE ÚNICA DE VERDAD (editar aquí)
├── public/                     # Assets estáticos
├── next.config.mjs             # Config Next.js (output: 'export')
├── tailwind.config.ts          # Config Tailwind
├── tsconfig.json               # Config TypeScript
└── package.json
```

---

## ✏️ Actualizar contenido

Todo el contenido del CV vive en **`src/data/cv.ts`**. Para actualizar:

1. Editar `src/data/cv.ts`
2. Commit y push a `main`
3. GitHub Actions construye y despliega automáticamente en ~2 min

---

## 📄 Licencia

© Ronald Niño — Todos los derechos reservados.

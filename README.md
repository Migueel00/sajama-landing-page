# Sajama Landing

Proyecto web construido con **Astro 5**, **Tailwind CSS v4** y **React 19 + TypeScript**.

---

## Stack

| Tecnología | Versión | Rol |
|---|---|---|
| [Astro](https://astro.build) | 5.x | Framework principal / SSG |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilos utility-first |
| [React](https://react.dev) | 19.x | Componentes interactivos (islands) |
| TypeScript | 5.x | Tipado estático |

---

## Requisitos

- **Node.js** >= 18.17.1
- **npm** >= 9 (o pnpm / yarn equivalente)

---

## Instalación

```bash
# clonar el repo
git clone <url-del-repo>
cd sajama-landing

# instalar dependencias
npm install
```

---

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el proyecto para producción en `./dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run astro ...` | CLI de Astro — ej. `npm run astro add <integration>` |

---

## Estructura del proyecto

```
sajama-landing/
├── public/                 # Assets estáticos (no procesados)
│   └── favicon.svg
├── src/
│   ├── components/         # Componentes reutilizables
│   │   └── Counter.tsx     # Ejemplo de componente React interactivo
│   ├── layouts/            # Layouts base compartidos
│   │   └── Layout.astro    # Layout principal (importa Tailwind)
│   ├── pages/              # Rutas — cada archivo = una URL
│   │   └── index.astro     # Página de inicio → /
│   └── styles/
│       └── global.css      # Punto de entrada de Tailwind (@import "tailwindcss")
├── astro.config.mjs        # Configuración de Astro (plugins, integraciones)
├── tsconfig.json           # Configuración de TypeScript (strict mode)
└── package.json
```

---

## Cómo funciona el stack

### Astro + React (Islands Architecture)

Astro no envía JavaScript al navegador por defecto. Para que un componente React sea interactivo, hay que indicarlo con una directiva `client:*`:

```astro
---
import MiComponente from '../components/MiComponente';
---

<!-- Solo HTML estático -->
<MiComponente />

<!-- Hidratado en el cliente (interactivo) -->
<MiComponente client:load />
<MiComponente client:visible />   <!-- hidrata cuando entra en viewport -->
<MiComponente client:idle />      <!-- hidrata cuando el navegador está libre -->
```

### Tailwind CSS v4

En esta versión Tailwind se integra como **Vite plugin** en lugar de un plugin de PostCSS. La configuración vive en `astro.config.mjs`:

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

El CSS de entrada solo necesita una línea:

```css
/* src/styles/global.css */
@import "tailwindcss";
```

Se importa una sola vez en el layout base (`src/layouts/Layout.astro`).

### TypeScript

El proyecto usa el preset `strict` de Astro (`astro/tsconfigs/strict`). Los tipos de React están incluidos via `@types/react` y `@types/react-dom`.

Para crear un componente tipado:

```tsx
// src/components/MiComponente.tsx
interface Props {
  titulo: string;
  opcional?: number;
}

export default function MiComponente({ titulo, opcional = 0 }: Props) {
  return <h2 className="text-xl font-bold">{titulo} — {opcional}</h2>;
}
```

---

## Agregar más integraciones

```bash
# Ver integraciones disponibles
npx astro add

# Ejemplos
npx astro add mdx          # Soporte para MDX
npx astro add sitemap      # Sitemap automático
npx astro add image        # Optimización de imágenes
```

---

## Configuración recomendada del editor

El proyecto incluye configuración para **VS Code** en `.vscode/`:

- **Extensiones recomendadas**: Astro, Tailwind CSS IntelliSense, ESLint
- **Debugging**: configuración de launch incluida

Extensión requerida para Astro en VS Code: `astro-build.astro-vscode`

---

## Licencia

MIT

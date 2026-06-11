# 🕯️ Luz & Sabor — Design System

Guía de referencia para el desarrollo de la landing page. Consulta este archivo antes de crear componentes, definir clases de Tailwind o tomar decisiones visuales.

---

## 🎨 Paleta de colores

### Fondos crema
| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `cream-base`     | `#FAF6F0` | Fondo principal de la página     |
| `cream-alt`      | `#F5EFE6` | Secciones alternas               |
| `cream-border`   | `#EDE4D6` | Separadores, estados hover       |
| `cream-surface`  | `#FFFCF8` | Tarjetas, formularios            |

### Textos
| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `text-primary`   | `#2C2118` | Cuerpo principal, títulos        |
| `text-secondary` | `#6B5133` | Texto de apoyo, descripciones    |
| `text-muted`     | `#A8906A` | Subtítulos, placeholders         |

### Verde olivo
| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `olive-base`     | `#7A8B5A` | Etiquetas de categoría, badges   |
| `olive-hover`    | `#9DAD7A` | Estado hover en elementos olive  |

### WhatsApp
| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `wa-green`       | `#25D366` | Botones de pedido principales    |
| `wa-dark`        | `#128C7E` | Íconos de verificación, accents  |

### Dorado
| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `gold-main`      | `#C9961E` | Etiquetas, bordes, highlights    |

### Degradados dorados
Usar en este orden para gradientes lineales (de oscuro a claro o viceversa):

```
#7A5C00 → #C9961E → #DDB84A → #EDD07A
```

Variante más suave (para fondos):
```
#8B6210 → #C9961E → #EDD07A
```

> **Nota:** Nunca usar más de 3 paradas en un mismo degradado para mantener elegancia. Los degradados son un elemento de firma — úsalos con moderación.

---

## ✏️ Tipografía

| Rol          | Familia               | Pesos              | Uso                                      |
|--------------|-----------------------|--------------------|------------------------------------------|
| Display      | Cormorant Garamond    | 300, 400, 600      | Títulos principales, hero, sección nombres |
| Cuerpo       | Jost                  | 300, 400, 500      | Párrafos, botones, labels, navegación    |

### Escala tipográfica sugerida

| Nivel   | Clase Tailwind     | Fuente             | Peso  | Uso                    |
|---------|--------------------|--------------------|-------|------------------------|
| H1      | `text-5xl`         | Cormorant Garamond | 300   | Hero principal         |
| H2      | `text-3xl`         | Cormorant Garamond | 400   | Títulos de sección     |
| H3      | `text-xl`          | Cormorant Garamond | 600   | Subtítulos de tarjeta  |
| Body    | `text-base`        | Jost               | 400   | Texto general          |
| Small   | `text-sm`          | Jost               | 300   | Captions, placeholders |
| Button  | `text-sm`          | Jost               | 500   | CTAs, etiquetas        |

### Importar en el proyecto
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap');
```

---

## 🧩 Componentes planeados

Orden de construcción recomendado (de menor a mayor complejidad):

- [ ] `Button` — variantes: primary (WhatsApp), secondary (outline dorado), ghost
- [ ] `Badge` — etiquetas olive y dorado
- [ ] `ProductCard` — tarjeta de vela con nombre, precio, badge y CTA
- [ ] `Navbar` — logo + links + botón de menú mobile
- [ ] `Sidebar` — menú mobile deslizante
- [ ] `Hero` — headline + subtítulo + CTA principal
- [ ] `CatalogSection` — grid de ProductCards
- [ ] `BenefitsSection` — comparativa / lista de beneficios
- [ ] `FAQSection` — acordeón de preguntas frecuentes
- [ ] `Footer` — links + redes + WhatsApp

---

## 📐 Espaciado y layout

- **Max width del contenido:** `max-w-5xl` (1024px) centrado con `mx-auto`
- **Padding horizontal de sección:** `px-6 md:px-12`
- **Padding vertical de sección:** `py-16 md:py-24`
- **Gap en grids de tarjetas:** `gap-6 md:gap-8`
- **Border radius general:** `rounded-xl` para tarjetas, `rounded-full` para badges y botones pill

---

## 📱 Breakpoints (Tailwind por defecto)

| Prefijo | Tamaño  | Uso                        |
|---------|---------|----------------------------|
| (base)  | < 768px | Mobile — diseño prioritario |
| `md:`   | 768px+  | Tablet y escritorio         |
| `lg:`   | 1024px+ | Ajustes finos de escritorio |

> **Regla:** Diseña mobile-first. Escribe las clases base para móvil y añade `md:` encima.

---

## ⚙️ tailwind.config.js sugerido

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          base:    "#FAF6F0",
          alt:     "#F5EFE6",
          border:  "#EDE4D6",
          surface: "#FFFCF8",
        },
        text: {
          primary:   "#2C2118",
          secondary: "#6B5133",
          muted:     "#A8906A",
        },
        olive: {
          base:  "#7A8B5A",
          hover: "#9DAD7A",
        },
        gold: {
          main:  "#C9961E",
          light: "#EDD07A",
          mid:   "#DDB84A",
          dark:  "#7A5C00",
          deep:  "#8B6210",
        },
        wa: {
          green: "#25D366",
          dark:  "#128C7E",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body:    ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}
```

---

## 🔗 Referencias

- **Prototipo Figma:** _(agrega el link aquí)_
- **Repositorio:** _(agrega el link aquí)_
- **Deploy (Vercel):** _(agrega el link aquí)_
- **Contacto de pedidos:** WhatsApp

---

*Última actualización: Junio 2025*
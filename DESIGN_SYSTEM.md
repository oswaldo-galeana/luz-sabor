# 🕯️ Luz & Sabor — Design System

---

## Colores

### Fondos crema
| Clase Tailwind       | Variable                  | Hex       |
|----------------------|---------------------------|-----------|
| `bg-cream-base`      | `--color-cream-base`      | `#FAF6F0` |
| `bg-cream-alt`       | `--color-cream-alt`       | `#F5EFE6` |
| `bg-cream-border`    | `--color-cream-border`    | `#EDE4D6` |
| `bg-cream-surface`   | `--color-cream-surface`   | `#FFFCF8` |

### Textos
| Clase Tailwind         | Variable                    | Hex       |
|------------------------|-----------------------------|-----------|
| `text-text-primary`    | `--color-text-primary`      | `#2C2118` |
| `text-text-secondary`  | `--color-text-secondary`    | `#6B5133` |
| `text-text-muted`      | `--color-text-muted`        | `#A8906A` |

### Verde olivo
| Clase Tailwind       | Variable                  | Hex       |
|----------------------|---------------------------|-----------|
| `bg-olive-base`      | `--color-olive-base`      | `#7A8B5A` |
| `bg-olive-hover`     | `--color-olive-hover`     | `#9DAD7A` |

### WhatsApp
| Clase Tailwind     | Variable              | Hex       |
|--------------------|-----------------------|-----------|
| `bg-wa-green`      | `--color-wa-green`    | `#25D366` |
| `bg-wa-dark`       | `--color-wa-dark`     | `#128C7E` |

### Dorado
| Clase Tailwind     | Variable              | Hex       |
|--------------------|-----------------------|-----------|
| `bg-gold-main`     | `--color-gold-main`   | `#C9961E` |
| `bg-gold-light`    | `--color-gold-light`  | `#EDD07A` |
| `bg-gold-mid`      | `--color-gold-mid`    | `#DDB84A` |
| `bg-gold-dark`     | `--color-gold-dark`   | `#7A5C00` |
| `bg-gold-deep`     | `--color-gold-deep`   | `#8B6210` |

### Degradado dorado
```css
background: linear-gradient(to right, #7A5C00, #C9961E, #DDB84A, #EDD07A);
```

---

## Tipografía

| Clase Tailwind  | Variable          | Fuente                      | Pesos         |
|-----------------|-------------------|-----------------------------|---------------|
| `font-display`  | `--font-display`  | Cormorant Garamond, serif   | 300, 400, 600 |
| `font-body`     | `--font-body`     | Jost, sans-serif            | 300, 400, 500 |

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Jost:wght@300;400;500&display=swap');
```

---

## Arquitectura

```
src/
├── assets/        # Imágenes, íconos, logos
├── components/    # Piezas reutilizables (Button, Card, Badge…)
├── sections/      # Secciones de la página (Hero, Catalog, FAQ…)
├── hooks/         # Custom hooks
├── constants/     # Datos estáticos (productos, FAQs…)
└── App.jsx        # Solo importa secciones
```

---

## Referencias

- Prototipo Figma: _(agregar link)_
- Repositorio: _(agregar link)_
- Deploy Vercel: _(agregar link)_
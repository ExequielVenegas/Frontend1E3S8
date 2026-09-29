# Juegotendo

Juegotendo es una tienda de videojuegos desarrollada con React y Vite para la actividad sumativa de la semana 8 de Desarrollo Frontend I. El proyecto utiliza componentes funcionales, propiedades, estados, efectos, eventos y renderizado condicional.

La interfaz toma como referencia visual una tienda de videojuegos moderna, con una identidad propia basada en colores rojo, blanco y gris. Su diseño se adapta a computadores, tablets y teléfonos.

## Vistas disponibles

### Inicio

La página de bienvenida presenta la tienda, una promoción destacada y un acceso directo al catálogo. También resume algunos beneficios del servicio.

### Juegos

La página de catálogo muestra todos los videojuegos disponibles y permite:

- Buscar por nombre o descripción.
- Filtrar por categoría.
- Consultar plataforma, precio normal y precio de oferta.
- Cargar productos desde un JSON local mediante fetch y useEffect.
- Mostrar mensajes de carga, error y un botón para reintentar.
- Agregar productos al carrito y mostrar cuántas unidades hay de cada juego.
- Visualizar un mensaje cuando no existen coincidencias.

## Carrito de compras

El carrito lateral permite:

- Agregar uno o varios videojuegos.
- Aumentar o disminuir la cantidad de cada producto.
- Eliminar completamente un producto.
- Consultar la cantidad total de unidades.
- Calcular automáticamente el precio total de la compra.
- Mostrar un estado diferente cuando el carrito está vacío.
- Conservar los productos mediante `localStorage`.

## Conceptos de React utilizados

- Componentes funcionales.
- Comunicación mediante `props`.
- Estado local con `useState`.
- Efectos secundarios con `useEffect`.
- Valores calculados con `useMemo`.
- Eventos `onClick` y `onChange`.
- Renderizado de listas mediante `map`.
- Cálculos mediante `reduce`.
- Renderizado condicional.

## Componentes principales

- `App`: carga el catálogo con useEffect y administra los estados de productos, carga, error, navegación, filtros y carrito.
- `Header`: presenta la marca, la navegación y el contador del carrito.
- `Hero`: contiene la bienvenida y la promoción principal.
- `ProductList`: genera el listado de productos.
- `ProductCard`: presenta la información y el botón de cada videojuego.
- `ShoppingCart`: controla el panel lateral del carrito.
- `CartItem`: administra la cantidad y eliminación de un producto.
- `CartTotal`: calcula y presenta el resumen de compra.

## Estructura del proyecto

```text
epicstore/
├── public/
│   └── products.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── ShoppingCart.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Requisitos

- Una versión de Node.js compatible con las dependencias del package-lock.json.
- npm instalado.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la dirección local del proyecto en la terminal, normalmente `http://localhost:5173`.
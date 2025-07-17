# Portfolio Personal - Carlos

Un portfolio moderno y responsive construido con Astro y Tailwind CSS, inspirado en el diseño de Tamal Sen.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones suaves
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Performance**: Construido con Astro para máxima velocidad
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesible**: Cumple con estándares de accesibilidad web
- **Fácil Personalización**: Datos centralizados para fácil edición

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografía moderna

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone <tu-repositorio>
cd portfolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 🎨 Personalización

### Información Personal

Edita la sección de datos en `src/pages/index.astro`:

```javascript
const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título",
  description: "Tu descripción",
  email: "tu@email.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  twitter: "https://twitter.com/tu-usuario",
};
```

### Habilidades

Modifica el array `skills` para mostrar tus habilidades:

```javascript
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  // ... más habilidades
];
```

### Proyectos

Actualiza el array `projects` con tus proyectos:

```javascript
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/ruta-a-la-imagen.jpg",
    link: "https://tu-proyecto.com",
  },
];
```

## 📁 Estructura del Proyecto

```
portfolio/
├── public/           # Archivos estáticos
├── src/
│   ├── pages/        # Páginas de Astro
│   │   └── index.astro
│   └── styles/       # Estilos CSS
│       └── global.css
├── astro.config.mjs  # Configuración de Astro
├── package.json      # Dependencias
└── README.md         # Documentación
```

## 🚀 Despliegue

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `dist`

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Astro
3. Despliega con un clic

### GitHub Pages

1. Ejecuta `npm run build`
2. Sube el contenido de `dist/` a la rama `gh-pages`

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

---

Hecho con ❤️ y [Astro](https://astro.build/)

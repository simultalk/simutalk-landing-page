# SimuTalk · Landing page

Landing page de SimuTalk, plataforma de entrevistas de preselección asincrónicas con ranking explicable.
Proyecto del curso 1ASI0705 Arquitectura de Aplicaciones Web (UPC).

## Tecnologías

HTML5, CSS3 y JavaScript sin dependencias. Tipografía Inter (Google Fonts).

## Estructura

```
index.html        Página principal
legal.html        Términos y condiciones, privacidad y tratamiento de datos
css/styles.css    Estilos y tokens de la marca
js/i18n.js        Textos en es-419 y en-US
js/main.js        Menú, demo, preguntas frecuentes, calculadora y configuración
assets/           Favicon
```

## Configuración

En `js/main.js`:

- `APP_URL`: URL del frontend Angular desplegado (para Iniciar sesión y Crear cuenta).
- `VIDEO_URL`: enlace al video About the Product. Si está vacío, la sección no se muestra.

## Ejecutar en local

Abrir `index.html` en el navegador o usar la extensión Live Server de VS Code.

## Accesibilidad e idiomas

- Enlace para saltar al contenido, landmarks y atributos ARIA (`aria-expanded`, `aria-pressed`, `aria-live`).
- Navegable con teclado y con foco visible.
- Respeta `prefers-reduced-motion`.
- Idioma por defecto según el navegador; se puede cambiar con el selector ES | EN.